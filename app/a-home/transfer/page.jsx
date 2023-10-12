import Alert from "@/components/Alert";
import Providers from "@/components/Providers";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <div className="bg-red-500 w-full fixed top-0 left-0 h-16 flex items-center justify-between text-white px-4 text-3xl">
        <div className="flex justify-center items-center gap-4 tracking-tight text-base">
          <Link href="/a-home">{"<"}</Link> <p>Transfer</p>
        </div>
      </div>
      <div className="h-16 w-full p-4"></div>
      <div className="bg-gray-100 p-4 w-full flex flex-col justify-center gap-3">
        <div className="w-full flex flex-col justify-center gap-2">
          <Link
            href="/a-home/transfer/self-transfer"
            className="flex justify-between items-center gap-2 border-[1px] border-gray-500 p-3"
          >
            <div className="flex items-center gap-2">
              <div>Icon</div>
              <div>Own Account Transfer</div>
            </div>
            <div>{">"}</div>
          </Link>
          <Link
            href="/a-home/transfer/mbank-transfer"
            className="flex justify-between items-center gap-2 border-[1px] border-gray-500 p-3"
          >
            <div className="flex items-center gap-2">
              <div>Icon</div>
              <div>Transfer to MBank Account</div>
            </div>
            <div>{">"}</div>
          </Link>
          <Link
            href="/a-home/transfer/other-banks"
            className="flex justify-between items-center gap-2 border-[1px] border-gray-500 p-3"
          >
            <div className="flex items-center gap-2">
              <div>Icon</div>
              <div>Transfer to Other Bank Account</div>
            </div>
            <div>{">"}</div>
          </Link>
          <Link
            href="/a-home/transfer/international-transfer"
            className="flex justify-between items-center gap-2 border-[1px] border-gray-500 p-3"
          >
            <div className="flex items-center gap-2">
              <div>Icon</div>
              <div>International Transfer</div>
            </div>
            <div>{">"}</div>
          </Link>
          <Link
            href="/a-home/transfer/card-transfer"
            className="flex justify-between items-center gap-2 border-[1px] border-gray-500 p-3"
          >
            <div className="flex items-center gap-2">
              <div>Icon</div>
              <div>Transfer to Card</div>
            </div>
            <div>{">"}</div>
          </Link>
        </div>
      </div>

      <div className="w-full px-4 flex flex-col gap-1 justify-center items-center tracking-normal">
        <div className="flex w-full justify-between items-center  py-4 px-2 bg-white shadow-xl">
          <div className="capitalize font-semibold">recent transactions</div>
          <div className="capitalize text-xs text-red-500">
            view transaction history
          </div>
        </div>
        <div className="flex w-full justify-between items-center py-4 px-2 bg-white border-[1px] border-gray-400">
          <Alert />
        </div>
        <div className="flex w-full justify-between items-center py-4 px-2 bg-white border-[1px] border-gray-400">
          <Alert />
        </div>
        <div className="flex w-full justify-between items-center py-4 px-2 bg-white border-[1px] border-gray-400">
          <Alert />
        </div>
      </div>

      <div className="h-8 w-full"></div>
    </div>
  );
};

export default page;
