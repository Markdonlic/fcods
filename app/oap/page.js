import Input from "@/components/Input";
import Link from "next/link";

const page = () => {
  const otpModal = (
    <div className="absolute h-full w-full text-white">
      <div className="h-full flex items-center justify-center">
        <div className="bg-white text-gray-700 border-2 border-gray-300 p-4 shadow-2xl">
          <div className="flex flex-col gap-2 w-72">
            <div className="flex justify-between font-bold text-lg">
              <p>Send SMS</p>
              <button className="py-0 px-2 hover:bg-red-500 hover:text-white transition-all duration-500">
                x
              </button>
            </div>
            <Input label="Enter OTP sent to your phone." />
            <div className="flex items-center gap-1">
              <button className="capitalize py-1 px-3 border-[1px] bg-green-500 text-white font-bold hover:bg-green-600 hover:text-white transition-all duration-500">
                Verify
              </button>
              <button className="capitalize py-1 px-3 border-[1px] border-sky-600 text-sky-600 font-bold hover:bg-sky-600 hover:text-white transition-all duration-500">
                ResendOTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 flex justify-center items-center">
      {/* {otpModal} */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="uppercase font-bold text-blue-900">
            Fidelity Bank
            <br /> Online Account
            <br /> Opening Portal
          </div>
          <div className="font-bold">Fidelity Bank logo</div>
        </div>
        <div className="pt-4 text-xs font-bold">
          <p className="text-gray-700">
            Welcome, open your fidelity savings or <br />
            current account in just a few easy steps
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full py-12 grid grid-cols-1 gap-3 sm:gap-1">
            <div className="flex justify-start items-center">
              <button className="py-4 px-6 flex text-white bg-green-600 capitalize font-semibold tracking-wider hover:bg-green-700 transition-all duration-500">
                Open A New Account &#8614;
              </button>
            </div>
            <div className="w-full flex justify-start items-center gap-1">
              <Link
                href="/register"
                className="py-4 px-6 flex text-white bg-sky-600 capitalize font-semibold tracking-wider hover:bg-sky-700 transition-all duration-500"
              >
                Savings &#8614;
              </Link>
              <button className="py-4 px-6 flex text-white bg-sky-600 capitalize font-semibold tracking-wider hover:bg-sky-700 transition-all duration-500">
                Current &#8614;
              </button>
              <button className="py-4 px-6 flex text-white bg-sky-600 capitalize font-semibold tracking-wider hover:bg-sky-700 transition-all duration-500">
                Diaspora &#8614;
              </button>
            </div>
          </div>
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-500" />
        <div className=" w-full flex flex-col justify-center items-start py-12 gap-2">
          <div className="">
            <button className="capitalize py-4 px-8 border-[1px] border-sky-600 text-sky-600 font-bold hover:bg-sky-600 hover:text-white transition-all duration-500">
              upgrade your account &#8614;
            </button>
          </div>
          <div className="w-auto flex flex-col gap-1 justify-center">
            <div className="flex justify-between gap-4 w-full font-bold">
              <p>Enter Your Account Number</p>
              <button className="py-0 px-2 hover:bg-red-500 hover:text-white transition-all duration-500">
                x
              </button>
            </div>
            <div className="flex justify-start items-center gap-0">
              <Input type="number" label="Enter Account Number" />
              <button className="text-xs capitalize px-6 py-3 bg-green-600 text-white font-bold hover:bg-green-700 hover:text-white transition-all duration-500">
                submit
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-xs sm:text-sm py-10 text-gray-500">
          Privacy Policy | GAIM Promo | Branch Locator | FAQ <br />
          Corporate Registration Form/Guide | Copyright Fidelity Bank 20
        </div>
      </div>
    </div>
  );
};

export default page;
