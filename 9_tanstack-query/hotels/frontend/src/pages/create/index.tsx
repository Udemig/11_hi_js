import { FC } from "react";
import { Field, Form, Formik } from "formik";
import { initialValues, inputs } from "../../utils/constants";
import { PlaceData } from "../../types";

const Create: FC = () => {
  const onSubmit = (values: PlaceData) => {
    console.log(values);
  };

  return (
    <div className="container">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="max-w-2xl mx-auto grid gap-5">
          {inputs.map((item, key) => {
            const isInput = item.type !== "checkbox";

            return (
              <div className={isInput ? "field" : "check-field"} key={key}>
                <label>{item.label}</label>

                <Field
                  name={item.name}
                  placeholder={item.placeholder}
                  type={item.type || "text"}
                  className={isInput ? "input" : "checkbox"}
                />
              </div>
            );
          })}

          <button
            className="my-5 bg-blue-500 py-2 px-6 text-white font-bold rounded-md transition hover:bg-blue-600"
            type="submit"
          >
            Gönder
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Create;
