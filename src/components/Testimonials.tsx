import { testimonials } from "@/libs/data";
import Image from "next/image";

export default function Testimonials() {
  return (
    <article>
      <h2 className="">What they&rsquo;ve said</h2>
      <div className="">
        {testimonials.map((testimony) => (
          <section className="" key={testimony.name}>
            <div className="relative size-20">
              <Image
                src={testimony.avatar}
                fill
                className="object-contain"
                alt={testimony.name}
              />
            </div>
            <div className="">
              <h3 className="">{testimony.name}</h3>
              <p className="">{testimony.copy}</p>
            </div>
          </section>
        ))}
      </div>
      <div className="">slider control</div>
      <button className="">Get Started</button>
    </article>
  );
}
