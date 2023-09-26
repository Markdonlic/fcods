import Input from "@/components/Input";
import React from "react";

const page = () => {
  return (
    <div className="p-6 flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="uppercase font-bold">
            We Are Fidelity,
            <br /> We Keep Our Word
          </div>
          <div className="font-bold">Fidelity Bank logo</div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full py-4 grid sm:grid-cols-2 gap-3">
            <Input label="choose a Title *" required />
            <Input label="choose a Gender *" required />
            <Input label="Surname *" required />
            <Input label="First Name *" required />
            <Input label="Other Names" required />
            <Input label="Occupation *" required />
            <Input label="Marital Status *" required />
            <Input label="Mother's maiden name *" required />
            <Input label="Email Address *" required />
            <Input label="Phone Number *" required />
            <Input label="Date of Birth *" required type="date" />
            <div className="flex justify-end items-center">
              <button className="py-2 px-4 bg-green-500 capitalize font-semibold tracking-wider">
                submit
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-xs sm:text-sm">
          Privacy Policy | GAIM Promo | Branch Locator | FAQ Corporate
          Registration Form/Guide | Copyright Fidelity Bank 20
        </div>
      </div>
    </div>
  );
};

export default page;
