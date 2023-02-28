import Image from "next/image";
import TechLogoCard from "../../components/TechLogoCard";

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
      <div className="flex sm: flex-col md:flex-row p-10 relative items-center justify-center overflow-hidden">
        <p className="sm:text-base md:text-xl sm:w-auto md:max-w-[60%] text-justify mr-[10px]">
          Hi, My name is <strong>Chanaka Perera</strong>. I hope you enjoyed
          visiting my site. I am a fullstack developer who loves building and
          sharing things based on learnt theory. I am passionate about Natural
          language processing, Cloud development and UI/UX design. Feel free to
          contact me at:
          <span className="flex items-center h-[30px]">
            <Image
              src="/icons/email.svg"
              alt="email-pic"
              className="w-auto h-[100%]"
              width="0"
              height="0"
              sizes="100vw"
            />
            <span className="ml-[4px] italic underline decoration-dotted decoration-white">
              chanakaperera301@gmail.com
            </span>
          </span>
        </p>

        <Image
          src="/profile-pic.jpg"
          alt="profile-pic"
          className="rounded-full w-[120px] h-[120px] mt-[10px]"
          width="1"
          height="1"
          sizes="100vw"
        />
      </div>
    );
  }

  function education() {
    return (
      <div>
        <h2 className="m-auto mt-[20px] mb-[20px] w-[80%] relative text-heading text-2xl flex flex-row h-[50px] items-center">
          <Image
            src="/icons/education.svg"
            alt="education-pic"
            className="w-auto h-[100%] p-1"
            width="0"
            height="0"
            sizes="100vw"
          />
          <p>Education</p>
        </h2>
        <div className="flex flex-row items-center justify-center bg-white text-black w-[80%] h-[120px] m-auto rounded-lg pt-[12px] pb-[12px]">
          <Image
            src="/icons/vt.svg"
            alt="vt-pic"
            className="w-auto h-[100%] p-[20px]"
            width="0"
            height="0"
            sizes="100vw"
          />
          <div>
            <p className="text-lg font-bold font-heading">
              Virginia Tech
            </p>
            <p className="italic">Bsc. Of Science (Computer Science)</p>
            <p className="text-sm font-tabs font-semibold">(2016-2020)</p>
          </div>
        </div>
      </div>
    );
  }

  type workExperience = {
    image: string;
    company: string;
    role: string;
    location: string;
    duration: string;
    summary: string;
    tech: string[];
    responsibilities: string[];
  };
  const gm: workExperience = {
    image: "/icons/gm.svg",
    company: "General motors",
    location: "Austin, TX",
    role: "Back-end developer",
    duration: "Jan, 2022 - Sep, 2022",
    summary:
      "Worked on the DLA-Core project that was responsible for streaming and transforming large volumes of data from machinery and operators on the plant floor for analysis purposes. We used a combination of micro-services to route and transform tags (raw data from the plant floor) to multiple mediums such as Kafka, RabbitMQ and SQL Server.",
    tech: ["springboot", "akka", "s3", "docker", "kubernetes", "kafka"],
    responsibilities: [
      "Developed a microservice to stream archive data from Hive at a rate of 10 million tags per hour (JSON format) to kafka.",
      "Utilized Akka streams and actors to create a concurrent application to transform and read data. (JSON filtering based on value and data conversion to Parquet, CSV, etc:)",
      "Involved in the development of a GRPC expression based application to run pre-defined dynamic streams based on Netflix’s stack language.",
      "Created individual stream components for implementing reusable functionalities within a stream. (Committable kafka source that increments consumer offset after message exits the stream, Hive query flow that executes queries from a source, Parquet sink that converts tags to parquet format).",
      "Used Docker and Kubernetes to deploy applications to the cloud and monitored them using Lens.",
      "Implemented and executed both unit and integration tests for applications using Junit and Mockito.",
      "Created an actor system using Akka to implement automatic persistence and termination of memory once a retention period has been reached.",
    ],
  };
  const ruebarue: workExperience = {
    image: "/icons/ruebarue.png",
    company: "Ruebarue",
    location: "Brookline, MA",
    role: "Full stack developer",
    duration: "Aug, 2020 - July, 2021",
    summary:
    "Ruebarue was an early start-up company aimed at providing small-time rental owners with the ability to better manage their properties and communicate with their guests. During my time at the company, I worked on their online platform which utilized golang as the backend and react as the frontend."
    ,tech: ["go", "js", "react", "html", "css", "postgresql"],
    responsibilities: [
      "Created and implemented the billing platform functionality to process customer payments by integrating stripe elements into the UI and processing the payments in the backend using Golang.",
      "Created  a service to track changes across all data models accessible to an account by multiple users using Reflection.",
      "Creating new cron tasks to assist in automation of tasks. Ex: Expiration of trial users.",
      "Implemented and designed front end components using React, HTML5 and SCSS."
    ],
  };
  const civWar: workExperience = {
    image: "/icons/vt.svg",
    company: "Virginia Tech",
    location: "Blacksburg, VA",
    role: "Research assistant",
    duration: "Jan, 2020 - May, 2020",
    summary:
    "Civil War Photo Sleuth was a research aimed at providing a free public platform that combined crowdsourcing and AI-based face recognition to identify unknown soldiers in historical photos."
    ,tech: ["django", "python", "postgresql"],
    responsibilities: [
      "Implemented UI features to allow users to manage their collection of uploaded photos and receive updates.",
      "Optimized the search algorithm in relation to Google's cloud face recognition api.",
      "Improved search accuracy by utilizing photos not detected by the face recognition api.",
      "Addressed and fixed bugs provided by the user base."
    ],
  };

  const myWe = [gm, ruebarue, civWar];

  // Render work experiences
  function workExperiences() {
    return (
      <>
        <h2 className="m-auto mt-[20px] mb-[20px] w-[80%] relative text-heading text-2xl flex flex-row h-[50px] p-[5px] items-center">
          <Image
            src="/icons/work.svg"
            alt="work-pic"
            className="w-auto h-[100%] p-2"
            width="0"
            height="0"
            sizes="100vw"
          />
          <p>Work Experience</p>
        </h2>
        {myWe.map((we) => (
          <div key={we.company} className="m-auto w-[80%] mb-[30px]">
            <div
              key={we.company}
              className="flex flex-row pt-[12px] pb-[12px] items-center justify-center w-[100%] h-[120px] bg-white text-black m-auto rounded-lg"
            >
              <Image
                src={we.image}
                alt={we.company}
                className="w-auto h-[100%] p-[10px]"
                width="0"
                height="0"
                sizes="100vw"
              />
              <div>
                <p className="text-lg font-bold font-heading">{we.company}</p>
                <p className="italic">{we.role}</p>
                <p className="text-sm font-tabs font-semibold">
                  ({we.duration})
                </p>
              </div>
            </div>
            <div>
              <p className="text-justify">
                <strong>Summary: </strong>
                <br />
                {we.summary}
              </p>
              <p className="text-justify">
                <strong>Used tech:</strong>
              </p>
              <TechLogoCard icons={we.tech} styles="bg-white text-black p-3 rounded-lg w-[100%] m-auto mt-[10px] mb-[10px]"></TechLogoCard>
              <p className="text-justify">
                <strong>Responsibilities:</strong>
              </p>
              <ul className="list-disc text-justify p-[12px]">
                {we.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
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
        <h2 className="m-auto mt-[20px] mb-[20px] w-[80%] relative text-heading text-2xl flex flex-row h-[40px] items-center">
          <Image
            src="/icons/skills.svg"
            alt="work-pic"
            className="w-auto h-[100%] p-2"
            width="0"
            height="0"
            sizes="100vw"
          />
          <p>Skills</p>
        </h2>
        <TechLogoCard label="Languages:" icons={langs}></TechLogoCard>
        <TechLogoCard label="Tools:" icons={tools}></TechLogoCard>
        <TechLogoCard
          label="Frameworks/Libraries:"
          icons={frameworks}
        ></TechLogoCard>
        <TechLogoCard label="Cloud:" icons={cloud}></TechLogoCard>
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
