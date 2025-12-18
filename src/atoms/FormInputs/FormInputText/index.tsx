import type { ChangeEvent } from "react";

type FormInputTextProps = {
  inputName: string;
  inputId: string;
  isRequired?: boolean;
  handleTextChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormInputText = ({
  inputName,
  inputId,
  isRequired = false,
  handleTextChange,
}: FormInputTextProps) => {
  return (
    <input
      type="text"
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
      onChange={handleTextChange}
    />
  );
};

export default FormInputText;
