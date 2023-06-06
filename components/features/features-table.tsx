import { DataTable } from "../../components/ui/data-table"
import { Feature, columns } from "./columns"

function getData(): Feature[] {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      name: "Instalação Grátis",
    },
    {
      id: 2,
      name: "Super Wi-Fi 6",
    },
    {
      id: 3,
      name: "Wi-Fi",
    },
    {
      id: 4,
      name: "Ligações Internacionais",
    },
  ]
}

export default function FeaturesTable() {
  const data = getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
