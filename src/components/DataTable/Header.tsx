function Header() {
  return (
    <thead>
      <tr>
          <th scope="col"  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
              No
          </th>
          <th scope="col"  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
              Product
          </th>
          <th scope="col"  className="px-2 py-2 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal text-center">
              Q
          </th>
          <th scope="col"  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
              Barcode
          </th>
          <th scope="col"  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
              Stock Code
          </th>
          <th scope="col"  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
              Edit/Del
          </th>
      </tr>
    </thead>
  )
}

export default Header
