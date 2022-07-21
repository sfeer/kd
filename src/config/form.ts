export const userLayout = [
  { id: 1, name: '基本信息' },
  ['name', 'oldName', 'sex', 'birthday'],
  ['country', 'nationCode', 'birthArea', 'educationCode'],
  { id: 2, name: '人事信息' },
  ['start', 'end'],
  ['attach'],
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
  { id: 'sort', name: '排序号', type: 'text' },
  { id: 'cerType', name: '证件类型' },
  { id: 'cerNumber', name: '证件号码' },
  { id: 'photo', name: '头像' },
  { id: 'start', name: '开始时间' },
  { id: 'end', name: '结束时间' },
  { id: 'attach', name: '附件' },
]

export const deptModel = [
  { id: 'name', name: '部门名称' },
  { id: 'sort', name: '排序号' },
]

export const appSearchModel = [
  { id: 'name', name: '应用名称' },
  { id: 'startTime', name: '开始时间' },
  { id: 'endTime', name: '结束时间' },
  { id: 'type', name: '应用类型' },
  { id: 'group', name: '应用分组' },
  { id: 'status', name: '应用状态' },
  { id: 'manager', name: '负责人' },
  { id: 'isMicro', name: '是否微应用' },
]
