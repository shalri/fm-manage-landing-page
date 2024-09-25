import { featuresCopy, manageInfoCopy } from "@/libs/data";

export default function Features() {
  return (
    <article>
      <h2 className="">{manageInfoCopy.heading}</h2>
      <p className="">{manageInfoCopy.body}</p>

      <div className="">
        {featuresCopy.map((feature) => (
          <section className="" key={feature.id}>
            <div className="">
              {feature.id}
              <h3 className="">{feature.heading}</h3>
            </div>
            <p className="">{feature.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
