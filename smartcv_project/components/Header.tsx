"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "./ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Menu, Search, Bell, User } from "lucide-react"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Interview Guides", href: "/interview-guides" },
        { label: "Question Bank", href: "/question-bank" },
        { label: "Blog", href: "/blog" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 mx-auto">
                <div className="flex items-center gap-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="rounded-lg bg-primary p-1.5">
                            <span className="text-primary-foreground font-bold text-lg">CV</span>
                        </div>
                        <span className="font-bold text-xl hidden md:inline-block">SmartCV</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navItems.map((item) => (
                                    <NavigationMenuItem key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            {item.label}
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="text-muted-foreground">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <div className="hidden md:flex items-center gap-2">
                        <Link href="/login">
                            <Button variant="ghost">Sign In</Button>
                        </Link>
                        <Link href="/login">
                            <Button>Get Started</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col gap-4 mt-8">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="text-lg font-medium hover:text-primary transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                    <div className="h-px bg-border my-4" />
                                    <div className="flex flex-col gap-2">
                                        <Link href="/login" onClick={() => setIsOpen(false)}>
                                            <Button variant="ghost" className="w-full justify-start">
                                                Sign In
                                            </Button>
                                        </Link>
                                        <Link href="/login" onClick={() => setIsOpen(false)}>
                                            <Button className="w-full">Get Started</Button>
                                        </Link>
                                    </div>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
