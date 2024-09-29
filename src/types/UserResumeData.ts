export interface contact {
    location: string;
    email: string;
    phone: string;
}

export interface socialLink { name: string; url: string }

export interface link { name: string; link: string };

export interface project {
    name: string;
    description: string;
    links: link[];
    date: string;
}

export interface experience {
    title: string;
    company: string;
    responsibilities: string;
    date: string;
    links: link[];
}

export interface language {
    title: string;
    level: string;
}

export interface education {
    degree: string;
    institution: string;
    date: string;
}

export interface skills { skills: string[] }

export interface UserResumeData {
    name: string;
    title: string;
    contact: contact;
    socialLinks: socialLink[];
    about: string;
    skills: skills;
    project: project[];
    experiences: experience[];
    languages: language[];
    educations: education[];
};  