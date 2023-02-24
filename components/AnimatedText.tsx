import { TypeAnimation } from "react-type-animation";

const AnimatedText = () => {
  const terminalTxt = "chanaka@portfolio:  ";
  const firstLine = "Hi, Welcome to my site.\n";
  const secondLine = "Feel free to look through my work and ideas.\n";
  const thirdLine =
    "Don't hesitate to reach out if you want to collaborate. \n";
  const fourthLine = "Or have any exciting work opportunities. \n";
  const fifthLine = "Ignore the eyes looking at you.";

  const sequence = [
    terminalTxt + firstLine,
    100,
    terminalTxt + firstLine + terminalTxt + secondLine,
    100,
    terminalTxt +
      firstLine +
      terminalTxt +
      secondLine +
      terminalTxt +
      thirdLine,
    100,
    terminalTxt +
      firstLine +
      terminalTxt +
      secondLine +
      terminalTxt +
      thirdLine +
      terminalTxt +
      fourthLine,
    100,
    terminalTxt +
      firstLine +
      terminalTxt +
      secondLine +
      terminalTxt +
      thirdLine +
      terminalTxt +
      fourthLine +
      terminalTxt +
      fifthLine,
    100,
    terminalTxt +
      firstLine +
      terminalTxt +
      secondLine +
      terminalTxt +
      thirdLine +
      terminalTxt +
      fourthLine + 
      terminalTxt + 
      "Oops, Nvm!",
      100,
      terminalTxt +
      firstLine +
      terminalTxt +
      secondLine +
      terminalTxt +
      thirdLine +
      terminalTxt +
      fourthLine
  ];

  return (
    <>
      <TypeAnimation
        sequence={sequence}
        wrapper="div"
        speed={45}
        className="text-black whitespace-pre-line font-tabs font-medium text-lg md:text-xl"
      />
    </>
  );
};

export default AnimatedText;
