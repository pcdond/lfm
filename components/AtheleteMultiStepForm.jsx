"use client"
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PersonalInfo from './PersonalInfo';
import EducationBankInfo from './EducationBankInfo'
import OtherInfo from './OtherInfo'
import PreviewFinish from './PreviewFinish'

const AtheleteMultiStepForm = () => {
  const validationSchema = Yup.object().shape({
    // Add validation schema for your entire form here
  });

  const initialValues = {
    // Define your initial form values here
  };

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { component: <PersonalInfo/>, label: '1Account Setup' },
    { component: <EducationBankInfo />, label: '2Social Profiles' },
    { component: <OtherInfo />, label: '3Personal Details' },
    { component: <PreviewFinish />, label: '4Personal Details' },
  ];

  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      // Handle form submission here
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission here
      }}
    >
      {() => (
        <Form>
          <h1 className="text-lg font-bold text-gray-700 leading-tight text-center mt-12 mb-5">
            Form Wizard - Multi Step Form
          </h1>
          <div className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8">
            {/* Step Indicators */}
            <div className="form-header flex gap-3 mb-4 text-xs text-center">
              {steps.map((step, index) => (
                <span
                  key={index}
                  className={`stepIndicator flex-1 pb-8 relative ${index === currentStep ? 'active' : ''}`}
                >
                  {step.label}
                </span>
              ))}
            </div>

            {/* Current Step Component */}
            {steps[currentStep].component}

            {/* Previous / Next buttons */}
            <div className="form-footer flex gap-3">
              <button
                type="button"
                className="prev-button"
                onClick={handlePrevious}
                style={{ display: currentStep === 0 ? 'none' : 'inline' }}
              >
                Previous
              </button>
              <button type="button" className="next-button" onClick={handleNext}>
                {isLastStep ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AtheleteMultiStepForm;