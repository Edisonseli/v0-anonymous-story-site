import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Shield, Search } from "lucide-react"

const mysteriousSymbols = [
  "∞",
  "◊",
  "※",
  "⟡",
  "◈",
  "⬟",
  "◉",
  "⬢",
  "◎",
  "⬡",
  "◈",
  "⟢",
  "◊",
  "⬟",
  "◉",
  "⬢",
  "∴",
  "∵",
  "∷",
  "∸",
  "∹",
  "∺",
  "∻",
  "∼",
  "∽",
  "∾",
  "∿",
  "≀",
  "≁",
  "≂",
  "≃",
  "≄",
  "⟐",
  "⟑",
  "⟒",
  "⟓",
  "⟔",
  "⟕",
  "⟖",
  "⟗",
  "⟘",
  "⟙",
  "⟚",
  "⟛",
  "⟜",
  "⟝",
  "⟞",
  "⟟",
]

const mysteriousQuotes = [
  "Every soul has a story worth telling...",
  "In anonymity, we find our truest voice...",
  "The mask reveals more than the face...",
  "Stories connect us across the void...",
  "In darkness, we share our light...",
  "Anonymous hearts beat as one...",
  "Truth emerges from the shadows...",
  "Every whisper carries a universe...",
]

export default function HomePage() {
  const randomQuote = mysteriousQuotes[Math.floor(Math.random() * mysteriousQuotes.length)]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4 relative overflow-hidden">
      {/* Mysterious floating symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-gray-800 opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          >
            {mysteriousSymbols[Math.floor(Math.random() * mysteriousSymbols.length)]}
          </div>
        ))}
      </div>

      {/* Mysterious fog effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60 pointer-events-none" />

      <div className="max-w-3xl w-full text-center space-y-6 relative z-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Anonymous Stories
        </h1>
        <p className="text-xl text-gray-400">Write the story of your life behind the mask of a random identity.</p>

        {/* Mysterious quote */}
        <div className="py-4">
          <p className="text-sm text-gray-500 italic font-light">"{randomQuote}"</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link href="/create">
            <Button className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105">
              Start Writing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/stories">
            <Button
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Read Stories <BookOpen className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/search">
            <Button
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Search Stories <Search className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-12">
          <div className="text-center space-y-2">
            <Shield className="h-8 w-8 mx-auto text-gray-400" />
            <h3 className="font-semibold">Completely Anonymous</h3>
            <p className="text-sm text-gray-500">Share your deepest stories without revealing your identity</p>
          </div>
          <div className="text-center space-y-2">
            <BookOpen className="h-8 w-8 mx-auto text-gray-400" />
            <h3 className="font-semibold">Organized Stories</h3>
            <p className="text-sm text-gray-500">Browse by categories and tags to find stories that resonate</p>
          </div>
          <div className="text-center space-y-2">
            <Search className="h-8 w-8 mx-auto text-gray-400" />
            <h3 className="font-semibold">Powerful Search</h3>
            <p className="text-sm text-gray-500">Find stories with full-text search and smart filtering</p>
          </div>
          <div className="text-center space-y-2">
            <Users className="h-8 w-8 mx-auto text-gray-400" />
            <h3 className="font-semibold">Connect Through Stories</h3>
            <p className="text-sm text-gray-500">Find connection and understanding through shared experiences</p>
          </div>
        </div>
      </div>
    </div>
  )
}
