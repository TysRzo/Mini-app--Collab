
const FormInputEmail = ({ inputName, inputId }) => {
  return (
    <input
      type="email"
      name={inputName}
      id={inputId}
      className="form-control"
    />
  );
};

export default FormInputEmail;
