import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-white border-t pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                                <span className="font-bold text-xl">CV</span>
                            </div>
                            <span className="font-bold text-xl">SmartCV</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Empowering your career journey with AI-driven resume building, interview preparation, and expert guidance.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/features" className="hover:text-primary">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
                            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/interview-guides" className="hover:text-primary">Interview Guide</Link></li>
                            <li><Link href="/question-bank" className="hover:text-primary">Question Bank</Link></li>
                            <li><Link href="/videos" className="hover:text-primary">Video Tutorials</Link></li>
                            <li><Link href="/templates" className="hover:text-primary">CV Templates</Link></li>
                            <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 mt-0.5" />
                                <span>123 Innovation Drive, Tech Valley, CA 94043</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5" />
                                <span>support@smartcv.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} SmartCV. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
