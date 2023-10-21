import AdminFooter from "@/components/AdminFooter";
import Banner from "@/components/Banner";
import { FormInput } from "@/components/Input";
import Link from "next/link";

const page = () => {
  return (
    <div className="p-6 flex justify-center items-center max-w-xl min-h-screen">
      <div className="flex flex-col">
        <Banner title="Email Validation Page" />
        <div className="w-full flex justify-center">
          <div className="w-full py-4 grid grid-cols-1 gap-3">
            <FormInput
              labelName="Email Address"
              for="email"
              name="email"
              placeholder="Enter Email Associated to Account *"
              type="email"
              required
            />
            <div className="flex text-xs md:text-sm flex-wrap-reverse justify-between items-center">
              <button className="transition-all duration-500 py-2 px-4 text-center border-[1px] text-sky-500 border-sky-600 capitalize font-semibold tracking-wider hover:bg-sky-600 hover:text-white">
                <Link href="/login">Back to Login</Link>
              </button>
              <button className="py-2 px-4 bg-green-400 capitalize font-semibold tracking-wider hover:bg-green-600 text-white transition-all duration-500">
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
