import BackgroundHeading from "@/components/BackgroundHeading";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="scroll-smooth relative font-sans bg-[#f1d4b3] min-h-svh flex justify-center items-center flex-col text-black">
      <BackgroundHeading />
      <div className="flex items-center flex-col gap-4">
        <Link className="underline cursor-pointer" to="/">
          Quay về trang đầu tiên
        </Link>
        <p>Trang này không tồn tại</p>
      </div>
    </div>
  );
};

export default NoPage;
