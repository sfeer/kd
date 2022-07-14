import type { TableColumnsType, TablePaginationConfig } from 'ant-design-vue'
import { FormItemModel } from '../form/formTypes'
import type { ButtonType } from 'ant-design-vue/lib/button'

export interface TableConfig {
  rowKey: string
  columns: TableColumnsType
  pagination: TablePaginationConfig
  search?: FormItemModel[]
}

export interface TableButtonType {
  name: string
  type?: ButtonType
  click: (event: MouseEvent) => void
}
