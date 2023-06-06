"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Offer = {
  id: number
  type: "Internet" | "TV" | "Internet + TV" | "Internet + Telefone"
  name: string
  status: "Ativa" | "Inativa"
  value: number
}

export const columns: ColumnDef<Offer>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "value",
    header: "Valor (R$)",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
