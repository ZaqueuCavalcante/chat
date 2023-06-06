"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Package = {
  id: number
  name: string
  city: string
}

export const columns: ColumnDef<Package>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "city",
    header: "Cidade",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
]
