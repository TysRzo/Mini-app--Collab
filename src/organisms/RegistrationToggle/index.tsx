import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateRegistrations } from "../../store/settings/settingsThunks";

const RegistrationToggle = () => {
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
      setError("Impossible de modifier l’état des inscriptions");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-2 text-lg font-semibold">Inscriptions</h2>

      <p className="mb-4 text-sm text-gray-700">
        Les inscriptions sont actuellement{" "}
        <strong>{registrationsClosed ? "fermées" : "ouvertes"}</strong>.
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
        {registrationsClosed
          ? "Ouvrir les inscriptions"
          : "Fermer les inscriptions"}
      </button>
    </section>
  );
};

export default RegistrationToggle;
