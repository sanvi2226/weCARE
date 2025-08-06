import React from "react";
import { Heart, Users, Award, Lightbulb, Target, Star } from 'lucide-react';

function About() {
    return ( 
        <div className="bg-purple-200 min-h-screen">
            
            
            {/* Hero Image */}
            <div className="relative">
                <img 
                    className="w-full object-cover h-[360px]" 
                    src="https://images.pexels.com/photos/20861921/pexels-photo-20861921/free-photo-of-woman-lying-down-at-spa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="woman at spa" 
                />
                <div className="absolute inset-0 bg-purple-900/20"></div>
                <div className="absolute bottom-8 left-8 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">About weCARE</h1>
                    <p className="text-xl">Your Journey to Radiant Skin Starts Here</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto p-6 lg:p-12 text-left text-purple-900 space-y-16">

                {/* Mission Section */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-4">
                        <Target className="w-8 h-8 text-purple-700" />
                        <h1 className="font-bold text-4xl">Our Mission</h1>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/50 shadow-lg">
                        <p className="font-semibold text-xl leading-relaxed">
                            At weCARE, our mission is simple: to empower you with the knowledge and tools you need to achieve your best skin ever.
                            We believe that everyone deserves to feel confident in their skin, and we're here to help you every step of the way. We take a holistic approach to skincare, 
                            understanding that true skin health is about more than just the products you use. It's about education, consistency, and a commitment to self-care.
                        </p>
                    </div>
                </div>

                {/* Who We Are Section */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-4">
                        <Users className="w-8 h-8 text-purple-700" />
                        <h1 className="font-bold text-4xl">Who We Are</h1>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/50 shadow-lg">
                            <p className="font-semibold text-xl leading-relaxed">
                                weCARE is a passionate team of skincare enthusiasts, dermatologists, and beauty experts dedicated to bringing you the latest in 
                                skincare science and trends. We combine our expertise to provide you with personalized advice and innovative solutions tailored to your unique skin needs.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-300/40 to-purple-400/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/50 shadow-lg">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Award className="w-6 h-6 text-purple-700" />
                                    <span className="font-bold text-lg">Expert Team</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Star className="w-6 h-6 text-purple-700" />
                                    <span className="font-bold text-lg">Trusted by Thousands</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Heart className="w-6 h-6 text-purple-700" />
                                    <span className="font-bold text-lg">Community Focused</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Lightbulb className="w-6 h-6 text-purple-700" />
                                    <span className="font-bold text-lg">Innovation Driven</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What We Offer Section */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-4">
                        <Star className="w-8 h-8 text-purple-700" />
                        <h1 className="font-bold text-4xl">What We Offer</h1>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-300/50 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-xl mb-2 underline decoration-purple-600">Expert Tips & Advice</h3>
                            <p className="font-semibold text-lg">Get insights from leading dermatologists and skincare professionals.</p>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-300/50 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <Lightbulb className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-xl mb-2 underline decoration-purple-600">Exciting Blogs</h3>
                            <p className="font-semibold text-lg">Stay informed and get quirky tips in the blogs posted by our expert team.</p>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-300/50 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-xl mb-2 underline decoration-purple-600">Customized Routines</h3>
                            <p className="font-semibold text-lg">Discover personalized skincare routines designed to address your specific skin concerns and goals.</p>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-300/50 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-xl mb-2 underline decoration-purple-600">Know Your Skin</h3>
                            <p className="font-semibold text-lg">Find about your skin type and all the care it needs through our intrinsic skin survey.</p>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-300/50 shadow-lg hover:transform hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1">
                            <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-xl mb-2 underline decoration-purple-600">Community Support</h3>
                            <p className="font-semibold text-lg">Join a community of skincare enthusiasts and share your journey towards healthy, glowing skin.</p>
                        </div>
                    </div>
                </div>

                {/* Join Us Section */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-4">
                        <Heart className="w-8 h-8 text-purple-700" />
                        <h1 className="font-bold text-4xl">Join Us</h1>
                    </div>
                    <div className="bg-gradient-to-r from-purple-300/50 via-purple-200/50 to-purple-300/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/50 shadow-lg">
                        <p className="font-semibold text-xl leading-relaxed">
                            When you choose weCARE, you're not just choosing an app; you're joining a community of like-minded individuals who are passionate about skincare. 
                            Together, we share tips, celebrate progress, and support each other on the journey to healthier, more radiant skin. Join the weCARE community and become part of a movement towards better 
                            skin health and confidence. We can discover the secrets to radiant, healthy skin. Because at weCARE, we truly care about you and your skin.
                        </p>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="bg-gradient-to-br from-purple-400/30 via-purple-300/30 to-purple-500/30 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/50 shadow-xl text-center">
                    <h1 className="text-purple-900 text-5xl md:text-6xl font-bold mb-4">we CARE about you</h1>
                    <p className="text-purple-900 text-2xl font-bold mb-8">Your Ultimate Destination for Glowing Skin</p>
                    <button className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors transform hover:scale-105 shadow-lg">
                        Start Your Journey Today
                    </button>
                </div>

                {/* Statistics Section */}
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-purple-300/50 shadow-lg">
                        <div className="text-4xl font-bold text-purple-700 mb-2">10,000+</div>
                        <div className="text-purple-900 font-semibold">Happy Users</div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-purple-300/50 shadow-lg">
                        <div className="text-4xl font-bold text-purple-700 mb-2">500+</div>
                        <div className="text-purple-900 font-semibold">Expert Articles</div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-purple-300/50 shadow-lg">
                        <div className="text-4xl font-bold text-purple-700 mb-2">24/7</div>
                        <div className="text-purple-900 font-semibold">Support Available</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;