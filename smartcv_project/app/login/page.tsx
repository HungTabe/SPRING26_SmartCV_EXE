"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Mail, Lock, Eye, EyeOff, Facebook, Chrome } from "lucide-react"

export default function LoginPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Link href="/">
                    <Button
                        variant="ghost"
                        className="mb-6 p-0 h-auto text-muted-foreground hover:text-foreground hover:bg-transparent"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Button>
                </Link>

                <Card className="border-0 shadow-xl">
                    <CardHeader className="text-center space-y-4">
                        <div className="flex justify-center">
                            <div className="rounded-lg bg-primary p-3">
                                <span className="text-primary-foreground font-bold text-xl">CV</span>
                            </div>
                        </div>
                        <div>
                            <CardTitle className="text-2xl">Welcome Back</CardTitle>
                            <CardDescription>
                                Sign in to your SmartCV account
                            </CardDescription>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {/* Social Login */}
                        <div className="space-y-3">
                            <Button variant="outline" className="w-full">
                                <Chrome className="w-4 h-4 mr-2" />
                                Sign in with Google
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Facebook className="w-4 h-4 mr-2" />
                                Sign in with Facebook
                            </Button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <Separator />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                            </div>
                        </div>

                        {/* Email/Password Form */}
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        className="pl-10"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="pl-10 pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-4 h-4" />
                                        ) : (
                                            <Eye className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" className="rounded" />
                                    <span>Remember me</span>
                                </label>
                                <Link href="#" className="text-blue-600 hover:underline">
                                    Forgot password?
                                </Link>
                            </div>

                            <Button className="w-full" size="lg">
                                Sign In
                            </Button>
                        </form>

                        <div className="text-center text-sm text-muted-foreground">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-blue-600 hover:underline font-medium">
                                Sign up now
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                {/* Benefits */}
                <div className="mt-8 text-center space-y-4">
                    <h3 className="text-lg font-medium">Why create an account?</h3>
                    <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Save your learning progress</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Access full course library</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>Earn completion certificates</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
