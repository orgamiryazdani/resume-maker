import { contact, socialLink } from "./UserResumeData";

export interface InfoProps {
    name: string;
    title: string;
    contact: contact;
    socialLinks: socialLink[]
}