import Input, { FormInput } from "@/components/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const year = new Date();
  return (
    <div className="p-6 flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <div className="flex gap-1 items-center justify-between pr-4 bg-white">
          <div className="flex gap-1 items-center">
            <div className="font-bold">
              <Image
                src="/icons/android-chrome-512x512.png"
                alt="PCODS Logo"
                width={50}
                height={50}
              />
            </div>
            <div className="font-bold flex flex-col justify-center">
              <p>
                Welcome to <span className="text-[#0066ff]">FCODS</span>,
              </p>
              <p>We Keep Our Word</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-xs">
            <div className="flex justify-center items-center gap-2 text-gray-500">
              <p>Already have account?</p>
              <Link
                href="/login"
                className="py-2 capitalize font-semibold tracking-wider hover:underline hover:underline-offset-4 text-green-600 hover:text-green-500 transition-all duration-500"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full py-4 grid sm:grid-cols-2 gap-3">
            <div className="flex text-xs sm:text-sm flex-col justify-center">
              <label for="title">Title</label>
              <select
                name="title"
                id="title"
                class="text-xs sm:text-sm p-3 border-gray-300 border-[1px] outline-1 outline-blue-400 rounded-none"
              >
                <option selected value="">
                  Choose a title
                </option>
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="dr">Dr</option>
                <option value="miss">Miss</option>
              </select>
            </div>
            <FormInput
              labelName="Surname"
              for="surname"
              name="surname"
              placeholder="Surname *"
              required
            />
            <FormInput
              labelName="First Name"
              for="firstname"
              name="firstname"
              placeholder="First Name *"
              required
            />
            <FormInput
              labelName="Other Names"
              for="othernames"
              name="othernames"
              placeholder="Other Names *"
              required
            />
            <div className="flex text-xs sm:text-sm flex-col justify-center">
              <label for="title">Marital Status</label>
              <select
                name="title"
                id="title"
                class="text-xs sm:text-sm p-3 border-gray-300 border-[1px] outline-1 outline-blue-400 rounded-none"
              >
                <option selected value="">
                  Marital Status
                </option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
            <FormInput
              labelName="Occupation"
              for="occupation"
              name="occupation"
              placeholder="Enter Occupation *"
              required
            />
            <FormInput
              labelName="Mother's Maiden Name"
              for="maidenname"
              name="maidenname"
              placeholder="Enter Mother's Maiden Name *"
              required
            />
            <FormInput
              labelName="Email Address"
              for="emailaddress"
              name="email"
              placeholder="Enter Email Address *"
              required
              type="email"
            />
            <FormInput
              labelName="Phone Number"
              for="phonenumber"
              name="phonenumber"
              placeholder="Enter Phone Number *"
              required
            />
            <FormInput
              labelName="Date of Birth"
              type="date"
              for="dob"
              name="dob"
              placeholder="Date of Birth *"
              required
            />
            <div className="flex justify-between items-center gap-2">
              <Link href="/a-home">
                <button className="py-2 px-4 bg-green-400 capitalize font-semibold tracking-wider hover:bg-green-600 hover:text-gray-200 transition-all duration-500">
                  submit
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center w-full text-xs sm:text-sm px-6 py-4 bg-blue-800 text-white">
          <p className=" gap-2">
            <Link
              href="#"
              className="hover:text-green-300 transition-all duration-500"
            >
              Privacy Policy
            </Link>{" "}
            |
            <Link
              href="#"
              className="hover:text-green-300 transition-all duration-500"
            >
              {" "}
              FCODS Promo{" "}
            </Link>{" "}
            |
            <Link
              href="#"
              className="hover:text-green-300 transition-all duration-500"
            >
              {" "}
              Branch Locator{" "}
            </Link>{" "}
            |
            <Link
              href="#"
              className="hover:text-green-300 transition-all duration-500"
            >
              {" "}
              FAQ Corporate Registration Form/Guide
            </Link>{" "}
            |
            <Link
              href="#"
              className="hover:text-green-300 transition-all duration-500"
            >
              {" "}
              Copyright FCODS {year.getFullYear()}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
