import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage1 from '@/assets/hero-moorti-1.jpg';
import heroImage2 from '@/assets/hero-moorti-2.jpg';
import heroImage3 from '@/assets/hero-moorti-3.jpg';

const slides = [
  {
    image: heroImage1,
    title: "Divine Marble Moortis",
    subtitle: "Handcrafted with devotion and precision",
    buttons: [
      { text: "Explore Collection", href: "/gallery", primary: true },
      { text: "Contact Us", href: "/contact", primary: false }
    ]
  },
  {
    image: heroImage2,
    title: "Wooden Masterpieces",
    subtitle: "Traditional artistry meets timeless beauty",
    buttons: [
      { text: "View Gallery", href: "/gallery", primary: true },
      { text: "Custom Orders", href: "/contact", primary: false }
    ]
  },
  {
    image: heroImage3,
    title: "Bronze Sculptures",
    subtitle: "Eternal beauty in every creation",
    buttons: [
      { text: "Discover Art", href: "/gallery", primary: true },
      { text: "Learn More", href: "/about", primary: false }
    ]
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume autoplay after 10s
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center md:bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 gradient-overlay" />
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-primary-foreground px-4 max-w-4xl">
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 animate-fade-up ${
                index === currentSlide ? 'animation-delay-300' : ''
              }`}>
                {slide.title}
              </h1>
              <p className={`text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-up ${
                index === currentSlide ? 'animation-delay-500' : ''
              }`}>
                {slide.subtitle}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center animate-fade-up ${
                index === currentSlide ? 'animation-delay-700' : ''
              }`}>
                {slide.buttons.map((button, btnIndex) => (
                  <a key={btnIndex} href={button.href}>
                    <Button
                      className={button.primary ? 'btn-hero' : 'btn-hero-outline'}
                      size="lg"
                    >
                      {button.text}
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary-foreground scale-125'
                : 'bg-primary-foreground/50 hover:bg-primary-foreground/75'
            }`}
          />
        ))}
      </div>

      {/* Autoplay Indicator */}
      <div className="absolute bottom-4 right-4 z-20">
        <div 
          className={`w-8 h-1 bg-primary-foreground/30 rounded-full overflow-hidden ${
            isAutoPlaying ? '' : 'opacity-50'
          }`}
        >
          <div 
            className={`h-full bg-primary-foreground rounded-full transition-all ease-linear ${
              isAutoPlaying ? 'w-full duration-5000' : 'w-0 duration-300'
            }`}
            key={currentSlide} // Reset animation on slide change
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;