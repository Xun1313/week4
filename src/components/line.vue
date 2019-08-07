<template>
  <div class="line">
    <div class="line-header">
      <div class="line-header-primary">
        <div class="line-header-primary-pic"></div>
        <div class="line-header-primary-title">LINE Pay 付款</div>
      </div>
      <div class="line-header-detail">將於下一步跳轉至LINE Pay進行付款</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import "../assets/_mixin.scss";
@import "../assets/_grid.scss";
.line {
  width: 90%;
  margin: auto;
  font-size: 18px;
  @include lapTop {
    width: 85%;
  }
  &-header {
    margin-bottom: 20px;
    &-primary{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5px;
      &-pic {
        background-image: url("../assets/card/line_pay.svg");
        @extend %bg;
        width: 100px;
        height: 25px;
        margin-right: 10px;
      }
    }
    &-detail{
      display: flex;
      justify-content: center;
      font-size: 16px;
      opacity: .7;
    }
  }
}
</style>
