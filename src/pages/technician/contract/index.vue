<template>
  <e-container class="page">
    <u-sticky customNavHeight="0">
      <e-navbar title="种植合同与烟田绑定"></e-navbar>
      <view class="page-search">
        <u-search
          placeholder="搜索姓名/证件号"
          v-model="keyword"
          :showAction="false"
        ></u-search>
      </view>
      <e-tabs :list="tabList" @change="handleChangeTab"></e-tabs>
    </u-sticky>
    <view class="page-list" v-for="child in list" :key="child.state">
      <view
        class="page-list-item"
        v-for="(item, index) in child.items"
        :key="index"
        v-if="state === child.state"
      >
        <e-card-detail
          icon="file-text"
          color="007"
          title="李达强的合同"
          :model="item"
          footTitle="去绑定烟田"
          valueType="tag"
          :value="child.value"
          :tagType="child.tagType"
          @click="handleBind"
        >
          <div class="page-list-item__process" v-if="child.state === 'pending'">
            <text class="page-list-item__process-text"
              >已绑定<text class="active">6.8亩</text>/12.0m</text
            >
            <u-line-progress activeColor="#0070D2" percentage="30" />
          </div>
        </e-card-detail>
      </view>
    </view>
  </e-container>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      state: 'wait',
      keyword: '',
      tabList: [
        {
          name: '未绑定(6)',
          state: 'wait',
        },
        {
          name: '部份未绑定(8)',
          state: 'pending',
        },
        {
          name: '已绑定',
          state: 'finish',
        },
      ],
      list: [
        {
          state: 'wait',
          value: '未绑定',
          tagType: 'error',
          items: [
            [
              { label: '种植者编号', value: '3501270617800091' },
              { label: '签订日期', value: '2022-03-28' },
              { label: '签订面积', value: '10.0亩' },
            ],
            [
              { label: '种植者编号', value: '3501270617800091' },
              { label: '签订日期', value: '2022-03-28' },
              { label: '签订面积', value: '10.0亩' },
            ],
            [
              { label: '种植者编号', value: '3501270617800091' },
              { label: '签订日期', value: '2022-03-28' },
              { label: '签订面积', value: '10.0亩' },
            ],
            [
              { label: '种植者编号', value: '3501270617800091' },
              { label: '签订日期', value: '2022-03-28' },
              { label: '签订面积', value: '10.0亩' },
            ],
          ],
        },
        {
          state: 'pending',
          value: '部份未绑定',
          tagType: 'warning',
          items: [
            [
              { label: '种植者编号', value: '3501270617800091' },
              { label: '签订日期', value: '2022-03-28' },
              { label: '签订面积', value: '10.0亩' },
            ],
            [
              { label: '种植者编号', value: '3501270617800091' },
              { label: '签订日期', value: '2022-03-28' },
              { label: '签订面积', value: '10.0亩' },
            ],
            [
              { label: '种植者编号', value: '3501270617800091' },
              { label: '签订日期', value: '2022-03-28' },
              { label: '签订面积', value: '10.0亩' },
            ],
            [
              { label: '种植者编号', value: '3501270617800091' },
              { label: '签订日期', value: '2022-03-28' },
              { label: '签订面积', value: '10.0亩' },
            ],
          ],
        },
        {
          state: 'finish',
          value: '已绑定',
          tagType: 'success',
          items: [
            [
              { label: '种植者编号', value: '3501270617800091' },
              { label: '签订日期', value: '2022-03-28' },
              { label: '签订面积', value: '10.0亩' },
            ],
            [
              { label: '种植者编号', value: '3501270617800091' },
              { label: '签订日期', value: '2022-03-28' },
              { label: '签订面积', value: '10.0亩' },
            ],
            [
              { label: '种植者编号', value: '3501270617800091' },
              { label: '签订日期', value: '2022-03-28' },
              { label: '签订面积', value: '10.0亩' },
            ],
            [
              { label: '种植者编号', value: '3501270617800091' },
              { label: '签订日期', value: '2022-03-28' },
              { label: '签订面积', value: '10.0亩' },
            ],
          ],
        },
      ],
    };
  },
  methods: {
    // tab 切换
    handleChangeTab(item) {
      this.state = item.state;
    },
    // 绑定田地
    handleBind() {
      uni.$ec.route('/pages/technician/bind-field/index');
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  &-list {
    &-item {
      &__process {
        padding: 16rpx 0;
        &-text {
          margin-bottom: 8rpx;
          @include text($uni-text-color, 28rpx);
          .active {
            color: $uni-color-error;
          }
        }
      }
    }
  }
}
</style>
