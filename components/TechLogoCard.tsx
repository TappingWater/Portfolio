import Image from "next/image";

interface LogoCardProps {
	label?:  string;
	icons: string[];
  styles?: string;
}

const TechLogoCard:React.FC<LogoCardProps> = ({label, icons, styles}) => {
	type imageLink = {
    icon: string;
    name: string;
  };
	// languages
  const htmlLink = {
    icon: "/languages/html.svg",
    name: "HTML5",
  };
  const cssLink = {
    icon: "/languages/css.svg",
    name: "CSS3",
  };
  const jsLink = {
    icon: "/languages/javascript.svg",
    name: "JavaScript",
  };
  const tsLink = {
    icon: "/languages/typescript.svg",
    name: "TypeScript",
  };
  const javaLink = {
    icon: "/languages/java.svg",
    name: "Java",
  };
  const golangLink = {
    icon: "/languages/golang.svg",
    name: "Golang",
  };
  const pythonLink = {
    icon: "/languages/python.svg",
    name: "Python",
  };
	// tools
  const dockerLink = {
    icon: "/tools/docker.svg",
    name: "Docker",
  };
  const gitLink = {
    icon: "/tools/git.svg",
    name: "Git",
  };
  const kubernetesLink = {
    icon: "/tools/kubernetes.svg",
    name: "Kubernetes",
  };
  const mongoLink = {
    icon: "/tools/mongoDb.svg",
    name: "MongoDb",
  };
  const postgresLink = {
    icon: "/tools/postgresql.svg",
    name: "PostgreSQL",
  };
	// Frameworks/libs
  const akkaLink = {
    icon: "/frameworks/akka.svg",
    name: "Akka",
  };
  const kafkaLink = {
    icon: "/tools/kafka.svg",
    name: "Kafka",
  };
  const springLink = {
    icon: "/frameworks/springBoot.svg",
    name: "SpringBoot",
  };
  const reactLink = {
    icon: "/frameworks/react.svg",
    name: "React",
  };
  const nextLink = {
    icon: "/frameworks/nextJs.svg",
    name: "NextJs",
  };
  const tailwindLink = {
    icon: "/frameworks/tailwind.svg",
    name: "TailwindCSS",
  };
  const framerLink = {
    icon: "/frameworks/framer.svg",
    name: "Framer Motion",
  };
  const djangoLink = {
    icon: "/frameworks/django.svg",
    name: "Django",
  };
	// cloud links
  const ec2Link = {
    icon: "/cloud/ec2.svg",
    name: "AWS EC2",
  };
  const iamLink = {
    icon: "/cloud/iam.svg",
    name: "AWS IAM",
  };
  const s3Link = {
    icon: "/cloud/s3.svg",
    name: "AWS S3",
  };
  const vercelLink = {
    icon: "/cloud/vercel.svg",
    name: "Vercel",
  };
	const linkMap: Map<string, imageLink> = new Map([
    ["html", htmlLink],
    ["css", cssLink],
    ["js", jsLink],
    ["ts", tsLink],
    ["java", javaLink],
    ["go", golangLink],
    ["docker", dockerLink],
    ["git", gitLink],
    ["kubernetes", kubernetesLink],
    ["mongodb", mongoLink],
    ["postgresql", postgresLink],
    ["kafka", kafkaLink],
    ["springboot", springLink],
    ["akka", akkaLink],
    ["react", reactLink],
    ["framer", framerLink],
    ["next", nextLink],
    ["tailwind", tailwindLink],
    ["ec2", ec2Link],
		["s3", s3Link],
    ["vercel", vercelLink],
    ["iam", iamLink],
    ["python", pythonLink],
    ["django", djangoLink]
  ]);

  let style= "bg-white text-black p-3 rounded-lg max-w-[70%] m-auto mt-[10px] mb-[10px]";
  if (styles) {
    style = styles;
  }

	return (
		<div className={style}>
        {label && <p className="text-center mb-2 mt-2 font-semibold">{label}</p>}
        <div className="flex flex-row space-x-8 justify-center flex-wrap gap-y-4">
          {icons.filter((icon)=>linkMap.has(icon)).map((icon) => (					
							<div className="flex flex-col items-center" key={icon}>
								<Image
									src={linkMap.get(icon)!.icon}
									alt={linkMap.get(icon)!.name}
									height={30}
									width={30}
								></Image>
								<p className="font-tabs">{linkMap.get(icon)!.name}</p>
							</div>
						
          ))}
        </div>
      </div>
	);
}

export default TechLogoCard;