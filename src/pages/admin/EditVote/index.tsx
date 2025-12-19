import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import H1 from "../../../atoms/H1";
import Footer from "../../../layouts/Footer";
import Header from "../../../layouts/Header";
import Main from "../../../layouts/Main";
import FormCreateVote from "../../../organisms/FormCreateVote";

import type { RootState } from "../../../store/store";
import { useAppDispatch } from "../../../store/hooks";
import { fetchAdminVotes } from "../../../store/votes/voteThunks";

const EditVote = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const isAdmin = useSelector(
    (state: RootState) => state.user.user?.role === "admin"
  );

  const adminVotes = useSelector((state: RootState) => state.votes.adminVotes);

  const isLoading = useSelector(
    (state: RootState) => state.votes.isLoadingAdminVotes
  );

  useEffect(() => {
    if (isAdmin && adminVotes.length === 0) {
      dispatch(fetchAdminVotes());
    }
  }, [dispatch, isAdmin, adminVotes.length]);

  const voteToEdit = adminVotes.find((v) => v.id === Number(id));

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  if (!id || isNaN(Number(id))) {
    return <Navigate to="/admin/votes/nouveau" replace />;
  }

  if (isLoading) {
    return (
      <>
        <Header />
        <Main>
          <p className="text-sm text-gray-600">{t("admin.votes.loading")}</p>
        </Main>
        <Footer />
      </>
    );
  }

  if (!voteToEdit) {
    return <Navigate to="/admin/votes/nouveau" replace />;
  }

  return (
    <>
      <Header />

      <Main>
        <H1 pageTitle={t("admin.votes.edit.title")} />

        <section className="mt-8">
          <FormCreateVote
            initialData={{
              id: voteToEdit.id,
              title: voteToEdit.title,
              startsAt: voteToEdit.startsAt,
              endsAt: voteToEdit.endsAt,
            }}
            onSuccess={() => navigate("/admin")}
          />
        </section>
      </Main>

      <Footer />
    </>
  );
};

export default EditVote;
