import Providers from "@/components/Providers";
import Link from "next/link";

let networkProviders = require("@/APIs/Providers.json");

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <div className="bg-red-500 w-full fixed top-0 left-0 h-16 flex items-center justify-between text-white px-4 text-3xl">
        <div className="flex justify-center items-center gap-4 tracking-tight text-base">
          <Link href="/a-home/pay-bills">{"<"}</Link> <p>Airtime</p>
        </div>
      </div>
      <div className="h-16 w-full p-4"></div>
      <div className="bg-gray-100 p-4 w-full flex flex-col justify-center gap-3">
        <input
          className="w-full px-4 py-3 rounded-full border-red-500 border-[1px]"
          type="text"
          name="search"
          placeholder="Search Your Airtime Provider..."
        />
        <div className="w-full flex flex-col justify-center">
          {networkProviders?.map((items) => {
            return (
              <Providers
                key={items.id}
                name={items.name}
                code={items.code}
                link={items.link}
              />
            );
          })}
        </div>
      </div>
      <div className="h-8 w-full"></div>
    </div>
  );
};

export default page;
