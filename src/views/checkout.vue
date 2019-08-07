<template>
  <div>
    <store v-if="payWay==='超商取貨'"></store>
    <card v-if="payWay==='信用卡'"></card>
    <atm v-if="payWay==='web'"></atm>
    <lineComponent v-if="payWay==='LINE'"></lineComponent>
    <div class="info">
      <div class="info-title">填寫訂購人資訊</div>
      <div class="info-content">
        <div class="info-content-item">
          <div class="info-content-item-name">姓名</div>
          <input type="text" class="info-content-item-input" placeholder="請填寫真實姓名" />
          <div class="info-content-item-name">手機</div>
          <select>
            <option>886</option>
          </select>
          <input type="number" class="info-content-item-input" placeholder="請填寫手機號碼" />
        </div>
        <div class="info-content-item">
          <div class="info-content-item-name">地址</div>
          <input type="number" class="info-content-item-input" placeholder="郵遞區號" />
          <input type="text" class="info-content-item-input" placeholder="例:新北市信義區" />
        </div>
        <div class="info-content-item">
          <div class="info-content-item-name">Email</div>
          <input type="text" class="info-content-item-input" />
        </div>
      </div>
    </div>

    <div class="info-content info">
      <div class="info-content-check">
        <input type="checkbox" class="info-content-check-btn" />
        <div class="info-content-check-word">同訂購人資料</div>
      </div>
      <div class="info-content-item">
        <div class="info-content-item-name">收件人</div>
        <input type="text" class="info-content-item-input" placeholder="請填寫真實姓名" />
        <div class="info-content-item-name">手機</div>
        <select>
          <option>886</option>
        </select>
        <input type="number" class="info-content-item-input" placeholder="請填寫手機號碼" />
      </div>
      <div class="info-content-item">
        <div class="info-content-item-name">地址</div>
        <input type="number" class="info-content-item-input" placeholder="郵遞區號" />
        <input type="text" class="info-content-item-input" placeholder="例:新北市信義區" />
      </div>
      <div class="info-content-item">
        <div class="info-content-item-name">Email</div>
        <input type="text" class="info-content-item-input" />
      </div>
    </div>

    <ul class="notice">
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et accusantium nam dolore porro eius expedita pariatur, error dolorum nisi sunt nobis dignissimos, exercitationem quae numquam? Quae, nisi sit! Eligendi, eaque.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, corrupti eligendi.</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic!</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente, vitae voluptatem odio officia facere.</li>
    </ul>

    <div class="confirm">
      <div class="confirm-btn"></div>
      <div class="confirm-word">確認我已了解</div>
    </div>

    <div class="link">
      <div class="link-prev link-links">上一步</div>
      <div class="link-next link-links" @click="nextHandler()">下一步</div>
    </div>
  </div>
</template>

<script>
import store from "../components/store";
import card from "../components/card";
import atm from "../components/atm";
import lineComponent from "../components/line";
export default {
  data() {
    return {
      payWay: ""
    };
  },
  methods: {
    nextHandler(){
      this.$router.push(`/done`)
    }
  },
  mounted() {
    this.payWay = this.$route.params.way;
    /* this.$bus.$emit("push", "已加入購物車", "danger"); */
  },
  components: {
    store,
    card,
    atm,
    lineComponent
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import "../assets/_mixin.scss";
@import "../assets/_grid.scss";
@import '../assets/link.scss';
.info {
  width: 90%;
  margin: 20px auto;
  @include lapTop {
    width: 85%;
  }
  &-content {
    margin-top: 20px;
    opacity: 0.7;
    &-check {
      margin: 0 15px 20px;
      display: flex;
      align-items: center;
      &-btn {
        margin-right: 10px;
      }
    }
    &-item {
      @include lapTop {
        display: flex;
      }
      select {
        display: block;
        margin: 0 15px 20px;
        padding: 5px;
      }
      &-name {
        margin: 0 15px 20px;
        width: 80px;
        white-space: nowrap;
      }
      &-input {
        margin: 0 15px 20px;
        padding: 5px;
        width: 100%;
        @include lapTop {
          flex-grow: 1;
          width: auto;
        }
      }
    }
  }
}
.notice {
  width: 90%;
  @include lapTop {
    width: 75%;
  }
  margin: 0 auto;
  opacity: 0.7;
  li {
    margin: 5px 0;
  }
}
.confirm{
  display: flex;
  justify-content: center;
  align-items: center;
  margin:20px auto;
  @include lapTop {
    width: 75%;
    justify-content: flex-start;
  }
  &-btn{
    margin-right: 5px;
    background-image: url('../assets/card/Group 40.svg');
    @extend %bg;
    width: 20px;
    height: 20px;
  }
}
</style>
