import { featuresCopy, manageInfoCopy } from "@/libs/data";

export default function Features() {
  return (
    <article className="mt-[6.125rem] sm:relative sm:mt-[6.5rem]">
      <div className="mx-auto max-w-[72.375rem] flex-wrap sm:grid sm:grid-cols-2">
        <div className="z-50 space-y-3 px-8 text-center sm:max-w-[475px] sm:space-y-6 sm:px-6 sm:text-left">
          <h2 className="clamp w-full text-pretty text-[1.75rem] font-bold leading-[1.6] text-ml-dark-blue sm:min-w-[27.625rem] sm:pt-1 sm:leading-[1.2] sm:-tracking-[0.012em]">
            {manageInfoCopy.heading}
          </h2>
          <p className="text-sm leading-[2] text-ml-dark-grayish-blue sm:max-w-[20.25rem] sm:text-[1rem] sm:leading-[1.65] sm:-tracking-[0.0125em]">
            {manageInfoCopy.body}
          </p>
        </div>

        <div className="mt-[3.25rem] space-y-[2.875rem] pl-4 sm:mt-0 sm:space-y-[2.375rem]">
          {featuresCopy.map((feature) => (
            <section key={feature.id}>
              <div className="flex items-center rounded-l-full bg-ml-very-pale-red sm:gap-x-3 sm:bg-transparent">
                <span className="block content-center rounded-full bg-ml-bright-red px-6 py-[0.4375rem] font-bold text-white">
                  {feature.id}
                </span>
                <h3 className="px-4 font-bold -tracking-[0.055em] text-ml-dark-blue">
                  {feature.heading}
                </h3>
              </div>
              <p className="mt-[0.625rem] pr-4 text-sm leading-[2] -tracking-[0.015em] text-ml-dark-grayish-blue sm:pl-[5.875rem] sm:pr-[1.875rem] sm:text-[1rem] sm:leading-[1.65] sm:-tracking-[0.0125em]">
                {feature.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
