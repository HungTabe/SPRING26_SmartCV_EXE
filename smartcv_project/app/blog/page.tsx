"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ImageWithFallback } from "@/components/ImageWithFallback"
import { Breadcrumb } from "@/components/Breadcrumb"
import {
    Heart, MessageCircle, Share2, Plus, Search,
    TrendingUp, Monitor, Video, Smile, Send, ThumbsUp, Eye, MoreHorizontal, Image as ImageIcon
} from "lucide-react"

// Types
interface Author {
    name: string
    avatar: string | null
    role: string
}

interface BlogPost {
    id: number
    author: Author
    content: string
    image?: string
    timestamp: string
    likes: number
    comments: number
    shares: number
    views: number
    tags: string[]
    hasLiked: boolean
    type: string
}

// Sample Data
const blogPosts: BlogPost[] = [
    {
        id: 1,
        author: {
            name: "Mai Anh Tuấn",
            avatar: null,
            role: "Senior HR Manager"
        },
        content: "Just finished an interview with a very impressive candidate! What stood out was how well they prepared about the company and asked intelligent questions. This is exactly how to make a good impression! 💼✨\n\n#interview #recruiting #career",
        timestamp: "2 hours ago",
        likes: 24,
        comments: 8,
        shares: 3,
        views: 156,
        tags: ["Interview", "Recruiting", "Career"],
        hasLiked: false,
        type: "text"
    },
    {
        id: 2,
        author: {
            name: "Nguyễn Thị Lan",
            avatar: null,
            role: "UX Designer"
        },
        content: "CV Writing Tips for Designers: \n1. Portfolio is king!\n2. Show your design process, not just results\n3. Customize CV for each job\n4. Use visual elements but don't overdo it\n\nAny other tips? 🎨",
        image: "https://images.unsplash.com/photo-1565672282630-ff265756849c?auto=format&fit=crop&w=1080&q=80",
        timestamp: "4 hours ago",
        likes: 42,
        comments: 15,
        shares: 8,
        views: 234,
        tags: ["CV", "Design", "Portfolio"],
        hasLiked: true,
        type: "image"
    },
    {
        id: 3,
        author: {
            name: "Trần Minh Hoàng",
            avatar: null,
            role: "Tech Lead"
        },
        content: "Hardest interview question I've faced: 'Design a real-time chat system for 1 million concurrent users'\n\nMy approach: WebSocket, Load Balancer, Redis pub/sub, Database sharding... \n\nAnyone have other interesting cases? Share below! 🚀",
        timestamp: "1 day ago",
        likes: 67,
        comments: 23,
        shares: 12,
        views: 445,
        tags: ["Technical", "System Design", "Interview"],
        hasLiked: false,
        type: "discussion"
    }
]

const comments = {
    1: [
        {
            id: 1,
            author: "Phạm Văn Nam",
            content: "Thanks for sharing! I'm preparing for an interview too, taking notes.",
            timestamp: "1 hour ago",
            likes: 3
        },
        {
            id: 2,
            author: "Lê Thị Hoa",
            content: "Agreed! Researching the company is crucial. Many candidates skip this.",
            timestamp: "45 mins ago",
            likes: 5
        }
    ],
    2: [
        {
            id: 3,
            author: "Đinh Minh Tuấn",
            content: "One more tip: Have detailed case studies for your top 2-3 projects!",
            timestamp: "2 hours ago",
            likes: 8
        }
    ]
}

