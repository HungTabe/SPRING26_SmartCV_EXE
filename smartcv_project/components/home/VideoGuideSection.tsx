"use client"

import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { PlayCircle, Clock } from "lucide-react"

const videos = [
    {
        id: 1,
        title: "How to Answer 'Tell Me About Yourself'",
        duration: "5:30",
        thumbnail: "bg-blue-100",
        category: "Behavioral"
    },
    {
        id: 2,
        title: "Body Language Tips for Virtual Interviews",
        duration: "4:15",
        thumbnail: "bg-purple-100",
        category: "Tips"
    },
    {
        id: 3,
        title: "Negotiating Your Salary Like a Pro",
        duration: "8:45",
        thumbnail: "bg-green-100",
        category: "Career"
    }
]

export function VideoGuideSection() {
    return (
        <section className="py-16 bg-muted/50">
            <div className="container px-4 mx-auto">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Video Guides</h2>
                        <p className="text-muted-foreground">Learn from expert tutorials and success stories</p>
                    </div>
                    <Button variant="ghost" className="hidden sm:flex">View ALl Guides</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video) => (
                        <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                            <div className={`aspect-video ${video.thumbnail} relative flex items-center justify-center`}>
                                <PlayCircle className="w-12 h-12 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110" />
                                <Badge className="absolute bottom-2 right-2 bg-black/75 hover:bg-black/75">
                                    {video.duration}
                                </Badge>
                            </div>
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <Badge variant="outline">{video.category}</Badge>
                                </div>
                                <h3 className="font-semibold text-lg line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                                    {video.title}
                                </h3>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span>Posted 2 days ago</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Button variant="outline" className="w-full mt-6 sm:hidden">View All Guides</Button>
            </div>
        </section>
    )
}
