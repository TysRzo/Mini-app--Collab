const FormInputText = ({ inputName, inputId, handleNameChange }) => {
  return (
    <input
      type="text"
      name={inputName}
      id={inputId}
      className="form-control"
      onInput={handleNameChange}
    />
  );
};

export default FormInputText;
