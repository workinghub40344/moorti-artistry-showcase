import { Check, Clock, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Custom Moorti Making",
      description: "Handcrafted moortis designed according to your specifications and spiritual requirements.",
      features: [
        "Personalized design consultation",
        "Traditional techniques with modern precision",
        "Choice of materials (marble, wood, bronze)",
        "Custom sizing and finishing options",
        "Spiritual authenticity maintained"
      ],
      image: "/api/placeholder/500/400",
      price: "Starting from ₹15,000",
      duration: "2-6 weeks"
    },
    {
      title: "Restoration Services",
      description: "Expert restoration of antique and damaged moortis to their original glory.",
      features: [
        "Damage assessment and consultation",
        "Color matching and texture restoration",
        "Structural repairs and reinforcement",
        "Cleaning and surface treatment",
        "Preservation for longevity"
      ],
      image: "/api/placeholder/500/400",
      price: "Quote on assessment",
      duration: "1-4 weeks"
    },
    {
      title: "Temple Installation",
      description: "Complete temple setup services with proper moorti placement and consecration.",
      features: [
        "Site survey and planning",
        "Proper moorti positioning",
        "Lighting and backdrop setup",
        "Ritual consultation support",
        "Maintenance guidance"
      ],
      image: "/api/placeholder/500/400",
      price: "Starting from ₹25,000",
      duration: "1-2 weeks"
    },
    {
      title: "Worldwide Shipping",
      description: "Safe and secure delivery of moortis to any location around the globe.",
      features: [
        "Custom protective packaging",
        "Insurance coverage included",
        "Tracking and updates",
        "International shipping expertise",
        "Safe delivery guarantee"
      ],
      image: "/api/placeholder/500/400",
      price: "Calculated by destination",
      duration: "5-15 business days"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Consultation",
      description: "Discuss your requirements, preferences, and spiritual needs with our experts."
    },
    {
      step: 2,
      title: "Design & Quote",
      description: "Receive detailed design proposal with transparent pricing and timeline."
    },
    {
      step: 3,
      title: "Crafting",
      description: "Our master artisans begin the meticulous process of creating your moorti."
    },
    {
      step: 4,
      title: "Quality Check",
      description: "Rigorous quality inspection ensures every detail meets our high standards."
    },
    {
      step: 5,
      title: "Delivery",
      description: "Secure packaging and safe delivery to your doorstep with installation support."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive moorti artistry services from conception to installation, 
            backed by decades of experience and traditional expertise
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-bronze transition-all duration-300">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </div>
                        <div className="font-semibold text-primary">
                          {service.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground">
              From initial consultation to final delivery, here's how we work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center hover:shadow-bronze transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow for desktop */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-primary">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Moorti Artistry?
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by thousands of devotees and institutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-bronze transition-all duration-300">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Quality Guarantee
                </h3>
                <p className="text-muted-foreground">
                  Every moorti comes with our quality guarantee and lifetime craftsmanship warranty.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-bronze transition-all duration-300">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Global Reach
                </h3>
                <p className="text-muted-foreground">
                  Serving customers worldwide with secure international shipping and support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-bronze transition-all duration-300">
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Authentic Craftsmanship
                </h3>
                <p className="text-muted-foreground">
                  Traditional techniques passed down through generations ensure spiritual authenticity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contact us today for a free consultation and personalized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Get Free Consultation
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Call: +91 99999 99999
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;