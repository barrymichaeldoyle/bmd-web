import { Metadata } from "next";

import { Card } from "@/components/Card";

import { ContactForm } from "./components/ContactForm";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact - Barry Michael Doyle",
  description:
    "Reach out to discuss projects, collaborations, or job opportunities. Let's connect and explore possibilities together.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto">
      <Card className="max-w-screen-md md:mx-auto">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-800 dark:text-white">
          Get in touch<span className="ml-3">📬</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
          Whether you&apos;re seeking a collaborator for your next project,
          freelance services, or have job opportunities, feel free to reach out.
          I&apos;m always open to exploring exciting projects and roles. For
          more insights into my professional world, connect with me on{" "}
          <Link
            href="https://www.linkedin.com/in/barry-michael-doyle-11369683/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline"
          >
            LinkedIn
          </Link>{" "}
          where I actively engage with the community.
        </p>
        <ContactForm />
      </Card>
    </div>
  );
}
