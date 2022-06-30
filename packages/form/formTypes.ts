export interface FormItemModel {
  id: string
  name: string
  type: FormItemType
  mode?: string
  format?: string
  props?: object
  data?: { id: string; name: string }[]
}

export type FormItemType = 'input' | 'number' | 'checkbox' | 'radio' | 'password' | 'select' | 'date' | 'textarea'
