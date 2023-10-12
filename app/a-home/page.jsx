"use client";
import Alert from "@/components/Alert";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import Image from "next/image";
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
const page = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <div className="bg-red-500 w-full fixed top-0 left-0 h-16 flex items-center justify-between text-white px-4 text-3xl">
          <div className="font-semibold tracking-normal">
            <h2>
              Good Morning, <span> Joe</span>
            </h2>
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
              <div className="capitalize font-semibold">
                recent transactions
              </div>
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
              <div className="pb-4">
                Oops! You don't have any favourites yet
              </div>
            </div>
          </div>
          <div className="h-14 w-full p-4"></div>
        </div>
      </div>

      <div
        className={`{ open ? "flex" : "hidden" }  w-full absolute bottom-0 left-0 bg-red-500`}
      >
        <div className="pb-12 bg-white text-xs px-4 flex flex-col flex-wrap justify-center">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-4">
              <div className=" rounded-full w-10 h-10 flex justify-center items-center text-4xl text-red-500 bg-red-50">
                <FaRegCircleUser />
              </div>
              <div>
                <p className="font-bold tracking-wider">ACCOUNT NAME</p>
                <p className="text-gray-500">BVN: 22222222222</p>
              </div>
            </div>
            <FaPowerOff className="text-xl text-red-600" />
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
      <div className="fixed bottom-0 left-0 flex h-12 w-full items-center justify-between bg-red-600 text-gray-200 px-6 font-sans text-xs">
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
          onClick={setOpen(true)}
          className="flex flex-col items-center justify-center p-1 text-gray-100 hover:text-white active:text-white"
        >
          <CgMenuGridO className="text-xl p-0 m-0" />
          <p className="p-0 m-0">More</p>
        </button>
      </div>
    </>
  );
};

export default page;
