"use server"

import type { Story, StoryCategory } from "./types"
import { searchStories, type SearchOptions, type SearchResult } from "./search"

// In-memory storage for demo purposes
// In production, you'd use a database
const stories: Story[] = []

export async function saveStory(
  name: string,
  content: string,
  category: StoryCategory,
  tags: string[],
  dedication?: string,
): Promise<void> {
  const story: Story = {
    id: Date.now().toString(),
    name,
    content,
    dedication,
    date: new Date().toISOString(),
    category,
    tags: tags.filter((tag) => tag.trim() !== ""),
    likes: 0,
  }

  stories.push(story)

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))
}

export async function getStories(category?: StoryCategory, tag?: string): Promise<Story[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  let filteredStories = [...stories]

  // Filter by category if specified
  if (category) {
    filteredStories = filteredStories.filter((story) => story.category === category)
  }

  // Filter by tag if specified
  if (tag) {
    filteredStories = filteredStories.filter((story) =>
      story.tags.some((storyTag) => storyTag.toLowerCase().includes(tag.toLowerCase())),
    )
  }

  // Return stories in reverse chronological order
  return filteredStories.reverse()
}

export async function searchStoriesAction(options: SearchOptions): Promise<SearchResult[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return searchStories(stories, options)
}

export async function getSearchSuggestionsAction(query: string): Promise<string[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  const { getSearchSuggestions } = await import("./search")
  return getSearchSuggestions(stories, query)
}

export async function getStoriesByCategory(): Promise<Record<StoryCategory, Story[]>> {
  const allStories = await getStories()
  const categorizedStories: Record<StoryCategory, Story[]> = {
    childhood: [],
    love: [],
    loss: [],
    adventure: [],
    dreams: [],
    family: [],
    friendship: [],
    career: [],
    travel: [],
    mystery: [],
    other: [],
  }

  allStories.forEach((story) => {
    categorizedStories[story.category].push(story)
  })

  return categorizedStories
}

export async function getAllTags(): Promise<string[]> {
  const allStories = await getStories()
  const tagSet = new Set<string>()

  allStories.forEach((story) => {
    story.tags.forEach((tag) => tagSet.add(tag))
  })

  return Array.from(tagSet).sort()
}
