export interface Story {
  id: string
  name: string
  content: string
  dedication?: string
  date: string
  category: StoryCategory
  tags: string[]
  likes: number
}

export type StoryCategory =
  | "childhood"
  | "love"
  | "loss"
  | "adventure"
  | "dreams"
  | "family"
  | "friendship"
  | "career"
  | "travel"
  | "mystery"
  | "other"

export interface CategoryInfo {
  id: StoryCategory
  name: string
  description: string
  color: string
  icon: string
}

export const STORY_CATEGORIES: CategoryInfo[] = [
  {
    id: "childhood",
    name: "Childhood",
    description: "Memories from your early years",
    color: "bg-pink-500",
    icon: "🧸",
  },
  {
    id: "love",
    name: "Love & Romance",
    description: "Stories of love, heartbreak, and relationships",
    color: "bg-red-500",
    icon: "❤️",
  },
  {
    id: "loss",
    name: "Loss & Grief",
    description: "Dealing with loss and finding healing",
    color: "bg-gray-500",
    icon: "🕊️",
  },
  {
    id: "adventure",
    name: "Adventure",
    description: "Exciting journeys and bold experiences",
    color: "bg-orange-500",
    icon: "🗺️",
  },
  {
    id: "dreams",
    name: "Dreams & Aspirations",
    description: "Goals, ambitions, and life dreams",
    color: "bg-purple-500",
    icon: "✨",
  },
  {
    id: "family",
    name: "Family",
    description: "Stories about family bonds and relationships",
    color: "bg-green-500",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    id: "friendship",
    name: "Friendship",
    description: "Tales of friendship and companionship",
    color: "bg-yellow-500",
    icon: "🤝",
  },
  {
    id: "career",
    name: "Career & Work",
    description: "Professional life and career journeys",
    color: "bg-blue-500",
    icon: "💼",
  },
  {
    id: "travel",
    name: "Travel",
    description: "Adventures from around the world",
    color: "bg-teal-500",
    icon: "✈️",
  },
  {
    id: "mystery",
    name: "Mystery & Unknown",
    description: "Unexplained events and mysterious encounters",
    color: "bg-indigo-500",
    icon: "🔮",
  },
  {
    id: "other",
    name: "Other",
    description: "Stories that don't fit other categories",
    color: "bg-gray-600",
    icon: "📝",
  },
]

export const POPULAR_TAGS = [
  "inspiring",
  "emotional",
  "funny",
  "sad",
  "uplifting",
  "life-changing",
  "nostalgic",
  "heartwarming",
  "difficult",
  "growth",
  "healing",
  "courage",
  "hope",
  "wisdom",
  "transformation",
  "resilience",
  "discovery",
  "connection",
]
