import { InnerRowData } from './dataTypes'

function Row({ data }: InnerRowData) {
  return (
    <tbody>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{data.key}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{data.name}</p>
        </td>
        <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm text-center">
          <p className="text-gray-900 whitespace-no-wrap">{data.quantity}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{data.barcode}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="text-gray-900 whitespace-no-wrap">{data.stock_code}</span>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="text-indigo-600 bg-blue-100 rounded-full px-3 py-1 hover:text-white hover:bg-blue-300">
            Edit
          </span>
          <span className="ml-2 text-indigo-600 bg-red-100 rounded-full px-2 py-1 hover:text-white hover:bg-red-300">
            X
          </span>
        </td>
      </tr>
    </tbody>
  )
}

export default Row
