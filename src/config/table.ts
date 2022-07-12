import { appSearchModel } from './form'

export const systemConfig = {
  rowKey: 'id',
  columns: [
    { title: '应用名称', dataIndex: 'name', width: 200 },
    { title: '应用描述', dataIndex: 'desc' },
    { title: '时间', dataIndex: 'time', width: 150 },
    { title: '数量', dataIndex: 'num', width: 150 },
    { title: '操作', key: 'action', width: 300 },
  ],
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0,
    showSizeChanger: true,
    showTotal: total => `共 ${total} 条记录`,
  },
  search: appSearchModel
}
