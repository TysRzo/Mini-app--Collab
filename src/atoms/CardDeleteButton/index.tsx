import { useTranslation } from "react-i18next";

type CardDeleteButtonProps = {
  handleClick?: () => void;
};

const CardDeleteButton = ({ handleClick }: CardDeleteButtonProps) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 shadow-sm transition hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200 dark:hover:bg-red-950/70 dark:focus:ring-red-900/60"
    >
      {t("common.actions.delete")}
    </button>
  );
};

export default CardDeleteButton;
