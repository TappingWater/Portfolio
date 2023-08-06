import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

interface Post {
	title: string;
	image: string;
	slug: string;
	isBlog: boolean;
	topics: string[];
	summary?: string;
}

const BlogCard: React.FC<Post> = ({
	title,
	image,
	summary,
	slug,
	topics,
	isBlog,
}: Post) => {
	//Styling for blog card
	const cardDiv: string =
		"m-auto w-[80%] max-w-[500px] text-center bg-white hover:bg-slate-200 text-black rounded-lg mt-5 mb-10";
	const cardTextDiv: string = "h-[150px] overflow-hidden";

	return (
		<div className={cardDiv}>
			<Link
				key={slug}
				href={isBlog ? `/blog/${slug}` : `/projects/${slug}`}
			>
				<div className='border-b-2 border-black'>
					<Balancer className='font-heading mt-4 mb-4 font-semibold sm:text-sm md:text-lg block max-h-[24%] min-2-[70%] overflow-hidden'>
						{title}
					</Balancer>
				</div>

				<div className={cardTextDiv}>
					<p>
						<Balancer className='font-light font-tabs text-sm block'>
							{isBlog ? "Topics" : "Technologies"} :{" "}
							{topics.join(", ")}
						</Balancer>
					</p>
					<p className='ml-[20%] mr-[20%] text-sm text-justify overflow-hidden underline-offset-2 hover:underline hover:decoration-dotted'>
						{summary}
					</p>
				</div>
			</Link>
		</div>
	);
};

export default BlogCard;
