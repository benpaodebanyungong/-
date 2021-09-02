<template>
  <div class="solapamiento">
    <div class="box">
      <div class="point"></div>
      <div class="hour"></div>
      <div class="min"></div>
      <div class="second"></div>
      <div class="list"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "clock",
  data() {
    return {};
  },
  methods: {
    clockCreated() {
      let boxDom = this.getEles("box")[0];
      let pointDom = this.getEles("point")[0];
      let hourDom = this.getEles("hour")[0];
      let minDom = this.getEles("min")[0];
      let secondDom = this.getEles("second")[0];
      let ulDom = this.getEles("list")[0];

      let liDoms = [];
      for (let i = 0; i < 60; i++) {
        liDoms.push(this.createNode("li"));
      }
      liDoms[0].className = "lang";
      ulDom.appendChild(liDoms[0]);
      liDoms.forEach((e, i) => {
        if (i % 5 === 0) {
          liDoms[i].className = "lang";
          ulDom.appendChild(liDoms[i]);
        } else {
          ulDom.appendChild(liDoms[i]);
        }
        liDoms[i].style.transform = `rotateZ(${i * 6}deg)`;
      });
      run();
      let interval = setInterval(run, 1000);
      function run() {
        const newDate = new Date();
        const s = newDate.getSeconds();
        secondDom.style.transform = `rotateZ(${s * 6}deg)`;

        const m = newDate.getMinutes() + s / 60;
        minDom.style.transform = `rotateZ(${m * 6}deg)`;

        const h = newDate.getHours() + m / 60;
        hourDom.style.transform = `rotateZ(${h * 30}deg)`;
      }
    },
    getEles(className) {
      return document.getElementsByClassName(className);
    },
    createNode(tagName) {
      if (typeof tagName == "string") {
        return document.createElement(tagName);
      } else {
        return console.log("输入不正确，请重新输入");
      }
    },
  },
  mounted() {
    this.clockCreated();
  },
};
</script>
  
<style scoped lang="scss">
li {
  list-style-type: none;
}
.solapamiento {
  width: 513.24px;
  height: 513.24px;
  display: block;
  position: relative;
  margin: 0 auto;
}
.solapamiento::after {
  position: absolute;
  // background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fad35e87de88e3e5990bb98229a9a1e2955e0a9b1ce69d-qvhZBy_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632300642&t=750ac4d5cf269e5c2112759f1af7d18e);
  background-image: url("../assets/imgs/clock_background.jpg");
  background-repeat: no-repeat;
  background-size: 78% 78%;
  opacity: 0.5;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  content: "";
}
.box {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #93c950;
  // background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.huitu8.com%2Fuploads%2Fallimg%2F20190704abc02%2Ff18720bddf421e48773ce3115d310c8c.jpg&refer=http%3A%2F%2Fm.huitu8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632302813&t=9cc435fe6a0dc0f4010846c7a5145c56);
  background-image: url("../assets/imgs/clock_content.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transform: translate(105px, 105px);
}
.point {
  position: absolute;
  width: 6px;
  height: 6px;
  top: 98px;
  left: 98px;
  border-radius: 3px;
  background-color: #dcffc5;
}
.hour {
  position: absolute;
  width: 4px;
  height: 50px;
  background-image: linear-gradient(#00b1da, #1ed5ff, #9ee8f9, #e2f3f7);
  left: 98px;
  top: 50px;
  transform-origin: center bottom;
}
.min {
  position: absolute;
  width: 3px;
  height: 65px;
  top: 35px;
  left: 98.5px;
  background-image: linear-gradient(#d905fd, #e44ffd, #f19dff, #f8dcfd);
  transform-origin: center bottom;
}
.second {
  position: absolute;
  width: 2px;
  height: 75px;
  top: 25px;
  left: 99px;
  background-image: linear-gradient(#fd6d07, #fb8f42, #ffc194, #fbe3d2);
  transform-origin: center bottom;
}
.list {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.list li {
  position: absolute;
  height: 192px;
  width: 2px;
  border-bottom: 4px solid #dcffc5;
  top: 2px;
  left: 99px;
  transform: rotateZ(0);
}
.list li.lang {
  height: 187px;
  border-bottom: 10px solid #d2ffb6;
  transform: rotateZ(0);
}
</style>