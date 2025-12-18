import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../store/hooks";
import { createAdminVoteThunk } from "../../store/votes/voteThunks";

import FormLabel from "../../atoms/FormLabel";
import FormRow from "../../molecules/FormRow";
import FormSubmit from "../../atoms/FormSubmit";

const FormCreateVote = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [startsAt, setStartsAt] = useState("");
  const [endsAt, setEndsAt] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (error) setError(null);
  };

  const handleStartsAtChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStartsAt(event.target.value);
    if (error) setError(null);
  };

  const handleEndsAtChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEndsAt(event.target.value);
    if (error) setError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setError(null);

    try {
      await dispatch(
        createAdminVoteThunk({
          title: title.trim(),
          startsAt,
          endsAt,
        })
      );

      navigate("/admin", { replace: true });
    } catch {
      setError(t("admin.votes.create.errors.generic"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        space-y-4
        sm:mx-auto
        sm:max-w-2xl
        sm:rounded-xl
        sm:border
        sm:border-gray-200
        sm:bg-white
        sm:p-6
        sm:shadow-sm
      "
    >
      <FormRow>
        <FormLabel
          labelFor="voteTitle"
          labelText={t("admin.votes.create.fields.title")}
          isRequired
        />
        <input
          id="voteTitle"
          name="title"
          required
          value={title}
          onChange={handleTitleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          placeholder={t("admin.votes.create.placeholders.title")}
        />
      </FormRow>

      <FormRow>
        <FormLabel
          labelFor="voteStartsAt"
          labelText={t("admin.votes.create.fields.startsAt")}
          isRequired
        />
        <input
          id="voteStartsAt"
          name="startsAt"
          type="datetime-local"
          required
          value={startsAt}
          onChange={handleStartsAtChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
      </FormRow>

      <FormRow>
        <FormLabel
          labelFor="voteEndsAt"
          labelText={t("admin.votes.create.fields.endsAt")}
          isRequired
        />
        <input
          id="voteEndsAt"
          name="endsAt"
          type="datetime-local"
          required
          value={endsAt}
          onChange={handleEndsAtChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
      </FormRow>

      {error && <p className="text-sm font-medium text-red-700">{error}</p>}

      <FormSubmit
        content={
          isSubmitting
            ? t("admin.votes.create.actions.submitting")
            : t("admin.votes.create.actions.submit")
        }
      />
    </form>
  );
};

export default FormCreateVote;
