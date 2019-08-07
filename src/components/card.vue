<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-pic"></div>
      <div class="card-header-title">信用卡 付款</div>
    </div>

    <div class="card-aside">
      <div class="card-aside-title">填寫付款資訊</div>
      <div class="card-aside-icon card1"></div>
      <div class="card-aside-icon card2"></div>
      <div class="card-aside-icon card3"></div>
    </div>

    <div class="card-info">
      <div class="card-info-name">信用卡號</div>
      <input type="number" class="card-info-input guide-space" placeholder="0000 0000 0000 0000" />
    </div>

    <div class="card-info">
      <div class="card-info-name">有效年月</div>
      <div class="card-info-group">
        <input type="date" class="card-info-group-input" />
        <i class="far fa-question-circle card-info-group-tips"></i>
        <div class="card-info-guide guide1">
          <div class="card-info-guide-word">請翻至卡片背後，為日期標示之數字</div>
          <div class="card-info-guide-pic credit1"></div>
        </div>
      </div>

      <div class="card-info-name">驗證碼</div>
      <div class="card-info-group">
        <input type="number" class="card-info-group-input" />
        <i class="far fa-question-circle card-info-group-tips"></i>
        <div class="card-info-guide guide2">
          <div class="card-info-guide-word">請翻至卡片背後，位於簽名欄旁的三位數</div>
          <div class="card-info-guide-pic credit2"></div>
        </div>
      </div>
    </div>

    <div class="card-info">
      <div class="card-info-name">手機</div>
      <input type="number" class="card-info-input" placeholder="刷卡若採簡訊驗證，將發至您發卡銀行的手機號碼" />
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.card {
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
      background-image: url("../assets/card/icon_card.svg");
      @extend %bg;
      width: 85px;
      height: 57px;
      margin-right: 10px;
    }
  }
  &-aside {
    display: flex;
    align-items: center;
    * {
      margin-right: 10px;
    }
    &-icon {
      @extend %bg;
      width: 45px;
      height: 30px;
    }
    .card1 {
      background-image: url("../assets/card/card_1.jpg");
    }
    .card2 {
      background-image: url("../assets/card/card_2.png");
    }
    .card3 {
      background-image: url("../assets/card/card_3.png");
    }
  }
  &-info {
    position: relative;
    opacity: 0.7;
    padding: 15px;
    align-items: center;
    display: block;
    @include lapTop {
      display: flex;
    }
    &-name {
      margin-right: 25px;
      white-space: nowrap;
      width: 75px;
    }
    &-input {
      padding: 5px 10px;
      width: 100%;
    }
    .guide-space {
      width: 100%;
      @include lapTop {
        width: auto;
      }
    }
    &-group {
      position: relative;
      display: block;
      @include lapTop {
        display: flex;
      }
      align-items: center;
      width: 100%;
      &-input {
        padding: 5px 10px;
        width: 100%;
        /* @include lapTop {
          width: auto;
        } */
      }
      &-tips {
        color: $next-button;
        position: relative;
        top: -30px;
        left: 94%;
        display: block;
        cursor: pointer;
        @include lapTop {
          top: 0;
          left: -11%;
          &:hover ~ .card-info-guide {
            display: flex;
          }
        }
      }
      .card-info-guide {
        width: 100%;
        display: none;
        align-items: center;
        @include lapTop {
          width: 250px;
          position: absolute;
        }
        padding: 10px;
        margin: 15px 0;
        background-color: $background;

        &-word {
          margin-right: 70px;
          @include lapTop {
            margin-right: 5px;
          }
          font-size: 14px;
        }
        &-pic {
          @extend %bg;
          width: 120px;
          height: 75px;
          @include lapTop {
            width: 90px;
            height: 45px;
          }
        }
        .credit1 {
          background-image: url("../assets/card/qa_card_date.svg");
        }
        .credit2 {
          background-image: url("../assets/card/qa_card.svg");
        }
      }
      .guide1 {
        top: -195%;
        right: 0;
      }
      .guide2 {
        display: flex;
        @include lapTop {
          display: none;
          top: -195%;
          right: -15%;
        }
      }
    }
  }
}
</style>
