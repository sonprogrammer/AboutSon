export interface ProjectTypes{
    title: string;
    img: string;
    desc: string;
    intro: string;
    git: string;
    team: boolean;
    role: Record<string, string[]>;
    func: Record<string, string[]>;
    troubleS: Record<string, string[]>;
    reflection: string;
    skills: string[];
}