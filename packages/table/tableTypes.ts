import { GetRowKey, ColumnType, TablePaginationConfig } from 'ant-design-vue/es/table/interface'

export interface TableConfig {
  rowKey: string | GetRowKey<any>
  columns: ColumnType
  pagination: TablePaginationConfig
}
