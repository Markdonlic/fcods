import "@/styles/globals.css";
import { Inter } from "next/font/google";
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
  MdNotificationsActive,
  MdOutlineEventAvailable,
  MdOutlinePhonelinkRing,
  MdOutlineSettingsSuggest,
} from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashbord",
  description: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex items-start justify-center bg-gray-100">
          <div className="z-10 lg:max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
            {/* <div className="fixed left-0 top-0 flex w-full px-4 border-b border-gray-300 bg-green-500 text-white py-4 justify-between">
              <div className="flex items-center justify-center text-2xl gap-1 font-bold">
                <Image
                  src="/icons/favicon-32x32.png"
                  height={32}
                  width={32}
                  alt="logo"
                />
                <span>auth</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <button className="py-2 bg-green-700 rounded-full px-4 text-white outline-none hover:bg-transparent hover:text-neutral-900 hover:outline-1 hover:outline-green-700 transition-all duration-500">
                  Register
                </button>
                <button className="py-2 bg-white rounded-full px-4 text-black outline-none hover:bg-transparent hover:text-white hover:outline-1 hover:outline-green-700 transition-all duration-500">
                  Log in
                </button>
              </div>
            </div> */}
            {children}
            <div className="w-full hidden absolute bottom-0 left-0 bg-red-500">
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
                href="#"
                className="flex flex-col items-center justify-center p-1 text-gray-100 hover:text-white active:text-white"
              >
                <MdOutlinePhonelinkRing className="text-xl p-0 m-0" />
                <p className="p-0 m-0">Airtime</p>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-center justify-center p-1 text-gray-100 hover:text-white active:text-white"
              >
                <FaMoneyBillTransfer className="text-xl p-0 m-0" />
                <p className="p-0 m-0">Transfer</p>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-center justify-center p-1 text-gray-100 hover:text-white active:text-white"
              >
                <CgMenuGridO className="text-xl p-0 m-0" />
                <p className="p-0 m-0">More</p>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
