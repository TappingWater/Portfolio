import Link from 'next/link';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import styles from "./Mdx.module.scss";

const CustomLink = (props) => {
  const href = props.href;
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith('#')) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} width={500} height={500}/>;
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  img: RoundedImage
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <article className={`${styles.article}`}>
      <Component components={{ ...components}} />
    </article>
  );
}