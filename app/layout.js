import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mauth",
  description: "Authentication system by MBT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
          <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
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
            {/* <div className="fixed bottom-0 left-0 flex h-12 w-full items-end justify-center bg-neutral-800 text-gray-200">
              <p className="py-4">Developed by MB Technology</p>
            </div> */}
          </div>
        </div>
      </body>
    </html>
  );
}
