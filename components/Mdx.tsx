import Link from "next/link";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import styles from "./Mdx.module.scss";

const CustomLink = (props: any) => {
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
	return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

function RoundedImage(props: any) {
	return (
		<Image
			alt={props.alt}
			className='rounded m-auto w-[60%] h-auto mt-[10px] mb-[10px]'
			{...props}
			width='0'
			height='0'
			sizes='100vw'
		/>
	);
}

function SmallImage(props: any) {
	return (
		<Image
			alt={props.alt}
			className='rounded m-auto w-[20%] h-auto mt-[10px] mb-[10px]'
			{...props}
			width='0'
			height='0'
			sizes='100vw'
		/>
	);
}

function CodeBlock(props: any) {
	return (
		<div className='code-block w-[100%] overflow-x-auto font-tabs touch-pan-x mt-2 mb-2 bg-white rounded-sm p-1'>
			<p className='text-black font-semibold'>{props.title}</p>
			{props.children}
		</div>
	);
}

function List(props: any) {
	return <ul className='list-disc list-inside mt-4 mb-4'>{props.children}</ul>;
}

function Break() {
	return <div className='text-center mt-2 mb-2 font-bold text-2xl'>...</div>;
}

function Headers(props: any) {
	return <h2 className="text-xl font-heading font-bold mb-4 mt-2">{props.children}</h2>
}

function SubHeaders(props: any) {
	return <h3 className="font-heading font-semibold">{props.children}</h3>
}

const components = {
	Image: RoundedImage,
	a: CustomLink,
	SmallImage: SmallImage,
	img: RoundedImage,
	CodeBlock: CodeBlock,
	Break: Break,
	List: List,
	ul: List,
	h2: Headers,
	h3: SubHeaders,
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
