import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lemon.lv',
  name: '剪映',
  groups: [
    {
      key: 0,
      name: '局部广告-导出界面底部广告',
      desc: '关闭完成导出后的下方广告',
      activityIds: 'com.vega.export.edit.view.ExportActivity',
      rules: [
        {
          matches: '@FlattenUIImage + LynxAdComponentView',
          snapshotUrls: 'https://i.gkd.li/import/12911010',
        },
      ],
    },
  ],
});
