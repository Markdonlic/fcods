import { HiMiniArrowUpRight } from "react-icons/hi2";
export default function Alert(props) {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="">
        <HiMiniArrowUpRight className="p-1 bg-red-100 text-red-600 text-3xl rounded-lg" />
      </div>
      <div className="flex flex-col flex-wrap items-start justify-center text-xs">
        <div>Sep 27, 2023 10:58PM</div>
        <div>SMS Notification Charge Sep 2023</div>
      </div>
      <div className="flex flex-col items-end justify-center text-xs">
        <div className="text-red-500">-NGN53.25</div>
        <div>NGN2,300,225.20</div>
      </div>
    </div>
  );
}
