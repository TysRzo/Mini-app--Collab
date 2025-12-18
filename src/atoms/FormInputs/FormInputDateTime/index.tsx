import type { ChangeEvent } from "react";

type FormInputDateTimeProps = {
  inputName: string;
  inputId: string;
  isRequired?: boolean;
  handleDateTimeChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormInputDateTime = ({
  inputName,
  inputId,
  isRequired = false,
  handleDateTimeChange,
}: FormInputDateTimeProps) => {
  return (
    <input
      type="datetime-local"
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
      onChange={handleDateTimeChange}
    />
  );
};

export default FormInputDateTime;
