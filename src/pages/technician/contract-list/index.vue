<template>
  <e-container class="page">
    <u-sticky customNavHeight="0">
      <e-navbar title="合同查询"></e-navbar>
      <view class="page-search">
        <u-search
          placeholder="搜索姓名/证件号"
          v-model="keyword"
          :showAction="false"
        ></u-search>
      </view>
    </u-sticky>
    <u-list @scrolltolower="handleMore">
      <u-list-item v-for="(child, index) in list" :key="index">
        <e-card-detail
          icon="file-text"
          :title="child.name"
          :model="child.items"
          value="查看详情"
          showArrow
          :showFoot="false"
          space="24"
          @click="handleDetail"
        >
        </e-card-detail>
      </u-list-item>
      <u-loadmore :status="status" :line="status === 'nomore'" />
    </u-list>
  </e-container>
</template>

<script>
export default {
  name: 'contract-list',
  data() {
    return {
      keyword: '',
      pageNumber: 1,
      pageSize: 10,
      total: 0,
      list: [],
    };
  },
  onLoad() {
    this.queryList(1);
  },
  computed: {
    status() {
      const { list, total } = this;
      return list.length >= total ? 'nomore' : 'loading';
    },
  },
  methods: {
    // 查询数据
    async queryList(page, size) {
      try {
        const { pageNumber, pageSize } = this;
        this.pageNumber = page || pageNumber;
        this.pageSize = size || pageSize;
        const { list, total } = await uni.$ec.http.post('/euler/list', {
          pageNumber: this.pageNumber,
          pageSize: this.pageSize,
        });
        this.list = this.list.concat(list);
        this.total = total;
      } catch ({ message }) {
        uni.showToast({
          title: message,
          icon: 'none',
        });
      }
    },
    handleMore() {
      const { list, total } = this;
      if (list.length >= total) return;
      this.pageNumber++;
      this.queryList(this.pageNumber);
    },
    handleDetail() {},
  },
};
</script>

<style lang="scss" scoped>
.page {
}
</style>
