const FormInputText = ({ inputName, inputId, handleTextChange }) => {
  return (
    <>
    <input
      type="text"
      name={inputName}
      id={inputId}
      className="form-control"
      onInput={handleTextChange}
    />
    </>
  );
};

export default FormInputText;