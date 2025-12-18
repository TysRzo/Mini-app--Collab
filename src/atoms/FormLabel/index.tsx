type FormLabelProps = {
  labelFor: string;
  labelText: string;
  isRequired?: boolean;
};

const FormLabel = ({
  labelFor,
  labelText,
  isRequired = false,
}: FormLabelProps) => {
  return (
    <label
      htmlFor={labelFor}
      className="
        text-sm
        font-medium
        text-gray-900
        sm:pt-2
      "
    >
      {labelText}
      {isRequired && <span className="ml-1 text-red-600">*</span>}
    </label>
  );
};

export default FormLabel;
