import Image from "next/image";

const languages = [
  {
    label: "Java",
    src: "/skill-icons_java-light.svg",
  },
  {
    label: "HTML",
    src: "/devicon_html5-wordmark.svg",
  },
  {
    label: "CSS",
    src: "/devicon_css3-wordmark.svg",
  },
  {
    label: "JavaScript",
    src: "/vscode-icons_file-type-js-official.svg",
  },
];

const framelibdata = [
  {
    label: "React",
    src: "/skill-icons_react-light.svg",
  },
  {
    label: "Node.js",
    src: "/material-icon-theme_nodejs-alt.svg",
  },
  {
    label: "Next.js",
    src: "/devicon_nextjs.svg",
  },
  {
    label: "TypeScript",
    src: "/devicon_typescript.svg",
  },
  {
    label: "MySQL",
    src: "/devicon_mysql.svg",
  },
  {
    label: "MongoDB",
    src: "/vscode-icons_file-type-mongo.svg",
  },
];

const tools = [
  {
    label: "AWS",
    src: "/skill-icons_aws-light.svg",
  },
  {
    label: "Figma",
    src: "/skill-icons_figma-light.svg",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1289px] overflow-hidden rounded-[45px] border border-[#001524] bg-white lg:h-[874px]">
        <div className="grid gap-12 px-8 pb-10 pt-8 lg:h-full lg:grid-cols-[1fr_0.95fr] lg:px-12 lg:pb-12 lg:pt-10">
          {/* LEFT PANEL */}
          <div className="relative flex h-full min-h-0 flex-col">
            <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
              {/* NEXT ICON */}
              <a href="/about/orgs">
                <div
                  className="pointer-events-auto"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "var(--brand-orange)",
                    maskImage: "url('/icon-park-solid_right-c.svg')",
                    WebkitMaskImage: "url('/icon-park-solid_right-c.svg')",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              </a>
            </div>
            {/* TOP SECTION */}
            <div className="col-span-full grid grid-cols-3 items-center text-[18px] text-[#001524] sm:text-[20px]">
              <a href="/">
                <span className="font-amoria justify-self-start">back</span>
              </a>
              <span className="font-amoria justify-self-center">
                {"</aplace>"}
              </span>
              <span className="font-amoria justify-self-end">about</span>
            </div>

            {/* BOTTOM SECTION */}
            <div className="flex flex-1 flex-col justify-center">
              <h1 className="text-[48px] leading-[0.90] tracking-[-0.5px] text-[#001524]">
                <span className="block text-[var(--brand-orange)]">
                  John Gabriel
                </span>
                <span className="block text-[var(--brand-orange)]">Gabon</span>
              </h1>

              <p className="mt-4 max-w-xl text-[16px] leading-[1.25] text-[#001524]/90 sm:text-[18px] lg:text-[20px]">
                Bachelor of Science in Information Technology
                <br />
                <i>Bulacan State University - Malolos Campus</i>
              </p>

              {/* BUTTONS */}
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  className="flex items-center justify-center rounded-full bg-[#ff7d00] px-8 py-3 text-[14px] font-bold uppercase tracking-[0.6px] text-white transition-transform hover:-translate-y-0.5"
                  href="/misc/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
                <a
                  className="flex items-center justify-center rounded-full bg-[#001524] px-8 py-3 text-[14px] font-bold uppercase tracking-[0.6px] text-white transition-transform hover:-translate-y-0.5"
                  href="https://www.linkedin.com/in/gabrielgabon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Linkedin
                </a>
              </div>

              {/* TECHNICAL SKILLS */}
              <div className="mt-4 mb-12">
                <h1 className="text-[32px] tracking-[-0.5px] text-[#ff7d00]">
                  Tech Stacks
                </h1>
                <p className="mt-2 max-w-xl text-[16px] leading-[1.25] text-[#001524]/90 sm:text-[18px] lg:text-[20px]">
                  Languages
                </p>
                <div className="mt-2 flex flex-wrap gap-5">
                  {languages.map((stack) => (
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

                <p className="mt-2 max-w-xl text-[16px] leading-[1.25] text-[#001524]/90 sm:text-[18px] lg:text-[20px]">
                  Frameworks, Libraries, & Databases
                </p>
                <div className="mt-2 flex flex-wrap gap-5">
                  {framelibdata.map((stack) => (
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

                <p className="mt-2 max-w-xl text-[16px] leading-[1.25] text-[#001524]/90 sm:text-[18px] lg:text-[20px]">
                  Tools & Platforms
                </p>
                <div className="mt-2 flex flex-wrap gap-5">
                  {tools.map((stack) => (
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
          </div>

          {/* RIGHT PANEL */}
          <div className="grid h-[874px] grid-rows-[50fr] overflow-hidden lg:-mr-14 lg:mt-[-7.5%]">
            {/* TOP IMAGE SECTION */}
            <div className="relative w-full bg-[#ff7d00]">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
