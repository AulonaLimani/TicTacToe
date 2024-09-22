import { ErrorMessage, Field } from "formik";

interface P {
  label: string;
  name: string;
  type: string;
}

export const Input = ({ label, type, name }: P) => (
  <div className="register-input">
    <label htmlFor={name} className="inputLabel">
      {label}
    </label>
    <Field
      type={type}
      placeholder={label.slice(0, -1)}
      name={name}
      className="inputClass"
    />
    <ErrorMessage name={name} component="div" />
  </div>
);
