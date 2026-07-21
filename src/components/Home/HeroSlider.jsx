'use client'

import React, { useState, useEffect } from 'react';

const slides = [
    {
        title: 'Street Style Edit',
        subtitle: 'New Arrival',
        description: 'Modern essentials for every day. Explore bold looks, soft basics, and denim favorites made for the season.',
        ctaPrimary: 'Shop Men',
        ctaSecondary: 'Shop Women',
        image: '/images/hero-slide-1.jpg',
    },
    {
        title: 'Weekend Wardrobe',
        subtitle: 'Comfort Meets Fashion',
        description: 'Effortless outfits with premium fabrics, tailored fits, and standout details for every occasion.',
        ctaPrimary: 'Shop Jackets',
        ctaSecondary: 'Shop Tops',
        image: '/images/hero-slide-2.jpg',
    },
    {
        title: 'Summer Essentials',
        subtitle: 'Refresh Your Closet',
        description: 'Lightweight layers, bright tones, and flattering basics designed to keep you stylish all season long.',
        ctaPrimary: 'Shop Dresses',
        ctaSecondary: 'Shop Accessories',
        image: '/images/hero-slide-3.jpg',
    },
];

const HeroSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden bg-white">
            <div className="relative h-[560px] sm:h-[640px]">
                {slides.map((slide, index) => (
                    <div
                        key={slide.title}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                        }`}
                        aria-hidden={index !== activeIndex}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />
                        <div className="absolute inset-0 bg-black/35" />
                        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 sm:px-8 lg:px-12">
                            <div className="max-w-2xl text-white">
                                <p className="mb-4 text-sm uppercase tracking-[0.4em] text-slate-200">
                                    {slide.subtitle}
                                </p>
                                <h1 className="mb-6 text-4xl font-semibold sm:text-5xl lg:text-6xl">
                                    {slide.title}
                                </h1>
                                <p className="mb-8 max-w-xl text-base leading-8 text-slate-100 sm:text-lg">
                                    {slide.description}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                                        {slide.ctaPrimary}
                                    </button>
                                    <button className="rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
                                        {slide.ctaSecondary}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-3 w-3 rounded-full transition ${
                            index === activeIndex ? 'bg-white' : 'bg-white/40'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default HeroSlider;
