import { useState } from 'react';
import { Filter, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // ✅ SEO Helmet import

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'marble', name: 'Marble Moortis' },
    { id: 'wooden', name: 'Wooden Sculptures' },
    { id: 'bronze', name: 'Bronze Castings' },
    { id: 'custom', name: 'Custom Designs' }
  ];

  const products = [
    {
      id: 1,
      name: "Lord Ganesha - White Marble",
      category: "marble",
      price: 25000,
      originalPrice: 30000,
      rating: 4.9,
      reviews: 156,
      image: "/api/placeholder/400/500",
      description: "Handcrafted white marble Ganesha with intricate details and traditional finish.",
      features: ["Premium Makrana marble", "Hand-carved details", "24-inch height", "Traditional style"],
      inStock: true,
      bestseller: true
    },
    {
      id: 2,
      name: "Goddess Lakshmi - Teak Wood",
      category: "wooden",
      price: 18000,
      originalPrice: null,
      rating: 4.8,
      reviews: 89,
      image: "/api/placeholder/400/500",
      description: "Beautiful teak wood carving of Goddess Lakshmi in sitting posture.",
      features: ["Seasoned teak wood", "Natural finish", "18-inch height", "Hand-polished"],
      inStock: true,
      bestseller: false
    },
    {
      id: 3,
      name: "Dancing Shiva - Bronze",
      category: "bronze",
      price: 35000,
      originalPrice: 40000,
      rating: 5.0,
      reviews: 67,
      image: "/api/placeholder/400/500",
      description: "Elegant bronze sculpture of Nataraja in traditional dancing pose.",
      features: ["Pure bronze casting", "Antique patina", "20-inch height", "Museum quality"],
      inStock: true,
      bestseller: true
    },
    {
      id: 4,
      name: "Radha Krishna - Marble Set",
      category: "marble",
      price: 45000,
      originalPrice: 50000,
      rating: 4.9,
      reviews: 134,
      image: "/api/placeholder/400/500",
      description: "Divine couple sculpture carved from single marble block.",
      features: ["Single block carving", "Hand-painted details", "26-inch height", "Premium quality"],
      inStock: false,
      bestseller: true
    },
    {
      id: 5,
      name: "Lord Hanuman - Wooden",
      category: "wooden",
      price: 22000,
      originalPrice: null,
      rating: 4.7,
      reviews: 98,
      image: "/api/placeholder/400/500",
      description: "Powerful Hanuman sculpture in traditional prayer pose.",
      features: ["Rosewood carving", "Natural grain finish", "22-inch height", "Traditional design"],
      inStock: true,
      bestseller: false
    },
    {
      id: 6,
      name: "Buddha Meditation - Bronze",
      category: "bronze",
      price: 28000,
      originalPrice: 32000,
      rating: 4.8,
      reviews: 76,
      image: "/api/placeholder/400/500",
      description: "Serene Buddha in meditation pose with detailed robes.",
      features: ["Bronze alloy", "Hand-finished", "18-inch height", "Peaceful expression"],
      inStock: true,
      bestseller: false
    },
    {
      id: 7,
      name: "Custom Temple Set",
      category: "custom",
      price: 75000,
      originalPrice: null,
      rating: 5.0,
      reviews: 23,
      image: "/api/placeholder/400/500",
      description: "Complete temple set with multiple deities as per your requirements.",
      features: ["Customizable design", "Multiple materials", "Various sizes", "Complete consultation"],
      inStock: true,
      bestseller: false
    },
    {
      id: 8,
      name: "Saraswati - White Marble",
      category: "marble",
      price: 32000,
      originalPrice: 36000,
      rating: 4.9,
      reviews: 112,
      image: "/api/placeholder/400/500",
      description: "Elegant Goddess Saraswati with veena in pristine marble.",
      features: ["Pure white marble", "Detailed veena", "24-inch height", "Classical pose"],
      inStock: true,
      bestseller: true
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  // ✅ Dynamic schema bana rahe hain
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Handcrafted Moorti Collection",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": `https://yourdomain.com${product.image}`,
        "description": product.description,
        "sku": `PROD-${product.id}`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": product.price,
          "availability": product.inStock 
            ? "https://schema.org/InStock" 
            : "https://schema.org/OutOfStock",
          "url": `https://yourdomain.com/products/${product.id}`
        }
      }
    }))
  };

  return (
    <div className="min-h-screen pt-16">
      {/* ✅ Helmet SEO Tags */}
      <Helmet>
        <title>Handcrafted Marble, Wooden & Bronze Moortis | Divine Collection</title>
        <meta 
          name="description" 
          content="Browse our wide collection of handcrafted marble moortis, wooden sculptures, bronze idols and custom temple sets. Each piece is carved by skilled artisans." 
        />
        <link rel="canonical" href="https://yourdomain.com/products" />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our exquisite collection of handcrafted moortis, each piece created with devotion and precision
          </p>

          {/* ✅ Extra SEO-friendly intro para */}
          <p className="text-base text-muted-foreground mt-4 max-w-4xl mx-auto">
            From premium white marble idols to wooden sculptures and bronze castings, our artisans bring every design to life with traditional techniques. 
            Perfect for temples, homes, or gifting, these moortis reflect timeless craftsmanship and cultural heritage.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center text-muted-foreground">
                <Filter className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Category:</span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "btn-hero" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} products
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-bronze transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={`${product.name} - ${product.features[0]}`} // ✅ better alt text
                      className="w-full aspect-[4/5] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.bestseller && (
                        <Badge className="bg-primary text-primary-foreground">
                          Bestseller
                        </Badge>
                      )}
                      {product.originalPrice && (
                        <Badge variant="secondary" className="bg-green-500 text-white">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% Off
                        </Badge>
                      )}
                    </div>

                    {/* Stock Status */}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-semibold">Out of Stock</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <span key={index} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground ml-1">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-lg font-bold text-foreground">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      <Link to="/contact">
                        <Button 
                          className="w-full btn-hero" 
                          size="sm"
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          {product.inStock ? 'Order Now' : 'Out of Stock'}
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We specialize in custom moorti creation. Share your vision with us and we'll bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-hero" size="lg">
                Request Custom Design
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                Learn About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
