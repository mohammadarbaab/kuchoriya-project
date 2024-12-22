import React, { useActionState, useState } from "react";
import email from "../../assests/email.png";
import skype from "../../assests/skype.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ContactUs() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };
  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };
  return (
    <div className=" flex flex-row flex-wrap justify-center items-center md:py-12  bg-blue-100">
      <div className="flex md:flex-row flex-col px-4 justify-center items-center md:gap-12">
        <div className="flex flex-col flex-wrap md:items-start justify-center gap-8 md:py-24 py-12 items-center">
          <div className="flex flex-col flex-wrap gap-2">
            <h1 className="font-[700] text-[32px]">
              Interested in working with us?
            </h1>
            <p className="font-[500] text-[16px] text-gray-500">
              Let’s Talk & Get Started
            </p>
            <p className="font-[500] text-[16px] text-blue-950">
              & What you will get:
            </p>
            <p className="font-[500] text-[16px] text-gray-500">
              &rarr; Project consulting by exports
            </p>
            <p className="font-[500] text-[16px] text-gray-500">
              &rarr; Detailed project estimation
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-wrap">
            <div className="flex flex-row flex-wrap p-4  border-blue-950 rounded-[20px] justify-start items-center gap-2 shadow-xl hover:shadow-lg border">
              <img src={email} alt="email" className="w-[30px]" />
              <a href="" className="">
                info@kuchoriyatechsoft.com
              </a>
            </div>
            <div className="flex flex-row flex-wrap p-4 border-blue-950 rounded-[20px] justify-start items-center gap-2 shadow-xl hover:shadow-lg border">
              <img src={skype} alt="email" className="w-[30px]" />
              <a href="" className="">
                info@kuchoriyatechsoft.com
              </a>
            </div>
          </div>
        </div>
        <div className=" max-w-4xl mx-auto border p-8 rounded-xl bg-white shadow-lg shadow-blue-800">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                placeholder="Enter your name"
                className="border border-blue-400 rounded-lg py-3 px-4 w-full sm:w-1/2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              <input
                placeholder="Enter your email"
                className="border border-blue-400 rounded-lg py-3 px-4 w-full sm:w-1/2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>

            <PhoneInput
              type="text"
              country="us"
              value={phoneNumber}
              onChange={handleChange}
              inputProps={{
                required: true,
                className:
                  "rounded-lg py-3 pl-12 w-full shadow-sm  transition-all border",
              }}
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full sm:w-1/2 py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all"
              >
                <option selected="">Interested in</option>
                <option value="US">Mobile / Web Solutions</option>
                <option value="CA">Creating a Mobile App</option>
                <option value="FR">Web Development</option>
                <option value="DE">Dedicated Team Services</option>
                <option value="DE">IT Consulting Services</option>
                <option value="DE">Partnership </option>
              </select>

              <select
                id="budget"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full sm:w-1/2 py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all"
              >
                <option value="">Your Budget</option>
                <option value="US">USD 0 to USD 1000</option>
                <option value="US">USD 1000 to USD 5000</option>
                <option value="US">USD 5000 to USD 10000</option>
                <option value="US">USD 10000 to USD 25000</option>
                <option value="US">USD 25000 to USD 50000</option>
                <option value="US">USD 50000+</option>
              </select>
            </div>

            <div className="flex flex-col gap-4">
              <input
                placeholder="Enter your email"
                className="border border-blue-400 rounded-lg py-3 px-4 w-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>

            <div className="flex flex-col gap-4">
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter your message"
                rows="4"
              />
            </div>

            <div className="flex flex-col gap-4">
              <input
                type="file"
                className="border border-blue-400 rounded-lg py-3 px-4 w-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer"
              />

              <div className="flex items-center md:justify-between md:flex-row flex-col gap-4">
                {/* "I'm not a robot" Checkbox */}
                <div className="flex items-center gap-3 border p-3 rounded-md border-blue-950 bg-white hover:bg-gray-100 shadow-sm transition-all h-[45px]">
                  <input
                    type="checkbox"
                    id="robotCheck"
                    className="w-5 h-5 rounded-sm"
                  />
                  <label
                    htmlFor="robotCheck"
                    className="text-sm text-gray-800 font-medium"
                  >
                    I'm not a robot
                  </label>
                </div>

                {/* Submit Button */}
                <button className="lg:px-5 items-center bg-[#F54D4D] rounded-md text-white font-[500] hover:text-white hover:bg-blue-800 md:px-2 md:h-[45px] flex flex-wrap px-2 h-[45px]">
                  Send Your Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
