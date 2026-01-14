"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card"
import { MessageSquare, Heart, ArrowRight } from "lucide-react"

const posts = [
    {
        id: 1,
        author: "Sarah Jenkins",
        role: "Senior Recruiter",
        avatar: "SJ",
        content: "The #1 mistake I see in resumes is lack of quantifiable results. Don't just say 'managed project', say 'delivered project X under budget by 15%'. Numbers speak louder than words! 📈",
        likes: 124,
        comments: 45,
        tags: ["Resume Tips", "Recruiting"]
    },
    {
        id: 2,
        author: "David Chen",
        role: "Software Architect",
        avatar: "DC",
        content: "Just finished interviewing 10 candidates for a senior dev role. The ones who stood out were those who could admit when they didn't know something but showed how they'd find the answer. Honesty > bluffing.",
        likes: 256,
        comments: 89,
        tags: ["Interview", "Tech"]
    },
    {
        id: 3,
        author: "Emily Watson",
        role: "Career Coach",
        avatar: "EW",
        content: "Negotiation is not about winning, it's about finding mutual value. Always do your market research before discussing numbers. Here is a thread on my favorite resources 👇",
        likes: 89,
        comments: 21,
        tags: ["Negotiation", "Salary"]
    }
]

export function BlogSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Community Insights</h2>
                        <p className="text-muted-foreground">Join the conversation with thousands of professionals</p>
                    </div>
                    <Link href="/blog">
                        <Button variant="outline" className="hidden sm:flex">
                            Visit Community <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <Card key={post.id} className="flex flex-col">
                            <CardHeader className="flex-row gap-4 items-center space-y-0 pb-2">
                                <Avatar>
                                    <AvatarFallback>{post.avatar}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="font-semibold text-sm">{post.author}</h4>
                                    <p className="text-xs text-muted-foreground">{post.role}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 pt-4">
                                <p className="text-sm leading-relaxed mb-4">{post.content}</p>
                                <div className="flex gap-2 flex-wrap">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="pt-0 text-muted-foreground text-sm flex gap-4 mt-auto">
                                <span className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                                    <Heart className="w-4 h-4" /> {post.likes}
                                </span>
                                <span className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
                                    <MessageSquare className="w-4 h-4" /> {post.comments}
                                </span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 sm:hidden">
                    <Link href="/blog">
                        <Button variant="outline" className="w-full">
                            Visit Community <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
