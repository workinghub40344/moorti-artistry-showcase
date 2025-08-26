import { useState } from 'react';
import { ArrowRight, Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeroSlider from '@/components/HeroSlider';

const Home = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const services = [
    {
      title: "Moorti Making",
      description: "Custom handcrafted moortis with traditional techniques and modern precision.",
      icon: "🎨"
    },
    {
      title: "Restoration",
      description: "Expert restoration services for antique and damaged sculptures.",
      icon: "🔧"
    },
    {
      title: "Custom Orders",
      description: "Personalized sculptures designed to your specifications and requirements.",
      icon: "✨"
    },
    {
      title: "Worldwide Shipping",
      description: "Safe and secure delivery of your precious moortis anywhere in the world.",
      icon: "🌍"
    }
  ];

  const products = [
    {
      title: "Marble Moortis",
      description: "Pure white marble sculptures with intricate details",
      image: "/api/placeholder/300/200",
      category: "marble"
    },
    {
      title: "Wooden Carvings",
      description: "Traditional wooden sculptures with rich natural finish",
      image: "/api/placeholder/300/200",
      category: "wooden"
    },
    {
      title: "Bronze Sculptures",
      description: "Elegant bronze castings with antique patina",
      image: "/api/placeholder/300/200",
      category: "bronze"
    },
    {
      title: "Custom Designs",
      description: "Bespoke sculptures tailored to your vision",
      image: "/api/placeholder/300/200",
      category: "custom"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Absolutely stunning craftsmanship! The Ganesha moorti exceeded all our expectations. The attention to detail is remarkable."
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Beautiful work and excellent service. The team was very professional and delivered exactly what we envisioned."
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Outstanding quality and timely delivery. Highly recommend for anyone looking for authentic moorti artistry."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* About Preview Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Crafting Divine Art for Generations
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            At Moorti Artistry, we blend traditional Indian sculptural techniques with contemporary craftsmanship 
            to create timeless pieces that inspire devotion and admiration. Each sculpture is a testament to our 
            dedication to preserving the sacred art of moorti making.
          </p>
          <Link to="/about">
            <Button className="btn-hero group">
              Know More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our collection of divine sculptures and masterful artistry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Sample Images */}
            {[1, 2, 3].map((index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden">
                <CardContent className="p-0 relative">
                  <div 
                    className="aspect-square bg-gradient-to-br from-secondary to-muted bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(/api/placeholder/300/300)` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            ))}

            {/* Video Thumbnail */}
            <Card className="group cursor-pointer overflow-hidden">
              <CardContent className="p-0 relative">
                <div 
                  className="aspect-square bg-gradient-to-br from-accent to-accent-glow bg-cover bg-center flex items-center justify-center"
                  style={{ backgroundImage: `url(/api/placeholder/300/300)` }}
                >
                  <div className="absolute inset-0 bg-foreground/20" />
                  <Play className="w-16 h-16 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <Button className="btn-hero-outline">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive moorti artistry services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-bronze transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:animate-bounce-subtle">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Highlight Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our diverse range of moorti categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="group overflow-hidden cursor-pointer">
                <CardContent className="p-0">
                  <div 
                    className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from our satisfied customers about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-bronze transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Divine Sculpture?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contact us today for a personalized consultation and bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                📞 Get a Quote
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Call Now: +91 99999 99999
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;