import Image from "next/image";
import React, { useState } from 'react';
import {contactThumbnail} from '../../../assets/index';
import validator from 'validator';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Homecontact({contactUsData}) {

  const [btnLoader, setBtnLoader] = useState(false);
  const [isThankYou, setIsThankYou] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  var _ = require('lodash');

  const removeExtraSpace = (s) => {
      var rSpase = s.replace(/\s{2,}/g, ' ');
      return _.trimStart(rSpase);
  };
  const location = typeof window !== 'undefined' ? window.location.href : '';
  const [quickContact, setQuickContact] = useState({
      fname: '',
      lname: '',
      email: '',
      phone: '',
      message: '',
  });

  const validate = values => {
      const errors = {};

      if (!values.fname || !_.trim(values.fname)) {
          errors.fname = 'First name is required';
      } else if (values.fname.length > 50) {
          errors.fname = 'Must be 15 characters or less';
      } else if (values.fname.match("[<>]")) {
          errors.fname = 'Please provide a valid name';
      }

      if (!values.lname || !_.trim(values.lname)) {
        errors.lname = 'Last name is required';
      } else if (values.lname.length > 50) {
          errors.lname = 'Must be 15 characters or less';
      } else if (values.lname.match("[<>]")) {
          errors.lname = 'Please provide a valid name';
      }

      if (!values.email) {
          errors.email = 'Email is required';
      } else if (!validator.isEmail(values.email)) {
          errors.email = 'Invalid email address';
      }

      if (!values.phone) {
          errors.phone = 'Phone is required';
      } else if (!/^\+?[0-9\s\-()]*$/.test(values.phone)) {
          errors.phone = 'Invalid phone number';
      } else {
          // Remove non-numeric characters to check the length of the digits
          const phoneDigits = values.phone.replace(/[^\d]/g, '');
          if (phoneDigits.length < 10 || phoneDigits.length > 15) {
              errors.phone = 'Phone number must be between 10 and 15 digits';
          }
      }

      return errors;
  };

  const handlePhoneChange = (val) => {
      setQuickContact(prevState => ({
          ...prevState,
          phone: val
      }));
  };

  const myGreeting = () => {
      setIsThankYou(false);
      setIsError(false);
  };

  const quickFormik = useFormik({
      initialValues: quickContact,
      validate,
      onSubmit: (values, { resetForm }) => {
          setBtnLoader(true);

          axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact_form_submit_data`, values)
              .then(function (response) {
                  resetForm({ values: '' });
                  // router.push('/thank-you');
                  setIsThankYou(true);
              })
              .catch(function (error) {
                  setIsError(error?.message ? error.message : 'Network Error');
              })
              .finally(() => {
                  setBtnLoader(false);
                  setTimeout(myGreeting, 10000);
              });
      },
  });

  return (
    <div className="bg-[#0085FF] rounded-2xl overflow-hidden">
      <div className="flex flex-wrap">
        <div className="xl:w-7/12 md:w-6/12 w-full">
          <div className="relative z-10 h-full before:block before:w-full before:pt-[73%] mx-auto bg-primary">
            <Image src={contactUsData?.contact_us_image} width="783" height="584" alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
          </div>
        </div>
        <div className="xl:w-5/12 md:w-6/12 w-full">
          <div className="text-white lg:p-8 md:p-5 p-3">
          <h3 className="3xl:text-5xl 2xl:text-4xl text-3xl font-bold py-3 px-4 2xl:mb-5 lg:mb-4 mb-3">     {contactUsData?.contact_us_title}</h3>
            <form onSubmit={quickFormik.handleSubmit}>
              <div className="flex flex-wrap">
                <div className="w-6/12 px-2.5 pb-4">
                  <input type="text" className="bg-[#ffffff33] rounded border-solid border border-[#ffffff47] w-full text-base font-normal text-white py-3 px-4 placeholder:text-white focus:outline-none" onChange={quickFormik.handleChange}
                      value={removeExtraSpace(quickFormik.values.fname)} onBlur={quickFormik.handleBlur} name="fname" placeholder="First Name" />
                  {quickFormik.touched.fname && quickFormik.errors.fname ? <div style={{ color: '#ff0000' }}>{quickFormik.errors.fname}</div> : null}

                </div>
                <div className="w-6/12 px-2.5 pb-4">
                 
                  <input type="text" className="bg-[#ffffff33] rounded border-solid border border-[#ffffff47] w-full text-base font-normal text-white py-3 px-4 placeholder:text-white focus:outline-none" onChange={quickFormik.handleChange}
                      value={removeExtraSpace(quickFormik.values.lname)} onBlur={quickFormik.handleBlur} name="lname" placeholder="Last Name" />
                  {quickFormik.touched.lname && quickFormik.errors.lname ? <div style={{ color: '#ff0000' }}>{quickFormik.errors.lname}</div> : null}

                </div>
                <div className="w-full px-2.5 pb-4">
  
                  <input className="bg-[#ffffff33] rounded border-solid border border-[#ffffff47] w-full text-base font-normal text-white py-3 px-4 placeholder:text-white focus:outline-none" onChange={quickFormik.handleChange}
                        value={removeExtraSpace(quickFormik.values.email)} onBlur={quickFormik.handleBlur} type="email" name="email" placeholder="Email Address" />
                    {quickFormik.touched.email && quickFormik.errors.email ? <div style={{ color: '#ff0000' }}>{quickFormik.errors.email}</div> : null}
                </div>
                <div className="w-full px-2.5 pb-4">
                 
                  <input type="text" name="phone" onChange={quickFormik.handleChange}
                      value={removeExtraSpace(quickFormik.values.phone)} onBlur={quickFormik.handleBlur} className="bg-[#ffffff33] rounded border-solid border border-[#ffffff47] w-full text-base font-normal text-white py-3 px-4 placeholder:text-white focus:outline-none" placeholder="Phone No" />
                    {quickFormik.touched.phone && quickFormik.errors.phone ? <div style={{color: '#ff0000'}}>{quickFormik.errors.phone}</div> : null}
                </div>
                <div className="w-full px-2.5 pb-4">
                  <textarea className="bg-[#ffffff33] 2xl:h-36 h-28 rounded border-solid border border-[#ffffff47] w-full text-base font-normal text-white py-3 px-4 placeholder:text-white focus:outline-none resize-none" placeholder='Message' name="message" onChange={quickFormik.handleChange}
                  value={removeExtraSpace(quickFormik.values.message)} onBlur={quickFormik.handleBlur}></textarea>
                </div>
                <div className="w-full px-2.5 pb-4">
                 
                  <button className="flex items-center text-lg font-semibold text-black bg-white rounded py-2 px-10 cursor-pointer hover:bg-white  hover:bg-opacity-90">
                  <span className="mr-2">Submit</span>
                  {btnLoader && (
                      <span className='btn-ring-animation rings-animation'></span>
                  )}
                  </button>
                </div>
              </div>
            </form>
              {isThankYou && (
                  <div className='alert alert-success mt-3'>
                      Thank you for getting in touch!
                  </div>
              )}
              {isError && (
                  <div className='alert alert-error mt-3'>
                      {isError}
                  </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
