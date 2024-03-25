import { iconsImgs, personsImgs } from "../utils/images";

export const navigationLinks = [
  { id: 1, title: "主页", image: iconsImgs.home },
  { id: 2, title: "预算", image: iconsImgs.budget },
  { id: 3, title: "交易", image: iconsImgs.plane },
  { id: 4, title: "订阅", image: iconsImgs.wallet },
  { id: 5, title: "贷款", image: iconsImgs.bills },
  { id: 6, title: "年度报告", image: iconsImgs.report },
  { id: 7, title: "节省", image: iconsImgs.wallet },
  { id: 8, title: "财政建议", image: iconsImgs.wealth },
  { id: 9, title: "账户", image: iconsImgs.user },
  { id: 10, title: "设置", image: iconsImgs.gears },
];

export const transactions = [
  {
    id: 11,
    name: "张三",
    image: personsImgs.person_four,
    date: "23/12/04",
    amount: 22000,
  },
  {
    id: 12,
    name: "李四",
    image: personsImgs.person_three,
    date: "23/07/21",
    amount: 20000,
  },
  {
    id: 13,
    name: "赵五",
    image: personsImgs.person_two,
    date: "23/08/25",
    amount: 30000,
  },
];

export const reportData = [
  {
    id: 14,
    month: "一月",
    value1: 45,
    value2: null,
  },
  {
    id: 15,
    month: "二月",
    value1: 45,
    value2: 60,
  },
  {
    id: 16,
    month: "三月",
    value1: 45,
    value2: null,
  },
  {
    id: 17,
    month: "四月",
    value1: 45,
    value2: null,
  },
  {
    id: 18,
    month: "五月",
    value1: 45,
    value2: null,
  },
];

export const budget = [
  {
    id: 19,
    title: "订阅",
    type: "自动续费",
    amount: 22000,
  },
  {
    id: 20,
    title: "贷款支付",
    type: "自动续费",
    amount: 16000,
  },
  {
    id: 21,
    title: "饮食",
    type: "自动续费",
    amount: 20000,
  },
  {
    id: 22,
    title: "订阅",
    type: null,
    amount: 10000,
  },
  {
    id: 23,
    title: "订阅",
    type: null,
    amount: 40000,
  },
];

export const subscriptions = [
  {
    id: 24,
    title: "王者荣耀",
    due_date: "23/12/04",
    amount: 200,
  },
  {
    id: 25,
    title: "爱奇艺",
    due_date: "23/12/10",
    amount: 150,
  },
  {
    id: 26,
    title: "Bilibili",
    due_date: "23/12/22",
    amount: 99,
  },
];

export const savings = [
  {
    id: 27,
    image: personsImgs.person_one,
    saving_amount: 250000,
    title: "为孩子的支出",
    date_taken: "23/12/22",
    amount_left: 40000,
  },
];
