export interface Data {
  data: RowData[] | undefined
}

export interface RowData {
  name: string
  quantity: number
  barcode: string
  stock_code: string
}

export interface InnerRowData {
  data: {
    name: string
    quantity: number
    barcode: string
    stock_code: string
    key: number
  }
}