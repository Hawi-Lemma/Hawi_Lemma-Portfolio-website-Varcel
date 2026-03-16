"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-serif text-2xl text-foreground hover:text-primary transition-colors"
        >
          AC
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-card border-b border-border animate-in slide-in-from-top-2">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
