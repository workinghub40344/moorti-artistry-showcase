import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: "Marble Moorti Making Process",
      description: "Watch our master craftsmen create a beautiful Ganesha moorti from raw marble",
      thumbnail: "/api/placeholder/600/400",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      duration: "15:30"
    },
    {
      id: 2,
      title: "Traditional Wood Carving Techniques",
      description: "Ancient woodworking methods passed down through generations",
      thumbnail: "/api/placeholder/600/400",
      videoId: "dQw4w9WgXcQ",
      duration: "12:45"
    },
    {
      id: 3,
      title: "Bronze Casting Workshop Tour",
      description: "Behind the scenes look at our bronze casting facility and process",
      thumbnail: "/api/placeholder/600/400",
      videoId: "dQw4w9WgXcQ",
      duration: "20:15"
    },
    {
      id: 4,
      title: "Customer Testimonials",
      description: "Hear from our satisfied customers about their moorti experience",
      thumbnail: "/api/placeholder/600/400",
      videoId: "dQw4w9WgXcQ",
      duration: "8:22"
    },
    {
      id: 5,
      title: "Temple Installation Process",
      description: "How we carefully install moortis in temples with proper rituals",
      thumbnail: "/api/placeholder/600/400",
      videoId: "dQw4w9WgXcQ",
      duration: "18:10"
    },
    {
      id: 6,
      title: "Restoration of Antique Sculptures",
      description: "Bringing century-old moortis back to their original glory",
      thumbnail: "/api/placeholder/600/400",
      videoId: "dQw4w9WgXcQ",
      duration: "25:45"
    }
  ];

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Video Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the artistry and craftsmanship behind every moorti through our video collection
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card 
                key={video.id}
                className="group cursor-pointer overflow-hidden hover:shadow-bronze transition-all duration-300 hover:-translate-y-2"
                onClick={() => openVideo(video.videoId)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform duration-200">
                        <Play className="w-6 h-6 ml-1" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* YouTube Embed */}
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Video"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;