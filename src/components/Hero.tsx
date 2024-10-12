import { heroCopy } from "@/libs/data";
import Button from "./Button";

export default function Hero() {
  return (
    <article className="relative mt-10 flex max-w-[1158px] flex-col items-center sm:mx-auto sm:mt-[100px] sm:flex sm:flex-row-reverse sm:items-start">
      <div className="h-[306px] w-full max-w-[92%] bg-[url(/images/illustration-intro.svg)] bg-contain bg-center bg-no-repeat px-6 sm:mr-1 sm:h-[524px] sm:w-[116%] sm:max-w-[600px] sm:bg-contain sm:bg-right" />
      <section className="z-30 flex flex-col items-center justify-center pt-[67px]">
        <div className="mt-[10px] px-6 text-center sm:mt-0 sm:text-left">
          <h1 className="text-[2.2675rem] font-bold leading-[1.3665] text-ml-dark-blue sm:text-[51px] sm:leading-tight">
            {heroCopy.heading}
          </h1>
          <p className="mt-[0.375rem] leading-[1.70] text-ml-dark-grayish-blue sm:mt-[28px] sm:max-w-[340px]">
            {heroCopy.body}
          </p>
        </div>
        <Button className="mx-auto mt-7 text-[13px] hover:opacity-80 sm:ml-6 sm:mt-[36px]" />
      </section>
      <div className="absolute -bottom-[72px] right-0 h-[300px] w-[130px] overflow-hidden sm:hidden">
        <div className="size-[300px] bg-[url(/images/bg-tablet-pattern.svg)] bg-contain bg-no-repeat" />
      </div>
    </article>
  );
}
