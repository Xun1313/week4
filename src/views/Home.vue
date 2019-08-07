<template>
  <div class="home">
    <img src="../assets/card/logo.svg" alt />
    <div class="step">
      <div class="step-cart step-steps">
        <div class="step-cart-pic step-steps-pic"></div>
        <p class="step-cart-word step-steps-word">確認購物車</p>
      </div>
      <div class="step-arrow"></div>
      <div class="step-send step-steps">
        <div class="step-send-pic step-steps-pic"></div>
        <p class="step-send-word step-steps-word">選擇配送付款方式</p>
      </div>
      <div class="step-arrow"></div>
      <div class="step-buy step-steps">
        <div class="step-buy-pic step-steps-pic"></div>
        <p class="step-buy-word step-steps-word">確認訂購</p>
      </div>
    </div>

    <div class="list">
      <div class="list-primary">
        <div class="list-primary-title">訂單明細</div>
        <div class="list-primary-code">(JC293016)</div>
      </div>
      <div class="list-sub">
        <div class="list-sub-item">
          <div class="name">商品小計</div>
          <div class="price">NT$ 880</div>
        </div>
        <div class="list-sub-item">
          <div class="name">運費</div>
          <div class="price">NT$ 60</div>
        </div>
        <div class="list-sub-item">
          <div class="name">總金額</div>
          <div class="price">NT$ 940</div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
  <!--
    <img src="../assets/card/icon_arrow-1.svg">
    <img src="../assets/card/step3_active.svg" alt="">
  <img src="../assets/card/icon_arrow-2.svg">-->
</template>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import "../assets/_mixin.scss";
@import "../assets/_grid.scss";
.step {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  background-color: $background;
  position: relative;
  z-index: 20;
  width: 100%;
  @include lapTop {
    width: 75%;
  }
  &-steps {
    display: flex;
    align-items: center;
    padding: 20px 5px;
    &-pic {
      @extend %bg;
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
    &-word {
      font-size: 18px;
      /* @include phone {
        display: none;
      } */
    }
  }
  &-cart {
    &-pic {
      background-image: url("../assets/card/icon_done.svg");
    }
    &-word {
      color: $step;
    }
  }
  &-send {
    &-pic {
      background-image: url("../assets/card/step2.svg");
    }
  }
  &-buy {
    &-pic {
      background-image: url("../assets/card/step3.svg");
    }
    &-word {
      opacity: 0.5;
    }
  }
  p {
    margin: 0;
  }
  &-arrow {
    background-image: url("../assets/card/icon_arrow.svg");
    @extend %bg;
    width: 30px;
    height: 30px;
  }
}
.list {
  margin-bottom: 30px;
  background-color: $order-list;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  color: white;
  position: relative;
  z-index: 10;
  padding: 20px 0;
  @include lapTop {
    align-items: center;
    margin-top: -2%;
    padding: 30px 0 15px;
  }
  &-primary {
    position: relative;
    &-title {
      font-weight: bold;
      font-size: 25px;
    }
    &-code {
      font-size: 16px;
    }
    &:before {
      @include lapTop {
        content: "";
        position: absolute;
        top: 13px;
        left: -10px;
        width: 0;
        height: 70%;
        outline: 1px solid white;
      }
    }
  }
  &-sub {
    //width: 40%;
    @include lapTop {
      display: flex;
    }
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 30px;
      font-size: 18px;
      .name {
        margin-right: 15px;
      }
      &:nth-child(3) .price {
        font-weight: bold;
        font-size: 23px;
      }
    }
  }
}

</style>

