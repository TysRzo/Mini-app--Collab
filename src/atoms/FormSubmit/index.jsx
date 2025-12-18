import "./index.css";

const FormSubmit = ({ content }) => {
  return (
    <button type="submit" className="form-submit">
      {content}
    </button>
  );
};

export default FormSubmit;
