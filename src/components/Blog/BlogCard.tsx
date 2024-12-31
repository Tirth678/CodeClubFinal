import React from 'react';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="bg-[#2a2a2a] rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        <h3 className="text-xl font-semibold hover:text-yellow-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-400 line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </article>
  );
};

export default BlogCard;