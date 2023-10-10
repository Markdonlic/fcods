import Input from "@/components/Input";
import Providers from "@/components/Providers";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <div className="bg-red-500 w-full fixed top-0 left-0 h-16 flex items-center justify-between text-white px-4 text-3xl">
        <div className="flex justify-center items-center gap-4 tracking-tight text-base">
          <Link href="/a-home/airtime">{"<"}</Link>{" "}
          <Link href="/a-home/pay-bills">{"X"}</Link> Airtime
        </div>
      </div>
      <div className="h-14 w-full p-4"></div>
      <div className="w-full flex flex-col justify-center gap-3">
        <Providers name="Kenya Safaricom" code="KES" link="#" />
        <div className="w-full flex flex-col justify-center px-4">
          <div className="flex flex-col justify-center py-4">
            <label>Phone Number</label>
            <input
              name="phone_no"
              type="text"
              maxLength={14}
              placeholder="Enter Phone Number"
              className="p-3 bg-gray-200 outline-red-200"
            />
          </div>

          <div className="flex flex-col justify-center py-4">
            <label for="amount">Select an option</label>
            <select
              name="top_up"
              id="amount"
              class="bg-gray-200 focus:ring-red-200 w-fit p-3 block outline-red-200"
            >
              <option selected value="29297">
                29297GNF Top Up
              </option>
              <option value="73243">73243GNF Top Up</option>
              <option value="146486">146486GNF</option>
              <option value="292972">292972GNF</option>
            </select>
          </div>
          <div className="flex justify-center items-center px-6 py-4">
            <button className="w-full text-base py-3 rounded-full uppercase bg-red-500 text-white">
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="h-8 w-full"></div>
    </div>
  );
};

export default page;
