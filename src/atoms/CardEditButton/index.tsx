import { useTranslation } from "react-i18next";

type CardEditButtonProps = {
  handleClick?: () => void;
};

const CardEditButton = ({ handleClick }: CardEditButtonProps) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900 dark:focus:ring-slate-700"
    >
      {t("common.actions.edit")}
    </button>
  );
};

export default CardEditButton;
