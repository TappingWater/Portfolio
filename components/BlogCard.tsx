import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
	title: string;
	image: string;
	summary?: string;
}

const BlogCard: React.FC<BlogPost> = ({title, image, summary}: BlogPost) => {
	//Styling for blog card	

	return (
		<div>
			<div>
				<Image src={image} alt="/blog/default.jpg" width="40" height="40"></Image>
			</div>
			<div>
				<p>{title}</p>
				<p>{summary}</p>
			</div>
		</div>
	);
}

export default BlogCard;