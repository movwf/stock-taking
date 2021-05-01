import { useEffect, useState } from 'react'
import { RowData as Data } from '../components/DataTable/dataTypes'
import DataTable from '../components/DataTable/index'

const mockData = [
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

function Inventory() {
  const [data, setData] = useState<Data[] | undefined>(undefined)
  useEffect(() => {
    setData(mockData)
  }, [])
  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div className="py-8">
        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 className="text-2xl leading-tight">Inventory</h2>
          <div className="text-end">
            <form className="flex w-full max-w-sm space-x-3">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Name/Barcode"
                />
              </div>
              <button
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Filter
              </button>
            </form>
          </div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <DataTable data={data} />
        </div>
      </div>
    </div>
  )
}

export default Inventory
