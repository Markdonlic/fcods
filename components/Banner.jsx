import Image from "next/image";
import Link from "next/link";

const Banner = (props) => {
  let dateVal = new Date();
  let day = dateVal.getDay();
  let date = dateVal.getUTCDate();
  let month = dateVal.getUTCMonth();
  let year = dateVal.getUTCFullYear();
  if (day === 1) {
    day = "Monday";
  } else if (day === 2) {
    day = "Tuesday";
  } else if (day === 3) {
    day = "Wednesday";
  } else if (day === 4) {
    day = "Thursday";
  } else if (day === 5) {
    day = "Friday";
  } else if (day === 6) {
    day = "Saturday";
  } else if (day === 7) {
    day = "Sunday";
  } else {
    day = "No data!";
  }

  if (month === 1) {
    month = "January";
  } else if (month === 2) {
    month = "February";
  } else if (month === 3) {
    month = "March";
  } else if (month === 4) {
    month = "April";
  } else if (month === 5) {
    month = "May";
  } else if (month === 6) {
    month = "June";
  } else if (month === 7) {
    month = "July";
  } else if (month === 8) {
    month = "August";
  } else if (month === 9) {
    month = "September";
  } else if (month === 10) {
    month = "October";
  } else if (month === 11) {
    month = "November";
  } else if (month === 12) {
    month = "December";
  } else {
    month = "No data!";
  }
  return (
    <div className="flex gap-1 my-10 items-center justify-between pr-4 bg-white">
      <div className="flex gap-1 items-center">
        <Link href="/" className="font-bold">
          <Image
            src="/icons/android-chrome-512x512.png"
            alt="PCODS Logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="flex flex-col justify-center">
          <p className="font-semibold">
            <span className="text-sky-600">FCODS </span>
            {props.title}
          </p>
          <p className="text-xs">
            {day} {date} {month}, {year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
