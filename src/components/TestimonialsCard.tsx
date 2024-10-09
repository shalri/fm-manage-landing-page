import Image from "next/image";
export default function TestimonialsCard({
  name,
  avatar,
  copy,
}: {
  name: string;
  avatar: string;
  copy: string;
}) {
  return (
    <section
      key={name}
      className="relative flex flex-col items-center justify-center rounded-sm bg-ml-very-light-gray pb-8 sm:mx-4 sm:px-8 sm:pt-10"
    >
      <div className="absolute -top-[40px] size-[72px]">
        <Image src={avatar} fill className="object-contain" alt={name} />
      </div>
      <div className="mt-[58px] text-center sm:mt-[22px]">
        <h3 className="font-bold tracking-tighter text-ml-dark-blue">{name}</h3>
        <p className="mt-5 max-w-[300px] text-sm leading-[1.85] text-ml-dark-grayish-blue">
          {copy}
        </p>
      </div>
    </section>
  );
}
