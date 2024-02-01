import { useRef } from "react";
import useFocusOnError from "./useOnfocusError";
import useValidation from "./useValidation";

const MyForm = () => {
    const usernameValidation = useValidation('', (value) => value.length >= 3, 'Username must be at least 3 characters');
    const emailValidation = useValidation('', (value) => /\S+@\S+\.\S+/.test(value), 'Invalid email address');
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    useFocusOnError(usernameValidation.error, usernameRef);
  useFocusOnError(emailValidation.error, emailRef);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      usernameValidation.validate();
      emailValidation.validate();
  

      // Check for any errors
      if (!usernameValidation.error && !emailValidation.error) {
        // Submit the form
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={usernameValidation.handleChange} ref={usernameRef} />
        {usernameValidation.error && <span>{usernameValidation.error}</span>}
  
        <input type="email" ref={emailRef} onChange={emailValidation.handleChange} />
        {emailValidation.error && <span>{emailValidation.error}</span>}
  
        <button type="submit">Submit</button>
      </form>
    );
  };