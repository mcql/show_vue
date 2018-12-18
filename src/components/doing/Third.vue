<template>
  <div>
    <div class="jieduancontent" v-for="items in result">
      <div class="jieduanacontent">
        <p>
          <img src="@/assets/images/renwuioc.png" class="zhuangtaiioc" alt>
          {{items.title}}
        </p>
        <img src="@/assets/images/downioc.png" @click="changeHeight($event)" class="upioc" alt>
      </div>
      <ul class="detailrenwu">
        <li v-for="item in items.content">
          <p class="renwuname">
            <span>
              NO.{{item.id}}
              <span style="color: #333333;">{{item.name}}</span>
            </span>
            <span class="onejindu">完成进度：{{item.progress}}%</span>
          </p>
          <div class="renwuall">
            <div class="touxiang"></div>
            <div class="onedetail">
              <p>
                <span>累计提现：</span>
                <span>{{item.money}}</span>
              </p>
              <p>
                <span>团队：</span>
                <span>{{item.person}} 人</span>
              </p>
              <p>
                <span>阶段：</span>
                <span>{{item.introduct}}</span>
              </p>
            </div>
            <div class="chaknbtn"></div>
          </div>
        </li>
      </ul>
      <div class="linex"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [
        {
          id: "1",
          title: "第一阶段",
          content: [
            {
              id: "1",
              name: "张三",
              progress: 95,
              money: 8000,
              person: 80,
              introduct: "红利阶段"
            },
            {
              id: "2",
              name: "张四",
              progress: 95,
              money: 8000,
              person: 80,
              introduct: "红利阶段"
            },
            {
              id: "3",
              name: "张五",
              progress: 95,
              money: 8000,
              person: 80,
              introduct: "红利阶段"
            }
          ]
        },
        {
          id: "1",
          title: "第二阶段",
          content: [
            {
              id: "1",
              name: "李四",
              progress: 95,
              money: 8000,
              person: 80,
              introduct: "红利阶段"
            },
            {
              id: "1",
              name: "李五",
              progress: 95,
              money: 8000,
              person: 80,
              introduct: "红利阶段"
            }
          ]
        },
        {
          id: "1",
          title: "第三阶段",
          content: [
            {
              id: "1",
              name: "王二麻子",
              progress: 95,
              money: 8000,
              person: 80,
              introduct: "红利阶段"
            }
          ]
        }
      ]
    }
  },
  methods: {
    changeHeight(event) {
      let el = event.currentTarget;
      let height = el.parentNode.parentNode.childNodes[2].style.height
      if (height == '0px' || height == '') {
        el.src = require("@/assets/images/upioc.png");
        el.parentNode.parentNode.childNodes[2].style.height = "auto"
      } else {
        el.src = require("@/assets/images/downioc.png");
        el.parentNode.parentNode.childNodes[2].style.height = "0"
      }
    }
  }
}
</script>

<style>
</style>
