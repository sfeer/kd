import type { TableColumnsType, TablePaginationConfig } from 'ant-design-vue'

export interface TableConfig {
  rowKey: string
  columns: TableColumnsType
  pagination: TablePaginationConfig
}
