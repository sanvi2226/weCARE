import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Clock, User, ArrowRight, Calendar } from "lucide-react";

function Blogs() {
    const blogPosts = [
        {
            id: 1,
            title: "How to look Beauty-Sleep Perfect, even after an All-Nighter?",
            excerpt: "Having friends over means saying bye-bye to your sleep. It will be all about fun, food and gossips. Don't Worry! We've got you covered. Turn your dull and tired skin from meh to yeah in these 5 simple steps.",
            image: "https://images.pexels.com/photos/4473863/pexels-photo-4473863.jpeg",
            author: "Beauty Expert",
            readTime: "5 min read",
            date: "Dec 15, 2024",
            link: "/blogone",
            preview: [
                {
                    step: "1. Rise and Shine with a Refreshing Cleanse",
                    content: "First things first, wake up your skin with a gentle cleanser. This will help remove any leftover makeup, sweat, or party grime from last night..."
                },
                {
                    step: "2. Hydrate Like a Boss",
                    content: "After cleansing, it's time to drench your skin in hydration. Apply a hydrating toner or essence to prep your skin for the layers to come..."
                }
            ]
        },
        {
            id: 2,
            title: "What to apply first: moisturizer, sunscreen or makeup?",
            excerpt: "Whether you're a makeup maven or a skincare newbie, the age-old question remains: What comes first—moisturizer, sunscreen, or makeup? Stay cool, we're here to make it easy!",
            image: "https://images.pexels.com/photos/3736397/pexels-photo-3736397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            author: "Skincare Guru",
            readTime: "4 min read",
            date: "Dec 12, 2024",
            link: "/blogtwo",
            preview: [
                {
                    step: "Step 1: Moisturizer - Your Skin's BFF",
                    content: "To begin with, moisture is key! Think of moisturizer as your skin's bestie that never lets you down. Apply your moisturizer to keep your skin hydrated..."
                },
                {
                    step: "Step 2: Sunscreen - The Ultimate Shield",
                    content: "Next up, it's time to suit up with sunscreen! Imagine your skin is a superhero, and sunscreen is its super shield..."
                }
            ]
        },
        {
            id: 3,
            title: "Damaged Skin due to Pollution: Anti-Pollution Products are your Saviour",
            excerpt: "Anti-pollution products are an emerging category of skincare products specifically designed to protect the skin from the harmful effects of environmental pollutants.",
            image: "https://images.pexels.com/photos/3902882/pexels-photo-3902882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            author: "Environmental Expert",
            readTime: "6 min read",
            date: "Dec 10, 2024",
            link: "/blogthree",
            preview: [
                {
                    step: "Cleanse",
                    content: "Even sensitive skin needs to be gently cleansed twice a day. Your morning cleanse will help clear your complexion."
                },
                {
                    step: "Moisturize",
                    content: "Moisturizing will help maintain and/or restore your cutaneous barrier, preventing dehydration and inflammation."
                },
                {
                    step: "Use anti-pollution essentials",
                    content: "Use a 30+ SPF moisturizer when your skin is exposed to both UVs and pollution during the day."
                }
            ]
        }
    ];

    return ( 
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Beauty & Skincare Blog</h1>
                    <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                        Discover expert tips, tricks, and insights for radiant, healthy skin
                    </p>
                </div>
            </div>

            {/* Blog Posts */}
            <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
                {blogPosts.map((post, index) => (
                    <article 
                        key={post.id} 
                        className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                        }`}
                    >
                        <div className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Image Section */}
                            <div className="lg:w-1/2 relative group">
                                <NavLink to={post.link}>
                                    <div className="relative overflow-hidden">
                                        <img 
                                            className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                            src={post.image} 
                                            alt={post.title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {post.readTime}
                                        </div>
                                    </div>
                                </NavLink>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                                <div>
                                    {/* Meta Information */}
                                    <div className="flex items-center gap-4 text-sm text-purple-600 mb-4">
                                        <div className="flex items-center gap-1">
                                            <User size={16} />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar size={16} />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-2xl lg:text-3xl font-bold text-purple-900 mb-4 leading-tight hover:text-purple-700 transition-colors">
                                        <NavLink to={post.link}>
                                            {post.title}
                                        </NavLink>
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-purple-800 text-lg mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    {/* Preview Content - Hidden on mobile, shown on desktop */}
                                    <div className="hidden lg:block bg-purple-50 rounded-xl p-6 mb-6 border-l-4 border-purple-400">
                                        <div className="space-y-4">
                                            {post.preview.map((item, idx) => (
                                                <div key={idx}>
                                                    <h4 className="text-purple-700 font-bold text-lg mb-2">
                                                        {item.step}
                                                    </h4>
                                                    <p className="text-purple-600 leading-relaxed">
                                                        {item.content}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Read More Button */}
                                <NavLink to="#">
                                    <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                        Read Full Article
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 mt-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold mb-4">Stay Updated with Beauty Tips</h3>
                    <p className="text-xl text-purple-100 mb-8">
                        Get the latest skincare advice and beauty secrets delivered to your inbox
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="flex-1 px-4 py-3 rounded-lg text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                        <button className="bg-white text-purple-700 font-bold px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;