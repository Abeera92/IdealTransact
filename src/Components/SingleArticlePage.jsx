// src/components/blog/SingleArticlePage.jsx
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Calendar, Clock } from "lucide-react";
import articles from "./articles";

const SingleArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-2xl text-white/80">Article not found</p>
      </div>
    );
  }

  return (
    <article className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-120 md:h-[500px] lg:h-[600px] overflow-hidden mt-10 mb-10">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent " />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-20 top-10">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-5 py-2 mb-6 text-sm font-bold tracking-wider uppercase bg-teal-600/20 backdrop-blur-md text-teal-400 rounded-full">
              {article.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl">
              {article.title}
            </h1>
            <p className="mt-4 md:mt-6 text-white/90 text-lg md:text-xl max-w-3xl drop-shadow-md">
              {article.description}
            </p>
          </div>
        </div>

        <Link
  to="/blog"
  className="
    absolute z-10 flex items-center gap-2 rounded-full backdrop-blur-md bg-white/10 text-white hover:bg-white/20 transition

    /* Default: small screens - top-right, smaller */
    top-4 right-4 px-3 py-1 text-xs

    /* Medium screens: top-right, slightly bigger */
    md:top-28 md:right-8 md:px-4 md:py-2 md:text-sm

    /* Large screens: top-left, full size */
    lg:top-28 lg:left-8 lg:right-auto lg:px-5 lg:py-3 lg:text-base
  "
>
  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />
  <span className="hidden md:inline lg:inline">Back to Blog</span>
</Link>


      </div>

      {/* Author & Meta */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 pb-12 border-b border-zinc-800">
            <div className="flex items-center gap-4">
              <img
                src={article.authorAvatar}
                alt={article.author}
                className="w-16 h-16 rounded-full object-cover border-2 border-teal-500 shadow-lg"
              />
              <div>
                <p className="font-semibold text-white">{article.author}</p>
                <p className="text-sm text-teal-400">Senior Designer</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-teal-300 mt-4 sm:mt-0">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-none text-white space-y-6 leading-relaxed">
            {article.content.map((block, idx) => {
              switch (block.type) {
                case "p":
                  return (
                    <p key={idx} className="text-lg md:text-xl">
                      {block.text}
                    </p>
                  );
                case "h1":
                  return (
                    <h1
                      key={idx}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold"
                    >
                      {block.text}
                    </h1>
                  );
                case "h2":
                  return (
                    <h2
                      key={idx}
                      className="text-2xl md:text-3xl lg:text-4xl font-semibold"
                    >
                      {block.text}
                    </h2>
                  );
                case "h3":
                  return (
                    <h3
                      key={idx}
                      className="text-xl md:text-2xl lg:text-3xl font-semibold"
                    >
                      {block.text}
                    </h3>
                  );
                case "ul":
                  return (
                    <ul
                      key={idx}
                      className="list-disc pl-6 space-y-2 text-lg md:text-xl"
                    >
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );
                case "blockquote":
                  return (
                    <blockquote
                      key={idx}
                      className="border-l-4 border-teal-500 pl-4 italic text-gray-300"
                    >
                      {block.text}
                    </blockquote>
                  );
                case "a":
                  return (
                    <a
                      key={idx}
                      href={block.href}
                      className="text-teal-400 hover:underline"
                    >
                      {block.text}
                    </a>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleArticlePage;