import { useState, type FormEvent, type ChangeEvent } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import FormInputEmail from "../../atoms/FormInputs/FormInputEmail";
import FormInputPassword from "../../atoms/FormInputs/FormInputPassword";
import FormLabel from "../../atoms/FormLabel";
import FormRow from "../../molecules/FormRow";
import FormSubmit from "../../atoms/FormSubmit";

type RegisterApiSuccess = { success: true };
type RegisterApiError = { error: string };

const FormRegister = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (error) setError(null);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (error) setError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setError(null);

    try {
      await axios.post<RegisterApiSuccess>(
        "http://localhost:3000/api/register",
        {
          email: email.trim().toLowerCase(),
          password: password.trim(),
        },
        { withCredentials: true }
      );

      navigate("/login", {
        replace: true,
        state: {
          flash: "Compte créé avec succès. Vous pouvez vous connecter.",
        },
      });
    } catch (e) {
      const apiMsg = axios.isAxiosError<RegisterApiError>(e)
        ? e.response?.data?.error
        : null;

      setError(apiMsg ?? "Une erreur est survenue");
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
        sm:max-w-md
        sm:rounded-xl
        sm:border
        sm:border-gray-200
        sm:bg-white
        sm:p-6
        sm:shadow-sm
      "
    >
      <FormRow>
        <FormLabel labelFor="userEmail" labelText="Email" isRequired />
        <FormInputEmail
          inputName="email"
          inputId="userEmail"
          isRequired
          handleEmailChange={handleEmailChange}
        />
      </FormRow>

      <FormRow>
        <FormLabel
          labelFor="userPassword"
          labelText="Mot de passe"
          isRequired
        />
        <FormInputPassword
          inputName="password"
          inputId="userPassword"
          isRequired
          handlePasswordChange={handlePasswordChange}
        />
      </FormRow>

      {error && <p className="text-sm font-medium text-red-700">{error}</p>}

      <FormSubmit content={isSubmitting ? "Inscription..." : "S'inscrire"} />
    </form>
  );
};

export default FormRegister;
