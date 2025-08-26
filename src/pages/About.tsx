import { Users, Award, Clock, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Clock, label: "Years of Experience", value: "25+" },
    { icon: Users, label: "Happy Customers", value: "1000+" },
    { icon: Award, label: "Awards Won", value: "15+" },
    { icon: Heart, label: "Moortis Crafted", value: "5000+" }
  ];

  const team = [
    {
      name: "Master Raghuram",
      role: "Chief Sculptor",
      experience: "30+ years",
      image: "/api/placeholder/200/200",
      description: "A master craftsman who learned the traditional art from his grandfather."
    },
    {
      name: "Priya Devi",
      role: "Design Specialist",
      experience: "15+ years",
      image: "/api/placeholder/200/200",
      description: "Expert in modern design integration with traditional techniques."
    },
    {
      name: "Arjun Kumar",
      role: "Bronze Specialist",
      experience: "20+ years",
      image: "/api/placeholder/200/200",
      description: "Specializes in bronze casting and finishing techniques."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Moorti Artistry
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over two decades, we have been preserving the sacred tradition of moorti making, 
            creating divine sculptures that inspire devotion and bring peace to countless homes and temples.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Moorti Artistry was founded in 1999 by Master Raghuram, who inherited the sacred art 
                  of sculpture making from his family's three-generation tradition. What started as a 
                  small workshop in Jaipur has grown into a renowned establishment known for its 
                  exceptional craftsmanship and spiritual authenticity.
                </p>
                <p>
                  Our journey began with a simple belief: every moorti should be more than just a 
                  sculpture—it should be a conduit for devotion, a masterpiece that connects the 
                  divine with the earthly. This philosophy has guided us through decades of creating 
                  thousands of moortis for temples, homes, and spiritual centers worldwide.
                </p>
                <p>
                  Today, we combine traditional hand-carving techniques passed down through generations 
                  with modern tools and quality standards, ensuring each piece meets the highest 
                  expectations while maintaining its spiritual essence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-lg overflow-hidden">
                <img 
                  src="/api/placeholder/600/450"
                  alt="Our Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-bronze transition-all duration-300">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-bronze transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Heart className="w-6 h-6 text-primary mr-3" />
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To preserve and promote the ancient art of moorti making by creating divine sculptures 
                  that serve as bridges between the physical and spiritual realms. We strive to maintain 
                  the highest standards of craftsmanship while making our art accessible to devotees 
                  worldwide, ensuring that every piece carries the sanctity and beauty that inspires 
                  reverence and devotion.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-bronze transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Award className="w-6 h-6 text-primary mr-3" />
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted name in divine sculpture artistry globally, while preserving 
                  traditional techniques for future generations. We envision a world where our moortis 
                  continue to inspire spiritual growth, cultural appreciation, and artistic excellence, 
                  serving as timeless testimonies to the rich heritage of Indian craftsmanship and the 
                  universal language of divine art.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Master Craftsmen
            </h2>
            <p className="text-lg text-muted-foreground">
              The skilled artisans behind every masterpiece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-bronze transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <div className="text-primary font-semibold mb-1">
                    {member.role}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {member.experience}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Workshop
            </h2>
            <p className="text-lg text-muted-foreground">
              Where tradition meets innovation in creating divine art
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Traditional Tools",
                description: "Ancient hand tools passed down through generations",
                image: "/api/placeholder/400/300"
              },
              {
                title: "Modern Equipment", 
                description: "State-of-the-art machinery for precision work",
                image: "/api/placeholder/400/300"
              },
              {
                title: "Quality Control",
                description: "Rigorous inspection at every stage of creation",
                image: "/api/placeholder/400/300"
              }
            ].map((item, index) => (
              <Card key={index} className="group overflow-hidden cursor-pointer">
                <CardContent className="p-0">
                  <div 
                    className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;