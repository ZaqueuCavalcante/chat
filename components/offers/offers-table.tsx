import { DataTable } from "../../components/ui/data-table"
import { Offer, columns } from "./columns"

function getData(): Offer[] {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      type: "Internet",
      name: "500 Mega",
      status: "Ativa",
      value: 89.99,
    },
    {
      id: 2,
      type: "Internet + TV",
      name: "700 Mega + TV",
      status: "Ativa",
      value: 59.99,
    },
    {
      id: 3,
      type: "TV",
      name: "Premiere",
      status: "Inativa",
      value: 125.99,
    },
    {
      id: 4,
      type: "Internet",
      name: "1 Giga",
      status: "Ativa",
      value: 169.99,
    },
    {
      id: 5,
      type: "Internet + Telefone",
      name: "500 Mega + Telefone",
      status: "Ativa",
      value: 99.99,
    },
  ]
}

export default function OffersTable() {
  const data = getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
