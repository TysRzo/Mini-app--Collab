import { useTranslation } from "react-i18next";
import CardEditButton from "../../atoms/CardEditButton";
import CardDeleteButton from "../../atoms/CardDeleteButton";

type VoteStatus = "scheduled" | "open" | "closed";

type VoteCardProps = {
  name: string;
  startAt: string;
  endAt: string;
  status: VoteStatus;
  handleEdit?: () => void;
  handleDelete?: () => void;
  handleOpen?: () => void;
  handleClose?: () => void;
};

const VoteCard = ({
  name,
  startAt,
  endAt,
  status,
  handleEdit,
  handleDelete,
  handleOpen,
  handleClose,
}: VoteCardProps) => {
  const { t } = useTranslation();

  const statusLabel =
    status === "scheduled"
      ? t("admin.votes.status.scheduled")
      : status === "open"
      ? t("admin.votes.status.open")
      : t("admin.votes.status.closed");

  const statusClasses =
    status === "scheduled"
      ? "bg-gray-100 text-gray-800"
      : status === "open"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";

  const canOpen = status === "scheduled" || status === "closed";
  const canClose = status === "open";

  const actionLabel = canOpen
    ? status === "closed"
      ? t("admin.votes.actions.reopen")
      : t("admin.votes.actions.open")
    : canClose
    ? t("admin.votes.actions.close")
    : null;

  const handleAction = canOpen
    ? handleOpen
    : canClose
    ? handleClose
    : undefined;

  const actionClasses = canOpen
    ? "bg-green-700 hover:bg-green-600"
    : canClose
    ? "bg-red-800 hover:bg-red-700"
    : "";

  const showAction = (canOpen && !!handleOpen) || (canClose && !!handleClose);

  return (
    <article className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <header className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h3 className="truncate text-lg font-semibold text-gray-900">
              {name}
            </h3>

            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${statusClasses}`}
            >
              {statusLabel}
            </span>
          </div>

          <div className="mt-6 grid gap-1 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="inline-flex w-12 shrink-0 items-center justify-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
                {t("admin.votes.fields.startsAtShort")}
              </span>
              <time className="truncate">{startAt}</time>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex w-12 shrink-0 items-center justify-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
                {t("admin.votes.fields.endsAtShort")}
              </span>
              <time className="truncate">{endAt}</time>
            </div>

            {showAction && (
              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleAction}
                  className={`
                    rounded-md px-3 py-2 text-sm font-medium text-white transition-colors
                    ${actionClasses}
                  `}
                >
                  {actionLabel}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
          <CardEditButton handleClick={handleEdit} />
          <CardDeleteButton handleClick={handleDelete} />
        </div>
      </header>

      <div className="px-5 pb-5">
        <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-gray-800">
              {t("admin.votes.results.title")}
            </p>
            <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-800">
              {t("admin.votes.results.soon")}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <div className="h-44 w-full max-w-sm rounded-xl bg-white ring-1 ring-gray-200" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default VoteCard;
