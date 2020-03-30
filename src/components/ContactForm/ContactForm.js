import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";

import "./ContactForm.scss";

const ErrorMsg = ({ touched, message }) => {
  let content;

  if (!touched) {
    content = null;
  } else if (message) {
    content = <div className="err-msg err-msg--has-error">{message}</div>;
  } else {
    content = <div className="err-msg">Field is OK</div>;
  }

  return content;
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Must have at least 6 characters")
    .max(255, "Must not exceed 255 characters")
    .required("Must enter a name"),
  email: Yup.string()
    .email("Must be a valid email adress")
    .max(255, "Must not exceed 255 characters")
    .required("Must enter an email adress"),
  message: Yup.string()
    .min(6, "Must have at least 20 characters")
    .max(255, "Must not exceed 255 characters")
    .required("Must enter a message")
});

const ContactForm = () => (
  <Formik
    initialValues={{
      name: "",
      email: "",
      message: ""
    }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
      }, 750);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting
    }) => (
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          className={errors.name && touched.name ? "--has-error" : null}
        />
        <ErrorMsg touched={touched.name} message={errors.name} />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className={errors.email && touched.email ? "--has-error" : null}
        />
        <ErrorMsg touched={touched.email} message={errors.email} />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
          className={errors.message && touched.message ? "--has-error" : null}
        ></textarea>
        <ErrorMsg touched={touched.message} message={errors.message} />
        <button type="submit" disabled={isSubmitting}>
          send message
        </button>
      </form>
    )}
  </Formik>
);

export default ContactForm;
