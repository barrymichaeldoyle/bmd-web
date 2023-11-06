"use client";

import dynamic from "next/dynamic";
import { useFormState } from "react-dom";

import { submit } from "../actions";
import confetti from "./confetti.json";
import { SubmitButton } from "./SubmitButton";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const classNames = {
  label: "block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2",
  input:
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-green-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out focus:border-primary focus:shadow-md dark:focus:border-primary",
};

const initialState = {
  message: null,
};

export function ContactForm() {
  const [state, formAction] = useFormState(submit, initialState);

  function displayErrorMessage() {
    if (!state?.message) {
      return null;
    }
    return (
      <p
        className="mt-4 text-center text-red-600 dark:text-red-400"
        role="alert"
      >
        {state.message}
      </p>
    );
  }

  function errorMessageForField(fieldName: string) {
    return state?.fieldErrors?.[fieldName] ? (
      <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
        {state.fieldErrors[fieldName]}
      </p>
    ) : null;
  }

  if (state.success) {
    return (
      <>
        <p
          className="mt-4 text-center text-green-600 dark:text-green-400"
          role="alert"
        >
          Message sent! I&apos;ll be in touch soon.
        </p>
        <div className="absolute inset-0">
          <Lottie animationData={confetti} loop={false} />
        </div>
      </>
    );
  }

  return (
    <form action={formAction}>
      <div className="mb-4">
        <label htmlFor="name" className={classNames.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className={classNames.input}
        />
        {errorMessageForField("name")}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className={classNames.label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className={classNames.input}
        />
        {errorMessageForField("email")}
      </div>
      <div className="mb-6">
        <label htmlFor="message" className={classNames.label}>
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={4}
          className={classNames.input}
        />
        {errorMessageForField("message")}
      </div>
      <SubmitButton />
      {displayErrorMessage()}
    </form>
  );
}
