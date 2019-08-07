<template>
  <form @submit.prevent="nextHandler()">
    <router-view></router-view>
    <div class="info">
      <div class="info-title">填寫訂購人資訊</div>
      <div class="info-content">
        <div class="info-content-item">
          <div class="info-content-item-name">姓名</div>
          <input
            type="text"
            class="info-content-item-input"
            :class="{'is-invalid':errors.has('name')}"
            v-validate="'required'"
            name="name"
            placeholder="請填寫真實姓名"
          />
          <div class="info-content-item-name">手機</div>
          <select>
            <option>886</option>
          </select>
          <input type="number" class="info-content-item-input" placeholder="請填寫手機號碼" />
        </div>
        <div class="info-content-item">
          <div class="info-content-item-name">地址</div>
          <input type="number" class="info-content-item-input postman" placeholder="郵遞區號" />
          <div class="info-content-item-group">
            <input
              type="text"
              class="info-content-item-input address-input"
              :class="{'is-invalid':errors.has('address')}"
              name="address"
              v-validate="'required'"
              placeholder="例:新北市信義區"
            />
            <span class="address-validate" v-if="errors.has('address')">本欄位為必填</span>
          </div>
        </div>
        <div class="info-content-item">
          <div class="info-content-item-name">Email</div>
          <input type="text" class="info-content-item-input" />
        </div>
      </div>
    </div>

    <div class="info-check info">
      <input type="checkbox" class="info-check-btn" v-model="infoBtn" />
      <div class="info-check-word">同訂購人資料</div>
    </div>
    <div class="info-content info" :class="{'none':infoBtn}">
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
      <label class="confirm-no" for="confrim-check" v-if="!confirmBtn"></label>
      <label class="confirm-btn" for="confrim-check" v-else></label>
      <input
        type="checkbox"
        id="confrim-check"
        v-model="confirmBtn"
        name="confirm"
        v-validate="'required'"
      />
      <div class="confirm-word">確認，我已了解</div>
    </div>

    <div class="confirm" v-if="errors.has('confirm')">
      <div class="confirm-validate"></div>
      <div class="confirm-word">確認，我已了解</div>
      <div class="confirm-detail">請確認</div>
    </div>

    <div class="link">
      <div class="link-prev link-links">上一步</div>
      <button class="link-next link-links">下一步</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      infoBtn: false,
      confirmBtn: false
    };
  },
  methods: {
    nextHandler() {
      this.$validator.validate().then(valid => {
        if (valid) {
          this.$router.push(`/done`);
        } else {
          console.log("欄位不完整");
        }
      });
    }
  },
  mounted() {
    this.payWay = this.$route.params.way;
    /* this.$bus.$emit("push", "已加入購物車", "danger"); */
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import "../assets/_mixin.scss";
@import "../assets/_grid.scss";
@import "../assets/link.scss";
.info {
  width: 90%;
  margin: 20px auto;
  @include lapTop {
    width: 85%;
  }
  &-check {
    display: flex;
    align-items: center;
    &-btn {
      margin-right: 10px;
    }
  }
  &-content {
    margin-top: 20px;
    opacity: 0.7;
    &-item {
      position: relative;
      @include lapTop {
        display: flex;
      }
      select {
        display: block;
        margin: 0 15px 25px;
        padding: 5px;
      }
      &-name {
        margin: 0 15px 25px;
        width: 80px;
        white-space: nowrap;
      }
      &-input {
        margin: 0 15px 25px;
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
.confirm {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  @include lapTop {
    width: 75%;
    justify-content: flex-start;
  }
  #confrim-check {
    display: none;
  }
  &-no {
    margin: 0 5px 0 0;
    border: 1px solid black;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  &-btn {
    margin: 0 5px 0 0;
    background-image: url("../assets/card/Group 40.svg");
    @extend %bg;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  &-validate {
    margin-right: 5px;
    border: 1px solid red;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  &-detail {
    margin-left: 5px;
    color: red;
  }
}
.none {
  height: 0;
  overflow: hidden;
}
.is-invalid {
  border: 1px solid red;
}
.info-content-item-group {
  flex-grow: 1;
}
.address-validate {
  /* position: absolute;
  top: 330px;
  right: 170px;
  @include lapTop {
    top: 45px;
    right: 415px;
  } */
  color: red;
  font-size: 14px;
}
.address-input {
  width: 100%;
  margin: 0;
}
.postman {
  flex-grow: 0;
  width: 10%;
}
</style>
