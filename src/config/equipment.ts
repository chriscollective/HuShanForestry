export type Equipment = {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  category: string;
  headline: string;
  description: string;
  specs: { label: string; value: string }[];
};

export const equipmentList: Equipment[] = [
  {
    id: 'gp45v',
    name: 'Tigercat GP45V',
    image: '/images/equipment/gp45v.jpg',
    imageAlt: 'Tigercat GP45V forestry loader',
    category: '伐木作業',
    headline: '林業裝載的力量中樞',
    description:
      '自動化夾具、強韌臂架與精準操控系統，大幅提升丸太搬運與整理效率，即使在坡地或潮濕地形也能穩定作業。',
    specs: [
      { label: '引擎', value: 'Cat C7.1 Tier 4 Final' },
      { label: '最大起重', value: '20,000 kg' },
      { label: '臂展', value: '10.6 m' },
      { label: '特色', value: '360° 旋轉座艙 / 自動潤滑' },
    ],
  },
  {
    id: 'koller310',
    name: 'Koller K310',
    image: '/images/equipment/koller310.jpg',
    imageAlt: 'Koller K310 skyline yarder',
    category: '集材系統',
    headline: '山地線錨集材系統',
    description:
      '德製鋼索架線技術，具備快速部署與遠距離遙控，大幅降低人工搬運風險，適用高落差山區的環境。',
    specs: [
      { label: '鋼索長度', value: '1,000 m' },
      { label: '最大載重', value: '3,000 kg' },
      { label: '操作成員', value: '2-3 人' },
      { label: '特色', value: '全功能遙控 / 快拆式塔架' },
    ],
  },
  {
    id: 'sk135',
    name: 'Kobelco SK135SR',
    image: '/images/equipment/sk135.jpg',
    imageAlt: 'Kobelco SK135SR excavator with forestry attachments',
    category: '林道整備',
    headline: '零尾小半徑林道挖掘',
    description:
      '搭配加強型旋轉夾具與防護套件，不論是邊坡修整或木材堆置都能在狹窄林道中靈活操作。',
    specs: [
      { label: '作業重量', value: '15,000 kg' },
      { label: '出力', value: '78.5 kW' },
      { label: '最大挖掘力', value: '98 kN' },
      { label: '特色', value: '零尾迴轉 / 重型林業護罩' },
    ],
  },
  {
    id: 'excavator',
    name: 'Hitachi ZX230F',
    image: '/images/equipment/excavator.jpg',
    imageAlt: 'Hitachi ZX230F forestry excavator',
    category: '多功能伐木',
    headline: '客製化林業挖伐平台',
    description:
      '全車加固並配置高流量油路，可快速切換夾木、破碎、鋸頭等多種屬具，單台即可完成砍伐到集材的流程。',
    specs: [
      { label: '引擎', value: 'Isuzu 6HK1X' },
      { label: '液壓流量', value: '2 × 241 L/min' },
      { label: '作業重量', value: '24,000 kg' },
      { label: '特色', value: 'ROPS/FOPS 保護 / 快速接頭' },
    ],
  },
  {
    id: 'tstforestry',
    name: 'TST Forestry System',
    image: '/images/equipment/tstforestry.jpg',
    imageAlt: 'TST Forestry System smart monitoring',
    category: '智慧監測',
    headline: '林業機具即時監控平台',
    description:
      '結合 GPS、油耗與作業時數監控，透過雲端分析提供維修排程與作業效率圖表，是大型伐採專案的數據腦。',
    specs: [
      { label: '通訊', value: '4G / SAT 傳輸' },
      { label: '監控項目', value: '油耗 / 位置 / 人員' },
      { label: '整合', value: '可接 ERP 與派工系統' },
      { label: '特色', value: '即時警示 / 多機群控' },
    ],
  },
];
