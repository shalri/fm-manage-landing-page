import { testimonials } from "@/libs/data";
import Image from "next/image";

export default function Testimonials() {
  return (
    <article className="mt-[4.25rem]">
      <h2 className="text-center text-3xl font-bold text-ml-dark-blue">
        What they&rsquo;ve said
      </h2>
      <div className="mt-[102px] px-4">
        {testimonials.map((testimony) => (
          <section
            key={testimony.name}
            className="relative mb-[40px] flex flex-col items-center justify-center rounded-sm bg-ml-very-light-gray pb-8"
          >
            <div className="absolute -top-[40px] size-[72px]">
              {" "}
              <Image
                src={testimony.avatar}
                fill
                className="object-contain"
                alt={testimony.name}
              />
            </div>
            <div className="mt-[58px] text-center">
              <h3 className="font-bold tracking-tighter text-ml-dark-blue">
                {testimony.name}
              </h3>
              <p className="mt-5 max-w-[300px] text-sm leading-[1.85] text-ml-dark-grayish-blue">
                {testimony.copy}
              </p>
            </div>
          </section>
        ))}
      </div>
      <div className="">slider control</div>
      <button className="">Get Started</button>
    </article>
  );
}
