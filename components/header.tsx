"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingBag } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-foreground tracking-tight">
              STYLE
              <span className="text-accent">CRAFT</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              회사소개
            </a>
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
              제품
            </a>
            <a href="#values" className="text-muted-foreground hover:text-foreground transition-colors">
              가치
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              연락처
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <ShoppingBag className="h-4 w-4 mr-2" />
              쇼핑몰 방문
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              <a href="#about" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">
                회사소개
              </a>
              <a href="#products" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">
                제품
              </a>
              <a href="#values" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">
                가치
              </a>
              <a href="#contact" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">
                연락처
              </a>
              <Button variant="ghost" size="sm" className="w-full justify-start mt-4">
                <ShoppingBag className="h-4 w-4 mr-2" />
                쇼핑몰 방문
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
