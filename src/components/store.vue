<template>
  <div class="store">
    <div class="store-header">
      <div class="store-header-pic"></div>
      <div class="store-header-title">超商取貨 付款</div>
    </div>
    <div class="store-choose">
      <div class="wrap">
        <div class="store-choose-title">選擇取貨門市</div>
        <div class="store-choose-pic"></div>
      </div>

      <div class="wrap">
        <div class="designate add">
          <div class="designate-icon add-pic"></div>
          <p class="designate-word add-word">選擇取貨門市</p>
        </div>
        <div class="designate like">
          <div class="designate-icon like-pic"></div>
          <p class="designate-word like-word">選擇常用門市</p>
        </div>
      </div>
    </div>

    <div class="store-item">
      <div class="store-item-info">取貨店名</div>
      <div class="store-item-name">
        <div class="name">123</div>
        <div class="save">
          <div class="save-icon"></div>
          <p class="save-word">儲存至常用門市</p>
        </div>
      </div>
    </div>
    <div class="store-item">
      <div class="store-item-info">取貨地址</div>
      <div class="store-item-address">456</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import "../assets/_mixin.scss";
@import "../assets/_grid.scss";
.store {
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
      background-image: url("../assets/card/icon_store.svg");
      @extend %bg;
      width: 85px;
      height: 65px;
      margin-right: 10px;
    }
  }
  &-choose {
    display: block;
    align-items: center;
    @include lapTop {
      display: flex;
    }
    &-title {
      margin-right: 20px;
    }
    .wrap {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      &:nth-child(1) {
        margin-right: auto;
      }
    }
    &-pic {
      background-image: url("../assets/card/logo_family.png");
      @extend %bg;
      width: 180px;
      height: 25px;
    }
    .designate {
      display: flex;
      align-items: center;
      &-icon {
        @extend %bg;
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
      .add {
        &-pic {
          background-image: url("../assets/card/icon_add.svg");
        }
        &-word {
          opacity: 0.7;
          margin-right: 20px;
        }
      }
      .like {
        &-pic {
          background-image: url("../assets/card/icon_like.svg");
        }
        &-word {
          color: $choose-word;
        }
      }
    }
  }
  &-item {
    padding: 15px;
    background-color: $background;
    opacity: 0.7;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    @include lapTop {
      display: flex;
    }
    display: block;
    &-info {
      margin-right: 80px;
    }
    &-name {
      display: flex;
      .save {
        display: flex;
        align-items: center;
        margin-left: auto;
        @include lapTop {
          margin-left: 50px;
        }
        &-icon {
          background-image: url("../assets/card/icon_star.svg");
          @extend %bg;
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
      }
    }
  }
}
p {
  margin: 0;
}
</style>
