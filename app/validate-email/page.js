import Input from "@/components/Input";
import Link from "next/link";
import React from "react";

const page = () => {
  let dateVal = new Date();
  let day = dateVal.getDay();
  let date = dateVal.getUTCDate();
  let month = dateVal.getUTCMonth();
  let year = dateVal.getUTCFullYear();
  if (day === 1) {
    day = "Monday";
  } else if (day === 2) {
    day = "Tuesday";
  } else if (day === 3) {
    day = "Wednesday";
  } else if (day === 4) {
    day = "Thursday";
  } else if (day === 5) {
    day = "Friday";
  } else if (day === 6) {
    day = "Saturday";
  } else if (day === 7) {
    day = "Sunday";
  } else {
    day = "No data!";
  }

  if (month === 1) {
    month = "January";
  } else if (month === 2) {
    month = "February";
  } else if (month === 3) {
    month = "March";
  } else if (month === 4) {
    month = "April";
  } else if (month === 5) {
    month = "May";
  } else if (month === 6) {
    month = "June";
  } else if (month === 7) {
    month = "July";
  } else if (month === 8) {
    month = "August";
  } else if (month === 9) {
    month = "September";
  } else if (month === 10) {
    month = "October";
  } else if (month === 11) {
    month = "November";
  } else if (month === 12) {
    month = "December";
  } else {
    month = "No data!";
  }
  return (
    <div className="p-6 flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex justify-between items-center pb-12">
          <div className="capitalize font-bold">
            Individual Banking
            <br />
            {day} {date} {month}, {year}
          </div>
          <div className="font-bold">Fidelity Bank logo</div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full py-4 grid sm:grid-cols-2 gap-3">
            <Input label="Email Address *" required />
            <div className="flex flex-wrap-reverse justify-between items-center">
              <button className="py-2 px-4 border-[1px] border-sky-600 text-sky-600 capitalize font-semibold tracking-wider hover:bg-sky-100">
                <Link href="/login">Back to Login</Link>
              </button>
              <button className="py-2 px-4 text-white bg-green-500 capitalize font-semibold tracking-wider">
                <Link href="/otp">Validate</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center pt-12 text-xs sm:text-sm">
          Privacy Policy | GAIM Promo | Branch Locator | FAQ Corporate
          Registration Form/Guide | Copyright Fidelity Bank 20
        </div>
      </div>
    </div>
  );
};

export default page;
