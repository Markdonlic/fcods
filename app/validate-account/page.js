import AdminFooter from "@/components/AdminFooter";
import Banner from "@/components/Banner";
import Input, { FormInput } from "@/components/Input";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-6 flex justify-center items-center">
      <div className="flex flex-col">
        <Banner title="Account Validation Page" />
        <div className="w-full flex justify-center">
          <div className="w-full py-4 grid sm:grid-cols-2 gap-3">
            <FormInput
              labelName="Validate Account Number"
              for="accountnumber"
              name="accountnumber"
              placeholder="Enter Account Number"
              type="text"
              required
              disabled
            />
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
        <AdminFooter />
      </div>
    </div>
  );
};

export default page;
