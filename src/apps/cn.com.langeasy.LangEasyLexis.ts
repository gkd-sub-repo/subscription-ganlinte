import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.langeasy.LangEasyLexis',
  name: '不背单词',
  groups: [
    {
      enable: false,
      key: 1,
      name: '功能类-自动签到',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'cn.com.langeasy.LangEasyLexis.activity.MainActivity',
          matches: '[id="cn.com.langeasy.LangEasyLexis:id/bb_checkin"]',
          snapshotUrls: 'https://i.gkd.li/import/13610321',
        },
      ],
    },
    {
      key: 2,
      enable: false,
      name: '局部广告-右下角弹窗',
      quickFind: true,
      matchTime: 10000,
      rules: [
        {
          activityIds: 'cn.com.langeasy.LangEasyLexis.activity.MainActivity',
          matches: '[id="cn.com.langeasy.LangEasyLexis:id/close_float_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13759025',
        },
      ],
    },
  ],
});
