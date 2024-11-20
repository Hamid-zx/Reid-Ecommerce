import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: '2024 Fashion Trends You Need to Know',
    excerpt: 'Discover the latest fashion trends that will dominate the industry this year.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80',
    date: 'Mar 15, 2024',
    author: 'Sarah Johnson',
    category: 'Fashion'
  },
  {
    id: 2,
    title: 'Sustainable Fashion: A Guide to Eco-Friendly Shopping',
    excerpt: 'Learn how to make environmentally conscious decisions while shopping for clothes.',
    image: 'https://images.unsplash.com/photo-1493655161922-ef98929de9d8?auto=format&fit=crop&q=80',
    date: 'Mar 12, 2024',
    author: 'Michael Brown',
    category: 'Sustainability'
  },
  {
    id: 3,
    title: 'How to Build a Capsule Wardrobe',
    excerpt: 'Create a versatile wardrobe with fewer pieces that work perfectly together.',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80',
    date: 'Mar 10, 2024',
    author: 'Emma Davis',
    category: 'Style Guide'
  }
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Featured Post */}
      <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80"
          alt="Featured post"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm mb-4">
            Featured
          </span>
          <h1 className="text-4xl font-bold mb-4">
            The Future of Fashion: Technology Meets Style
          </h1>
          <div className="flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Mar 18, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>By Jessica Williams</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-sm text-gray-500">{post.category}</span>
            <h2 className="text-xl font-bold mt-2 mb-3 group-hover:text-gray-600">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{post.date}</span>
                <span>By {post.author}</span>
              </div>
              <Link
                to={`/blog/${post.id}`}
                className="flex items-center gap-2 text-black hover:text-gray-600"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}