import Button from "./Button";

export default function Simplify() {
  return (
    <section className="flex flex-col items-center bg-ml-bright-red bg-[url(/images/bg-simplify-section-mobile.svg)] bg-auto bg-[left_0px_center] bg-no-repeat px-8 pb-[92px] pt-10 sm:bg-[url(/images/bg-simplify-section-desktop.svg)]">
      <p className="mt-[58px] text-center text-[38px] font-semibold leading-[1.30] -tracking-[0.0125em] text-white">
        Simplify how your team works today.
      </p>
      <Button className="mt-6 bg-white font-semibold text-ml-bright-red" />
    </section>
  );
}
