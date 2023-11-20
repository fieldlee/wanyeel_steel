export const DropdownList = [
  {
    title: '多级联动',
    type: 'picker',
    value: ['1'],
    componentProps: {
      colNum: 2,
      options: [
        {
          label: '属性1',
          value: '1',
          children: [
            {
              label: '属性11',
              value: '11',
            },
            {
              label: '属性12',
              value: '12',
              children: [
                {
                  label: '属性121',
                  value: '121',
                  children: [],
                },
                {
                  label: '属性121',
                  value: '122',
                  children: [],
                },
              ],
            },
            {
              label: '属性13',
              value: '13',
              children: [],
            },
          ],
        },
        {
          label: '属性2',
          value: '2',
          children: [],
        },
        {
          label: '属性3',
          value: '3',
          children: [],
        },
        {
          label: '属性4',
          value: '4',
          children: [],
        },
      ],
    },
  },
  {
    title: '距离',
    type: 'cell',
    value: 0,
    options: [
      {
        label: '由近到远',
        value: 0,
      },
      {
        label: '由远到近',
        value: 1,
      },
      {
        label: '由远到近',
        value: 2,
      },
      {
        label: '由远到近',
        value: 3,
      },
    ],
  },
]
