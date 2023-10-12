import Input from "@/components/Input";
import Providers from "@/components/Providers";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <div className="bg-red-500 w-full fixed top-0 left-0 h-16 flex items-center justify-between text-white px-4 text-3xl">
        <div className="flex justify-center items-center gap-4 tracking-tight text-base">
          <Link href="/a-home/transfer">{"<"}</Link>{" "}
          <Link href="/a-home">{"X"}</Link> International Transfer
        </div>
      </div>
      <div className="h-14 w-full p-4"></div>
      <div className="w-full flex flex-col justify-center gap-3">
        <div className="w-full flex flex-col justify-center px-4">
          <div className="flex flex-col justify-center py-2">
            <label for="amount">Source Account</label>
            <select
              name="top_up"
              id="amount"
              class="bg-gray-200 focus:ring-red-200 w-fit p-3 block outline-red-200"
            >
              <option selected value="500">
                John Doe-2220120202 2,255,620.20
              </option>
            </select>
          </div>

          <div className="flex flex-col justify-center py-2">
            <label for="amount">Purpose of Transfer</label>
            <input
              name="phone_no"
              type="text"
              maxLength={10}
              placeholder="Enter Purpose of Transfer"
              className="p-3 bg-gray-200 outline-red-200"
            />
          </div>

          <div className="flex flex-col justify-center py-2">
            <label>Description</label>
            <input
              name="phone_no"
              type="text"
              maxLength={10}
              placeholder="Enter Description"
              className="p-3 bg-gray-200 outline-red-200"
            />
          </div>

          <div className="flex flex-col justify-center py-2">
            <label for="amount">Currency</label>
            <select
              name="top_up"
              id="amount"
              class="bg-gray-200 focus:ring-red-200 w-fit p-3 block outline-red-200"
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
            <label>Account Number</label>
            <input
              name="phone_no"
              type="text"
              maxLength={14}
              placeholder="Enter Account Number"
              className="p-3 bg-gray-200 outline-red-200"
            />
          </div>

          <div className="flex flex-col justify-center py-2">
            <label>Account Name</label>
            <input
              name="phone_no"
              type="text"
              maxLength={14}
              placeholder="Beneficiary Name"
              className="p-3 bg-gray-200 outline-red-200"
            />
          </div>

          <div className="flex flex-col justify-center py-2">
            <label>Beneficiary Address</label>
            <input
              name="phone_no"
              type="text"
              maxLength={14}
              placeholder="Beneficiary Address"
              className="p-3 bg-gray-200 outline-red-200"
            />
          </div>

          <div className="flex flex-col justify-center py-2">
            <label>Beneficiary City</label>
            <input
              name="phone_no"
              type="text"
              maxLength={14}
              placeholder="Enter City"
              className="p-3 bg-gray-200 outline-red-200"
            />
          </div>

          <div className="flex flex-col justify-center py-2">
            <label>Routing Number</label>
            <input
              name="phone_no"
              type="text"
              maxLength={14}
              placeholder="Routing Number"
              className="p-3 bg-gray-200 outline-red-200"
            />
          </div>

          <div className="flex flex-col justify-center py-2">
            <label>SWIFT Code</label>
            <input
              name="phone_no"
              type="text"
              maxLength={14}
              placeholder="Enter SWIFT Code"
              className="p-3 bg-gray-200 outline-red-200"
            />
          </div>

          <div className="flex flex-col justify-center py-2">
            <label for="amount">Select Country</label>
            <select
              name="top_up"
              id="amount"
              class="bg-gray-200 focus:ring-red-200 w-fit p-3 block outline-red-200"
            >
              <option selected value="500">
                United States
              </option>
            </select>
          </div>

          <div className="flex flex-col justify-center py-2">
            <label>Bank Address</label>
            <input
              name="phone_no"
              type="text"
              placeholder="Enter Address"
              className="p-3 bg-gray-200 outline-red-200"
            />
          </div>

          <div className="flex flex-col justify-center py-2">
            <label>Bank City</label>
            <input
              name="phone_no"
              type="text"
              placeholder="Enter City"
              className="p-3 bg-gray-200 outline-red-200"
            />
          </div>

          <div className="flex flex-col justify-center py-2">
            <label>Amount</label>
            <input
              name="phone_no"
              type="text"
              placeholder="Enter Amount"
              className="p-3 bg-gray-200 outline-red-200"
            />
          </div>

          <div className="flex justify-center items-center px-6 py-4">
            <button
              disabled
              className="w-full text-base py-3 rounded-full uppercase bg-red-500 text-white"
            >
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
