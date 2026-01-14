import { HeroSection } from "@/components/home/HeroSection"
import { VideoGuideSection } from "@/components/home/VideoGuideSection"
import { InterviewGuideSection } from "@/components/home/InterviewGuideSection"
import { QuestionBankSection } from "@/components/home/QuestionBankSection"
import { BlogSection } from "@/components/home/BlogSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VideoGuideSection />
      <InterviewGuideSection />
      <QuestionBankSection />
      <BlogSection />
    </main>
  )
}
