const FormInputEmail = ({ inputName, inputId, handleEmailChange }) => {
  return (
    <>
    <input
      type="email"
      name={inputName}
      id={inputId}
      className="form-control"
      onInput={handleEmailChange}
    />
    </>
  );
};

export default FormInputEmail;