"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { ArrowRight, BookOpen, CheckCircle, Target } from "lucide-react"

export function InterviewGuideSection() {
    return (
        <section className="py-16 bg-background">
            <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Ace Your Next Interview</h2>
                        <p className="text-muted-foreground text-lg">
                            Comprehensive guides tailored to your industry and role. Learn what recruiters are really looking for.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                                    <BookOpen className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Step-by-Step Preparation</h3>
                                    <p className="text-muted-foreground">Detailed roadmaps from application to offer letter.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                                    <Target className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Role-Specific Tips</h3>
                                    <p className="text-muted-foreground">Expert advice for Tech, Finance, Marketing, and more.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Mock Interviews</h3>
                                    <p className="text-muted-foreground">Practice with AI or community peers.</p>
                                </div>
                            </div>
                        </div>

                        <Link href="/interview-guides">
                            <Button size="lg" className="mt-4">
                                Explore Guides <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid gap-6">
                        <Card className="p-6 border-l-4 border-l-blue-500 shadow-lg transform hover:-translate-y-1 transition-transform">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="font-bold text-lg">Software Engineer</h4>
                                    <p className="text-sm text-muted-foreground">Tech Industry</p>
                                </div>
                                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">Popular</span>
                            </div>
                            <p className="text-muted-foreground mb-4">Master algorithms, system design, and behavioral questions.</p>
                            <Button variant="link" className="p-0 h-auto">Read Guide &rarr;</Button>
                        </Card>

                        <Card className="p-6 border-l-4 border-l-purple-500 shadow-lg transform hover:-translate-y-1 transition-transform translate-x-4">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="font-bold text-lg">Product Manager</h4>
                                    <p className="text-sm text-muted-foreground">Product</p>
                                </div>
                                <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded">New</span>
                            </div>
                            <p className="text-muted-foreground mb-4">Product sense, execution, and leadership strategies.</p>
                            <Button variant="link" className="p-0 h-auto">Read Guide &rarr;</Button>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
