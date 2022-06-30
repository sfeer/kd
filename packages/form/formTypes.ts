export interface FormItemModel {
  id: string
  name: string
  type: FormItemType
  prop?: object
  data?: object[]
}

export type FormItemType = 'input' | 'number' | 'checkbox' | 'radio' | 'password' | 'select' | 'date' | 'textarea'
