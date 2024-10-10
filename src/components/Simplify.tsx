import Button from "./Button";

export default function Simplify() {
  return (
    <section className="bg-ml-bright-red bg-[url(/images/bg-simplify-section-mobile.svg)] bg-auto bg-[left_0px_center] bg-no-repeat sm:mt-[140px] sm:bg-[url(/images/bg-simplify-section-desktop.svg)] sm:bg-[left_240px_bottom_0]">
      <div className="mx-auto flex max-w-[72.375rem] flex-col items-center px-8 pb-[92px] pt-10 sm:flex-row sm:content-center sm:items-center sm:justify-between sm:px-6 sm:pb-16 sm:pt-2">
        <p className="mt-[58px] text-center text-[38px] font-semibold leading-[1.30] -tracking-[0.0125em] text-white sm:max-w-[500px] sm:text-left sm:leading-[1.20] sm:tracking-normal">
          Simplify how your team works today.
        </p>
        <Button className="mt-6 bg-white font-semibold text-ml-bright-red sm:mt-[56px]" />
      </div>
    </section>
  );
}