export default function BlogPage() {
    const [newPost, setNewPost] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const [showComments, setShowComments] = useState<number | null>(null)

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
            <div className="container px-4 mx-auto py-6">
                <Breadcrumb
                    items={[
                        { label: "Community" }
                    ]}
                />

                <div className="grid lg:grid-cols-4 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold mb-2">SmartCV Community</h1>
                                <p className="text-muted-foreground">
                                    Share experiences, connect, and learn from the community
                                </p>
                            </div>
                            <Button>
                                <Plus className="w-4 h-4 mr-2" />
                                Create Post
                            </Button>
                        </div>

                        {/* Create Post */}
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex space-x-4">
                                    <Avatar>
                                        <AvatarFallback>YU</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-4">
                                        <Textarea
                                            placeholder="What do you want to share?"
                                            value={newPost}
                                            onChange={(e) => setNewPost(e.target.value)}
                                            className="min-h-[100px] border-0 focus-visible:ring-0 resize-none bg-muted/50"
                                        />
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2 sm:space-x-4">
                                                <Button variant="ghost" size="sm">
                                                    <ImageIcon className="w-4 h-4 mr-2" />
                                                    Photo
                                                </Button>
                                                <Button variant="ghost" size="sm">
                                                    <Video className="w-4 h-4 mr-2" />
                                                    Video
                                                </Button>
                                                <Button variant="ghost" size="sm">
                                                    <Smile className="w-4 h-4 mr-2" />
                                                    Emoji
                                                </Button>
                                            </div>
                                            <Button disabled={!newPost.trim()}>
                                                <Send className="w-4 h-4 mr-2" />
                                                Post
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Posts Feed */}
                        <div className="space-y-6">
                            {blogPosts.map((post) => (
                                <Card key={post.id} className="hover:shadow-md transition-shadow">
                                    <CardContent className="p-6">
                                        {/* Post Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                <Avatar>
                                                    <AvatarFallback>
                                                        {post.author.name.split(' ').map(n => n[0]).join('')}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="flex items-center space-x-2 flex-wrap">
                                                        <h4 className="font-medium">{post.author.name}</h4>
                                                        <Badge variant="outline" className="text-xs">
                                                            {post.author.role}
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="sm">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </Button>
                                        </div>

                                        {/* Post Content */}
                                        <div className="space-y-4">
                                            <p className="whitespace-pre-line leading-relaxed">{post.content}</p>

                                            {post.image && (
                                                <div className="rounded-lg overflow-hidden relative w-full h-64">
                                                    <ImageWithFallback
                                                        src={post.image}
                                                        alt="Post image"
                                                        fill
                                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                            )}

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.map((tag, index) => (
                                                    <Badge key={index} variant="secondary" className="text-xs">
                                                        #{tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Post Stats */}
                                        <div className="flex items-center justify-between mt-6 pt-4 border-t">
                                            <div className="flex items-center space-x-6">
                                                <button
                                                    className={`flex items-center space-x-2 text-sm hover:text-red-500 transition-colors ${post.hasLiked ? 'text-red-500' : 'text-muted-foreground'
                                                        }`}
                                                >
                                                    <Heart className={`w-4 h-4 ${post.hasLiked ? 'fill-current' : ''}`} />
                                                    <span>{post.likes}</span>
                                                </button>

                                                <button
                                                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                                                    onClick={() => setShowComments(showComments === post.id ? null : post.id)}
                                                >
                                                    <MessageCircle className="w-4 h-4" />
                                                    <span>{post.comments}</span>
                                                </button>

                                                <button className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-green-500 transition-colors">
                                                    <Share2 className="w-4 h-4" />
                                                    <span>{post.shares}</span>
                                                </button>
                                            </div>

                                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                                <Eye className="w-4 h-4" />
                                                <span>{post.views}</span>
                                            </div>
                                        </div>

                                        {/* Comments Section */}
                                        {showComments === post.id && (
                                            <div className="mt-6 pt-4 border-t space-y-4">
                                                <div className="space-y-3">
                                                    {comments[post.id as keyof typeof comments]?.map((comment: any) => (
                                                        <div key={comment.id} className="flex space-x-3">
                                                            <Avatar className="w-8 h-8">
                                                                <AvatarFallback className="text-xs">
                                                                    {comment.author.split(' ').map((n: string) => n[0]).join('')}
                                                                </AvatarFallback>
                                                            </Avatar>
                                                            <div className="flex-1">
                                                                <div className="bg-muted p-3 rounded-lg">
                                                                    <h5 className="text-sm font-medium mb-1">{comment.author}</h5>
                                                                    <p className="text-sm">{comment.content}</p>
                                                                </div>
                                                                <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                                                                    <span>{comment.timestamp}</span>
                                                                    <button className="hover:text-blue-500 flex items-center space-x-1">
                                                                        <ThumbsUp className="w-3 h-3" />
                                                                        <span>{comment.likes}</span>
                                                                    </button>
                                                                    <button className="hover:text-blue-500">Reply</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Add Comment */}
                                                <div className="flex space-x-3">
                                                    <Avatar className="w-8 h-8">
                                                        <AvatarFallback className="text-xs">YU</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1 flex space-x-2">
                                                        <Input placeholder="Write a comment..." className="flex-1" />
                                                        <Button size="sm">
                                                            <Send className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Search */}
                        <Card>
                            <CardContent className="p-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                    <Input
                                        placeholder="Search posts..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Trending Topics */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center">
                                    <TrendingUp className="w-5 h-5 mr-2" />
                                    Trending Topics
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                                    <span className="text-sm">#CV2024</span>
                                    <Badge variant="outline">234</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                                    <span className="text-sm">#TechInterview</span>
                                    <Badge variant="outline">189</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                                    <span className="text-sm">#HiringIT</span>
                                    <Badge variant="outline">156</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                                    <span className="text-sm">#CareerTips</span>
                                    <Badge variant="outline">143</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Suggested Users */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Suggested Connections</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <Avatar>
                                            <AvatarFallback>HT</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="text-sm font-medium">Hoàng Thanh</h4>
                                            <p className="text-xs text-muted-foreground">HR Director</p>
                                        </div>
                                    </div>
                                    <Button size="sm" variant="outline">Connect</Button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <Avatar>
                                            <AvatarFallback>ML</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="text-sm font-medium">Mai Linh</h4>
                                            <p className="text-xs text-muted-foreground">Product Manager</p>
                                        </div>
                                    </div>
                                    <Button size="sm" variant="outline">Connect</Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Stats */}
                        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                            <CardHeader>
                                <CardTitle className="text-lg">Community Stats</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-sm">Members</span>
                                    <span className="text-sm font-medium">12.5k</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm">Posts Today</span>
                                    <span className="text-sm font-medium">45</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm">Comments Today</span>
                                    <span className="text-sm font-medium">128</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
