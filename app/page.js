import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center h-screen items-center bg-gray-100">
      <div className="bg-white py-14 drop-shadow-xl shadow-xl p-6 rounded-lg flex flex-col items-center justify-center gap-4">
        <div className="rounded-full flex justify-center h-6 w-6 bg-[url('/icons/android-chrome-512x512.png')] p-16 object-contain bg-contain"></div>
        <div className="flex pt-10 gap-4 justify-between items-center font-semibold">
          <div className="flex flex-col gap-0 justify-center capitalize">
            <span>52 </span>
            <p>Transfers</p>
          </div>
          <div className="flex flex-col gap-0 justify-center capitalize">
            <span>52K </span>
            <p>Purchases</p>
          </div>
          <div className="flex flex-col gap-0 justify-center capitalize">
            <span>52M </span>
            <p>Bills</p>
          </div>
        </div>
        <div>Hi! am using m-authentication system</div>
        <div className="flex justify-center items-center gap-3">
          <Link
            href="/oap"
            className="py-2 bg-orange-400 rounded-sm px-4 text-white outline-none hover:bg-transparent hover:text-neutral-900 hover:outline-1 hover:outline-orange-500 transition-all duration-500"
          >
            create account
          </Link>
          <Link
            href="/oap"
            className="py-2 bg-orange-400 rounded-sm px-4 text-white outline-none hover:bg-transparent hover:text-neutral-900 hover:outline-1 hover:outline-orange-500 transition-all duration-500"
          >
            Log in
          </Link>
          <Link
            href="/a-home"
            className="py-2 bg-orange-400 rounded-sm px-4 text-white outline-none hover:bg-transparent hover:text-neutral-900 hover:outline-1 hover:outline-orange-500 transition-all duration-500"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
