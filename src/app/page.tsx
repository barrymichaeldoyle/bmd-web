import Image from "next/image";

// 63FBB4

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
        Crafting Future-Ready Frontends
      </h1>

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
        <Image
          width={150}
          height={150}
          src="/profile.png"
          alt="Barry Michael Doyle Profile Picture"
          className="rounded-full mb-6 mx-auto border-4 border-gray-300 dark:border-gray-600"
        />
        <p className="text-md md:text-lg text-gray-700 dark:text-gray-300">
          Hello! I&apos;m{" "}
          <span className="text-gray-900 dark:text-white font-semibold">
            Barry Michael Doyle
          </span>
          , a seasoned
          <span className="text-indigo-600 font-semibold">
            {" "}
            Lead React, React Native, NextJS & TypeScript Engineer
          </span>{" "}
          based in Cape Town. At SecuritEase, I spearhead frontend innovations,
          navigating the evolving JavaScript landscape with a sharp focus on the
          React ecosystem.
          <br />
          <br />
          I&apos;m deeply invested in{" "}
          <span className="text-blue-600 font-semibold">
            mentoring, building high-performing teams,
          </span>{" "}
          and championing inclusive, multicultural workspaces. My career spans
          across New Zealand, the UK, the USA, and South Africa, fostering a
          global perspective.
          <br />
          <br />
          Beyond the office, I{" "}
          <span className="text-green-600 font-semibold">
            contribute to open source projects, author blog posts,
          </span>{" "}
          and engage on StackOverflow. Additionally, I create{" "}
          <span className="text-purple-600 font-semibold">
            educational content
          </span>{" "}
          on ReactJS and React Native for YouTube and Udemy. My ambition is to
          create a lasting, positive impact in the tech world.
          <br />
          <br />
          I&apos;m always open to new challenges and collaborations, eager to
          connect with fellow tech enthusiasts and innovators. Let’s build
          groundbreaking digital solutions together!
        </p>
      </div>
    </div>
  );
}
