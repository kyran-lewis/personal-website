import { useParams, Link } from "react-router-dom";
import { PARSED_BLOG_POSTS } from "../BLOG_POSTS";
import ReactMarkdown from "react-markdown";

// interface Props {
//   post: BlogPostData;
// }

function ViewBlogPostPage() {
  const { id } = useParams<{ id: string }>();

  const post = id ? PARSED_BLOG_POSTS[Number(id) - 1] : null;

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
    <main className="max-w-4xl mx-auto px-4 py-12 md:py-16">
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

      <article className="bg-white border border-gray-200 rounded-3xl p-6 md:p-12 shadow-sm">
        <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-normal">
          <ReactMarkdown
            children={post.content}
            components={{
              // 🛠️ Map raw HTML tags straight to your Tailwind styles!
              h3: ({ ...props }) => (
                <h3 className="text-2xl font-bold" {...props} />
              ),
              p: ({ ...props }) => <p {...props} />,
            }}
          />
          {/* {post.content.map((item, index) =>
            item.type === "header" ? (
              <h3 className="text-2xl font-bold" key={index}>
                {item.body}
              </h3>
            ) : (
              <p key={index}>{item.body}</p>
            ),
          )} */}
        </div>
      </article>
    </main>
  );
}

export default ViewBlogPostPage;
