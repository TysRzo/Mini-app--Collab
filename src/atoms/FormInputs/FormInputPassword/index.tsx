import type { ChangeEvent } from "react";

type FormInputPasswordProps = {
  inputName: string;
  inputId: string;
  isRequired?: boolean;
  handlePasswordChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormInputPassword = ({
  inputName,
  inputId,
  isRequired = false,
  handlePasswordChange,
}: FormInputPasswordProps) => {
  return (
    <input
      type="password"
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
      onChange={handlePasswordChange}
    />
  );
};

export default FormInputPassword;
