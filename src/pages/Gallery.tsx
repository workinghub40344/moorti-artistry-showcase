import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'marble', name: 'Marble' },
    { id: 'wooden', name: 'Wooden' },
    { id: 'bronze', name: 'Bronze' },
    { id: 'custom', name: 'Custom' }
  ];

  const images = [
    {
      id: 1,
      src: "/api/placeholder/400/500",
      title: "Lord Ganesha - Marble",
      category: "marble",
      description: "Intricately carved white marble Ganesha with detailed ornaments"
    },
    {
      id: 2,
      src: "/api/placeholder/400/500",
      title: "Goddess Lakshmi - Wooden",
      category: "wooden",
      description: "Traditional wooden carving of Goddess Lakshmi in sitting posture"
    },
    {
      id: 3,
      src: "/api/placeholder/400/500",
      title: "Lord Shiva - Bronze",
      category: "bronze",
      description: "Dancing Shiva sculpture cast in pure bronze with antique finish"
    },
    {
      id: 4,
      src: "/api/placeholder/400/500",
      title: "Radha Krishna - Marble",
      category: "marble",
      description: "Beautiful couple sculpture carved from single marble block"
    },
    {
      id: 5,
      src: "/api/placeholder/400/500",
      title: "Hanuman - Wooden",
      category: "wooden",
      description: "Powerful Hanuman sculpture carved from seasoned teak wood"
    },
    {
      id: 6,
      src: "/api/placeholder/400/500",
      title: "Buddha - Bronze",
      category: "bronze",
      description: "Serene Buddha in meditation pose with detailed robes"
    },
    {
      id: 7,
      src: "/api/placeholder/400/500",
      title: "Durga Maa - Custom",
      category: "custom",
      description: "Custom designed Durga sculpture with multiple arms and weapons"
    },
    {
      id: 8,
      src: "/api/placeholder/400/500",
      title: "Saraswati - Marble",
      category: "marble",
      description: "Elegant Saraswati with veena carved in pristine white marble"
    },
    {
      id: 9,
      src: "/api/placeholder/400/500",
      title: "Krishna - Wooden",
      category: "wooden",
      description: "Playful Krishna with flute in traditional wooden carving style"
    },
    {
      id: 10,
      src: "/api/placeholder/400/500",
      title: "Vishnu - Bronze",
      category: "bronze",
      description: "Four-armed Vishnu with traditional attributes in bronze"
    },
    {
      id: 11,
      src: "/api/placeholder/400/500",
      title: "Custom Temple Set - Mixed",
      category: "custom",
      description: "Complete temple set with multiple deities in various materials"
    },
    {
      id: 12,
      src: "/api/placeholder/400/500",
      title: "Ram Darbar - Marble",
      category: "marble",
      description: "Complete Ram family sculpture group in white marble"
    }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of divine sculptures, each piece crafted with devotion and precision
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center text-muted-foreground mb-2 sm:mb-0">
              <Filter className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category.id)}
                className={filter === category.id ? "btn-hero" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="group cursor-pointer overflow-hidden hover:shadow-bronze transition-all duration-300 hover:-translate-y-2"
                onClick={() => openLightbox(index)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-primary-foreground/90 line-clamp-2">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No images found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-white/90">
                {filteredImages[selectedImage].description}
              </p>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;