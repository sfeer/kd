import type { TableColumnsType, TablePaginationConfig } from 'ant-design-vue'
import { FormItemModel } from '../form/formTypes'

export interface TableConfig {
  rowKey: string
  columns: TableColumnsType
  pagination: TablePaginationConfig
  search?: FormItemModel[]
}
