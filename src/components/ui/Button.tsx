import { cn } from "@/lib/utils";

type ButtonProps = {
  classCustom?: string;
  buttonType?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button({
  classCustom,
  buttonType,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "xs:text-[16px] md:text-lg h-[45px] w-full border-[none] rounded-[5px] bg-[#473a2b] text-[#fff] text-[16px] cursor-pointer flex justify-center items-center [transition:all_0.2s] hover:bg-[#322618]",
        { "text-[14px] opacity-[0.85]": buttonType === "secondary" },
        classCustom,
      )}
    >
      {children}
    </button>
  );
}
