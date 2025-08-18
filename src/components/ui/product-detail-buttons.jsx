"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Info, X } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function ProductDetailButtons({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  // Fixed WhatsApp API configuration
  const whatsappNumber = "+91 89210 06610" // Replace with your actual WhatsApp number (include country code)
  const whatsappMessage = `Hi! I'm interested in the ${item.name}. Can you provide more details about availability and purchase options?`

  // Proper WhatsApp URL format
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber.replace("+", "")}&text=${encodeURIComponent(whatsappMessage)}`

  const handleViewDetails = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate(`/product/${item.slug}`)
  }

  // Function to handle WhatsApp click with error handling
  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      window.open(whatsappLink, "_blank", "noopener,noreferrer")
    } catch (error) {
      console.error("Error opening WhatsApp:", error)
      // Fallback: copy message to clipboard
      navigator.clipboard.writeText(`${whatsappMessage}\n\nContact: ${whatsappNumber}`)
      alert("WhatsApp link copied to clipboard!")
    }
  }

  const closeModal = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setIsModalOpen(false)
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isModalOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isModalOpen])

  return (
    <>
      <div className="flex flex-col gap-2 mt-4">
        <Button
          variant="outline"
          className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
          onClick={handleViewDetails}
        >
          View Details <Info className="ml-2 w-4 h-4" />
        </Button>
        <Button onClick={handleWhatsAppClick} className="w-full bg-yellow-400 text-black hover:bg-yellow-300">
          Buy Now <ShoppingCart className="ml-2 w-4 h-4" />
        </Button>
      </div>

      {/* Modal with proper full-screen backdrop */}
      {isModalOpen && (
        <>
          {/* Full-screen backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 99999,
            }}
            onClick={closeModal}
          />

          {/* Modal content */}
          <div
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 100000,
              pointerEvents: "none",
            }}
          >
            <div
              className="bg-gray-900 border border-yellow-500/30 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl"
              style={{
                position: "relative",
                pointerEvents: "auto",
                animation: isModalOpen ? "modalFadeIn 0.3s ease-out forwards" : "none",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Close Button */}
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <h2 className="text-xl font-bold text-yellow-400">Product Details</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className="text-yellow-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-full"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                {/* Enlarged Image */}
                <div className="p-6">
                  <div className="relative overflow-hidden rounded-xl bg-gray-800">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                      draggable={false}
                      style={{
                        userSelect: "none",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="px-6 pb-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">{item.name}</h3>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-yellow-300 mb-2">Specifications:</h4>
                    <p className="text-gray-300 text-base">{item.specs}</p>
                  </div>

                  {item.description && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-yellow-300 mb-2">Description:</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  )}

                  {/* Action Buttons in Modal */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-800">
                    <Button
                      onClick={() => {
                        window.open(whatsappLink, "_blank", "noopener,noreferrer")
                        closeModal()
                      }}
                      className="flex-1 bg-yellow-400 text-black hover:bg-yellow-300 text-base py-2.5"
                    >
                      Buy Now <ShoppingCart className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      onClick={closeModal}
                      className="flex-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent text-base py-2.5"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes modalFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  )
}
