import submit from "./actions";

export default function Contact() {
  return (
    <form
      action={submit}
      className="max-w-md w-full mx-auto bg-white dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-600 rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Contact Me
      </h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={4}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
