import { RouterProvider, useRouter } from "./components/Router"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { HomePage } from "./pages/HomePage"
import { VideoDetailPage } from "./pages/VideoDetailPage"
import { VideoWatchPage } from "./pages/VideoWatchPage"
import { VideoPlayerPage } from "./pages/VideoPlayerPage"
import { InterviewGuidePage } from "./pages/InterviewGuidePage"
import { InterviewVideoPage } from "./pages/InterviewVideoPage"
import { QuestionBankPage } from "./pages/QuestionBankPage"
import { BlogPage } from "./pages/BlogPage"
import { BlogDetailPage } from "./pages/BlogDetailPage"
import { LoginPage } from "./pages/LoginPage"

function AppContent() {
  const { currentPage } = useRouter()

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'video-detail':
        return <VideoDetailPage />
      case 'video-watch':
        return <VideoWatchPage />
      case 'video-player':
        return <VideoPlayerPage />
      case 'interview-guides':
        return <InterviewGuidePage />
      case 'interview-video':
        return <InterviewVideoPage />
      case 'question-bank':
        return <QuestionBankPage />
      case 'blog':
        return <BlogPage />
      case 'blog-detail':
        return <BlogDetailPage />
      case 'login':
        return <LoginPage />
      default:
        return <HomePage />
    }
  }

  // Don't show header/footer on login page and video player page
  if (currentPage === 'login' || currentPage === 'video-player') {
    return renderPage()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  )
}