<template>
  <div class="atm">
    <div class="atm-header">
      <div class="atm-header-pic"></div>
      <div class="atm-header-title">Web ATM 付款</div>
    </div>

    <div class="atm-aside">
      <div class="atm-aside-title">付款資訊</div>
    </div>

    <div class="atm-info">
      <div class="atm-info-title">付款銀行</div>
      <select class="atm-info-bank">
        <option value disabled>請選擇銀行</option>
        <option value>玉山銀行</option>
        <option value>台新銀行</option>
        <option value>富邦銀行</option>
      </select>
    </div>

    <ul class="atm-detail">
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import "../assets/_mixin.scss";
@import "../assets/_grid.scss";
.atm {
  width: 90%;
  margin: auto;
  font-size: 18px;
  @include lapTop {
    width: 85%;
  }
  &-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    &-pic {
      background-image: url("../assets/card/icon_atm.svg");
      @extend %bg;
      width: 70px;
      height: 50px;
      margin-right: 10px;
    }
  }
  &-info {
    align-items: center;
    @include lapTop {
      display: flex;
    }
    opacity: 0.7;
    &-title {
      margin: 15px 20px;
      white-space: nowrap;
    }
    &-bank {
      padding: 5px;
      width: 100%;
      @include lapTop {
        width: 30%;
      }
    }
  }
  &-detail {
    opacity: .7;
    margin: 15px 0 15px 20px;
    @include lapTop {
      margin: 15px 0 15px 90px;
    }
  }
}
</style>
