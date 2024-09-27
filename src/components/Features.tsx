import { featuresCopy, manageInfoCopy } from "@/libs/data";

export default function Features() {
  return (
    <article className="mt-[98px]">
      <div className="space-y-3 px-8 text-center">
        <h2 className="text-pretty text-[1.75rem] font-bold leading-[1.6] text-ml-dark-blue">
          {manageInfoCopy.heading}
        </h2>
        <p className="text-sm leading-[2] text-ml-dark-grayish-blue">
          {manageInfoCopy.body}
        </p>
      </div>

      <div className="mt-[3.25rem] space-y-[2.875rem] pl-4">
        {featuresCopy.map((feature) => (
          <section className="" key={feature.id}>
            <div className="flex items-center bg-ml-very-pale-red">
              <span className="block content-center rounded-full bg-ml-bright-red px-6 py-[0.4375rem] font-bold text-white">
                {feature.id}
              </span>
              <h3 className="px-4 font-bold -tracking-[0.055em] text-ml-dark-blue">
                {feature.heading}
              </h3>
            </div>
            <p className="mt-[0.625rem] pr-4 text-sm leading-[2] -tracking-[0.015em] text-ml-dark-grayish-blue">
              {feature.body}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
