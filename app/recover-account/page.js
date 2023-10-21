import AdminFooter from "@/components/AdminFooter";
import Banner from "@/components/Banner";
import Input, { FormInput } from "@/components/Input";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-6 flex max-w-xl justify-center items-center min-h-screen">
      <div className="flex flex-col">
        <Banner title="Account Recovery Page" />
        <div className="w-full flex justify-center">
          <div className="w-full py-4 grid grid-cols-1 gap-3">
            <FormInput
              labelName="Account Number"
              for="accountnumber"
              name="accountnumber"
              placeholder="Loading..."
              type="text"
              required
              disabled
            />
            <div className="flex text-xs sm:text-sm flex-col justify-center">
              <label for="title">Secret Questions</label>
              <select
                name="questions"
                id="questions"
                class="text-xs sm:text-sm p-3 border-gray-300 border-[1px] outline-1 outline-blue-400 rounded-none"
              >
                <option selected value="">
                  Choose a Secret Question *
                </option>
                <option value="q1">
                  in what city did you meet your spouse/significant other?
                </option>
                <option value="q2">
                  in what city does your nearest siibling live?
                </option>
                <option value="q3">
                  in what city or town did your mother and father meet?
                </option>
                <option value="q4">
                  What is the name of your youngest child?
                </option>
                <option value="q5">what is your pet name?</option>
                <option value="q6">what is your nickname?</option>
                <option value="q7">what city did your parents meet?</option>
                <option value="q8">what is your mother known as?</option>
                <option value="q9">what is your dad known as?</option>
                <option value="q10">your memorable date?</option>
                <option value="q11">what is your best sports</option>
                <option value="q12">what city were you born?</option>
                <option value="q13">what is your passion?</option>
              </select>
            </div>
            <FormInput
              labelName="Answer"
              for="answer"
              name="secretanswers"
              placeholder="Enter Your Answer *"
              type="text"
              required
            />
            <div className="text-xs md:text-sm lg:text-base flex flex-wrap-reverse justify-between items-center">
              <Link
                href="/login"
                className="py-2 px-4 border-[1px] border-red-600 text-red-600 capitalize font-semibold tracking-wider hover:bg-red-100 transition-all duration-500"
              >
                Back to Login
              </Link>
              <button className="py-2 px-4 bg-green-400 capitalize font-semibold tracking-wider hover:bg-green-600 text-white transition-all duration-500">
                <Link href="/reset-password">Submit</Link>
              </button>
            </div>
          </div>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default page;
