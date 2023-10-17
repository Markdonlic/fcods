import AdminFooter from "@/components/AdminFooter";
import Banner from "@/components/Banner";
import { FormInput } from "@/components/Input";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-6 flex justify-center items-center min-h-screen">
      <div className="flex flex-col">
        <Banner title="Password Reset Page" />
        <div className="w-full flex justify-center">
          <div className="w-full py-4 grid sm:grid-cols-2 gap-3">
            <FormInput
              labelName="Account Number"
              for="accountnumber"
              name="accountnumber"
              placeholder="Loading..."
              type="text"
              required
              disabled
            />
            <FormInput
              labelName="Password"
              for="password"
              name="password"
              placeholder="Enter Your Password *"
              type="password"
              required
            />
            <FormInput
              labelName="Confirm Password"
              for="confirmpassword"
              name="confirmpassword"
              placeholder="Confirm Your Password *"
              type="password"
              required
            />
            <div className="text-xs md:text-sm lg-text-base flex flex-wrap-reverse justify-between items-center">
              <Link
                href="/login"
                className="py-2 px-4 border-[1px] border-red-600 text-red-600 capitalize font-semibold tracking-wider hover:bg-red-100 transition-all duration-500"
              >
                Use Old Password
              </Link>
              <button className="py-2 px-4 bg-green-400 capitalize font-semibold tracking-wider hover:bg-green-600 text-white transition-all duration-500">
                <Link href="/validate-account">Update Password</Link>
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
