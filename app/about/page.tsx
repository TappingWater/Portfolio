import Image from "next/image";
import TechLogoCard from "../../components/TechLogoCard";

export const metadata = {
	description:
		"Chanaka Perera, Software Engineer, About Page, Work history, Experience, Skills, Education, Contact,",
};

const About = () => {
	const langs = ["html", "css", "js", "ts", "java", "go"];
	const tools = [
		"docker",
		"kubernetes",
		"git",
		"postgresql",
		"mongodb",
		"kafka",
	];
	const frameworks = [
		"springboot",
		"akka",
		"react",
		"framer",
		"next",
		"tailwind",
	];
	const cloud = ["ec2", "s3", "vercel", "iam"];

	function bio() {
		return (
			<div className='flex sm: flex-col md:flex-row p-10 relative items-center justify-center overflow-hidden'>
				<p className='sm:text-base md:text-xl sm:w-auto md:max-w-[60%] text-justify mr-[10px]'>
					Hi, My name is <strong>Chanaka Perera</strong>. I hope you
					enjoyed visiting my site. I am a fullstack developer who
					loves building and sharing things based on learnt theory. I
					am passionate about Natural language processing, Cloud
					development and UI/UX design. Feel free to contact me at:
					<span className='flex items-center h-[30px]'>
						<Image
							src='/icons/email.svg'
							alt='email-pic'
							className='w-auto h-[100%]'
							width='0'
							height='0'
							sizes='100vw'
						/>
						<span className='ml-[4px] italic underline decoration-dotted decoration-white'>
							chanakaperera301@gmail.com
						</span>
					</span>
				</p>

				<Image
					src='/profile.jpg'
					alt='profile-pic'
					className='rounded-full w-[120px] h-[126px] mt-[10px]'
					width='1'
					height='1'
					sizes='100vw'
					priority
				/>
			</div>
		);
	}

	function education() {
		return (
			<div>
				<h2 className='m-auto mt-[20px] mb-[20px] w-[80%] relative text-heading text-2xl flex flex-row h-[50px] items-center'>
					<Image
						src='/icons/education.svg'
						alt='education-pic'
						className='w-auto h-[100%] p-1 hidden md:block'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<p>Education</p>
				</h2>
				<div className='pl-2 sm:justify-start md:justify-center md:pl-0 flex flex-row items-center bg-white text-black w-[80%] h-[120px] m-auto rounded-lg pt-[12px] pb-[12px]'>
					<Image
						src='/icons/vt.svg'
						alt='vt-pic'
						className='hidden md:block w-auto h-[100%] p-[20px]'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<div>
						<p className='text-lg font-bold font-heading'>
							Virginia Tech
						</p>
						<p className='italic'>
							Bsc. Of Science (Computer Science)
						</p>
						<p className='text-sm font-tabs font-semibold'>
							(2016-2020)
						</p>
					</div>
				</div>
			</div>
		);
	}

	type workExperience = {
		image?: string;
		company: string;
		role: string;
		location: string;
		duration: string;
		tech: string[];
		responsibilities: string[];
	};
	const eitri: workExperience = {
		image: "/icons/eitri.png",
		company: "Eitri LLC",
		location: "Delaware, US",
		role: "Co-founder",
		duration: "Jan, 2023 - Present",
		tech: ["next", "echo", "gpt", "beanstalk", "amplify", "postgresql"],
		responsibilities: [
			"Spearheaded the development of GREPandit's front-end, constructing multiple user dashboard components and seamlessly integrating Stripe for efficient billing and AWS Authenticator for robust user authentication.",
			"Engineered an intricate backend using Echo Go framework, establishing vital middleware for authentication and an efficient REST API for resource retrieval, leading to 90% improved performance.",
			"Innovated automatic question generation using GPT, enabling the production of unique, user-tailored questions and increasing user engagement by 40%.",
			"Conceptualized and implemented a reinforcement learning model based on the Q-Learning algorithm, introducing an adaptive user engagement approach, resulting in 30% enhancement in user learning experience.",
			"Steered the startup through its foundational stages, providing technical leadership and fostering a culture of innovation and teamwork.",
		],
	};
	const gm: workExperience = {
		image: "/icons/gm.svg",
		company: "General motors",
		location: "Austin, TX",
		role: "Contract: Back-end developer",
		duration: "Jan, 2022 - Sep, 2022",
		tech: ["springboot", "akka", "s3", "docker", "kubernetes", "kafka"],
		responsibilities: [
			"Devised a high-performance microservice that streamed 10M tags/hour from Hive to Kafka, enabling real-time monitoring of plant floor sensors vital for operational efficiency and safety.",
			"Utilized Akka for concurrent data transformation, ensuring timely and accurate processing to support real-time decision making.",
			"Assisted in developing a GRPC application based on Netflix's stack language, optimizing real-time data streams critical for plant operations.",
			"Created reusable stream components, bolstering code efficiency and adaptability to meet dynamic operational demands.",
			"Orchestrated robust cloud application deployment and monitoring using Docker, Kubernetes, and Lens, ensuring uninterrupted and secure plant operations.",
			"Upheld high software quality standards through comprehensive testing with Junit and Mockito, ensuring reliable and fail-safe operational support.",
		],
	};
	const ruebarue: workExperience = {
		image: "/icons/ruebarue.png",
		company: "Ruebarue",
		location: "Brookline, MA",
		role: "Contract: Full stack developer",
		duration: "Aug, 2020 - July, 2021",
		tech: ["go", "js", "react", "html", "css", "postgresql"],
		responsibilities: [
			"Streamlined customer transactions by leading a Stripe Elements integration, enhancing the billing platform's UX/UI.",
			"Enabled easy mistake identification by pioneering a multi-user change tracking service across all data models.",
			"Boosted server efficiency and cut costs by automating the expiration of inactive trial users.",
			"Improved user engagement by designing intuitive front-end components using React, HTML5, and SCSS.",
		],
	};
	const civWar: workExperience = {
		image: "/icons/vt.svg",
		company: "Virginia Tech",
		location: "Blacksburg, VA",
		role: "Research assistant",
		duration: "Jan, 2020 - May, 2020",
		tech: ["django", "python", "postgresql"],
		responsibilities: [
			"Enhanced user engagement by implementing intuitive UI for effective photo management.",
			"Boosted search efficiency by optimizing the algorithm interfacing with Google's cloud face recognition API.",
			"Augmented search accuracy by creatively harnessing undetected photos.",
			"Ensured seamless user experience by promptly resolving reported bugs.",
		],
	};

	const myWe = [eitri, gm, ruebarue, civWar];

	// Render work experiences
	function workExperiences() {
		return (
			<>
				<h2 className='m-auto mt-[20px] mb-[20px] w-[80%] relative text-heading text-2xl flex flex-row h-[50px] p-[5px] items-center'>
					<Image
						src='/icons/work.svg'
						alt='work-pic'
						className='hidden md:block w-auto h-[100%] p-2'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<p>Work Experience</p>
				</h2>
				{myWe.map((we) => (
					<div key={we.company} className='m-auto w-[80%] mb-[30px]'>
						<div
							key={we.company}
							className='flex flex-row pt-[12px] pb-[12px] items-center sm:justify-start md:justify-center w-[100%] h-[120px] bg-white text-black pl-[20px] rounded-lg'
						>
							{we.image ? (
								<Image
									src={we.image}
									alt={we.company}
									className='hidden sm:block w-auto h-[70px] mr-2 p-[10px]'
									width='0'
									height='0'
									sizes='100vw'
								/>
							) : null}
							<div>
								<p className='text-lg font-bold font-heading'>
									{we.company}
								</p>
								<p className='italic'>{we.role}</p>
								<p className='text-sm font-tabs font-semibold'>
									({we.duration})
								</p>
							</div>
						</div>
						<div>
							<p className='text-justify'>
								<strong>Used tech:</strong>
							</p>
							<TechLogoCard
								icons={we.tech}
								styles='bg-white text-black p-3 rounded-lg w-[100%] m-auto mt-[10px] mb-[10px]'
							></TechLogoCard>
							<p className='text-justify'>
								<strong>Responsibilities:</strong>
							</p>
							<ul className='list-disc text-justify p-[12px]'>
								{we.responsibilities.map((responsibility) => (
									<li key={responsibility}>
										{responsibility}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</>
		);
	}

	function skills() {
		return (
			<>
				<h2 className='m-auto mt-[20px] mb-[20px] w-[80%] relative text-heading text-2xl flex flex-row h-[40px] items-center'>
					<Image
						src='/icons/skills.svg'
						alt='work-pic'
						className='hidden md:block w-auto h-[100%] p-2'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<p>Skills</p>
				</h2>
				<TechLogoCard label='Languages:' icons={langs}></TechLogoCard>
				<TechLogoCard label='Tools:' icons={tools}></TechLogoCard>
				<TechLogoCard
					label='Frameworks/Libraries:'
					icons={frameworks}
				></TechLogoCard>
				<TechLogoCard label='Cloud:' icons={cloud}></TechLogoCard>
			</>
		);
	}

	return (
		<>
			{bio()}
			{skills()}
			{education()}
			{workExperiences()}
		</>
	);
};

export default About;
