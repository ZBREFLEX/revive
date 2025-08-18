"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ShoppingCart, Menu, Zap, Star, Shield, Truck, RefreshCw } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import MobileNav from "@/components/ui/mobile-nav"

export default function ProductDetail() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { slug } = useParams()

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Product data with Indian Rupee pricing
  const products = {
    "rtx-4090-beast": {
      name: "RTX 4090 Beast",
      specs: "Intel i9-13900K, RTX 4090, 32GB DDR5",
      description:
        "Unleash unparalleled gaming performance with our top-tier RTX 4090 Beast. Designed for extreme gaming and content creation, this machine handles anything you throw at it with ease. Experience ray tracing at its finest, 4K gaming at high frame rates, and lightning-fast rendering for content creators. This powerhouse is built for those who demand the absolute best in gaming performance.",
      image:
        "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
      category: "Gaming PCs",
      features: [
        "Intel Core i9-13900K Processor",
        "NVIDIA GeForce RTX 4090 24GB",
        "32GB DDR5-5600 RAM",
        "1TB NVMe SSD",
        "850W 80+ Gold PSU",
        "Liquid Cooling System",
        "RGB Lighting",
        "Tempered Glass Side Panel",
      ],
      price: "₹3,32,000",
      originalPrice: "₹3,57,000",
      priceNumeric: 332000,
      originalPriceNumeric: 357000,
      rating: 4.9,
      reviews: 127,
      inStock: true,
      warranty: "3 Years",
      shipping: "Free Shipping",
    },
    "rtx-4080-pro": {
      name: "RTX 4080 Pro",
      specs: "Intel i7-13700K, RTX 4080, 32GB DDR5",
      description:
        "Experience high-fidelity gaming with the RTX 4080 Pro. Perfect for competitive play and immersive single-player adventures, offering a smooth and responsive experience. This build strikes the perfect balance between performance and value, delivering exceptional gaming experiences without breaking the bank.",
      image:
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      category: "Gaming PCs",
      features: [
        "Intel Core i7-13700K Processor",
        "NVIDIA GeForce RTX 4080 16GB",
        "32GB DDR5-5200 RAM",
        "1TB NVMe SSD",
        "750W 80+ Gold PSU",
        "Air Cooling System",
        "RGB Lighting",
        "Mesh Front Panel",
      ],
      price: "₹2,32,000",
      originalPrice: "₹2,49,000",
      priceNumeric: 232000,
      originalPriceNumeric: 249000,
      rating: 4.8,
      reviews: 89,
      inStock: true,
      warranty: "2 Years",
      shipping: "Free Shipping",
    },
    "asus-rog-swift": {
      name: "ASUS ROG Swift",
      specs: '27" 240Hz, 1ms, G-Sync',
      description:
        "Gain the competitive edge with the ASUS ROG Swift. Its ultra-fast refresh rate and low response time ensure every frame is rendered perfectly, giving you an advantage in fast-paced games. Professional esports players trust this monitor for tournament play, and now you can experience the same level of precision.",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Monitors",
      features: [
        '27" QHD (2560x1440) Display',
        "240Hz Refresh Rate",
        "1ms Response Time",
        "NVIDIA G-Sync Compatible",
        "HDR10 Support",
        "Ergonomic Stand",
        "Multiple Connectivity Options",
        "Low Blue Light Technology",
      ],
      price: "₹49,900",
      originalPrice: "₹58,000",
      priceNumeric: 49900,
      originalPriceNumeric: 58000,
      rating: 4.7,
      reviews: 203,
      inStock: true,
      warranty: "3 Years",
      shipping: "Free Shipping",
    },
    "samsung-odyssey": {
      name: "Samsung Odyssey",
      specs: '32" 144Hz, Curved, HDR',
      description:
        "Immerse yourself in stunning visuals with the Samsung Odyssey. Its curved display and HDR support bring games to life with vibrant colors and deep contrasts, perfect for cinematic experiences and immersive gaming sessions. The 1000R curvature matches the natural curve of your eyes for comfortable extended gaming.",
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1142&q=80",
      category: "Monitors",
      features: [
        '32" 4K UHD (3840x2160) Display',
        "144Hz Refresh Rate",
        "1000R Curved Screen",
        "HDR10+ Support",
        "Quantum Dot Technology",
        "AMD FreeSync Premium Pro",
        "Eye Saver Mode",
        "Flicker Free Technology",
      ],
      price: "₹74,900",
      originalPrice: "₹91,500",
      priceNumeric: 74900,
      originalPriceNumeric: 91500,
      rating: 4.6,
      reviews: 156,
      inStock: true,
      warranty: "1 Year",
      shipping: "Free Shipping",
    },
    "logitech-g-pro-x": {
      name: "Logitech G Pro X",
      specs: "Mechanical, Wireless, RGB",
      description:
        "Precision and comfort combine in the Logitech G Pro X. Designed for professional gamers, its customizable features and responsive switches ensure every command is executed flawlessly. Tournament-grade performance in a sleek package that's built to withstand the most intense gaming sessions.",
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Peripherals",
      features: [
        "Mechanical Switches (GX Blue)",
        "Wireless Connectivity",
        "RGB Backlighting",
        "Programmable Keys",
        "Tournament Mode",
        "USB-C Charging",
        "50-hour Battery Life",
        "Detachable Cable",
      ],
      price: "₹16,500",
      originalPrice: "₹20,700",
      priceNumeric: 16500,
      originalPriceNumeric: 20700,
      rating: 4.5,
      reviews: 342,
      inStock: true,
      warranty: "2 Years",
      shipping: "Free Shipping",
    },
    "steelseries-arctis": {
      name: "SteelSeries Arctis",
      specs: "7.1 Surround, Wireless, Noise Cancelling",
      description:
        "Hear every detail with the SteelSeries Arctis headset. Its immersive 7.1 surround sound and crystal-clear microphone provide a tactical advantage and enhance your overall gaming experience. Comfort meets performance in this premium headset designed for marathon gaming sessions.",
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80",
      category: "Peripherals",
      features: [
        "7.1 Surround Sound",
        "Wireless 2.4GHz Connection",
        "Active Noise Cancellation",
        "Retractable Microphone",
        "24-hour Battery Life",
        "Memory Foam Ear Cushions",
        "Steel Headband",
        "Multi-platform Compatible",
      ],
      price: "₹24,900",
      originalPrice: "₹29,000",
      priceNumeric: 24900,
      originalPriceNumeric: 29000,
      rating: 4.8,
      reviews: 278,
      inStock: true,
      warranty: "2 Years",
      shipping: "Free Shipping",
    },
  }

  const product = products[slug]

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">Product Not Found</h1>
          <p className="text-gray-400 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // Fixed WhatsApp API configuration for India
  const whatsappNumber = "+91 89210 06610" // Replace with your actual Indian WhatsApp number
  const whatsappMessage = `Hi! I'm interested in the ${product.name} (${product.price}). Can you provide more details about availability and purchase options?`

  // Proper WhatsApp URL format
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber.replace("+", "")}&text=${encodeURIComponent(whatsappMessage)}`

  const instagramLink = "https://linktr.ee/revivetechlounge?fbclid=PAQ0xDSwL9dwJleHRuA2FlbQIxMQABp2-M0zDYgUO4yXipOBo13sHYsYXLDTvGF2thMfEUbPaJZZognsaDUcxErhtO_aem_7X6wEi9Adx_A5J8yYM6Kbg"

  // Function to handle WhatsApp click with error handling
  const handleWhatsAppClick = () => {
    try {
      window.open(whatsappLink, "_blank", "noopener,noreferrer")
    } catch (error) {
      console.error("Error opening WhatsApp:", error)
      // Fallback: copy message to clipboard
      navigator.clipboard.writeText(`${whatsappMessage}\n\nContact: ${whatsappNumber}`)
      alert("WhatsApp link copied to clipboard!")
    }
  }

  // Function to format Indian currency
  const formatIndianCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Calculate savings
  const calculateSavings = () => {
    if (product.originalPriceNumeric && product.priceNumeric) {
      return product.originalPriceNumeric - product.priceNumeric
    }
    return 0
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-600" />)
    }

    return stars
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* MobileNav component */}
      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 right-6 z-50"
      >
        <div className="bg-gradient-to-r from-gray-900/80 via-black/80 to-gray-900/80 backdrop-blur-md border border-yellow-500/50 rounded-full px-8 py-3 shadow-2xl flex items-center justify-between">
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold text-yellow-400">
              REVIVE
            </motion.div>
          </Link>
          <div className="hidden md:flex space-x-6 flex-grow justify-center">
            <Link
              to="/"
              className="text-white hover:text-yellow-400 transition-colors px-3 py-1 rounded-full hover:bg-yellow-400/10"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-yellow-400 transition-colors px-3 py-1 rounded-full hover:bg-yellow-400/10"
            >
              About
            </Link>
            <Link to="/products" className="text-yellow-400 px-3 py-1 rounded-full bg-yellow-400/10">
              Products
            </Link>
          </div>
          <div className="hidden md:block">
            <Button
              className="bg-yellow-400 text-black hover:bg-yellow-300 rounded-full px-6 py-2 text-sm font-semibold"
              onClick={() => window.open(instagramLink, "_blank")}
            >
              Enquire Now
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-yellow-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')] bg-cover bg-center opacity-20"></div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <Link
              to="/products"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <ArrowLeft className="mr-2" /> Back to Products
            </Link>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent"
          >
            {product.name}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            {product.specs}
          </motion.p>
        </motion.div>
      </section>

      {/* Product Details Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-800">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {product.inStock && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">In Stock</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <span className="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {product.category}
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">{product.name}</h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">{renderStars(product.rating)}</div>
                  <span className="text-yellow-400 font-medium">{product.rating}</span>
                  <span className="text-gray-400">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold text-yellow-400">{product.price}</div>
                  {product.originalPrice && (
                    <div className="text-xl text-gray-500 line-through">{product.originalPrice}</div>
                  )}
                  {product.originalPriceNumeric && product.priceNumeric && (
                    <div className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      SAVE {formatIndianCurrency(calculateSavings())}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-yellow-300 mb-4">Description</h3>
                <p className="text-gray-300 leading-relaxed">{product.description}</p>
              </div>

              {/* Product Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Shield className="w-4 h-4 text-yellow-400" />
                  <span>{product.warranty} Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Truck className="w-4 h-4 text-yellow-400" />
                  <span>{product.shipping}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <RefreshCw className="w-4 h-4 text-yellow-400" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Premium Support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={handleWhatsAppClick}
                  className="flex-1 bg-yellow-400 text-black hover:bg-yellow-300 text-lg py-3"
                >
                  Buy Now <ShoppingCart className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent text-lg py-3"
                  onClick={() => window.open(instagramLink, "_blank")}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400/5 to-transparent">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Key <span className="text-yellow-400">Features</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to know about this premium product
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {product.features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 group h-full">
                  <CardContent className="p-6 text-center">
                    <Zap className="w-8 h-8 text-yellow-400 mb-4 mx-auto" />
                    <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Technical <span className="text-yellow-400">Specifications</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/50 border-yellow-500/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-800 last:border-b-0"
                    >
                      <span className="text-gray-400">{feature.split(":")[0] || feature}</span>
                      <span className="text-white font-medium">{feature.split(":")[1] || "✓"}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="text-yellow-400">Upgrade</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get in touch with us to learn more about this product or to make a purchase. Our team is ready to help you
              find the perfect gaming setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-yellow-400 text-black hover:bg-yellow-300 text-xl px-12 py-6"
                  onClick={handleWhatsAppClick}
                >
                Enquire Now <ShoppingCart className="ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-xl px-12 py-6 bg-transparent"
                  >
                    View All Products
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6 border-t border-yellow-500/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-4">REVIVE</div>
            <p className="text-gray-400 mb-6">The Future of Gaming</p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <Link to="/" className="hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:text-yellow-400 transition-colors">
                About
              </Link>
              <Link to="/products" className="hover:text-yellow-400 transition-colors">
                Products
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
              © 2024 REVIVE Gaming Lounge. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
