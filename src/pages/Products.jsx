"use client"

import { useState } from "react" // Import useState
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Monitor, Headphones, Gamepad2, Clock, Users, Star, Zap, Menu } from "lucide-react" // Import Menu icon
import { Link } from "react-router-dom"
import ProductDetailButtons from "@/components/ui/product-detail-buttons" // Import the new component
import MobileNav from "@/components/ui/mobile-nav" // Import MobileNav


//import local images

//end of images
export default function Products() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // State for mobile menu

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

  const gamingPackages = [
    {
      name: "Casual Gaming",
      price: "$15",
      duration: "per hour",
      features: [
        "High-end gaming PC",
        "144Hz monitor",
        "Gaming headset",
        "Mechanical keyboard & mouse",
        "Comfortable gaming chair",
      ],
      popular: false,
      color: "border-gray-600",
    },
    {
      name: "Pro Gaming",
      price: "$25",
      duration: "per hour",
      features: [
        "Premium gaming PC (RTX 4090)",
        "240Hz monitor",
        "Professional headset",
        "Pro gaming peripherals",
        "Ergonomic gaming chair",
        "Priority booking",
      ],
      popular: true,
      color: "border-yellow-400",
    },
    {
      name: "VIP Experience",
      price: "$40",
      duration: "per hour",
      features: [
        "Top-tier gaming PC",
        "Dual 240Hz monitors",
        "Premium audio setup",
        "Custom gaming peripherals",
        "Luxury gaming chair",
        "Private gaming booth",
        "Complimentary drinks",
      ],
      popular: false,
      color: "border-gray-600",
    },
  ]

  const equipment = [
    {
      category: "Gaming PCs",
      items: [
        {
          name: "RTX 4090 Beast",
          specs: "Intel i9-13900K, RTX 4090, 32GB DDR5",
          description:
            "Unleash unparalleled gaming performance with our top-tier RTX 4090 Beast. Designed for extreme gaming and content creation, this machine handles anything you throw at it with ease.",
          image:
            "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
          slug: "rtx-4090-beast",
        },
        {
          name: "RTX 4080 Pro",
          specs: "Intel i7-13700K, RTX 4080, 32GB DDR5",
          description:
            "Experience high-fidelity gaming with the RTX 4080 Pro. Perfect for competitive play and immersive single-player adventures, offering a smooth and responsive experience.",
          image:
            "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
          slug: "rtx-4080-pro",
        },
      ],
    },
    {
      category: "Monitors",
      items: [
        {
          name: "ASUS ROG Swift",
          specs: '27" 240Hz, 1ms, G-Sync',
          description:
            "Gain the competitive edge with the ASUS ROG Swift. Its ultra-fast refresh rate and low response time ensure every frame is rendered perfectly, giving you an advantage in fast-paced games.",
          image:
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          slug: "asus-rog-swift",
        },
        {
          name: "Samsung Odyssey",
          specs: '32" 144Hz, Curved, HDR',
          description:
            "Immerse yourself in stunning visuals with the Samsung Odyssey. Its curved display and HDR support bring games to life with vibrant colors and deep contrasts, perfect for cinematic experiences.",
          image:
            "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1142&q=80",
          slug: "samsung-odyssey",
        },
      ],
    },
    {
      category: "Peripherals",
      items: [
        {
          name: "Logitech G Pro X",
          specs: "Mechanical, Wireless, RGB",
          description:
            "Precision and comfort combine in the Logitech G Pro X. Designed for professional gamers, its customizable features and responsive switches ensure every command is executed flawlessly.",
          image:
            "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          slug: "logitech-g-pro-x",
        },
        {
          name: "SteelSeries Arctis",
          specs: "7.1 Surround, Wireless, Noise Cancelling",
          description:
            "Hear every detail with the SteelSeries Arctis headset. Its immersive 7.1 surround sound and crystal-clear microphone provide a tactical advantage and enhance your overall gaming experience.",
          image:
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80",
          slug: "steelseries-arctis",
        },
      ],
    },
  ]

  const instagramLink = "https://linktr.ee/revivetechlounge?fbclid=PAQ0xDSwL9dwJleHRuA2FlbQIxMQABp2-M0zDYgUO4yXipOBo13sHYsYXLDTvGF2thMfEUbPaJZZognsaDUcxErhtO_aem_7X6wEi9Adx_A5J8yYM6Kbg" // Placeholder Instagram URL

  return (
    <div className="min-h-screen bg-black text-white">
      {/* MobileNav component rendered at the root level */}
      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 right-6 z-50" // Original design restored
      >
        <div className="bg-gradient-to-r from-gray-900/80 via-black/80 to-gray-900/80 backdrop-blur-md border border-yellow-500/50 rounded-full px-8 py-3 shadow-2xl w-full max-w-screen-xl mx-auto flex items-center justify-between">
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
              Enquire
            </Button>
          </div>
          {/* Hamburger icon for mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(true)} // Toggle state
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
            <Link to="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
              <ArrowLeft className="mr-2" /> Back to Home
            </Link>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent"
          >
            Our Products
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Premium gaming packages and cutting-edge equipment designed for the ultimate gaming experience.
          </motion.p>
        </motion.div>
      </section>

      {/* Gaming Packages */}
      {/* <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Gaming <span className="text-yellow-400">Packages</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect gaming experience that suits your style and budget
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {gamingPackages.map((pkg, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`bg-gray-900/50 ${pkg.color} hover:border-yellow-400/50 transition-all duration-300 group relative overflow-hidden h-full`}
                >
                  {pkg.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-400 text-black font-bold">
                        <Star className="w-3 h-3 mr-1" />
                        POPULAR
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {pkg.name}
                    </CardTitle>
                    <div className="text-4xl font-bold text-yellow-400 mt-4">
                      {pkg.price}
                      <span className="text-lg text-gray-400 font-normal">/{pkg.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <Zap className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${pkg.popular ? "bg-yellow-400 text-black hover:bg-yellow-300" : "bg-gray-800 text-white hover:bg-gray-700"}`}
                      size="lg"
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Equipment Showcase */}
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
              Premium <span className="text-yellow-400">Equipment</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience gaming with the latest and most powerful hardware available
            </p>
          </motion.div>

          {equipment.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
                {category.category === "Gaming PCs" && <Monitor className="mr-3 text-yellow-400" />}
                {category.category === "Monitors" && <Monitor className="mr-3 text-yellow-400" />}
                {category.category === "Peripherals" && <Gamepad2 className="mr-3 text-yellow-400" />}
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div key={itemIndex} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Card className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 group overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                      <CardContent className="p-6 flex flex-col justify-between h-full">
                        <div>
                          <h4 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-gray-400">{item.specs}</p>
                        </div>
                        <ProductDetailButtons item={item} />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What's <span className="text-yellow-400">Included</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every gaming session comes with premium amenities and services
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Flexible Hours",
                description: "Book for as long as you want, 24/7 availability",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Group Sessions",
                description: "Perfect for team gaming and tournaments",
              },
              {
                icon: <Headphones className="w-12 h-12" />,
                title: "Premium Audio",
                description: "High-quality headsets and sound systems",
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "High-Speed Internet",
                description: "Ultra-low latency fiber connection",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 group text-center h-full">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-yellow-400 mb-6 flex justify-center"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-400/10 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="text-yellow-400">Game</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Choose your package and book your gaming session today. Experience the difference premium equipment makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 text-xl px-12 py-6" onClick={() => window.open(instagramLink, "_blank")}>
                  Enquire Now
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-xl px-12 py-6 bg-transparent"
                >
                  Contact Us
                </Button>
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
