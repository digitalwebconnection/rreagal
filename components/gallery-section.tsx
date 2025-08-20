"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, Play, Eye } from "lucide-react"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const galleryImages = [
    {
      src: "/1.jpg",
      alt: "Villa Exterior",
      category: "Villas",
      featured: true,
    },
    {
      src: "/2.jpg",
      alt: "Clubhouse & Pool",
      category: "Amenities",
      featured: false,
    },
    {
      src: "/3.jpg",
      alt: "Gardens & Walkways",
      category: "Landscape",
      featured: true,
    },
    {
      src: "/4.jpg",
      alt: "Kids Play Area",
      category: "Amenities",
      featured: false,
    },
    {
      src: "/5.jpg",
      alt: "Fitness Center",
      category: "Amenities",
      featured: false,
    },
    {
      src: "/6.jpg",
      alt: "Villa Interior",
      category: "Villas",
      featured: true,
    },
    {
      src: "/7.jpg",
      alt: "Internal Roads",
      category: "Infrastructure",
      featured: false,
    },
    {
      src: "/8.jpg",
      alt: "Security Gate",
      category: "Infrastructure",
      featured: false,
    },
  ]

  const categories = ["All", "Villas", "Amenities", "Landscape", "Infrastructure"]

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,69,19,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(160,82,45,0.08),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full"></div>
          <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg border border-amber-200/50">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 bg-clip-text text-transparent mb-4">
              Project Gallery
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-4"></div>
            <p className="text-xl text-amber-800/80 max-w-2xl mx-auto font-medium">
              Witness the epitome of luxury living through our curated visual journey
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg scale-105"
                  : "bg-white/80 text-amber-800 border-amber-300 hover:bg-amber-50 hover:border-amber-400"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className={`overflow-hidden h-100 cursor-pointer group relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                image.featured ? "lg:col-span-2 lg:row-span-2" : ""
              } bg-white/90 backdrop-blur-sm border-amber-200/50`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 h-full ${
                    image.featured ? "h-80 lg:h-96" : "h-64"
                  }`}
                  onClick={() => openLightbox(index)}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {image.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-lg mb-1">{image.alt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-200 text-sm font-medium bg-amber-900/30 px-2 py-1 rounded">
                        {image.category}
                      </span>
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="w-4 h-4 text-white" />
                        <span className="text-white text-sm">View</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-amber-800 mb-4">Experience Luxury in Person</h3>
            <p className="text-amber-700/80 mb-6">
              Schedule a private tour to witness the exceptional craftsmanship and attention to detail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg">
                <Play className="w-4 h-4 mr-2" />
                Virtual Tour
              </Button>
              <Button
                variant="outline"
                className="border-amber-300 text-amber-800 hover:bg-amber-50 px-8 py-3 rounded-full font-semibold bg-transparent"
              >
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />

              {/* Close button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Image info */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-medium">{galleryImages[selectedImage].alt}</p>
                <p className="text-white/80 text-sm">{galleryImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
