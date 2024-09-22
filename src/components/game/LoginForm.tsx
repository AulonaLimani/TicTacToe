import { Form, Formik } from "formik";
import "./index.css";
import { Input } from "../home/Input";
import * as Yup from "yup";

interface P {
  buttonText?: string;
  homeFunction: () => void;
  registerFunction: (
    password: string,
    handleSubmiting: (submit: boolean) => void
  ) => Promise<void>;
}

export const LoginForm = ({
  buttonText = "Register",
  homeFunction,
  registerFunction,
}: P): JSX.Element => {
  return (
    <div className="loginContainer">
      <div className="formContainer">
        <div className="loginHeader">{buttonText} Form</div>
        <Formik
          initialValues={{ password: "" }}
          validationSchema={Yup.object({
            password: Yup.string()
              .min(6, "Must be 6 characters or more")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            const handleSubmiting = (submit: boolean) => {
              console.log("called");
              setSubmitting(submit);
            };
            registerFunction(values.password, handleSubmiting);
          }}
        >
          {({ isSubmitting }) => {
            console.log("isSubmitting", isSubmitting);
            return (
              <Form>
                <Input label="Password:" name="password" type="password" />
                <div className="buttons">
                  <div className="register-input-button">
                    <button
                      className="buttonClass"
                      type="button"
                      onClick={() => {
                        homeFunction();
                      }}
                    >
                      Go home
                    </button>
                  </div>
                  <div className="register-input-button">
                    <button
                      className="buttonClass"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {buttonText}
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
