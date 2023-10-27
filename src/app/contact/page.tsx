import { ContactForm } from "./components/ContactForm";

export default function Contact() {
  return (
    <div className="relative shadow max-w-md w-full mx-auto bg-white dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-600 rounded-lg">
      <h2 className="text-3xl font-extrabold mb-4 text-gray-800 dark:text-white">
        Contact Me
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
        If you&apos;re looking for a collaborator for your next project, seeking
        freelance services, or have exciting job opportunities, feel free to get
        in touch using this form. I&apos;m always interested in exploring
        compelling projects and roles.
      </p>
      <ContactForm />
    </div>
  );
}
