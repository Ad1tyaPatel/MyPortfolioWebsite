"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Sample blog posts
const blogPosts = [
  {
    id: "neural-networks-explained",
    title: "Neural Networks Explained: A Beginner's Guide",
    excerpt: "An introduction to neural networks and deep learning concepts for beginners, with practical examples.",
    date: "June 15, 2023",
    image: "/images/blog/neural-networks.jpg",
    readTime: "8 min read",
    tags: ["AI", "Machine Learning", "Deep Learning"]
  },
  {
    id: "future-of-ai",
    title: "The Future of AI: Trends to Watch in 2024",
    excerpt: "Exploring the most promising trends in artificial intelligence that will shape our future in the coming years.",
    date: "October 22, 2023",
    image: "/images/blog/ai-future.jpg",
    readTime: "6 min read",
    tags: ["AI", "Future Tech", "Predictions"]
  },
  {
    id: "building-portfolio",
    title: "Building a Modern Developer Portfolio in 2024",
    excerpt: "Learn how to create a stunning developer portfolio that stands out and showcases your skills effectively.",
    date: "January 8, 2024",
    image: "/images/blog/portfolio.jpg",
    readTime: "5 min read",
    tags: ["Web Development", "Career", "Design"]
  }
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="min-h-screen py-20 px-4"
    >
      <motion.div
        className="w-full max-w-6xl mx-auto mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          My <span className="text-primary">Blog</span>
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Thoughts, insights, and tutorials on AI, web development, and technology.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Link href={`/blog/${post.id}`} className="block">
              <div className="rounded-lg overflow-hidden border border-border bg-card h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="bg-primary/10 h-full w-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  {/* Using placeholder until real images are added */}
                  {/* <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  /> */}
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-muted mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  
                  <p className="text-muted text-sm mb-4 flex-1">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs py-1 px-2 rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="w-full max-w-6xl mx-auto mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Link 
          href="/blog"
          className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/80 transition-colors font-medium"
        >
          View All Articles
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
} 