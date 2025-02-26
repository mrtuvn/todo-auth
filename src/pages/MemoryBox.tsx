import BackgroundHeading from "@/components/BackgroundHeading";
import { Link } from "react-router-dom";
import { OldMemo } from "../components/OldMemo";

const MemoryBox = () => {
  return (
    <div className="scroll-smooth relative font-sans bg-[#f1d4b3] min-h-svh flex justify-center items-center flex-col text-black">
      <BackgroundHeading />
      <Link to="/">Quay về trang đầu tiên</Link>
      <OldMemo />

      <div className="mt-4 p-2 text-center">
        Cảm ơn em đã vào xem qua những hình ảnh này. Chúc em một ngày tốt lành!
        Cảm ơn Nhật Bản đã cho em những trải nghiệm quý giá nhiều niềm vui và
        những người bạn tốt.
      </div>
    </div>
  );
};

export default MemoryBox;
