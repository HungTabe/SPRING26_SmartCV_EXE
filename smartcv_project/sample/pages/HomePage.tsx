import { HeroSection } from "../components/HeroSection"
import { VideoGuideSection } from "../components/VideoGuideSection"
import { InterviewGuideSection } from "../components/InterviewGuideSection"
import { QuestionBankSection } from "../components/QuestionBankSection"
import { BlogSection } from "../components/BlogSection"

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <VideoGuideSection />
      <InterviewGuideSection />
      <QuestionBankSection />
      <BlogSection />
    </main>
  )
}