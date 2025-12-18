import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, Link } from "react-router";
import { useTranslation } from "react-i18next";

import H1 from "../../../atoms/H1";
import Footer from "../../../layouts/Footer";
import Header from "../../../layouts/Header";
import Main from "../../../layouts/Main";
import RegistrationToggle from "../../../organisms/RegistrationToggle";
import VoteList from "../../../organisms/VoteList";

import type { RootState } from "../../../store/store";
import { useAppDispatch } from "../../../store/hooks";
import {
  fetchAdminVotes,
  deleteAdminVoteThunk,
  openAdminVoteThunk,
  closeAdminVoteThunk,
} from "../../../store/votes/voteThunks";

const Dashboard = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isAdmin = useSelector(
    (state: RootState) => state.user.user?.role === "admin"
  );

  const adminVotes = useSelector((state: RootState) => state.votes.adminVotes);

  const isLoading = useSelector(
    (state: RootState) => state.votes.isLoadingAdminVotes
  );

  const error = useSelector((state: RootState) => state.votes.error);

  useEffect(() => {
    if (isAdmin) dispatch(fetchAdminVotes());
  }, [dispatch, isAdmin]);

  const votesForList = useMemo(
    () =>
      adminVotes.map((v) => ({
        id: v.id,
        name: v.title,
        startAt: v.startsAt,
        endAt: v.endsAt,
        status: v.status,
      })),
    [adminVotes]
  );

  const handleDeleteVote = (id: number) => {
    const vote = votesForList.find((v) => v.id === id);
    const name = vote?.name ?? "";

    const confirmed = window.confirm(t("admin.votes.confirmDelete", { name }));
    if (!confirmed) return;

    dispatch(deleteAdminVoteThunk(id));
  };

  if (!isAdmin) return <Navigate to="/" replace />;

  return (
    <>
      <Header />

      <Main>
        <H1 pageTitle={t("admin.dashboard.title")} />

        <RegistrationToggle />

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold">{t("admin.votes.title")}</h2>

            <Link
              to="/admin/votes/nouveau"
              className="
                inline-flex
                items-center
                rounded-md
                bg-gray-900
                px-4
                py-2
                text-sm
                font-medium
                text-white
                transition-colors
                hover:bg-gray-800
              "
            >
              {t("admin.votes.actions.add")}
            </Link>
          </div>

          {isLoading && (
            <p className="text-sm text-gray-600">{t("admin.votes.loading")}</p>
          )}

          {error && (
            <p className="mb-4 text-sm font-medium text-red-700">{error}</p>
          )}

          {!isLoading && (
            <VoteList
              votes={votesForList}
              onDelete={handleDeleteVote}
              onOpen={(id) => dispatch(openAdminVoteThunk(id))}
              onClose={(id) => dispatch(closeAdminVoteThunk(id))}
              onEdit={(id) => console.log("edit vote", id)}
            />
          )}
        </section>
      </Main>

      <Footer />
    </>
  );
};

export default Dashboard;
