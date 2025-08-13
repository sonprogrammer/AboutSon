type Trouble =
  | { title: string; reason: string; problem: string; solve: string } //mingle
  | { title: string[] } //can
  | string 
  | {title:string; secondTitle: string}


export interface ProjectTypes{
    title: string;
    img: string;
    desc: string;
    intro: string;
    git: string;
    team: boolean;
    role: Record<string, string[]>;
    func: Record<string, string[]>[];
    troubleS: Trouble[];
    reflection: string;
    skills: string[];
}