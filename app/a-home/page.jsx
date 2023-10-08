import Alert from "@/components/Alert";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import {
  MdNotificationsActive,
  MdOutlineFavoriteBorder,
  MdOutlineSettingsSuggest,
} from "react-icons/md";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <div className="bg-red-500 w-full fixed top-0 left-0 h-16 flex items-center justify-between text-white px-4 text-3xl">
        <div className="font-semibold">
          Good Morning, <span>Joe</span>
        </div>
        <div>
          <MdNotificationsActive />
        </div>
        <div>
          <FaRegCircleUser />
        </div>
      </div>
      <div className="h-16 w-full p-4"></div>
      <div className="bg-white w-full flex flex-col justify-center items-center gap-3">
        <div className="w-[90%] bg-gradient-to-r from-neutral-700 to-neutral-500 text-white rounded-lg p-4 flex flex-col gap-4 justify-center items-center">
          <div className="flex w-full justify-between items-center">
            <div className="text-xs">Total Balance</div>
            <div className="text-2xl">
              <MdOutlineSettingsSuggest />
            </div>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="font-semibold">NGN2,002,023.28</div>
            <div className="hidden text-xs tracking-normal flex justify-center items-center gap-1">
              <AiOutlineEyeInvisible className="text-xl" />
              Show Balance
            </div>
            <div className="text-xs tracking-normal flex justify-center items-center gap-1">
              <AiOutlineEye className="text-xl" />
              Hide Balance
            </div>
          </div>
        </div>

        <div className="w-[90%] bg-red-600 text-white rounded-lg p-4 flex flex-col gap-4 justify-center items-center">
          <div className="flex w-full justify-between items-center">
            <div className="uppercase font-semibold">John Doe</div>
            <div className="text-xs flex justify-center items-center gap-1">
              <div className="p-1 bg-green-500 rounded-full"></div>
              <p>Active</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-gray-200 opacity-70">SAVINGS ACCT</div>
            <div>NGN2,002,023.28</div>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="text-xs py-1 px-3 rounded-xl bg-red-400">
              2236681052
            </div>
            <div className="text-xs tracking-normal flex justify-center items-center gap-1">
              <AiOutlineEyeInvisible className="text-xl" />
              Show Balance
            </div>
            <div className="hidden text-xs tracking-normal flex justify-center items-center gap-1">
              <AiOutlineEye className="text-xl" />
              Hide Balance
            </div>
          </div>
        </div>

        <div className="w-[90%] flex flex-col gap-1 justify-center items-center tracking-normal">
          <div className="flex w-full justify-between items-center  py-4 px-2 bg-white shadow-xl">
            <div className="capitalize font-semibold">recent transactions</div>
            <div className="capitalize text-xs text-red-500">
              view transaction history
            </div>
          </div>
          <div className="flex w-full justify-between items-center py-4 px-2 bg-white shadow-xl">
            <Alert />
          </div>
          <div className="flex w-full justify-between items-center py-4 px-2 bg-white shadow-xl">
            <Alert />
          </div>
          <div className="flex w-full justify-between items-center py-4 px-2 bg-white shadow-xl">
            <Alert />
          </div>
        </div>

        <div className="w-[90%] bg-white rounded-lg p-4 flex flex-col gap-4 justify-center items-center">
          <div className="flex w-full justify-between items-center">
            <div className="capitalize font-semibold">my favourites</div>
            <div className="text-xs text-red-500">Add Favourites</div>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center text-gray-400">
            <div className="pt-6 text-5xl">
              <MdOutlineFavoriteBorder />
            </div>
            <div className="pb-4">Oops! You don't have any favourites yet</div>
          </div>
        </div>
        <div className="h-14 w-full p-4"></div>
      </div>
    </div>
  );
};

export default page;
