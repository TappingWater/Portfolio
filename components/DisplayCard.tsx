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
  isBlog
}: Post) => {
  //Styling for blog card
  const cardDiv: string =
    "m-auto w-[80%] max-w-[800px] text-center bg-white text-black rounded-lg mt-5 mb-10 hover:underline hover:decoration-dotted";
  const cardImgDiv: string =
    "bg-slate-600 w-[100%] h-[200px] relative contain rounded-t-lg";
  const imageStyle: string = "block object-fill pl-1 pr-1 pt-1 pb-1";
  const cardTextDiv: string = "h-[220px] overflow-hidden";
  const titleStyle: string = "font-semibold sm:text-sm md:text-lg mb-2 block max-h-[24%] min-2-[70%] overflow-hidden";
  const summaryStyle: string = "ml-[20%] mr-[20%] text-justify overflow-hidden";

  return (
    <div className={cardDiv}>
      <Link key={slug} href={isBlog?`/blog/${slug}`:`/projects/${slug}`}>
        <div className={cardImgDiv}>
          <Image className={imageStyle} src={image} alt={title} fill></Image>
        </div>
        <div className={cardTextDiv}>
          <Balancer className={titleStyle}>{title}</Balancer>
          <p><Balancer className="font-semibold block">{isBlog?"Topics":"Technologies"} : {topics.join(", ")}</Balancer></p>
          <p className={summaryStyle}>{summary}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
