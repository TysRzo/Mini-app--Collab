const FormInputPassword = ({ inputName, inputId, handlePasswordChange }) => {
  return (
    <input
      type="password"
      name={inputName}
      id={inputId}
      className="form-control"
      onInput={handlePasswordChange}
    />
  );
};

export default FormInputPassword;