"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";
import { blogPosts, getAllCategories, getFeaturedPost } from "@/data/blog-posts";
import { BlogCard } from "@/components/blog/BlogCard";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import Link from "next/link";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllCategories();
  const featuredPost = getFeaturedPost();

  // Filter posts by category
  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  // Exclude featured post from the grid
  const gridPosts = filteredPosts.filter((post) => post.id !== featuredPost?.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <BookOpen className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Insights & Publications
            </h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto">
              Thought leadership on global health, implementation science, public health research, monitoring and evaluation, digital health, and scientific publication.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && !selectedCategory && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <BlogCard post={featuredPost} featured={true} />
          </div>
        </section>
      )}

      {/* Blog Post Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {selectedCategory ? `${selectedCategory} Articles` : "All Articles"}
          </h2>
          
          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No articles found in this category. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter/Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center border border-teal-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in collaborating with Transatlantic Health Solutions or learning more about our work? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-700 text-white rounded-lg font-semibold hover:bg-teal-800 transition-all shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/wbgh"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-teal-700 text-teal-700 rounded-lg font-semibold hover:bg-teal-50 transition-all"
              >
                Explore WBGH
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
