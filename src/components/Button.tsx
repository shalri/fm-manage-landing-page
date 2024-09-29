import { cn } from "@/libs/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
}

export default function Button({
  className,
  text = "Get Started",
}: ButtonProps) {
  return (
    <button
      className={cn(
        "z-20 rounded-full bg-ml-bright-red px-8 py-3 text-[13px] font-semibold text-white shadow-lg shadow-red-500/70",
        className,
      )}
    >
      {text}
    </button>
  );
}
