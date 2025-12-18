import FormInputEmail from "../../atoms/FormInputs/FormInputEmail";
import FormInputPassword from "../../atoms/FormInputs/FormInputPassword";
import FormLabel from "../../atoms/FormLabel";
import FormRow from "../../molecules/FormRow";
import FormSubmit from "../../atoms/FormSubmit";
import type { FormEvent } from "react";

const FormLogin = () => {
  const handleEmailChange = () => {};
  const handlePasswordChange = () => {};

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        space-y-4
        sm:mx-auto
        sm:max-w-md
        sm:rounded-xl
        sm:border
        sm:border-gray-200
        sm:bg-white
        sm:p-6
        sm:shadow-sm
      "
    >
      <FormRow>
        <FormLabel labelFor="userEmail" labelText="Email" isRequired />
        <FormInputEmail
          inputName="email"
          inputId="userEmail"
          isRequired
          handleEmailChange={handleEmailChange}
        />
      </FormRow>

      <FormRow>
        <FormLabel labelFor="userPassword" labelText="Password" isRequired />
        <FormInputPassword
          inputName="password"
          inputId="userPassword"
          isRequired
          handlePasswordChange={handlePasswordChange}
        />
      </FormRow>

      <FormSubmit content="Se connecter" />
    </form>
  );
};

export default FormLogin;
