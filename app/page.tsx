

"use client";

import AnimatedText from "@/components/AnimatedText";
import CodeWrapper from "@/components/CodeWrapper";
import MyRick from "@/components/MyRick";

export default function Home() { 

  return (
    <>
      <CodeWrapper tailwindStyles="m-auto relative rounded w-[70%] min-h-[60vh] p-[20px]">
        <MyRick />
        <AnimatedText />
      </CodeWrapper>
    </>
  );
}
