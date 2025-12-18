const FormInputDateTime = ({ inputName, inputId, handleDateTimeChange }) => {
  return (
    <input
      type="datetime-local"
      name={inputName}
      id={inputId}
      className="form-control"
      onInput={handleDateTimeChange}
    />
  );
};

export default FormInputDateTime;