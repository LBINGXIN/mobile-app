<template>
  <view class="em-container">
    <view class="body">
      <u-form :model="form" ref="uForm" :label-width="160">
        <u-form-item label="baseURL:">
          <u-input v-model="baseURL"></u-input>
        </u-form-item>
        <u-button class="mybutton" type="info" @click="setBaseURL">
          修改baseURL
        </u-button>
        <u-form-item label="请求url:">
          <u-input v-model="url"></u-input>
        </u-form-item>
      </u-form>
      <u-cell-group>
        <u-cell-item title="原始数据" :arrow="false">
          <view slot="right-icon">
            <u-switch v-model="raw" @change="rawChange"></u-switch>
          </view>
        </u-cell-item>
      </u-cell-group>
      <u-button class="mybutton" type="primary" @click="apis">apis</u-button>
      <u-button class="mybutton" type="primary" @click="send">send</u-button>
      <u-button class="mybutton" type="warning" @click="get">get</u-button>
      <u-button class="mybutton" type="success" @click="post">post</u-button>
      <u-button class="mybutton" type="error" @click="del">delete</u-button>
      <u-button class="mybutton" type="info" @click="put">put</u-button>
      <!-- <u-button class="mybutton" type="info" @click="test">test</u-button> -->
      <view> response：{{ response }} </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      response: '',
      baseURL: this.$http.config.baseURL,
      url: '/table',
      raw: this.$http.config.raw,
    };
  },
  methods: {
    setBaseURL() {
      this.$http.setConfig({ baseURL: this.baseURL });
    },
    rawChange(raw) {
      this.$http.setConfig({ raw });
    },
    apis() {
      this.$apis.demo.test({ page: 5, pageSize: 1 }).then((data) => {
        this.response = JSON.stringify(data);
      });
    },
    send() {
      this.$http
        .send({
          url: this.url,
          data: { page: 1, pageSize: 1 },
          header: {
            test: 123,
          },
        })
        .then((data) => {
          this.response = JSON.stringify(data);
        });
    },
    get() {
      const self = this;
      this.$http
        .get({
          url: this.url,
          data: { page: 2, pageSize: 1 },
        })
        .then((data) => {
          self.response = JSON.stringify(data);
        });
    },
    post() {
      this.$http
        .post({
          url: this.url,
          data: { page: 2, pageSize: 1 },
        })
        .then((data) => {
          this.response = JSON.stringify(data);
        });
    },
    del() {
      this.$http
        .delete({
          url: this.url,
          data: { page: 3, pageSize: 1 },
        })
        .then((data) => {
          this.response = JSON.stringify(data);
        });
    },
    put() {
      this.$http
        .put({
          url: this.url,
          data: { page: 4, pageSize: 1 },
        })
        .then((data) => {
          this.response = JSON.stringify(data);
        });
    },
    test() {
      uni.$ec.http.get({ url: 'https://baidu.com' }).then((data) => {
        this.response = JSON.stringify(data);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.body {
  background-color: white;
  .mybutton {
    margin-top: 16rpx;
    display: block;
  }
}
</style>
