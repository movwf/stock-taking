import { Data } from './dataTypes'
import Header from './Header'
import Row from './Row'
import Navigator from './Navigator'

function DataTable({ data }: Data) {
  return (
    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
      <table className="min-w-full leading-normal">
        <Header />
        {data?.map((item, index) => (
          <Row key={index} data={{ ...item, key: index + 1 }} />
        ))}
      </table>
      {/* Should change for selective count */}
      {data?.length !== undefined && data?.length > 25 && <Navigator />}
    </div>
  )
}

export default DataTable
