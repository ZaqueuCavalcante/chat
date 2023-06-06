import { DataTable } from "../../components/ui/data-table"
import { Package, columns } from "./columns"

function getData(): Package[] {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      name: "Promo 250 Mega",
      city: "Caruaru - PE",
    },
    {
      id: 2,
      name: "Fibra 750 Mega",
      city: "Natal - RN",
    },
    {
      id: 3,
      name: "Fibra 750 Mega",
      city: "Fortaleza - CE",
    },
    {
      id: 4,
      name: "Fibra 750 Mega",
      city: "Varginha - MG",
    },
  ]
}

export default function PackagesTable() {
  const data = getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
