import { Metadata } from "next";

import { ContactForm } from "./components/ContactForm";
import { Card } from "@/components/Card";

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
          If you&apos;re looking for a collaborator for your next project,
          seeking freelance services, or have exciting job opportunities, feel
          free to get in touch using this form. I&apos;m always interested in
          exploring compelling projects and roles.
        </p>
        <ContactForm />
      </Card>
    </div>
  );
}
