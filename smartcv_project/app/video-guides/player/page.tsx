"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ImageWithFallback } from "@/components/ImageWithFallback"
import { useRouter, useSearchParams } from "next/navigation"
import {
    PlayCircle, Clock, Volume2, Settings, Maximize, SkipBack, SkipForward,
    Pause, Play, ArrowLeft, List, RotateCcw, Play as PlayIcon
} from "lucide-react"
import { useState, useEffect, Suspense } from "react"

// Simplified Mock Data
const currentVideo = {
    id: 1,
    title: "Cơ bản về CV - Những điều cần biết",
    description: "Tổng quan về cấu trúc CV",
    duration: "15:30",
    videoUrl: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2ODA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapters: [
        { title: "Intro", time: "0:00" },
        { title: "Main Concept", time: "5:00" }
    ]
}

function VideoPlayerContent() {
    const router = useRouter()
    // const searchParams = useSearchParams()
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [showPlaylist, setShowPlaylist] = useState(true)

    useEffect(() => {
        let interval: any
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress(p => p >= 100 ? 100 : p + 0.5)
            }, 500)
        }
        return () => clearInterval(interval)
    }, [isPlaying])

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <div className="flex flex-1 h-screen overflow-hidden">
                <div className="flex-1 flex flex-col relative">
                    {/* Header Overlay */}
                    <div className="absolute top-0 left-0 right-0 p-4 z-10 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
                        <div className="flex items-center gap-4">
                            <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => router.back()}>
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back
                            </Button>
                            <div>
                                <h1 className="font-semibold text-lg">{currentVideo.title}</h1>
                            </div>
                        </div>
                        <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => setShowPlaylist(!showPlaylist)}>
                            <List className="w-5 h-5 mr-2" />
                            Playlist
                        </Button>
                    </div>

                    {/* Main Player Area */}
                    <div className="flex-1 bg-zinc-900 relative flex items-center justify-center">
                        <div className="w-full h-full relative">
                            <ImageWithFallback
                                src={currentVideo.videoUrl}
                                alt="Video"
                                fill
                                className="object-cover opacity-60"
                            />
                        </div>

                        {/* Center Play Button */}
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="absolute z-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all border-2 border-white/50"
                        >
                            {isPlaying ? <Pause className="w-10 h-10 fill-white" /> : <PlayIcon className="w-10 h-10 fill-white translate-x-1" />}
                        </button>

                        {/* Controls Bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 space-y-4">
                            <Progress value={progress} className="h-1.5 bg-white/20 hover:h-2 transition-all cursor-pointer" />

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                                        <SkipBack className="w-5 h-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={() => setIsPlaying(!isPlaying)}>
                                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                                        <SkipForward className="w-5 h-5" />
                                    </Button>
                                    <span className="text-sm font-medium ml-2">5:20 / {currentVideo.duration}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                                        <Volume2 className="w-5 h-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                                        <Settings className="w-5 h-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                                        <Maximize className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Playlist Sidebar */}
                {showPlaylist && (
                    <div className="w-96 bg-zinc-900 border-l border-zinc-800 flex flex-col">
                        <div className="p-4 border-b border-zinc-800">
                            <h3 className="font-semibold">Full Course Playlist</h3>
                            <p className="text-sm text-zinc-400">12 videos • 8h 30m</p>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className={`p-4 hover:bg-white/5 cursor-pointer flex gap-3 ${i === 1 ? 'bg-white/10' : ''}`}>
                                    <div className="text-zinc-500 font-medium text-sm mt-1">{i}</div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium leading-normal mb-1">
                                            {currentVideo.title} {i}
                                        </h4>
                                        <div className="text-xs text-zinc-500">15:00</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default function VideoPlayerPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <VideoPlayerContent />
        </Suspense>
    )
}
