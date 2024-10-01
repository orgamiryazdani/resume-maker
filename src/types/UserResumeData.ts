export interface contact {
    location: string;
    email: string;
    phone: string;
}

export interface socialLink { id: number; name: string; url: string }

export interface link {id:number; name: string; link: string };

export interface project {
    id: number;
    name: string;
    description: string;
    links: link[];
    date: string;
}

export interface experience {
    id: number;
    title: string;
    company: string;
    responsibilities: string;
    date: string;
    links: link[];
}

export interface language {
    id: number;
    title: string;
    level: string;
}

export interface education {
    id: number;
    degree: string;
    institution: string;
    date: string;
}

export interface skills { skills: { id: number; name: string }[] }

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