"use client";

import Image from "next/image";
import Balancer from "react-wrap-balancer";

interface Post {
  title: string;
  image: string;
  link: string; // Use link instead of slug
  isBlog: boolean;
  topics?: string[];
  summary?: string;
}

const ProjectCard: React.FC<Post> = ({
  title,
  image,
  summary,
  link,
  topics = [], // Provide a default empty array if topics is undefined
  isBlog,
}: Post) => {
  // Styling for blog card
  const cardDiv: string =
    "m-auto w-[80%] max-w-[500px] text-center bg-white hover:bg-slate-200 text-black rounded-lg mt-5 mb-10 cursor-pointer";
  const cardTextDiv: string = "h-[150px] overflow-hidden";

  // Function to handle click and open link in a new tab
  const handleClick = () => {
    window.open(link, "_blank"); // Open the link in a new tab
  };

  return (
    <div className={cardDiv} onClick={handleClick}>
      <div className="border-b-2 border-black">
        <Balancer className="font-heading mt-4 mb-4 font-semibold sm:text-sm md:text-lg block max-h-[24%] min-2-[70%] overflow-hidden">
          {title}
        </Balancer>
      </div>

      <div className={cardTextDiv}>
        <p>
          <Balancer className="font-light font-tabs text-sm block">
            {isBlog ? "Topics" : "Technologies"} : {topics.join(", ")}
          </Balancer>
        </p>
        <p className="ml-[20%] mr-[20%] text-sm text-justify overflow-hidden underline-offset-2 hover:underline hover:decoration-dotted">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;