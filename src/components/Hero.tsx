import { heroCopy } from "@/libs/data";

export default function Hero() {
  return (
    <article className="">
      <div className="h-[100px] w-full bg-[url(/images/illustration-intro.svg)] bg-contain bg-no-repeat" />
      <section className="">
        <h1 className="">{heroCopy.heading}</h1>
        <p className="">{heroCopy.body}</p>
      </section>
    </article>
  );
}
