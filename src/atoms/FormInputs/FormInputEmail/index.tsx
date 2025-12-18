import type { ChangeEvent } from "react";

type FormInputEmailProps = {
  inputName: string;
  inputId: string;
  isRequired?: boolean;
  handleEmailChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormInputEmail = ({
  inputName,
  inputId,
  isRequired = false,
  handleEmailChange,
}: FormInputEmailProps) => {
  return (
    <input
      type="email"
      name={inputName}
      id={inputId}
      required={isRequired}
      className="
        w-full
        rounded-md
        border
        border-gray-300
        px-3
        py-2
        text-sm
        focus:border-gray-900
        focus:outline-none
      "
      onChange={handleEmailChange}
    />
  );
};

export default FormInputEmail;
