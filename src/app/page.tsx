import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[#63FBB4] shadow-lg dark:bg-gray-900 mt-[-32px] mx-[-32px] py-12 mb-8 lg:mx-4 lg:rounded-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-gray-100 leading-relaxed">
          Crafting Future-Ready
          <br />
          Frontends 🚀
        </h1>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              About Me
            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:items-center">
            <div className="mb-4 md:mr-6 mx-auto md:mx-0">
              <Image
                width={150}
                height={150}
                src="/profile.png"
                alt="Barry Michael Doyle Profile Picture"
                className="rounded-full border-4 border-[#63FBB4] shadow-md"
                priority
              />
            </div>

            <div className="flex-1">
              <p className="text-md md:text-lg text-gray-700 dark:text-gray-300 mb-4">
                Hello! I&apos;m{" "}
                <span className="text-gray-900 dark:text-white font-semibold">
                  Barry Michael Doyle
                </span>
                , a seasoned{" "}
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                  Lead React, React Native, NextJS & TypeScript Engineer
                </span>{" "}
                based in Cape Town. At SecuritEase, I spearhead frontend
                innovations, navigating the evolving JavaScript landscape with a
                sharp focus on the React ecosystem.
              </p>
            </div>
          </div>

          <div>
            <p className="text-md md:text-lg text-gray-700 dark:text-gray-300">
              I&apos;m deeply invested in{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                mentoring, building high-performing teams,
              </span>{" "}
              and championing inclusive, multicultural workspaces. My career
              spans across New Zealand, the UK, the USA, and South Africa,
              fostering a global perspective.
              <br />
              <br />
              Beyond the office, I{" "}
              <span className="text-green-600 dark:text-green-400 font-semibold">
                contribute to open source projects, author blog posts,
              </span>{" "}
              and engage on StackOverflow. Additionally, I create{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                educational content
              </span>{" "}
              on ReactJS and React Native for YouTube and Udemy. My ambition is
              to create a lasting, positive impact in the tech world.
              <br />
              <br />
              I&apos;m always open to new challenges and collaborations, eager
              to connect with fellow tech enthusiasts and innovators. Let’s
              build groundbreaking digital solutions together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
