module.exports = [
  {
    id: '1',
    parentId: -1,
    nodeComponent: 'demo-node',
    data: {
      width: 320,
      text: 'Parent block',
      title: 'New Visitor',
      description: '<span>When a <span class="font-bold">new visitor</span> goes to <span class="font-bold">Site 1</span></span>',
      icon: 'eyeblue',
    },
  },
  {
    id: '2',
    parentId: '1',
    nodeComponent: 'demo-node',
    data: {
      text: 'Parent block',
      title: 'New Visitor',
      description: '<span>When a <span class="font-bold">new visitor</span> goes to <span class="font-bold">Site 1</span></span>',
      icon: 'eyeblue',
    },
  },
];
