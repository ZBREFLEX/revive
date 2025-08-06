"use client"

import { useState } from "react" // Import useState
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Target, Users, Zap, Award, Heart, Shield, Menu } from "lucide-react" // Import Menu icon
import { Link } from "react-router-dom"
import MobileNav from "@/components/ui/mobile-nav" // Import MobileNav

export default function About() {
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
            <Link to="/about" className="text-yellow-400 px-3 py-1 rounded-full bg-yellow-400/10">
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-20"></div>

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
            About REVIVE
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Born from passion, built for gamers. Discover the story behind the ultimate gaming destination.
          </motion.p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Our <span className="text-yellow-400">Story</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  REVIVE was born from a simple belief: gaming is more than entertainment—it's a culture, a community,
                  and a way of life. Founded in 2020 by a group of passionate gamers, we set out to create the ultimate
                  gaming sanctuary.
                </p>
                <p>
                  What started as a dream to build the perfect gaming space has evolved into a state-of-the-art facility
                  that brings together cutting-edge technology, premium comfort, and an unmatched gaming atmosphere.
                </p>
                <p>
                  Today, REVIVE stands as more than just a gaming lounge—we're a hub where friendships are forged,
                  skills are honed, and gaming legends are born.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img src="/images/about-story.png" alt="REVIVE founders" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Mission & <span className="text-yellow-400">Vision</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-yellow-500/20 h-full">
                <CardContent className="p-8">
                  <div className="text-yellow-400 mb-6">
                    <Target size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To provide an unparalleled gaming experience that brings people together, fosters competition, and
                    celebrates the art of gaming. We strive to create a space where every gamer, from casual to
                    professional, feels at home.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-yellow-500/20 h-full">
                <CardContent className="p-8">
                  <div className="text-yellow-400 mb-6">
                    <Zap size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Our Vision</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To be the leading gaming destination that sets the standard for excellence in the industry. We
                    envision a future where REVIVE is synonymous with premium gaming experiences and community building.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-yellow-400">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">The principles that guide everything we do</p>
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
                icon: <Users className="w-12 h-12" />,
                title: "Community First",
                description:
                  "We believe in building strong connections and fostering a welcoming environment for all gamers.",
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Excellence",
                description:
                  "We're committed to providing the highest quality equipment, service, and gaming experience.",
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Passion",
                description: "Gaming is our passion, and we bring that enthusiasm to everything we do.",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Integrity",
                description: "We operate with honesty, transparency, and respect for our community.",
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Innovation",
                description: "We continuously evolve and adopt the latest technology to enhance your experience.",
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Focus",
                description: "We're laser-focused on creating the perfect gaming environment for our community.",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 group h-full">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-yellow-400 mb-6 flex justify-center"
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet the <span className="text-yellow-400">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The passionate individuals behind REVIVE's success
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
                name: "Alex Chen",
                role: "Founder & CEO",
                image: "/images/team-alex.png",
              },
              {
                name: "Sarah Johnson",
                role: "Head of Operations",
                image: "/images/team-sarah.png",
              },
              {
                name: "Mike Rodriguez",
                role: "Technical Director",
                image: "/images/team-mike.png",
              },
            ].map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-yellow-400 font-medium">{member.role}</p>
                  </CardContent>
                </Card>
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
              Join the <span className="text-yellow-400">REVIVE</span> Family
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Ready to be part of something bigger? Experience what makes REVIVE special.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 text-xl px-12 py-6" onClick={() => window.open(instagramLink, "_blank")}>
                Visit Us Today
              </Button>
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
