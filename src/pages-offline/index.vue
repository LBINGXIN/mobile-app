<template>
  <view class="page">
    <u-cell-group>
      <u-cell
        size="large"
        :title="networkType"
        :value="networkStatus"
        label="网络类型"
      ></u-cell>
      <u-cell
        size="large"
        :title="dbConfig.name"
        :value="dbStatus"
        label="数据库状态"
      ></u-cell>
    </u-cell-group>
    <u-button @click="getNetworkType" type="primary">网络状态</u-button>
    <u-button @click="request">网络请求</u-button>
    <u-button @click="isOpenTestDB" type="primary">数据库状态</u-button>
    <u-button @click="openTestDB">打开数据库</u-button>
    <u-button @click="closeTestDB" type="primary">关闭数据库</u-button>
    <u-button @click="select">查询</u-button>
    <u--textarea v-model="result" placeholder="sql"></u--textarea>
  </view>
</template>

<script>
export default {
  components: {},
  data: () => ({
    networkType: '无',
    networkStatus: 'online',
    dbStatus: 'undefined',
    dbConfig: { name: 'test', path: '_doc/test.db' },
    result: ``,
  }),
  methods: {
    execute() {},
    request() {
      uni.$ec.http
        .post('http://yapi.hsit.com.cn/mock/126/demo/api/table/list', {})
        .then((data) => {
          uni.showToast({
            title: '数据请求成功',
          });
        })
        .catch((e) => {
          uni.showToast({
            title: '失败',
            icon: 'error',
          });
        });
    },
    getNetworkType() {
      const self = this;
      return new Promise((resolve, reject) => {
        uni.getNetworkType({
          success: (res) => {
            resolve(res);
          },
          fail(e) {
            reject(e);
            console.log('getNetworkType', 'error', e);
          },
        });
      });
    },
    isOpenTestDB() {
      if (uni.$ec.sqlite.db.test.isOpen()) {
        this.dbStatus = '已打开';
      } else {
        this.dbStatus = '未打开';
      }
    },
    async openTestDB() {
      //打开数据库
      await this.$db.test.open();
      this.isOpenTestDB();
    },
    async closeTestDB() {
      //打开数据库
      await this.$db.test.close();
      this.isOpenTestDB();
    },
    async select() {
      this.result = ''
      const { data } = await this.$mapper.test.select();
      this.result = JSON.stringify(data);
    },
  },
  mounted() {
    this.getNetworkType();
    uni.onNetworkStatusChange((res) => {
      this.getNetworkType().then((res) => {
        this.networkType = res.networkType;
        if (res.networkType != 'none') {
          this.networkStatus = 'on';
        } else {
          this.networkStatus = 'off';
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 0 16px;
}
</style>
