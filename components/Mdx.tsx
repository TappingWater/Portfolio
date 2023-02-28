import Link from "next/link";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import styles from "./Mdx.module.scss";

const CustomLink = (props) => {
  const href = props.href;
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return (
    <Image
      alt={props.alt}
      className="rounded-sm m-auto w-[90%] h-auto mt-[10px] mb-[10px]"
      {...props}
      width="0"
      height="0"
      sizes="100vw"
    />
  );
}

function CodeBlock(props) {
  return (
    <div className="code-block w-[100%] overflow-x-auto font-tabs touch-pan-x mt-2 mb-2 bg-white rounded-sm p-1">
      <p className="text-black font-semibold">{props.title}</p>
      {props.children}
    </div>
  );
}

function Break() {
  return <div className="text-center mt-2 mb-2 font-bold text-2xl">...</div>;
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  img: RoundedImage,
  CodeBlock: CodeBlock,
  Break: Break,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <article className={`${styles.article} overflow-hidden`}>
      <Component components={{ ...components }} />
    </article>
  );
}
