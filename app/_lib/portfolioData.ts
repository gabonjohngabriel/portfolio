export interface SkillItem {
    label: string;
    src: string;
}

export interface OrganizationItem {
    label: string;
    position: string | string[];
}

export interface SocialItem {
    label: string;
    src: string;
    href: string;
}

export interface ServiceItem {
    iconSrc: string;
    title: string;
    description: string;
}

export interface WorkItem {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    href?: string;
}

// Home Page - Featured Tech Stacks
export const featuredTechStacks: SkillItem[] = [
    { label: "AWS", src: "/skill-icons_aws-light.svg" },
    { label: "Figma", src: "/skill-icons_figma-light.svg" },
    { label: "React", src: "/skill-icons_react-light.svg" },
    { label: "Java", src: "/skill-icons_java-light.svg" },
    { label: "Node.js", src: "/material-icon-theme_nodejs-alt.svg" },
    { label: "Next.js", src: "/devicon_nextjs.svg" },
];

// About Pages - Languages
export const languages: SkillItem[] = [
    { label: "Java", src: "/skill-icons_java-light.svg" },
    { label: "HTML", src: "/devicon_html5-wordmark.svg" },
    { label: "CSS", src: "/devicon_css3-wordmark.svg" },
    { label: "JavaScript", src: "/vscode-icons_file-type-js-official.svg" },
];

// About Pages - Frameworks, Libraries, & Databases
export const frameworksAndLibraries: SkillItem[] = [
    { label: "React", src: "/skill-icons_react-light.svg" },
    { label: "Node.js", src: "/material-icon-theme_nodejs-alt.svg" },
    { label: "Next.js", src: "/devicon_nextjs.svg" },
    { label: "TypeScript", src: "/devicon_typescript.svg" },
    { label: "MySQL", src: "/devicon_mysql.svg" },
    { label: "MongoDB", src: "/vscode-icons_file-type-mongo.svg" },
];

// About Pages - Tools & Platforms
export const tools: SkillItem[] = [
    { label: "AWS", src: "/skill-icons_aws-light.svg" },
    { label: "Figma", src: "/skill-icons_figma-light.svg" },
];

// About Page - Organizations & Involvement
export const organizations: OrganizationItem[] = [
    {
        label: "AWS Learning Club - BulSU",
        position: "Associate Skill Builder (2026 - Present)",
    },
    {
        label: "CURSOR Publication",
        position: [
            "Staff Writer (2025 - Present)",
            "Feature and Lifestyle Editor (2026 - Present)",
        ],
    },
];

// Services Page
export const services: ServiceItem[] = [
    {
        iconSrc: "/tabler_code.svg",
        title: "Web Development",
        description: "Custom-coded, client-facing websites built from scratch.",
    },
    {
        iconSrc: "/iconoir_design-nib-solid.svg",
        title: "Software Development",
        description:
            "Building scalable, efficient, and maintainable software solutions.",
    },
    {
        iconSrc: "/iconoir_design-nib-solid.svg",
        title: "UI/UX Design",
        description: "Creating visually stunning and user-friendly interfaces.",
    },
];

// Services/Works Page
export const works: WorkItem[] = [
    {
        id: 1,
        title: "Flylet",
        description:
            "Flylet is a social note-sharing app where ideas meet locations. Pin notes to interactive maps, comment on discoveries, and connect with creators near you.",
        imageSrc: "/flylet_prev.svg",
        href: "https://flylet.app/",
    },
    {
        id: 2,
        title: "Soon",
        description: "",
        imageSrc: "",
    },
];

// About Page - Socials
export const socials: SocialItem[] = [
    {
        label: "LinkedIn",
        src: "/mdi_linkedin.svg",
        href: "https://www.linkedin.com/in/gabrielgabon/",
    },
    {
        label: "GitHub",
        src: "/mdi_github.svg",
        href: "https://github.com/lxaplace",
    },
    {
        label: "Facebook",
        src: "/ic_outline-facebook.svg",
        href: "https://www.facebook.com/gabonjohngabriel",
    },
];
