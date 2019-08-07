<template>
  <div>
    <div class="pay row">
      <div
        class="pay-item col-12 col-lg-6"
        v-for="(item, index) in pay"
        :key="item.word"
        :class="{'is-check-style':isCheck===index}"
      >
        <div
          class="pay-item-check"
          :class="[isCheck===index?'is-check':'no-check']"
          @click="isCheck=index"
        ></div>
        <div class="pay-item-pic" :style="`background-image:url(${item.pic})`"></div>
        <div class="pay-item-describe describe">
          <div class="describe-title">{{item.title}}</div>
          <div class="describe-word">{{item.word}}</div>
        </div>
      </div>
    </div>

    <ul class="notice">
      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam exercitationem doloremque pariatur corporis voluptate eius suscipit quam deserunt consectetur blanditiis?</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, facere.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci enim commodi consequatur necessitatibus laudantium?</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique error maxime laboriosam laborum?</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, omnis asperiores? Explicabo, eaque placeat.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </ul>

    <div class="link">
      <div class="link-prev link-links">上一步</div>
      <div class="link-next link-links" @click="nextHandler()">下一步</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCheck: "",
      pay: [
        {
          pic: require("../assets/card/icon_store.svg"),
          title: "超商取貨 付款",
          word: "24隔日取貨說明"
        },
        {
          pic: require("../assets/card/icon_card.svg"),
          title: "信用卡 付款",
          word: "VISA,MASTER,JCB,聯名合作卡"
        },
        {
          pic: require("../assets/card/line_pay.svg"),
          title: "LINE Pay 付款",
          word: "使用line point折抵消費"
        },
        {
          pic: require("../assets/card/unionpay.png"),
          title: "銀聯卡 付款",
          word: "支付成功頁面僅為銀聯卡回復訊息，交易是否完成請需再次確認"
        },
        {
          pic: require("../assets/card/icon_atm.svg"),
          title: "web ATM 付款",
          word: "網路銀行ATM操作說明"
        }
      ]
    };
  },
  methods: {
    nextHandler() {
      if (this.isCheck > 0 || this.isCheck === 0) {
        const payWay = this.pay[this.isCheck].title.split(" ")[0];
        this.$router.push(`/checkout/${payWay}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import "../assets/_mixin.scss";
@import "../assets/_grid.scss";
@import '../assets/link.scss';
.pay {
  width: 90%;
  margin: 20px auto;
  @include lapTop {
    width: 85%;
  }
  &-item {
    display: flex;
    align-items: center;
    margin: 5px 0;
    padding: 15px;
    font-size: 18px;
    * {
      margin: 0 15px;
    }
    &-pic {
      @extend %bg;
      width: 80px;
      height: 80px;
    }
    .describe {
      &-word {
        opacity: 0.7;
      }
    }
  }
}
.is-check,
.no-check {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.is-check {
  background-image: url("../assets/card/Group 40.svg");
  @extend %bg;
  &-style {
    outline: 1px solid $card-border;
    background-color: $background;
  }
}

.no-check {
  border: 1px solid black;
  opacity: 0.5;
  border-radius: 50%;
}
.notice {
  width: 90%;
  @include lapTop {
    width: 85%;
  }
  margin: 0 auto;
  opacity: 0.7;
  li {
    margin: 5px 0;
  }
}

</style>
