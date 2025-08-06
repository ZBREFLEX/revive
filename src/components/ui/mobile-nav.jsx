"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function MobileNav({ isOpen, setIsOpen }) {
  const instagramLink = "https://www.instagram.com/revivegaminglounge/" // Placeholder Instagram URL

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center space-y-8"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="absolute top-6 right-6 text-yellow-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Close navigation menu"
          >
            <X className="h-8 w-8" />
          </Button>

          <Link
            to="/"
            className="text-white text-3xl font-bold hover:text-yellow-400 transition-colors"
            onClick={handleClose}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-3xl font-bold hover:text-yellow-400 transition-colors"
            onClick={handleClose}
          >
            About
          </Link>
          <Link
            to="/products"
            className="text-white text-3xl font-bold hover:text-yellow-400 transition-colors"
            onClick={handleClose}
          >
            Products
          </Link>
          <Button
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-300 text-xl px-12 py-6 rounded-full"
            onClick={() => {
              window.open(instagramLink, "_blank")
              handleClose()
            }}
          >
            Book Now
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
