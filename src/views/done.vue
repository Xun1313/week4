<template>
  <div class="success">
    <div class="success-header">
      <div class="success-header-title">訂購成功!</div>
      <div class="success-header-detail">感謝您的訂購，我們將儘速為您出貨!</div>
      <div class="success-header-pic"></div>
    </div>

    <div class="success-list">
      <div class="success-list-title">訂單資訊(JC293016)</div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">數量</th>
            <th scope="col">顏色</th>
            <th scope="col">價格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>長板無袖洋裝</td>
            <td>1</td>
            <td>綠色</td>
            <td>599元</td>
          </tr>
          <tr>
            <td>大球氣質銀飾耳環(針式)</td>
            <td>1</td>
            <td>紅色</td>
            <td>281</td>
          </tr>
          <tr>
            <td colspan="3" align='right'>運費</td>
            <td>60元</td>
          </tr>
          <tr>
            <td colspan="3" align='right'>共2品項、總計</td>
            <td>NT$ 940</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
  /* mounted() {
    vm.$bus.$on("push", (message, status = "warning") => {
      vm.updateMessage(message, status);
    });
  }, */
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import "../assets/_mixin.scss";
@import "../assets/_grid.scss";
.success {
  width: 90%;
  margin: auto;
  font-size: 18px;
  @include lapTop {
    width: 85%;
  }
  &-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    &-title {
      font-size: 45px;
    }
    &-detail {
      margin: 20px 0;
      opacity: 0.7;
    }
    &-pic {
      background-image: url("../assets/card/img_complete.svg");
      @extend %bg;
      width: 150px;
      height: 150px;
    }
  }
  &-list{
    background-color:$background;
    padding: 20px;
  }
}
</style>
