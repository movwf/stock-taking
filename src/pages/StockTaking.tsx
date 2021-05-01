import { useState } from 'react'
import ManualForm from '../components/StockEntry/ManualForm'
import AutoForm from '../components/StockEntry/AutoForm'
import Toggle from '../components/StockEntry/Toggle'
import DataTable from '../components/DataTable'

const data = [
  {
    name: 'Product',
    quantity: 1,
    barcode: '8691259593',
    stock_code: '3814 212 2201',
  },
  {
    name: 'Product',
    quantity: 1,
    barcode: '8691259593',
    stock_code: '3814 212 2201',
  },
]

function StockTaking() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div className="py-8">
        {/* Page Title */}
        <h2 className="mb-3 text-3xl text-center leading-tight">
          Add New Item
        </h2>
        {/* Form */}
        <div className="flex flex-row w-full">
          <div className="text-end w-full">
            <header className="h-auto w-7/12 mx-auto shadow-lg bg-white dark:bg-gray-700 h-16 rounded-2xl z-40">
              <div className="z-20 flex flex-col justify-start h-full px-3">
                <Toggle checked={checked} setChecked={setChecked} />
                {checked ? <ManualForm /> : <AutoForm />}
              </div>
            </header>
          </div>
        </div>
        {/* Listing */}
        <div className="mt-3 -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <DataTable data={data} />
        </div>
      </div>
    </div>
  )
}

export default StockTaking
