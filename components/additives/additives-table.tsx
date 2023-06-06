import { DataTable } from "../../components/ui/data-table"
import { Additive, columns } from "./columns"

function getData(): Additive[] {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      name: "Fidelidade 6 meses",
    },
    {
      id: 2,
      name: "Fidelidade 12 meses",
    },
    {
      id: 3,
      name: "Água encanada",
    },
    {
      id: 4,
      name: "Luz",
    },
  ]
}

export default function AdditivesTable() {
  const data = getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
