import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.main',
  name: '中国建设银行',
  groups: [
    {
      key: 1,
      name: '全屏广告-我的页面-广告弹窗',
      activityIds: 'com.ccb.start.view.startdialog.StartDialogActivity',
      rules:
        '[id="com.chinamworld.main:id/indicator_container_container"] + [id="com.chinamworld.main:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/12726961',
    },
  ],
});
