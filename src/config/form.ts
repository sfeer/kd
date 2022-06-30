export const userLayout = [
  ['name', 'oldName', 'sex', 'birthday'],
  ['country', 'nationCode', 'birthArea', 'educationCode'],
  ['politicCode', 'sort', 'cerType', 'cerNumber'],
  ['photo', '', '', ''],
]

export const userModel = [
  { id: 'name', name: '姓名', max: 20, required: true },
  { id: 'oldName', name: '曾用名', max: 200 },
  {
    id: 'sex',
    name: '性别',
    type: 'select',
    data: [
      { id: '01', name: '男' },
      { id: '02', name: '女' },
    ],
  },
  { id: 'birthday', name: '出生日期', type: 'date', format: 'YYYY-MM-DD' },
  { id: 'country', name: '国家' },
  { id: 'nationCode', name: '民族' },
  { id: 'birthArea', name: '籍贯' },
  { id: 'educationCode', name: '学历' },
  { id: 'politicCode', name: '政治面貌' },
  { id: 'sort', name: '排序号' },
  { id: 'cerType', name: '证件类型' },
  { id: 'cerNumber', name: '证件号码' },
  { id: 'photo', name: '头像' },
]
