import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { useTranslation } from "react-i18next";

import H1 from "../../../atoms/H1";
import Footer from "../../../layouts/Footer";
import Header from "../../../layouts/Header";
import Main from "../../../layouts/Main";
import RegistrationToggle from "../../../organisms/RegistrationToggle";
import VoteList from "../../../organisms/VoteList";
import FormCreateVote from "../../../organisms/FormCreateVote";

import type { RootState } from "../../../store/store";
import { useAppDispatch } from "../../../store/hooks";
import {
  fetchAdminVotes,
  deleteAdminVoteThunk,
} from "../../../store/votes/voteThunks";

const AddVote = () => {
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
    if (isAdmin) {
      dispatch(fetchAdminVotes());
    }
  }, [dispatch, isAdmin]);

  const votesForList = useMemo(
    () =>
      adminVotes.map((v) => ({
        id: v.id,
        name: v.title,
        startAt: v.startsAt,
        endAt: v.endsAt,
      })),
    [adminVotes]
  );

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />

      <Main>
        <H1 pageTitle={t("admin.dashboard.title")} />

        <RegistrationToggle />

        <section className="mt-8">
          <h2 className="mb-4 text-lg font-semibold">
            {t("admin.votes.title")}
          </h2>

          <FormCreateVote />

          <div className="mt-6">
            {isLoading && (
              <p className="text-sm text-gray-600">
                {t("admin.votes.loading")}
              </p>
            )}

            {error && (
              <p className="mb-4 text-sm font-medium text-red-700">{error}</p>
            )}

            {!isLoading && (
              <VoteList
                votes={votesForList}
                onDelete={(id) => dispatch(deleteAdminVoteThunk(id))}
                onEdit={(id) => {
                  console.log("edit vote", id);
                }}
              />
            )}
          </div>
        </section>
      </Main>

      <Footer />
    </>
  );
};

export default AddVote;
