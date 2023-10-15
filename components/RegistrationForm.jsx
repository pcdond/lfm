"use client"
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const initialValues = {
    fullName: '',
    middleName: '',
    lastName: '',
    motherName: '',
    motherProfession: '',
    fatherName: '',
    fatherProfession: '',
    gender: '',
    dob: '',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .max(100, 'Full name must not be more than 100 characters')
      .matches(/^[a-zA-Z ']+$/, 'Name contains invalid characters')
      .required('Please enter full name'),
    middleName: Yup.string()
      .max(100, 'Middle name must not be more than 100 characters')
      .matches(/^[a-zA-Z ']+$/, 'Name contains invalid characters'),
    lastName: Yup.string()
      .max(100, 'Last name must not be more than 100 characters')
      .matches(/^[a-zA-Z ']+$/, 'Name contains invalid characters'),
    motherName: Yup.string()
      .max(100, 'Mother name must not be more than 100 characters')
      .matches(/^[a-zA-Z ']+$/, 'Name contains invalid characters')
      .required("Please enter mother's name"),
    motherProfession: Yup.string().max(100, "Mother's profession must not be more than 100 characters"),
    fatherName: Yup.string()
      .max(100, 'Father name must not be more than 100 characters')
      .matches(/^[a-zA-Z ']+$/, 'Name contains invalid characters')
      .required("Please enter father's name"),
    fatherProfession: Yup.string().max(100, "Father's profession must not be more than 100 characters"),
    gender: Yup.string().required('Please select a gender'),
    dob: Yup.string().required('Please select a date of birth'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="user-registration">
          <div className="row" style={{ justifyContent: 'space-around' }}>
            <div className="user_img focus-error">
              <div className="upload upload-photo float-left">
                <span>
                  <Field
                    type="image"
                    id="profile_image"
                    name="profileImage"
                    as="input"
                    className="user-profile-image img-fluid"
                    aria-hidden="true"
                  />
                  <input
                    type="file"
                    id="profile_image_btn"
                    name="profileImageBtn"
                    className="uploadInput user-profile-image"
                  />
                </span>
              </div>
              <div>
                <span className="field-validation-valid error" data-valmsg-for="imagepath" data-valmsg-replace="true"></span>
              </div>
            </div>
            <div className="col-sm-10 col-10">
              {/* Hidden fields */}
              <Field type="hidden" name="__RequestVerificationToken" value="xtNp9LilFb5tvZUVLk06pZ_qReCM9z5tfTa5PZjJDiL-_8q6ymiTQtpGk19CIQoZWk-c__ewxeM6Llc0uWBFAZylW_9gRuIvYduJZqXwNCo1" />
              <Field type="hidden" name="sport_detail_id_save" value="0" />
              <Field type="hidden" name="Event_Category_id" value="0" />
              <Field type="hidden" name="region_id_save" value="" />

              <div className="row">
                <div className="col-md-12 col-sm-6 col-12">
                  <div className="form-group">
                    <label>
                      Full Name
                      <i className="mandatory_icon"></i>
                    </label>
                    <Field
                      type="text"
                      id="first_name"
                      name="fullName"
                      className="form-control focus-error txtOnly sanitization"
                      placeholder="Enter Full Name"
                    />
                    <ErrorMessage name="fullName" component="span" className="field-validation-valid error" />
                  </div>
                </div>
                {/* ... Repeat the above code for other fields ... */}

                <div className="col-md-4 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Date of Birth<i className="mandatory_icon"></i></label>
                    <div className="input-group">
                      <Field
                        type="text"
                        id="userDateofBirth"
                        name="dob"
                        className="form-control focus-error sanitization dateOfBirth hasDatepicker"
                        placeholder="Select Date (dd/mm/yyyy)"
                      />
                      <label
                        className="fa fa-calendar"
                        htmlFor="userDateofBirth"
                        style={{
                          fontSize: '16px',
                          position: 'absolute',
                          right: '10px',
                          bottom: '10px',
                          zIndex: '99',
                        }}
                      />
                      <Field type="hidden" name="ShortDate" />
                    </div>
                    <div className="error" id="dvDateofBirth"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
