"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Share2, Check } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import type { Story } from "@/lib/types"
import { STORY_CATEGORIES } from "@/lib/types"

interface RainbowTextProps {
  text: string
}

function RainbowText({ text }: RainbowTextProps) {
  const colors = [
    "text-red-400",
    "text-orange-400",
    "text-yellow-400",
    "text-green-400",
    "text-blue-400",
    "text-indigo-400",
    "text-purple-400",
    "text-pink-400",
  ]

  return (
    <span>
      {text.split("").map((char, index) => (
        <span key={index} className={colors[index % colors.length]}>
          {char}
        </span>
      ))}
    </span>
  )
}

interface StoryCardProps {
  story: Story
  RainbowText?: React.ComponentType<{ text: string }>
  onTagClick?: (tag: string) => void
  onCategoryClick?: (category: string) => void
}

export default function StoryCard({
  story,
  RainbowText: RainbowTextComponent,
  onTagClick,
  onCategoryClick,
}: StoryCardProps) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(story.likes || 0)
  const [copied, setCopied] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikeCount((prev) => prev - 1)
    } else {
      setLiked(true)
      setLikeCount((prev) => prev + 1)
    }
  }

  const handleShare = async () => {
    const shareText = `Story by ${story.name}${story.dedication ? `\nDedicated to: ${story.dedication}` : ""}\nCategory: ${story.category}\nTags: ${story.tags.join(", ")}\n\n${story.content}`

    try {
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy story:", err)
    }
  }

  const categoryInfo = STORY_CATEGORIES.find((cat) => cat.id === story.category)

  return (
    <Card className="bg-gray-900 border-gray-800 text-white">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <Button variant="ghost" size="sm" onClick={handleShare} className="text-gray-400 hover:text-white p-1">
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Share2 className="h-4 w-4" />}
          </Button>
          <div className="flex-1 text-center">
            <h3 className="text-xl font-semibold">
              {RainbowTextComponent ? <RainbowTextComponent text={story.name} /> : story.name}
            </h3>
          </div>
          <p className="text-xs text-gray-400">{formatDistanceToNow(new Date(story.date), { addSuffix: true })}</p>
        </div>

        {/* Category and Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          {categoryInfo && (
            <Badge
              className={`${categoryInfo.color} text-white cursor-pointer hover:opacity-80`}
              onClick={() => onCategoryClick?.(story.category)}
            >
              {categoryInfo.icon} {categoryInfo.name}
            </Badge>
          )}
          {story.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 cursor-pointer"
              onClick={() => onTagClick?.(tag)}
            >
              #{tag}
            </Badge>
          ))}
        </div>

        {story.dedication && (
          <p className="text-sm text-gray-400 text-center mt-2">
            Dedicated to: {RainbowTextComponent ? <RainbowTextComponent text={story.dedication} /> : story.dedication}
          </p>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <div className="flex flex-col items-center space-y-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`p-1 ${liked ? "text-red-400" : "text-gray-400 hover:text-red-400"}`}
            >
              <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
            </Button>
            {likeCount > 0 && <span className="text-xs text-gray-400">{likeCount}</span>}
          </div>
          <div className="flex-1">
            <p className="whitespace-pre-wrap text-sm">
              {RainbowTextComponent
                ? story.content.split("\n").map((paragraph, i) => (
                    <span key={i}>
                      <RainbowTextComponent text={paragraph} />
                      {i < story.content.split("\n").length - 1 && <br />}
                    </span>
                  ))
                : story.content}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
