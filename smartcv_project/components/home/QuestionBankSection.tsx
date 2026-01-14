"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardFooter, CardHeader, CardTitle, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { ArrowRight, HelpCircle } from "lucide-react"

const questions = [
    {
        category: "Behavioral",
        title: "Tell me about a time you failed.",
        difficulty: "Medium",
        views: "1.2k"
    },
    {
        category: "Technical",
        title: "Explain RESTful APIs to a non-technical person.",
        difficulty: "Hard",
        views: "850"
    },
    {
        category: "Situational",
        title: "How do you handle tight deadlines?",
        difficulty: "Easy",
        views: "2.5k"
    },
    {
        category: "Leadership",
        title: "Describe a conflict within your team and how you resolved it.",
        difficulty: "Medium",
        views: "1.5k"
    }
]

export function QuestionBankSection() {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-4">Real Interview Questions</h2>
                    <p className="text-muted-foreground text-lg">
                        Practice with thousands of real questions from top companies. Filter by role, difficulty, and company.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {questions.map((q, index) => (
                        <Card key={index} className="hover:border-primary/50 transition-colors cursor-pointer flex flex-col justify-between">
                            <CardHeader className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <Badge variant="outline">{q.category}</Badge>
                                    <span className={`text-xs px-2 py-1 rounded-full ${q.difficulty === 'Hard' ? 'bg-red-100 text-red-700' :
                                            q.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-green-100 text-green-700'
                                        }`}>
                                        {q.difficulty}
                                    </span>
                                </div>
                                <CardTitle className="text-lg leading-tight">"{q.title}"</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <HelpCircle className="w-4 h-4 mr-1" />
                                    {q.views} answers
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="w-full text-primary hover:text-primary/80">
                                    View Sample Answers
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link href="/question-bank">
                        <Button size="lg" variant="secondary">
                            Browse Question Bank <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
