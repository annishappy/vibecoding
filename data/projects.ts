export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "프로젝트 이름 1",
    description: "프로젝트에 대한 간단한 설명을 여기에 작성하세요. 어떤 문제를 해결했는지 간략히 소개합니다.",
    tags: ["React", "TypeScript", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "프로젝트 이름 2",
    description: "두 번째 프로젝트에 대한 설명입니다. 주요 기능과 기술 스택을 짧게 소개합니다.",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com",
  },
  {
    title: "프로젝트 이름 3",
    description: "세 번째 프로젝트에 대한 설명입니다. 성과나 임팩트를 강조하면 좋습니다.",
    tags: ["Python", "FastAPI", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
  },
];
