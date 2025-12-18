import CardEditButton from "../../atoms/CardEditButton";
import CardDeleteButton from "../../atoms/CardDeleteButton";

type VoteCardProps = {
  name: string;
  startAt: string;
  endAt: string;
  handleEdit?: () => void;
  handleDelete?: () => void;
};

const VoteCard = ({
  name,
  startAt,
  endAt,
  handleEdit,
  handleDelete,
}: VoteCardProps) => {
  return (
    <article className="group w-full rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <header className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-slate-900 dark:text-slate-100">
            {name}
          </h3>

          <div className="mt-2 grid gap-1 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <span className="inline-flex w-12 shrink-0 items-center justify-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Début
              </span>
              <time className="truncate">{startAt}</time>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex w-12 shrink-0 items-center justify-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Fin
              </span>
              <time className="truncate">{endAt}</time>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
          <CardEditButton handleClick={handleEdit} />
          <CardDeleteButton handleClick={handleDelete} />
        </div>
      </header>

      <div className="px-5 pb-5">
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Résultats (camembert)
            </p>
            <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              À venir
            </span>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <div className="h-44 w-full max-w-sm rounded-xl bg-white/70 ring-1 ring-slate-200 dark:bg-slate-900/40 dark:ring-slate-800" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default VoteCard;
