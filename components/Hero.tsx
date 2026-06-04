export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <p className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-4">
        안녕하세요
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
        저는 <span className="text-indigo-400">Annis</span>입니다
      </h1>
      <h2 className="text-xl md:text-2xl text-zinc-400 font-light mb-8">
        Frontend Developer
      </h2>
      <p className="max-w-md text-zinc-400 mb-10 leading-relaxed">
        사용자 경험을 중심에 둔 웹 애플리케이션을 만드는 개발자입니다.
      </p>
      <a
        href="#projects"
        className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
      >
        프로젝트 보기
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
