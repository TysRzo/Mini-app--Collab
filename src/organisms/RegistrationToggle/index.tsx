import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateRegistrations } from "../../store/settings/settingsThunks";

const RegistrationToggle = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const registrationsClosed = useAppSelector(
    (state) => state.settings.registrationsClosed
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleToggle = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      await dispatch(updateRegistrations(registrationsClosed));
    } catch {
      setError(t("admin.registrations.errors.update_failed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusLabel = registrationsClosed
    ? t("admin.registrations.status.closed")
    : t("admin.registrations.status.open");

  const actionLabel = registrationsClosed
    ? t("admin.registrations.actions.open")
    : t("admin.registrations.actions.close");

  return (
    <section className="mt-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-2 text-lg font-semibold">
        {t("admin.registrations.title")}
      </h2>

      <p className="mb-4 text-sm text-gray-700">
        {t("admin.registrations.currently")} <strong>{statusLabel}</strong>.
      </p>

      {error && (
        <p className="mb-3 text-sm font-medium text-red-700">{error}</p>
      )}

      <button
        onClick={handleToggle}
        disabled={isSubmitting}
        className={`
          rounded-md px-4 py-2 text-sm font-medium text-white transition-colors
          ${
            registrationsClosed
              ? "bg-green-700 hover:bg-green-600"
              : "bg-red-800 hover:bg-red-700"
          }
          ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}
        `}
      >
        {actionLabel}
      </button>
    </section>
  );
};

export default RegistrationToggle;
