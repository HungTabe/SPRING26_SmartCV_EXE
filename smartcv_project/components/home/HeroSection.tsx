"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight, FileText, Video, Users } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-32">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        ✨ New AI Features Available
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-foreground">
                        Master Your Career Journey with <span className="text-primary">SmartCV</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl">
                        The all-in-one platform for building professional resumes, practicing interviews, and connecting with industry mentors.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <Link href="/create-cv">
                            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                                Create Your CV <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/interview-guides">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
                                Practice Interview
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full text-left">
                        <div className="flex flex-col space-y-2 p-6 rounded-xl bg-card border shadow-sm">
                            <div className="p-3 w-fit rounded-lg bg-blue-100 text-blue-600">
                                <FileText className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">Smart CV Builder</h3>
                            <p className="text-muted-foreground">Create ATS-friendly resumes with AI-powered suggestions.</p>
                        </div>
                        <div className="flex flex-col space-y-2 p-6 rounded-xl bg-card border shadow-sm">
                            <div className="p-3 w-fit rounded-lg bg-purple-100 text-purple-600">
                                <Video className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">Video Interview</h3>
                            <p className="text-muted-foreground">Practice with AI interviewers and get real-time feedback.</p>
                        </div>
                        <div className="flex flex-col space-y-2 p-6 rounded-xl bg-card border shadow-sm">
                            <div className="p-3 w-fit rounded-lg bg-green-100 text-green-600">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">Expert Community</h3>
                            <p className="text-muted-foreground">Connect with mentors and peers for career advice.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
