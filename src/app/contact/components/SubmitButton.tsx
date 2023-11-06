"use client";

import { useFormStatus } from "react-dom";
import { FaSpinner } from "react-icons/fa";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-primary hover:bg-primaryHover text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed w-full transition duration-300 flex justify-center items-center"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? (
        <>
          <FaSpinner className="animate-spin mr-2" />
          Sending Message
        </>
      ) : (
        "Send Message"
      )}
    </button>
  );
}
