import { createStore } from 'vuex'

export default createStore({
  state: {
    carNum:3,
    commodise: [
        {
          img: require("../assets/imgs/s3.png"),
          content:
            "Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信4G手机",
          type: "选择：玫瑰金 全网通 256G 官方标配",
          oldPrice: 9999.9,
          newPrice: 6049.9,
          maxNum: 10,
          num: 1,
        },
        {
          img: require("../assets/imgs/测试.jpg"),
          content:
            "百草味精制猪肉脯零食特产小吃靖江特色风味肉干肉片网红休闲食品",
          type: "口味：精制猪肉脯155g（原味）",
          oldPrice: 39.8,
          newPrice: 23.9,
          maxNum: 20,
          num: 2,
        },
        {
          img: require("../assets/imgs/测试2.png"),
          content:
            "海底捞自热自煮小火锅懒人微宿舍酸辣粉方便泡面即速食普通装4盒",
          type: "口味：海底捞番茄牛腩口味",
          oldPrice: 44.8,
          newPrice: 34.8,
          maxNum: 99,
          num: 1,
        },
      ],
    user:[{
      userName:'帅气的华',
      userTelephone:'13599721590',
      userPassword:'@lzh123123',
    }],
    order:[
      {
        img: require("../assets/imgs/s3.png"),
        content:
          "Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信4G手机",
        type: "选择：玫瑰金 全网通 256G 官方标配",
        orderNumber: '34712634295237',
        orderTime: '2021年04月28日',
        num:1,
        total:6049.9,
      },
      {
        img: require("../assets/imgs/测试.jpg"),
        content:
          "百草味精制猪肉脯零食特产小吃靖江特色风味肉干肉片网红休闲食品",
        type: "口味：精制猪肉脯155g（原味）",
        orderNumber: '90732946736542',
        orderTime: '2021年05月02日',
        num:2,
        total:6049.9,
      },
    ],
    isUser:false,
    isCarNone: false,
    isCarShow: true,
    isOrderNone: false,
    isOrderShow: true,
  },
  mutations: {
    commodiseAdd(state,obj){
      state.commodise.push(obj);
      state.carNum = state.commodise.length;
      if(state.isCarNone != false && state.isCarShow != true){
        state.isCarNone = false;
        state.isCarShow = true;
      }
    },
    userAdd(state,obj){
      state.user.push(obj);
      console.log(state.user);
    },
    orderAdd(state,obj){
      state.order.push(obj);
      if(state.isOrderNone != false && state.isOrderShow != true){
        state.isOrderNone = false;
        state.isOrderShow = true;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
