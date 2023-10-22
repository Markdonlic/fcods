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
            href="/a-home/transfer"
            className="tracking-normal py-1 px-4 rounded-full bg-sky-900 text-xs"
          >
            Transfer
          </Link>{" "}
          /
          <Link
            href="/a-home/transfer/card-transfer"
            className="tracking-normal py-1 px-4 rounded-full bg-gray-100 text-neutral-800"
          >
            Transfer to Card
          </Link>{" "}
        </div>
        <div className="w-full flex flex-col justify-center gap-3">
          <div className="w-full flex flex-col justify-center px-4">
            <div className="flex flex-col justify-center py-2">
              <label for="amount">Source Account</label>
              <select
                name="top_up"
                id="amount"
                class="bg-white w-auto overflow-scroll rounded-lg"
              >
                <option selected value="500">
                  John Doe-2220120202 2,255,620.20
                </option>
              </select>
            </div>

            <div className="flex flex-col justify-center py-2">
              <label for="amount">Card Number</label>
              <input
                name="phone_no"
                type="text"
                maxLength={10}
                placeholder="Enter 16 digit card number"
                className="bg-white w-auto rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-center py-2">
              <label>Beneficiary Name</label>
              <input
                name="phone_no"
                type="text"
                maxLength={10}
                placeholder="Enter card name"
                className="bg-white w-auto rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-center py-2">
              <label for="amount">Currency</label>
              <select
                name="top_up"
                id="amount"
                class="bg-white w-auto overflow-scroll rounded-lg"
              >
                <option selected value="USD">
                  USD
                </option>
                <option value="USD">EURO</option>
                <option value="USD">POUNDS</option>
                <option value="USD">YEN</option>
              </select>
            </div>

            <div className="flex flex-col justify-center py-2">
              <label>Amount</label>
              <input
                name="phone_no"
                type="text"
                placeholder="Enter Amount"
                className="bg-white w-auto rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-center py-2">
              <label>Description</label>
              <input
                name="phone_no"
                type="text"
                maxLength={10}
                placeholder="Enter Description"
                className="bg-white w-auto rounded-lg"
              />
            </div>

            <div className="flex justify-center items-center py-4">
              <button
                disabled
                className="w-full text-base py-3 px-4 rounded-lg uppercase bg-emerald-600 text-white"
              >
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
