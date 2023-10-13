import AdminFooter from "@/components/AdminFooter";
import Banner from "@/components/Banner";
import Input, { FormInput } from "@/components/Input";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-6 flex justify-center items-center">
      <div className="flex flex-col">
        <Banner title="Verification Page" />
        <div className="w-full flex justify-center">
          <div className="w-full py-4 grid sm:grid-cols-2 gap-3">
            <FormInput
              labelName="Account Number"
              for="accountnumber"
              name="accountnumber"
              placeholder="Loading... *"
              type="text"
              required
              disabled
            />
            <FormInput
              labelName="One Time Password"
              for="otp"
              name="otp"
              placeholder="Enter OTP *"
              type="text"
              required
            />
            <div className="text-xs md:text-sm flex flex-wrap-reverse justify-between items-center">
              <Link
                className="transition-all duration-500 py-2 px-4 text-center border-[1px] text-sky-500 border-sky-600 capitalize font-semibold tracking-wider hover:bg-sky-600 hover:text-white"
                href="/validate-email"
              >
                Resend OTP
              </Link>
              <button className="py-2 px-4 bg-green-400 capitalize font-semibold tracking-wider hover:bg-green-600 text-white transition-all duration-500">
                <Link href="/recover-account">Submit</Link>
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
