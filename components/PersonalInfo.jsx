"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PersonalInfo = () => {
  const initialValues = {
    // Initialize your form fields here
    first_name: '',
    middle_name: '',
    last_name: '',
    mother_full_name: '',
    mother_profession: '',
    father_full_name: '',
    father_profession: '',
    Gender: '',
    userDateofBirth: '',
  };

  const validationSchema = Yup.object().shape({
    // Define validation rules using Yup
    first_name: Yup.string().required('Please enter full name'),
    // Add validation rules for other fields
  });

  const onSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <div className="user-registration">
      {/* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-wrap justify-around"> */}
          {/* Full Name Field */}
          <div className="md:w-full pr-4 pl-4 sm:w-1/2 pr-4 pl-4 w-full">
            <div className="mb-4">
              <label>
                Full Name<i className="mandatory_icon"></i>
              </label>
              <Field
                type="text"
                name="first_name"
                placeholder="Enter Full Name"
                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded focus-error txtOnly sanitization"
              />
              <ErrorMessage
                name="first_name"
                component="span"
                className="field-validation-valid error"
              />
            </div>
          </div>
          {/* Add similar Field components for other form fields */}
        {/* </Form>
      </Formik> */}
    </div>
  );
};

export default PersonalInfo;
