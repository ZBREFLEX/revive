"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ShoppingCart, Info } from "lucide-react"

export default function ProductDetailButtons({ item }) {
  const whatsappNumber = "+916238448700" // Replace with your WhatsApp number
  const whatsappMessage = `Hi, I'm interested in buying the ${item.name}. Can you tell me more?`
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="flex flex-col gap-2 mt-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
          >
            View Details <Info className="ml-2 w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72 bg-gray-900 border-yellow-500/20 text-white p-2">
          <DropdownMenuLabel className="text-yellow-400 text-lg font-bold">{item.name}</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-yellow-500/20 my-2" />
          <DropdownMenuItem className="text-gray-300 cursor-default hover:bg-gray-800/50 px-3 py-2 rounded-md">
            <span className="font-semibold text-yellow-300 mr-2">Specs:</span> {item.specs}
          </DropdownMenuItem>
          {item.description && (
            <DropdownMenuItem className="text-gray-400 cursor-default hover:bg-gray-800/50 px-3 py-2 rounded-md whitespace-normal h-auto">
              {item.description}
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        onClick={() => window.open(whatsappLink, "_blank")}
        className="w-full bg-yellow-400 text-black hover:bg-yellow-300"
      >
        Buy Now <ShoppingCart className="ml-2 w-4 h-4" />
      </Button>
    </div>
  )
}
