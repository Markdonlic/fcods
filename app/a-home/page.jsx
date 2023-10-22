"use client";
import Alert from "@/components/Alert";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";
import { CiBarcode } from "react-icons/ci";
import {
  AiFillCreditCard,
  AiOutlineBank,
  AiOutlineStock,
} from "react-icons/ai";
import { FaCalculator, FaHandHoldingUsd } from "react-icons/fa";
import {
  FaMoneyBillTransfer,
  FaPeopleGroup,
  FaPowerOff,
  FaRegCircleUser,
  FaUmbrellaBeach,
} from "react-icons/fa6";
import {
  MdAddShoppingCart,
  MdLocationOn,
  MdOutlineFavoriteBorder,
  MdNotificationsActive,
  MdOutlineEventAvailable,
  MdOutlinePhonelinkRing,
  MdOutlineSettingsSuggest,
} from "react-icons/md";
import Banner from "@/components/Banner";
const page = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-[768px] min-h-screen m-0">
      <div className="flex flex-col gap-2">
        <div className="bg-sky-500 z-10 min-w-max sticky top-0 left-0 right-0 h-16 flex gap-3 items-center justify-between text-white px-4 text-xl">
          <p className="font-semibold tracking-normal flex flex-1 md:flex-0">
            Good Morning, Joe
          </p>

          {/* non-mobile menu */}
          <div className="md:flex hidden items-center justify-between font-bold text-gray-200 text-xs flex-1">
            <Link
              href="/a-home"
              className="flex flex-col items-center justify-center p-1 text-gray-100 hover:text-white active:text-white"
            >
              <AiOutlineBank className="text-xl p-0 m-0" />
              <p className="p-0 m-0">Home</p>
            </Link>
            <Link
              href="/a-home/pay-bills"
              className="flex flex-col items-center justify-center p-1 text-gray-100 hover:text-white active:text-white"
            >
              <FaHandHoldingUsd className="text-xl p-0 m-0" />
              <p className="p-0 m-0">Pay Bills</p>
            </Link>
            <Link
              href="/a-home/airtime"
              className="flex flex-col items-center justify-center p-1 text-gray-100 hover:text-white active:text-white"
            >
              <MdOutlinePhonelinkRing className="text-xl p-0 m-0" />
              <p className="p-0 m-0">Airtime</p>
            </Link>
            <Link
              href="/a-home/transfer"
              className="flex flex-col items-center justify-center p-1 text-gray-100 hover:text-white active:text-white"
            >
              <FaMoneyBillTransfer className="text-xl p-0 m-0" />
              <p className="p-0 m-0">Transfer</p>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col items-center justify-center p-1 text-gray-100 hover:text-white active:text-white"
            >
              <CgMenuGridO className="text-xl p-0 m-0" />
              <p className="p-0 m-0">More</p>
            </button>
          </div>

          <div className="md:hidden">
            <MdNotificationsActive />
          </div>
          <div className="md:hidden">
            <FaRegCircleUser />
          </div>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <div className="w-[100%] bg-gradient-to-r from-neutral-700 to-neutral-500 text-white p-4 flex flex-col gap-4 justify-center items-center">
            <div className="flex w-full justify-between items-center">
              <h6 className="text-xs">Total Balance</h6>
              <div className="text-2xl">
                <MdOutlineSettingsSuggest />
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <p className="font-semibold">NGN2,002,023.28</p>
              <div className="text-xs tracking-normal hidden lg:flex justify-center items-center gap-1">
                <AiOutlineEyeInvisible className="text-xl" />
                <span>Show Balance</span>
              </div>
              <div className="text-xs tracking-normal flex justify-center items-center gap-1">
                <AiOutlineEye className="text-xl" />
                <span>Hide Balance</span>
              </div>
            </div>
          </div>
          <div className="w-[100%] bg-sky-600 text-white p-4 flex flex-col gap-4 justify-center items-center">
            <div className="flex w-full justify-between items-center">
              <p className="uppercase font-semibold">John Doe</p>
              <div className="text-xs flex justify-center items-center gap-1">
                <div className="p-1 bg-green-500 rounded-full"></div>
                <p>Active</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h5 className="text-gray-200 opacity-70">SAVINGS ACCT</h5>
              <div>NGN2,002,023.28</div>
            </div>
            <div className="flex w-full justify-between items-center">
              <p className="text-xs py-1 px-3 rounded-xl bg-sky-400">
                2236681052
              </p>
              <div className="text-xs tracking-normal flex justify-center items-center gap-1">
                <AiOutlineEyeInvisible className="text-xl" />
                <span>Show Balance</span>
              </div>
              <div className="hidden text-xs tracking-normal flex justify-center items-center gap-1">
                <AiOutlineEye className="text-xl" />
                <span>Hide Balance</span>
              </div>
            </div>
          </div>

          <div className="w-[100%] flex flex-col justify-center items-center tracking-normal">
            <div className="flex w-full justify-between items-center  py-4 px-2 bg-white shadow-xl">
              <p className="capitalize font-semibold">recent transactions</p>
              <p className="capitalize text-xs text-red-500">
                view transaction history
              </p>
            </div>
            <div className="flex w-full justify-between items-center py-4 px-2 bg-white">
              <Alert />
            </div>
            <div className="flex w-full justify-between items-center py-4 px-2 bg-white">
              <Alert />
            </div>
            <div className="flex w-full justify-between items-center py-4 px-2 bg-white">
              <Alert />
            </div>
          </div>

          <div className="w-[100%] bg-white p-4 flex flex-col gap-4 justify-center items-center shadow-md">
            <div className="flex w-full justify-between items-center">
              <p className="capitalize font-semibold">my favourites</p>
              <p className="text-xs text-red-500">Add Favourites</p>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center text-gray-400">
              <div className="pt-6 text-5xl">
                <MdOutlineFavoriteBorder />
              </div>
              <p className="pb-4">Oops! You don't have any favourites yet</p>
            </div>
          </div>
        </div>
      </div>
      {/* dropdown menu */}
      <div
        className={`w-full md:w-[768px] ${
          open
            ? "fixed md:left-[calc((100% -768px)/2] md:absolute md:top-16 h-1/2 bottom-12"
            : "hidden"
        } bg-sky-500 overflow-scroll`}
      >
        <div className="pb-4 bg-sky-50 text-xs px-4 flex flex-col flex-wrap justify-center">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className=" rounded-full w-10 h-10 flex justify-center items-center text-4xl text-sky-500 bg-sky-50"
              >
                <FaRegCircleUser />
              </Link>
              <div>
                <p className="font-bold tracking-wider">ACCOUNT NAME</p>
                <p className="text-gray-500">BVN: 22222222222</p>
              </div>
            </div>
            <Link href="/login">
              <FaPowerOff className="text-xl text-sky-600" />
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-4 capitalize">
            <Link href="#" className="flex gap-2 items-center">
              <AiFillCreditCard className="text-base" />
              <p>cards</p>
            </Link>
            <Link href="#" className="flex gap-2 items-center">
              <MdLocationOn className="text-base" />
              <p>locate us</p>
            </Link>
            <Link href="#" className="flex gap-2 items-center">
              <FaPeopleGroup className="text-base" />
              <p>manage beneficiaries</p>
            </Link>
            <Link href="#" className="flex gap-2 items-center">
              <FaCalculator className="text-base" />
              <p>forex calculator</p>
            </Link>
            <Link href="#" className="flex gap-2 items-center">
              <MdAddShoppingCart className="text-base" />
              <p>product & services</p>
            </Link>
            <Link href="#" className="flex gap-2 items-center">
              <AiOutlineStock className="text-base" />
              <p>personal finance manager</p>
            </Link>
            <Link href="#" className="flex gap-2 items-center">
              <FaUmbrellaBeach className="text-base" />
              <p>lifestyle</p>
            </Link>
            <Link href="#" className="flex gap-2 items-center">
              <MdOutlineSettingsSuggest className="text-base" />
              <p>settings</p>
            </Link>
            <Link href="#" className="flex gap-2 items-center">
              <MdNotificationsActive className="text-base" />
              <p>alerts</p>
            </Link>
            <Link href="#" className="flex gap-2 items-center">
              <CiBarcode className="text-base" />
              <p>QR payments</p>
            </Link>
            <Link href="#" className="flex gap-2 items-center">
              <FaRegCircleUser className="text-base" />
              <p>profile</p>
            </Link>
            <Link href="#" className="flex gap-2 items-center">
              <MdOutlineEventAvailable className="text-base" />
              <p>upcoming payments</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-16 w-full p-4 md:hidden"></div>
      {/* mobile menu */}
      <div className="fixed bottom-0 left-0 right-0 flex flex-col w-full">
        <div className="flex md:hidden h-12 w-full items-center justify-between bg-sky-600 text-gray-200 px-6 font-sans text-xs">
          <Link
            href="/a-home"
            className="flex flex-col items-center justify-center p-1 text-gray-100 hover:text-white active:text-white"
          >
            <AiOutlineBank className="text-xl p-0 m-0" />
            <p className="p-0 m-0">Home</p>
          </Link>
          <Link
            href="/a-home/pay-bills"
            className="flex flex-col items-center justify-center p-1 text-gray-100 hover:text-white active:text-white"
          >
            <FaHandHoldingUsd className="text-xl p-0 m-0" />
            <p className="p-0 m-0">Pay Bills</p>
          </Link>
          <Link
            href="/a-home/airtime"
            className="flex flex-col items-center justify-center p-1 text-gray-100 hover:text-white active:text-white"
          >
            <MdOutlinePhonelinkRing className="text-xl p-0 m-0" />
            <p className="p-0 m-0">Airtime</p>
          </Link>
          <Link
            href="/a-home/transfer"
            className="flex flex-col items-center justify-center p-1 text-gray-100 hover:text-white active:text-white"
          >
            <FaMoneyBillTransfer className="text-xl p-0 m-0" />
            <p className="p-0 m-0">Transfer</p>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col items-center justify-center p-1 text-gray-100 hover:text-white active:text-white"
          >
            <CgMenuGridO className="text-xl p-0 m-0" />
            <p className="p-0 m-0">More</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
