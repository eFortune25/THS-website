import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { BlogPost } from "@/data/blog-posts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    "Global Health": "bg-blue-100 text-blue-700",
    "Health Systems Strengthening": "bg-teal-100 text-teal-700",
    "Implementation Science": "bg-purple-100 text-purple-700",
    "Monitoring & Evaluation": "bg-indigo-100 text-indigo-700",
    "Digital Health & AI": "bg-cyan-100 text-cyan-700",
    "Global Fund & Development Financing": "bg-green-100 text-green-700",
    "Research & Publication": "bg-orange-100 text-orange-700",
    "WBGH": "bg-pink-100 text-pink-700",
  };

  const cardClass = featured
    ? "group bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-teal-200"
    : "group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200";

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <article className={cardClass}>
        <div className="p-6 sm:p-8">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                categoryColors[post.category] || "bg-gray-100 text-gray-700"
              }`}
            >
              {post.category}
            </span>
            {featured && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className={`font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors ${
              featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            }`}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            className={`text-gray-600 mb-4 line-clamp-3 ${
              featured ? "text-base sm:text-lg" : "text-sm sm:text-base"
            }`}
          >
            {post.excerpt}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* Read More Link */}
          <div className="mt-6">
            <span className="inline-flex items-center text-teal-700 font-semibold group-hover:text-teal-800 transition-colors">
              Read Article
              <svg
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
