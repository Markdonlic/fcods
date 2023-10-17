import AdminFooter from "@/components/AdminFooter";
import Banner from "@/components/Banner";
import Input, { FormInput } from "@/components/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-6 flex justify-center items-center min-h-screen">
      <div className="flex flex-col">
        <Banner title="Individual Login Page" />
        <div className="w-full flex justify-center">
          <div className="w-full py-4 grid sm:grid-cols-2 gap-3">
            <Link
              className="transition-all duration-500 py-2 px-4 text-center border-[1px] text-sky-500 border-sky-600 capitalize font-semibold tracking-wider hover:bg-sky-600 hover:text-white"
              href="/validate-email"
            >
              Open A New Account
            </Link>
            <FormInput
              labelName="Username"
              for="username"
              name="username"
              placeholder="Enter Email or Username *"
              type="text"
              required
            />
            <FormInput
              labelName="Password"
              for="password"
              name="password"
              placeholder="Enter Password *"
              type="password"
              required
            />
            <div className="flex text-xs md:text-sm lg:text-base flex-wrap-reverse justify-between items-center">
              <div className="flex flex-col flex-wrap gap-1 justify-center">
                <Link
                  className="hover:text-green-500 transition-all duration-500"
                  href="/validate-account"
                >
                  Reset password ?
                </Link>
                <Link
                  className="hover:text-green-500 transition-all duration-500"
                  href="/validate-account"
                >
                  Recover Account ?{" "}
                </Link>
              </div>
              <Link href="/otp">
                <button className="py-2 px-4 bg-green-400 capitalize font-semibold tracking-wider hover:bg-green-600 text-white transition-all duration-500">
                  login
                </button>
              </Link>
            </div>
          </div>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default page;
