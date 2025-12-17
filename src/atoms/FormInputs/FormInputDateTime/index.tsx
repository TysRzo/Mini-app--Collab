
const FormInputDateTime = ({ inputName, inputId }) => {
  return (
    <input
      type="datetime-local"
      name={inputName}
      id={inputId}
      className="form-control"
    />
  );
};

export default FormInputDateTime;
