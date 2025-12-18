import type { ReactNode } from "react";

type FormRowProps = {
  children: ReactNode;
};

const FormRow = ({ children }: FormRowProps) => {
  return (
    <div
      className="
        mb-4
        flex
        flex-col
        gap-1
        sm:grid
        sm:grid-cols-[120px_1fr]
        sm:items-start
        sm:gap-4
      "
    >
      {children}
    </div>
  );
};

export default FormRow;
