import { DataTable } from "../../components/ui/data-table"
import { Sva, columns } from "./columns"

function getData(): Sva[] {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      name: "HBO MAX",
    },
    {
      id: 2,
      name: "Paramount+",
    },
    {
      id: 3,
      name: "DGO",
    },
    {
      id: 4,
      name: "Deezer",
    },
  ]
}

export default function SvasTable() {
  const data = getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
