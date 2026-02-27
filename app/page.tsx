import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Hero
        title="Study Planner"
        subtitle="AI가 설계하는 나만의 맞춤 학습 루틴"
        eyebrow="AI 기반 학습 플래너"
        ctaLabel="시작하기"
        ctaHref="#"
      />
    </main>
  );
}