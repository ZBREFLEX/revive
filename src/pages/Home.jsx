"use client"

import { useState } from "react" // Import useState
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Gamepad2, Users, Zap, Trophy, Menu } from "lucide-react" // Import Menu icon
import { Link } from "react-router-dom"
import MobileNav from "@/components/ui/mobile-nav"

export default function Home() {
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

  const instagramLink = "https://linktr.ee/revivetechlounge?fbclid=PAQ0xDSwL9dwJleHRuA2FlbQIxMQABp2-M0zDYgUO4yXipOBo13sHYsYXLDTvGF2thMfEUbPaJZZognsaDUcxErhtO_aem_7X6wEi9Adx_A5J8yYM6Kbg" // Placeholder Instagram URL

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
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
          <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold text-yellow-400">
            REVIVE
          </motion.div>
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
            <Link
              to="/products"
              className="text-white hover:text-yellow-400 transition-colors px-3 py-1 rounded-full hover:bg-yellow-400/10"
            >
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent"
          >
            REVIVE
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Experience the future of gaming in our state-of-the-art lounge. Where legends are born and victories are
            celebrated.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-8 py-4">
              Start Gaming <ArrowRight className="ml-2" />
            </Button> */}
            <Link to="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-4 bg-transparent"
              >
                View Products
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 text-yellow-400 opacity-30"
        >
          <Gamepad2 size={60} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-10 text-yellow-400 opacity-30"
        >
          <Zap size={50} />
        </motion.div>
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
              Why Choose <span className="text-yellow-400">REVIVE</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We provide the ultimate gaming experience with cutting-edge technology and premium amenities
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Gamepad2 className="w-12 h-12" />,
                title: "Latest Hardware",
                description: "High-end gaming PCs with RTX 4090 graphics cards and premium peripherals",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Community",
                description: "Connect with fellow gamers and participate in tournaments and events",
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Ultra-Fast Internet",
                description: "Fiber optic connection with ultra-low latency for competitive gaming",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-yellow-400 mb-6 flex justify-center"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400/10 to-transparent">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "50+", label: "Games" },
              { number: "24/7", label: "Open Hours" },
              { number: "1000+", label: "Happy Coustomers" },
              { number: "100+", label: "Experience Rating" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
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
              Ready to <span className="text-yellow-400">REVIVE</span> Your Gaming?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of gamers who have made REVIVE their gaming home. Book your session today and experience
              gaming like never before.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {/* <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 text-xl px-12 py-6">
                Book Your Session <Trophy className="ml-2" />
              </Button> */}
            </motion.div>
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
