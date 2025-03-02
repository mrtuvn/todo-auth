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
        <p>
          Nếu em đang xem được ảnh này là em đã đặt chân xuống sân bay và đã về
          nhà với gia đình 🏠.
        </p>
        <p>
          Cảm ơn Nhật Bản đã cho em nhiều trải nghiệm quý giá, dù có nhiều khó
          khăn nhưng sau cùng vẫn là rất nhiều kỷ niệm, niềm vui và những người
          bạn tốt.
        </p>
        <p>
          A tin là em sẽ có những phát triển, thành công trên chặng đường mới, có
          nhiều cuộc phưu lưu mới. Rất vui được đồng hành cùng em
        </p>
        <p className="">Gửi em nhiều yêu thương - Tú</p>
      </div>
    </div>
  );
};

export default MemoryBox;
