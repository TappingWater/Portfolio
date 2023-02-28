import Image from "next/image";

const About = () => {
  function Bio() {
    return (
      <div className="flex flex-row p-10 relative items-center justify-center overflow-hidden">
        <p className="text-xl w-auto sm:text-md ">
          Hi, My name is <strong>Chanaka Perera</strong>. I hope you enjoyed visiting my site. I
          am a fullstack developer who loves building and sharing things based on
          learnt theory. I am passionate about Natural language processing,
          Cloud development and UI/UX design.
        </p>
        <Image
					src="/profile-pic.jpg"
          alt="profile-pic"
          className="rounded-full w-[120px] h-[120px] ml-[10px] sm:w-[90px] sm:h-[80px]"       
					width="0"
					height="0"
					sizes="100vw"
        />
      </div>
    );
  }

  return <>{Bio()}</>;
};

export default About;
