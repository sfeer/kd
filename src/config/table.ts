export const systemConfig = {
  rowKey: 'id',
  columns: [
    { title: '应用名称', dataIndex: 'name' },
    { title: '核对时间', dataIndex: 'time' },
    { title: '核对数量', dataIndex: 'num' },
    { title: '操作', scopedSlots: { customRender: 'action' } },
  ],
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0,
    showSizeChanger: true,
    showTotal: (total) => `共 ${total} 条记录`,
  },
}
