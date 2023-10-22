import Input from "@/components/Input";
import Providers from "@/components/Providers";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-[768px] min-h-screen m-0">
      <div className="flex flex-col gap-3">
        {/* top menu */}
        <div className="bg-sky-500 z-10 min-w-max sticky top-0 left-0 right-0 h-16 flex gap-[3px] items-center text-white text-sm px-4">
          <Link
            href="/a-home"
            className="tracking-normal py-1 px-4 rounded-full bg-sky-900 text-xs"
          >
            Home
          </Link>{" "}
          /
          <Link
            href="/a-home/pay-bills"
            className="tracking-normal py-1 px-4 rounded-full bg-sky-900 text-xs"
          >
            Pay Bills
          </Link>{" "}
          /
          <Link
            href="/a-home/airtime"
            className="tracking-normal py-1 px-4 rounded-full bg-gray-100 text-neutral-800"
          >
            Airtime
          </Link>{" "}
        </div>
        <div className="w-full flex flex-col justify-center gap-3">
          <Providers name="India Tata DOCOMO" code="ITD" link="#" />
          <div className="w-full flex flex-col justify-center px-4">
            <div className="flex flex-col justify-center py-4">
              <label>Phone Number</label>
              <input
                name="phone_no"
                type="text"
                maxLength={14}
                placeholder="Enter Phone Number"
                className="bg-white w-auto rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-center py-4">
              <label for="amount">Select an option</label>
              <select
                name="top_up"
                id="amount"
                class="bg-white w-auto rounded-lg"
              >
                <option selected value="29297">
                  29297GNF Top Up
                </option>
                <option value="73243">73243GNF Top Up</option>
                <option value="146486">146486GNF</option>
                <option value="292972">292972GNF</option>
              </select>
            </div>
            <div className="flex justify-center items-center py-4">
              <button className="w-full text-base py-3 px-4 rounded-lg uppercase bg-emerald-600 text-white">
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="h-8 w-full"></div>
      </div>
    </div>
  );
};

export default page;
