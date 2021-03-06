export default [
  {
    id: '1',
    name: '文档',
    icon: 'user',
    child: [
      {
        id: '11',
        name: '模块1',
        icon: 'start',
        child: [
          { id: '111', name: '功能1' },
          { id: '112', name: '功能2' },
          { id: '113', name: '功能3' },
          { id: '114', name: '功能4' },
        ],
      },
      {
        id: '12',
        name: '模块2',
        icon: 'start',
        child: [
          { id: '121', name: '功能1' },
          { id: '122', name: '功能2' },
          { id: '123', name: '功能3' },
          { id: '124', name: '功能4' },
        ],
      },
      {
        id: '13',
        name: '模块3',
        icon: 'start',
        child: [
          { id: '131', name: '功能1' },
          { id: '132', name: '功能2' },
          { id: '133', name: '功能3' },
          { id: '134', name: '功能4' },
        ],
      },
      {
        id: '14',
        name: '模块4',
        icon: 'start',
        child: [
          { id: '141', name: '功能1' },
          { id: '142', name: '功能2' },
          { id: '143', name: '功能3' },
          { id: '144', name: '功能4' },
        ],
      },
      {
        id: '15',
        name: '模块5',
        icon: 'start',
        child: [
          { id: '151', name: '功能1' },
          { id: '152', name: '功能2' },
          { id: '153', name: '功能3' },
          { id: '154', name: '功能4' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: '组件',
    icon: 'setting',
    child: [
      {
        id: '21',
        name: '通用',
        icon: 'news',
        child: [
          { id: '211', name: '按钮', url: '/comp/common/btn' },
          { id: '212', name: '图片裁剪', url: '/comp/common/cropper' },
        ],
      },
      {
        id: '22',
        name: '集合',
        icon: 'news',
        child: [
          { id: '221', name: '表格', url: '/comp/set/table' },
          { id: '222', name: '列表', url: '/comp/set/list' },
          { id: '223', name: '卡片', url: '/comp/set/card' },
        ],
      },
      {
        id: '23',
        name: '表单',
        icon: 'news',
        child: [
          { id: '231', name: '表单', url: '/comp/form/form' },
          { id: '232', name: '搜索表单', url: '/comp/form/search-form' },
          { id: '233', name: '输入框', url: '/comp/form/input' },
          { id: '234', name: '颜色选择框', url: '/comp/form/color-picker' },
        ],
      },
      {
        id: '24',
        name: '图表',
        icon: 'news',
        child: [
          { id: '241', name: '趋势图', url: '/comp/chart/line' },
          { id: '242', name: '时序图', url: '/comp/chart/time' },
        ],
      },
    ],
  },
  { id: '3', name: '场景', icon: 'setting' },
  { id: '4', name: '联系', icon: 'setting' },
]
