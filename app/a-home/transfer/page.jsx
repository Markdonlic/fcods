import Alert from "@/components/Alert";
import Providers from "@/components/Providers";
import Link from "next/link";
import { AiTwotoneBank } from "react-icons/ai";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import { RiBankCardFill } from "react-icons/ri";
import { SiRotaryinternational } from "react-icons/si";

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
            className="tracking-normal py-1 px-4 rounded-full bg-gray-100 text-neutral-800"
          >
            Transfer
          </Link>{" "}
        </div>
        <div className="bg-gray-100 w-full flex flex-col justify-center gap-3">
          <div className="w-full flex flex-col justify-center gap-2">
            <Link
              href="/a-home/transfer/self-transfer"
              className="flex justify-between items-center gap-2 border-[1px] border-gray-400 bg-white px-1 pr-4 py-1 rounded-full"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-full p-2 text-xl bg-white">
                  <FcMoneyTransfer />
                </div>
                <div>Own Account Transfer</div>
              </div>
              <div>{">"}</div>
            </Link>
            <Link
              href="/a-home/transfer/mbank-transfer"
              className="flex justify-between items-center gap-2 border-[1px] border-gray-400 bg-white px-1 pr-4 py-1 rounded-full"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-full p-2 text-xl bg-sky-600 text-white">
                  <FaMoneyBillTransfer />
                </div>
                <div>Transfer to FCODS Account</div>
              </div>
              <div>{">"}</div>
            </Link>
            <Link
              href="/a-home/transfer/other-banks"
              className="flex justify-between items-center gap-2 border-[1px] border-gray-400 bg-white px-1 pr-4 py-1 rounded-full"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-full p-2 text-xl bg-emerald-600 text-white">
                  <AiTwotoneBank />
                </div>
                <div>Transfer to Other Bank Account</div>
              </div>
              <div>{">"}</div>
            </Link>
            <Link
              href="/a-home/transfer/international-transfer"
              className="flex justify-between items-center gap-2 border-[1px] border-gray-400 bg-white px-1 pr-4 py-1 rounded-full"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-full p-2 text-xl bg-teal-600 text-white">
                  <SiRotaryinternational />
                </div>
                <div>International Transfer</div>
              </div>
              <div>{">"}</div>
            </Link>
            <Link
              href="/a-home/transfer/card-transfer"
              className="flex justify-between items-center gap-2 border-[1px] border-gray-400 bg-white px-1 pr-4 py-1 rounded-full"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-full p-2 text-xl bg-orange-500 text-white">
                  <RiBankCardFill />
                </div>
                <div>Transfer to Card</div>
              </div>
              <div>{">"}</div>
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center tracking-normal">
          <div className="flex w-full justify-between items-center py-4 px-2 bg-white shadow-xl">
            <div className="capitalize font-semibold">recent transactions</div>
            <div className="capitalize text-xs text-red-500">
              view transaction history
            </div>
          </div>
          <div className="flex w-full justify-between items-center py-3 px-2 bg-white">
            <Alert />
          </div>
          <div className="flex w-full justify-between items-center py-3 px-2 bg-white">
            <Alert />
          </div>
          <div className="flex w-full justify-between items-center py-3 px-2 bg-white">
            <Alert />
          </div>
          <div className="flex w-full justify-between items-center py-3 px-2 bg-white">
            <Alert />
          </div>
          <div className="flex w-full justify-between items-center py-3 px-2 bg-white">
            <Alert />
          </div>
          <div className="flex w-full justify-between items-center py-3 px-2 bg-white">
            <Alert />
          </div>
        </div>

        <div className="h-2 w-full"></div>
      </div>
    </div>
  );
};

export default page;
