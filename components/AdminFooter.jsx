import Link from "next/link";

const AdminFooter = () => {
  const year = new Date();
  return (
    <div className="text-center w-full text-xs sm:text-sm px-6 py-4 bg-blue-800 text-white">
      <p className=" gap-2">
        <Link
          href="#"
          className="hover:text-green-300 transition-all duration-500"
        >
          Privacy Policy
        </Link>{" "}
        |
        <Link
          href="#"
          className="hover:text-green-300 transition-all duration-500"
        >
          {" "}
          FCODS Promo{" "}
        </Link>{" "}
        |
        <Link
          href="#"
          className="hover:text-green-300 transition-all duration-500"
        >
          {" "}
          Branch Locator{" "}
        </Link>{" "}
        |
        <Link
          href="#"
          className="hover:text-green-300 transition-all duration-500"
        >
          {" "}
          FAQ Corporate Registration Form/Guide
        </Link>{" "}
        |
        <Link
          href="#"
          className="hover:text-green-300 transition-all duration-500"
        >
          {" "}
          Copyright FCODS {year.getFullYear()}
        </Link>
      </p>
    </div>
  );
};

export default AdminFooter;
