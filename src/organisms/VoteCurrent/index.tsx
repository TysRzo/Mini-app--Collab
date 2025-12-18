import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCurrentVote, voteThunk } from "../../store/votes/voteThunks";
import type { VoteValue } from "../../store/votes/voteSlice";

const VoteCurrent = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isLogged = useAppSelector((state) => state.user.isLogged);

  const currentVote = useAppSelector((state) => state.votes.currentVote);
  const isLoading = useAppSelector((state) => state.votes.isLoadingCurrentVote);
  const isSubmitting = useAppSelector((state) => state.votes.isSubmitting);
  const error = useAppSelector((state) => state.votes.error);

  useEffect(() => {
    if (isLogged) dispatch(fetchCurrentVote());
  }, [dispatch, isLogged]);

  if (!isLogged) return null;

  if (isLoading) {
    return (
      <section className="mt-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-gray-700">{t("vote.current.loading")}</p>
      </section>
    );
  }

  if (!currentVote) return null;

  const myVote: VoteValue = currentVote.myVote ?? 0;

  const handleVote = (value: VoteValue) => {
    if (isSubmitting) return;
    dispatch(voteThunk(value));
  };

  const downActive = myVote === -1;
  const upActive = myVote === 1;
  const canClear = myVote !== 0;

  return (
    <section className="mt-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold text-gray-900">
            {t("vote.current.title")}
          </h2>

          <p className="mt-1 text-sm text-gray-700">
            <span className="font-medium">{currentVote.vote.title}</span>
          </p>

          <p className="mt-2 text-sm text-gray-700">
            {t("vote.current.score")}{" "}
            <span className="font-semibold text-gray-900">
              {currentVote.total}
            </span>
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {t("vote.current.myVote")}{" "}
            <span className="font-semibold text-gray-700">
              {myVote === 1
                ? t("vote.current.myVoteValue.up")
                : myVote === -1
                ? t("vote.current.myVoteValue.down")
                : t("vote.current.myVoteValue.neutral")}
            </span>
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleVote(downActive ? 0 : -1)}
            className={`
              rounded-md px-4 py-2 text-sm font-medium transition-colors
              ${
                downActive
                  ? "bg-red-900 text-white"
                  : "bg-white text-red-800 ring-1 ring-red-200 hover:bg-red-50"
              }
              ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}
            `}
          >
            {t("vote.current.actions.down")}
          </button>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleVote(upActive ? 0 : 1)}
            className={`
              rounded-md px-4 py-2 text-sm font-medium transition-colors
              ${
                upActive
                  ? "bg-green-800 text-white"
                  : "bg-white text-green-800 ring-1 ring-green-200 hover:bg-green-50"
              }
              ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}
            `}
          >
            {t("vote.current.actions.up")}
          </button>

          <button
            type="button"
            disabled={isSubmitting || !canClear}
            onClick={() => handleVote(0)}
            className={`
              rounded-md px-4 py-2 text-sm font-medium transition-colors
              bg-gray-100 text-gray-800 hover:bg-gray-200
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            {t("vote.current.actions.clear")}
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-3 text-sm font-medium text-red-700">{error}</p>
      )}

      <p className="mt-3 text-xs text-gray-500">{t("vote.current.hint")}</p>
    </section>
  );
};

export default VoteCurrent;
