import { heroCopy } from "@/libs/data";

export default function Hero() {
  return (
    <article className="mt-10 flex flex-col justify-center px-6">
      <div className="mx-auto">
        <div className="min-h-[19.25rem] w-[100%] bg-[url(/images/illustration-intro.svg)] bg-cover bg-center bg-no-repeat" />
      </div>
      <section className="mt-2 text-center">
        <h1 className="text-[2.2675rem] font-bold leading-[1.3665] text-ml-dark-blue">
          {heroCopy.heading}
        </h1>
        <p className="mt-[0.375rem] leading-[1.74]">{heroCopy.body}</p>
      </section>
      <button className="mx-auto mt-7 rounded-full bg-ml-bright-red px-8 py-3 text-[13px] font-semibold text-white">
        Get Started
      </button>
    </article>
  );
}
