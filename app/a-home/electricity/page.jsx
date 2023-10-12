const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <div className="bg-red-500 w-full fixed top-0 left-0 h-16 flex items-center justify-between text-white px-4 text-3xl">
        <div className="flex justify-center items-center gap-4 tracking-tight text-base">
          <Link href="/a-home">{"<"}</Link>Electricity
        </div>
      </div>
      <div className="h-16 w-full p-4"></div>
      <div className="bg-gray-100 p-4 w-full flex flex-col justify-center items-center gap-3"></div>

      <div className="h-14 w-full p-4"></div>
    </div>
  );
};

export default page;
