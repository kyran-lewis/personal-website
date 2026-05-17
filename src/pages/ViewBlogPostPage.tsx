import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS, type BlogPostData } from "../BLOG_POSTS";

// interface Props {
//   post: BlogPostData;
// }

function ViewBlogPostPage() {
  const { id } = useParams<{ id: string }>();

  const post = id ? BLOG_POSTS[Number(id) - 1] : null;

  // Fallback UI state if the reader inputs an invalid URL path
  if (!post) {
    return (
      <div className="max-w-xl mx-auto text-center py-20 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Blog Post Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The blog post path you are looking for might have been moved or
          renamed.
        </p>
        <Link
          to="/blog"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition"
        >
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    /* Global layout wrap matching full page constraints */
    <main className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      {/* 1. BACK BUTTON BUTTON LINK */}
      <div className="mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-amber-600 transition-colors group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">
            ←
          </span>
          Back to Blog
        </Link>
      </div>

      {/* 2. POST HEADER LAYOUT METADATA */}
      <header className="text-center max-w-3xl mx-auto mb-10">
        <span className="bg-amber-50 text-amber-700 border border-amber-100 text-xs font-semibold px-3 py-1 rounded-md inline-block mb-4">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-400">
          <span>{post.date}</span>
        </div>
      </header>

      {/* 3. THE ARTICLE CANVAS CARD */}
      <article className="bg-white border border-gray-200 rounded-3xl p-6 md:p-12 shadow-sm">
        {/* 4. DYNAMIC MULTI-PARAGRAPH CONTENT STREAM */}
        {/* 'space-y-6' applies perfectly measured structural spacing between content chunks */}
        <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-normal">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>

      {/* 5. MINIMAL FOOTER CALLOUT */}
      <footer className="mt-12 pt-8 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-500">
          Enjoyed reading? Check out my other articles or view my{" "}
          <Link
            to="/experience"
            className="text-amber-600 hover:underline font-semibold"
          >
            Technical Experience
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}

export default ViewBlogPostPage;
