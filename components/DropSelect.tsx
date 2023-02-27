import { motion, useCycle } from "framer-motion";
import { ChangeEvent, useRef, useState } from "react";

interface SelectProps {
  label: string;
  items: string[];
  onSelect: (value: string) => void;
}

const DropSelect: React.FC<SelectProps> = ({ label, items, onSelect }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const inputRef = useRef(null);
  const [options, setOptions] = useState(items.sort());
  const [value, setValue] = useState("");

  const listVariants = {
    open: {
      y: 5,
      transition: {
        delay: 0.1,
        y: { stiffness: 100 },
        staggerChildren: 0.1,
      },
    },
    closed: {
      y: -50,
      transition: {
        delay: 0.1,
      },
    },
  };

  const optionVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 100 },
        type: "spring",
      },
    },
    closed: {
      x: -50,
      opacity: 0,
    },
  };

  const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 100%, 0%)"
      strokeLinecap="round"
      d="M9 18L14.7874 12.2126V12.2126C14.9048 12.0952 14.9048 11.9048 14.7874 11.7874V11.7874L9 6"
      {...props}
    />
  );

  const svgVariants = {
    closed: {
      rotate: -360,
    },
    open: {
      rotate: 90,
      transition: { duration: 0.4 },
    },
  };

  const optionHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      setOptions(items.sort());
      onSelect("None")
    } else {
      setOptions(items.filter(item => {
        return item.toLowerCase().includes((e.target.value.toLowerCase()));
      }))
    }    
  }

  const selectHandler = (item: string) => {
    toggleOpen();
    setValue(item);
    onSelect(item);    
  }

  const renderList = () => {
    return (
      <motion.ul
        variants={listVariants}
        className={`${
          isOpen ? "overflow-scroll overflow-x-hidden max-h-40" : "hidden"
        } w-[100%] bg-white z-10 absolute left-0 top-11 mt-1 rounded-sm`}
      >
        {options.map((item) => (
          <motion.li
            className="p-2 hover:cursor-pointer hover:text-white hover:bg-black"
            key={item}
            value={item}
            variants={optionVariants}
            onClick={()=>selectHandler(item)}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    );
  };

  return (
    <motion.div
      className="flex relative text-black bg-white p-2 rounded-sm m-4 max-w-fit items-center"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <input
        ref={inputRef}
        placeholder={label}
        className="border-none p-2 mr-1"
        onChange={optionHandler}
        value={value}
      ></input>
      <motion.button onClick={() => toggleOpen()}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path variants={svgVariants}></Path>
        </svg>
      </motion.button>
      {renderList()}
    </motion.div>
  );
};

export default DropSelect;
