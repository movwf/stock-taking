import { memo } from 'react'

function ManualForm() {
  return (
    <form className="flex flex-col w-full max-w-sm">
      <div className="mt-3 mb-3">
        <input
          type="text"
          id="barcode"
          className="rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Barcode"
        />
        <input
          type="number"
          id="quantity"
          className="w-14 h-auto ml-2 rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          defaultValue={1}
          value={1}
        />
        <button
          className="flex-shrink-0 ml-2 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          type="submit"
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default memo(ManualForm)
