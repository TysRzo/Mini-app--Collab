type FormSubmitProps = {
  content: string;
  isDisabled?: boolean;
};

const FormSubmit = ({ content, isDisabled = false }: FormSubmitProps) => {
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className="
        mt-6
        inline-flex
        w-full
        items-center
        justify-center
        rounded-md
        bg-gray-900
        px-4
        py-2.5
        text-sm
        font-semibold
        text-white
        transition-colors
        hover:bg-gray-800
        focus:outline-none
        focus:ring-2
        focus:ring-gray-900
        focus:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {content}
    </button>
  );
};

export default FormSubmit;
