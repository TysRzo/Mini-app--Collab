import { useState, type FormEvent, type ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../store/hooks";
import { loginUser } from "../../store/user/userThunks";

import FormInputEmail from "../../atoms/FormInputs/FormInputEmail";
import FormInputPassword from "../../atoms/FormInputs/FormInputPassword";
import FormLabel from "../../atoms/FormLabel";
import FormRow from "../../molecules/FormRow";
import FormSubmit from "../../atoms/FormSubmit";

const FormLogin = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
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
      await dispatch(loginUser(email.trim().toLowerCase(), password));
      navigate("/", { replace: true });
    } catch {
      setError(t("login.errors.invalid_credentials"));
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
        <FormLabel
          labelFor="userEmail"
          labelText={t("login.fields.email")}
          isRequired
        />
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
          labelText={t("login.fields.password")}
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

      <FormSubmit
        content={
          isSubmitting
            ? t("login.actions.submitting")
            : t("login.actions.submit")
        }
      />
    </form>
  );
};

export default FormLogin;
