import { Metadata } from "next"
import { playlists } from "@/data/playlists"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sidebar } from "@/components/sidebar"

import "./styles.css"
import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import AdditivesTable from "@/components/additives/additives-table"
import FeaturesTable from "@/components/features/features-table"
import OffersTable from "@/components/offers/offers-table"
import PackagesTable from "@/components/packages/packages-table"
import SvasTable from "@/components/svas/svas-table"

export const metadata: Metadata = {
  title: "IMNet",
  description: "Example app.",
}

export default function IndexPage() {
  return (
    <>
      <div className="hidden md:block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="all" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="all" className="relative">
                          Todas
                        </TabsTrigger>
                        <TabsTrigger value="features">Features</TabsTrigger>
                        <TabsTrigger value="svas">Svas</TabsTrigger>
                        <TabsTrigger value="additives">Aditivos</TabsTrigger>
                        <TabsTrigger value="packages">Pacotes</TabsTrigger>
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <Button>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          Nova Oferta
                        </Button>
                      </div>
                    </div>

                    <TabsContent
                      value="all"
                      className="border-none p-0 outline-none"
                    >
                      <OffersTable></OffersTable>
                    </TabsContent>

                    <TabsContent
                      value="features"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <FeaturesTable></FeaturesTable>
                    </TabsContent>

                    <TabsContent
                      value="svas"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <SvasTable></SvasTable>
                    </TabsContent>

                    <TabsContent
                      value="additives"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <AdditivesTable></AdditivesTable>
                    </TabsContent>

                    <TabsContent
                      value="packages"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <PackagesTable></PackagesTable>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
