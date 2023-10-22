import Link from "next/link";
import { FcGlobe } from "react-icons/fc";
export default function Providers(props) {
  return (
    <Link href={props.link} className="bg-white px-2">
      <div className="flex items-center gap-2">
        <div className="">
          <FcGlobe className="p-1 bg-red-100 text-red-600 text-4xl rounded-lg" />
        </div>
        <div className="py-2 border-b-[1px] border-b-gray-300 w-full flex flex-col flex-wrap items-start justify-center text-sm">
          <div>{props.name}</div>
          <div className="text-green-500 text-fontsemibold">{props.code}</div>
        </div>
      </div>
    </Link>
  );
}
