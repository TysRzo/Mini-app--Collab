import FormInputEmail from "../../atoms/FormInputs/FormInputEmail";
import FormInputPassword from "../../atoms/FormInputs/FormInputPassword";
import FormLabel from "../../atoms/FormLabel";
import FormRow from "../../molecules/FormRow";
import FormSubmit from "../../atoms/FormSubmit";
import type { FormEvent, ChangeEvent } from "react";
import { useState } from "react";
 
// Regex patterns (simplified)
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PASSWORD_REGEX = /^.{6,}$/; // minimum 6 characters
 
// Stockage des emails enregistrés (en mémoire)
const registeredEmails: string[] = [];
 
const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
 
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    setSuccess("");
   
    // Validation email en temps réel (simple)
    if (value && !EMAIL_REGEX.test(value)) {
      setErrors(prev => ({ ...prev, email: "Format email invalide" }));
    } else {
      setErrors(prev => ({ ...prev, email: "" }));
    }
  };
 
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    setSuccess("");
   
    // Validation password en temps réel (simple)
    if (value && !PASSWORD_REGEX.test(value)) {
      setErrors(prev => ({
        ...prev,
        password: "Min 6 caractères"
      }));
    } else {
      setErrors(prev => ({ ...prev, password: "" }));
    }
  };
 
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccess("");
   
    // Reset des erreurs
    setErrors({ email: "", password: "" });
   
    // Vérification finale email
    if (!EMAIL_REGEX.test(email)) {
      setErrors(prev => ({ ...prev, email: "Email invalide" }));
      setIsSubmitting(false);
      return;
    }
   
    // Vérification finale password
    if (!PASSWORD_REGEX.test(password)) {
      setErrors(prev => ({
        ...prev,
        password: "Le mot de passe doit contenir au moins 6 caractères"
      }));
      setIsSubmitting(false);
      return;
    }
   
    // Vérifier si l'email existe déjà
    if (registeredEmails.includes(email.toLowerCase())) {
      setErrors(prev => ({ ...prev, email: "Cet email est déjà utilisé" }));
      setIsSubmitting(false);
      return;
    }
   
    try {
      // Simuler enregistrement (remplacer par appel API si besoin)
      // Ajouter l'email à la liste
      registeredEmails.push(email.toLowerCase());
     
      // Réinitialiser le formulaire
      setEmail("");
      setPassword("");
      setErrors({ email: "", password: "" });
      setSuccess("Compte créé avec succès");
     
    } catch (error) {
      setErrors(prev => ({ ...prev, email: "Une erreur est survenue" }));
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
        <div className="flex flex-col gap-1 w-full">
          {success && <p className="text-sm text-green-600">{success}</p>}
          <FormInputEmail
            inputName="email"
            inputId="userEmail"
            isRequired
            handleEmailChange={handleEmailChange}
          />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email}</p>
          )}
        </div>
      </FormRow>
 
      <FormRow>
        <FormLabel labelFor="userPassword" labelText="Mot de passe" isRequired />
        <div className="flex flex-col gap-1 w-full">
          <FormInputPassword
            inputName="password"
            inputId="userPassword"
            isRequired
            handlePasswordChange={handlePasswordChange}
          />
          {errors.password && (
            <p className="text-xs text-red-600">{errors.password}</p>
          )}
        </div>
      </FormRow>
 
      <FormSubmit content="S'inscrire" isDisabled={isSubmitting} />
    </form>
  );
};
 
export default FormRegister;
 
 