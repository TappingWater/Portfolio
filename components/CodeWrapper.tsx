type Props = {
  children?: React.ReactNode;
  tailwindStyles?: string
};

const CodeWrapper: React.FC<Props> = ({ children, tailwindStyles }) => {
  return <div className={`bg-white shadow-inner shadow-lg ${tailwindStyles}`}>{children}</div>;
};

export default CodeWrapper;
