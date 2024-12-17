import { Formik, Form, Field, ErrorMessage } from "formik";
import schema from "../schema";
import { inputs } from "../constants";

const Second = () => {
  return (
    <div className="vh-100 vw-100">
      <div className="container p-5">
        <h2 className="text-center">FORMIK & YUP (2)</h2>

        <Formik
          initialValues={{
            email: "",
            age: "",
            password: "",
            passwordConfirm: "",
          }}
          validationSchema={schema}
          onSubmit={async (values) => {
            await new Promise((resolve) => {
              setTimeout(resolve, 3000);
            });
            alert(JSON.stringify(values));
          }}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                {inputs.map((props) => (
                  <div className="group">
                    <label htmlFor={props.name}>{props.label}</label>
                    <Field name={props.name} />
                    <ErrorMessage name={props.name} />
                  </div>
                ))}

                <button disabled={isSubmitting}>
                  {isSubmitting ? "Yükleniyor" : "Gönder"}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Second;
