import { heroCopy } from "@/libs/data";

export default function Hero() {
  return (
    <article className="relative mt-10 flex flex-col items-center">
      <div className="h-[306px] w-full max-w-[92%] bg-[url(/images/illustration-intro.svg)] bg-contain bg-center bg-no-repeat px-6" />
      <section className="z-20 mt-[10px] px-6 text-center">
        <h1 className="text-[2.2675rem] font-bold leading-[1.3665] text-ml-dark-blue">
          {heroCopy.heading}
        </h1>
        <p className="mt-[0.375rem] leading-[1.74] text-ml-dark-grayish-blue">
          {heroCopy.body}
        </p>
      </section>
      <button className="z-20 mx-auto mt-7 rounded-full bg-ml-bright-red px-8 py-3 text-[13px] font-semibold text-white shadow-lg shadow-red-500/70">
        Get Started
      </button>
      <div className="absolute -bottom-[72px] right-0 h-[300px] w-[130px] overflow-hidden">
        <div className="size-[300px] bg-[url(/images/bg-tablet-pattern.svg)] bg-contain bg-no-repeat" />
      </div>
    </article>
  );
}
