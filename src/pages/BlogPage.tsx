import { useState } from "react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../BLOG_POSTS";
import BlogPost from "../components/BlogPost";
import CategoryFilter from "../components/CategoryFilter";

function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter posts based on click state
  const filteredPosts = BLOG_POSTS.filter((post) =>
    activeFilter === "All" ? true : post.category === activeFilter,
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      {/* --- SECTION 1: HEADER SECTION --- */}
      <header className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
          Blog
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Deep dives into full-stack development pipelines, quality assurance
          architecture, and clean computer science foundations.
        </p>
      </header>

      <CategoryFilter
        categories={["All", "Testing", "Frontend", "Backend", "DevOps"]}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {filteredPosts.length > 0 ? (
        /* Reusing your h-full flexible layout configuration so buttons align neatly at the bottom */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <BlogPost post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-gray-500">
            No posts published under this category yet.
          </p>
        </div>
      )}
    </main>
  );
}

export default BlogPage;
