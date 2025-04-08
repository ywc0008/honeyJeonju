"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full flex justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">전주 꿀팁</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/honeytip"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            꿀 정보
          </Link>
          <Link
            href="/attractions"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            관광지
          </Link>
          <Link
            href="/accommodations"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            숙소
          </Link>
          <Link
            href="/tips"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            여행 팁
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="검색..."
                className="w-[200px] pl-8"
              />
            </div>
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">테마 변경</span>
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">메뉴</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 grid gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="검색..."
                className="w-full pl-8"
              />
            </div>
            <nav className="grid gap-2">
              <Link
                href="/food"
                className="flex items-center gap-2 text-sm font-medium p-2 hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                맛집
              </Link>
              <Link
                href="/attractions"
                className="flex items-center gap-2 text-sm font-medium p-2 hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                관광지
              </Link>
              <Link
                href="/accommodations"
                className="flex items-center gap-2 text-sm font-medium p-2 hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                숙소
              </Link>
              <Link
                href="/tips"
                className="flex items-center gap-2 text-sm font-medium p-2 hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                여행 팁
              </Link>
              {/* <div className="flex items-center justify-between p-2">
                <span className="text-sm font-medium">테마</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">테마 변경</span>
                </Button>
              </div> */}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
