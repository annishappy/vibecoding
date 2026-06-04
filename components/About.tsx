const skills = [
  "TypeScript", "React", "Next.js", "Node.js",
  "Tailwind CSS", "PostgreSQL", "Git", "Docker",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">소개</h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              안녕하세요! 저는 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
              클린한 코드와 직관적인 UI를 통해 사람들이 즐겨 사용하는 제품을 만들고 싶습니다.
            </p>
            <p>
              새로운 기술을 배우는 것을 좋아하며, 팀과 함께 성장하는 것에 보람을 느낍니다.
              현재는 React / Next.js 생태계를 중심으로 풀스택 역량을 키우고 있습니다.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">기술 스택</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-full text-sm text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
