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
            href="/a-home/transfer/self-transfer"
            className="tracking-normal py-1 px-4 rounded-full bg-gray-100 text-neutral-800"
          >
            Self Transfer
          </Link>{" "}
        </div>

        <div className="w-full flex flex-col justify-center gap-3 text-sm">
          <div className="w-full flex flex-col justify-center px-4">
            <div className="flex flex-col justify-center py-4">
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

            <div className="flex flex-col justify-center py-4">
              <label for="amount">Destination Account</label>
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

            <div className="flex flex-col justify-center py-4">
              <label>Amount</label>
              <input
                name="phone_no"
                type="text"
                maxLength={14}
                placeholder="Enter Amount"
                className="bg-white w-auto rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-center py-4">
              <label>Transaction Description</label>
              <input
                name="description"
                type="text"
                maxLength={30}
                placeholder="Transaction Description"
                className="bg-white w-auto rounded-lg"
              />
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
