"use client";

import { buttonClassName } from "@/components/styles";
import { useFormStatus } from "react-dom";
import { FaSpinner } from "react-icons/fa";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={buttonClassName}
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
