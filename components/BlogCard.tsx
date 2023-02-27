import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

interface BlogPost {
  title: string;
  image: string;
  slug: string;
  topics: string[];
  summary?: string;
}

const BlogCard: React.FC<BlogPost> = ({
  title,
  image,
  summary,
  slug,
  topics
}: BlogPost) => {
  //Styling for blog card
  const cardDiv: string =
    "m-auto w-[80%] max-w-[800px] text-center bg-white text-black rounded-lg mt-10 mb-20 hover:underline hover:decoration-dotted";
  const cardImgDiv: string =
    "bg-slate-600 w-[100%] h-[200px] relative rounded-t-lg";
  const imageStyle: string = "block object-cover pl-1 pr-1 pt-1 pb-1";
  const cardTextDiv: string = "h-[240px] overflow-hidden";
  const titleStyle: string = "font-semibold text-lg mb-2 block";
  const summaryStyle: string = "ml-[20%] mr-[20%] text-justify overflow-hidden";

  return (
    <div className={cardDiv}>
      <Link key={slug} href={`/blog/${slug}`}>
        <div className={cardImgDiv}>
          <Image className={imageStyle} src={image} alt={title} fill></Image>
        </div>
        <div className={cardTextDiv}>
          <Balancer className={titleStyle}>{title}</Balancer>
          <p><Balancer className="font-semibold block">Topics: {topics.join(", ")}</Balancer></p>
          <p className={summaryStyle}>{summary}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
