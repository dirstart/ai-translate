import { NextResponse } from 'next/server'

const treeData = [
  {
    id: 'gd',
    name: '广东省',
    children: [
      {
        id: 'gd-gz',
        name: '广州市',
        children: [
          { id: 'gd-gz-th', name: '天河区' },
          { id: 'gd-gz-yx', name: '越秀区' },
        ],
      },
      {
        id: 'gd-sz',
        name: '深圳市',
        children: [
          { id: 'gd-sz-ns', name: '南山区' },
          { id: 'gd-sz-ft', name: '福田区' },
        ],
      },
    ],
  },
  {
    id: 'zj',
    name: '浙江省',
    children: [
      {
        id: 'zj-hz',
        name: '杭州市',
        children: [
          { id: 'zj-hz-xh', name: '西湖区' },
          { id: 'zj-hz-bj', name: '滨江区' },
        ],
      },
      {
        id: 'zj-nb',
        name: '宁波市',
        children: [
          { id: 'zj-nb-hs', name: '海曙区' },
          { id: 'zj-nb-yz', name: '鄞州区' },
        ],
      },
    ],
  },
  {
    id: 'sd',
    name: '山东省',
    children: [
      {
        id: 'sd-jn',
        name: '济南市',
        children: [
          { id: 'sd-jn-lx', name: '历下区' },
          { id: 'sd-jn-tn', name: '天桥区' },
        ],
      },
      {
        id: 'sd-qd',
        name: '青岛市',
        children: [
          { id: 'sd-qd-sy', name: '市南区' },
          { id: 'sd-qd-laoshan', name: '崂山区' },
        ],
      },
    ],
  },
];


export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return NextResponse.json({ data: treeData })
}
