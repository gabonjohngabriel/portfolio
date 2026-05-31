import Image from "next/image";

const techStacks = [
  {
    label: "AWS",
    src: "/skill-icons_aws-light.svg",
  },
  {
    label: "Figma",
    src: "/skill-icons_figma-light.svg",
  },
  {
    label: "React",
    src: "/skill-icons_react-light.svg",
  },
  {
    label: "Java",
    src: "/skill-icons_java-light.svg",
  },
  {
    label: "Node.js",
    src: "/material-icon-theme_nodejs-alt.svg",
  },
  {
    label: "Next.js",
    src: "/devicon_nextjs.svg",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1289px] overflow-hidden rounded-[45px] border border-[#001524] bg-white lg:h-[874px]">
        <div className="grid gap-12 px-8 pb-10 pt-8 lg:h-full lg:grid-cols-[1fr_0.95fr] lg:px-12 lg:pb-12 lg:pt-10">
          {/* LEFT PANEL */}
          <div className="flex h-full min-h-0 flex-col">
            {/* TOP SECTION*/}
            <div className="col-span-full grid grid-cols-3 items-center text-[18px] text-[#001524] sm:text-[20px]">
              <span className="font-amoria justify-self-start">menu</span>
              <span className="font-amoria justify-self-center">
                {"</aplace>"}
              </span>
              <span className="font-amoria justify-self-end">home</span>
            </div>

            {/* BOTTOM SECTION */}
            <div className="mt-10 flex flex-1 flex-col justify-end">
              <h1 className="text-[42px] leading-[0.90] tracking-[-0.5px] text-[#001524] sm:text-[54px] lg:text-[64px]">
                <span className="block">Building Digital</span>
                <span className="block relative z-0">Solutions</span>
                <span className="relative z-10 flex items-center">
                  <span className="inline-flex items-center">
                    <Image
                      src="/through.svg"
                      alt="through"
                      width={110}
                      height={65}
                      className="h-[65px] w-[110px] object-contain"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="ml-2 text-[#ff7d00]">Innovation,</span>
                </span>
                <span className="relative z-20 block text-[#15616d]">
                  Creativity.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-[16px] leading-[1.25] text-[#001524]/90 sm:text-[18px] lg:text-[20px]">
                Providing full-stack web and mobile solutions and design
                experience through innovation or SaaS.
              </p>

              {/* TECHNICAL SKILLS */}
              <div className="mt-2">
                <h1 className="text-[26px] tracking-[-0.5px] text-[#ff7d00] sm:text-[30px] lg:text-[32px]">
                  Technical Skills
                </h1>
                <div className="mt-2 flex flex-wrap gap-5">
                  {techStacks.map((stack) => (
                    <div
                      key={stack.label}
                      className="flex w-[64px] flex-col items-center gap-2"
                    >
                      <Image
                        src={stack.src}
                        alt={`${stack.label} logo`}
                        width={48}
                        height={48}
                      />
                      <p className="text-center text-[14px] tracking-[-0.5px] text-[#001524]">
                        {stack.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 mb-12 flex flex-wrap gap-4">
              <a
                className="flex items-center justify-center rounded-full bg-[#ff7d00] px-8 py-3 text-[14px] font-bold uppercase tracking-[0.6px] text-white transition-transform hover:-translate-y-0.5"
                href="#"
              >
                Get Started
              </a>
              <a
                className="flex items-center justify-center rounded-full bg-[#001524] px-8 py-3 text-[14px] font-bold uppercase tracking-[0.6px] text-white transition-transform hover:-translate-y-0.5"
                href="#"
              >
                View Works
              </a>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="grid h-[874px] grid-rows-[50fr_50fr] overflow-hidden lg:-mr-14 lg:mt-[-7.5%]">
            {/* TOP IMAGE SECTION */}
            <div className="relative w-full bg-[#ff7d00]">
              <a href="/about">
                <Image
                  src="/about_image.svg"
                  alt="About"
                  fill
                  className="object-cover object-[center_25%]"
                  sizes="(min-width: 1024px) 629px, 100vw"
                  priority
                />
                {/* LABELS */}
                <div className="absolute inset-0 flex items-end justify-between px-6 mb-6">
                  {/* LEFT SIDE */}
                  <div className="flex items-center gap-4 text-white">
                    {/* ICON */}
                    <Image
                      src="/mdi_about.svg"
                      alt="About"
                      priority
                      height={72}
                      width={72}
                    />

                    {/* TEXT */}
                    <div className="flex flex-col justify-center leading-none">
                      <h1 className="text-[64px] tracking-[-0.5px]">01</h1>
                      <p className="text-[20px] font-bold uppercase tracking-[0px]">
                        About
                      </p>
                    </div>
                  </div>
                  {/* RIGHT SIDE */}
                  <Image
                    src="/icon-park-solid_right-c.svg"
                    alt="Arrow"
                    priority
                    className="mr-4 mb-2"
                    height={48}
                    width={48}
                  />
                </div>
              </a>
            </div>
            {/* BOTTOM IMAGE SECTION */}
            <div className="relative w-full bg-[#15616d]">
              <Image
                src="/services_image.svg"
                alt="Services"
                fill
                sizes="(min-width: 1024px) 629px, 100vw"
                className="object-cover object-[center_25%]"
                priority
              />
              {/* LABELS */}
              <div className="absolute inset-0 flex items-end justify-between px-6 mb-6">
                {/* LEFT SIDE */}
                <div className="flex items-center gap-4 text-white">
                  {/* ICON */}
                  <Image
                    src="/dashicons_portfolio.svg"
                    alt="Services"
                    priority
                    height={72}
                    width={72}
                  />

                  {/* TEXT */}
                  <div className="flex flex-col justify-center leading-none">
                    <h1 className="text-[64px] tracking-[-0.5px]">02</h1>
                    <p className="text-[20px] font-bold uppercase tracking-[0px]">
                      Services
                    </p>
                  </div>
                </div>
                {/* RIGHT SIDE */}
                <Image
                  src="/icon-park-solid_right-c.svg"
                  alt="Arrow"
                  priority
                  className="mr-4 mb-2"
                  height={48}
                  width={48}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
