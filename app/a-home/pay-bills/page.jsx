import Link from "next/link";
import React from "react";
import {
  AiOutlineCreditCard,
  AiOutlineDelete,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";
import { PiChurch, PiTelevisionSimpleLight } from "react-icons/pi";
import { RxDashboard, RxGlobe } from "react-icons/rx";
import {
  MdOutlineAddShoppingCart,
  MdOutlineHotel,
  MdOutlinePayment,
  MdOutlinePayments,
  MdOutlineToll,
} from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { GiMoneyStack, GiTrade } from "react-icons/gi";
import { TbBuildingBank, TbFirstAidKit } from "react-icons/tb";
import { FaBlackberry } from "react-icons/fa";
import { RiGovernmentLine } from "react-icons/ri";
import { SiYourtraveldottv } from "react-icons/si";

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
            className="tracking-normal py-1 px-4 rounded-full bg-gray-100 text-neutral-800"
          >
            Pay bills
          </Link>{" "}
        </div>

        <div className="bg-gray-100 w-full flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col w-full justify-center gap-3 p-2 bg-white rounded-sm">
            <h5>Utilities</h5>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/a-home/airtime"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <SlGlobe className="text-base" />
                Airtime
              </Link>
              <Link
                href="/a-home/electricity"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <FaRegLightbulb className="text-base" />
                Electricity
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <AiOutlineDelete className="text-base" />
                Waste Bill
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <PiTelevisionSimpleLight className="text-base" />
                TV
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <RxDashboard className="text-base" />
                Products and Services
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full justify-center gap-3 p-2 bg-white rounded-sm">
            <h5>Education</h5>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <MdOutlinePayment className="text-base" />
                PayChoice
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <IoSchoolOutline className="text-base" />
                School & Exam
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full justify-center gap-3 p-2 bg-white rounded-sm">
            <h5>Finance</h5>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <AiOutlineCreditCard className="text-base" />
                Prepaid Card Services
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <LiaFileInvoiceDollarSolid className="text-base" />
                Invoice Payemnts
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <GiMoneyStack className="text-base" />
                Financial Services
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <TbBuildingBank className="text-base" />
                Credit and Loans
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full justify-center gap-3 p-2 bg-white rounded-sm">
            <h5>Internets</h5>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <FaBlackberry className="text-base" />
                Blackberry
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <RxGlobe className="text-base" />
                Internet Services
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full justify-center gap-3 p-2 bg-white rounded-sm">
            <h5>Payments</h5>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <MdOutlinePayments className="text-base" />
                Merchant Payment
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <SiYourtraveldottv className="text-base" />
                Embassies
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <RiGovernmentLine className="text-base" />
                Government Payments
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <PiChurch className="text-base" />
                Religious
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <TbFirstAidKit className="text-base" />
                Aid Grants and Donations
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full justify-center gap-3 p-2 bg-white rounded-sm">
            <h5>Others</h5>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <MdOutlineAddShoppingCart className="text-base" />
                Shopping
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <MdOutlineToll className="text-base" />
                Transport & Toll
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <AiOutlineShoppingCart className="text-base" />
                Online Shopping
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <GiTrade className="text-base" />
                Commerce Retail Trade
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 bg-gray-100 rounded-sm text-xs"
              >
                <MdOutlineHotel className="text-base" />
                Travel and Hotel
              </Link>
            </div>
          </div>
        </div>

        <div className="h-14 w-full p-4"></div>
      </div>
    </div>
  );
};

export default page;
