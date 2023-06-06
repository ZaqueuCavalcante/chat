import { LayoutGrid, Library, ListMusic, PlayCircle, Radio } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { Playlist } from "../data/playlists"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Vendas
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              size="sm"
              className="w-full justify-start"
            >
              <PlayCircle className="mr-2 h-4 w-4" />
              Ofertas
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <LayoutGrid className="mr-2 h-4 w-4" />
              Cidades
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Radio className="mr-2 h-4 w-4" />
              Programações
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Financeiro
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Library className="mr-2 h-4 w-4" />
              Relatórios
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Estoque
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Library className="mr-2 h-4 w-4" />
              Inventários
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
