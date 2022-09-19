<template>
  <e-container class="page">
    <e-navbar title="详情"></e-navbar>
    <view class="page-steps">
      <u-steps current="1" dot>
        <u-steps-item title="需求沟通"></u-steps-item>
        <u-steps-item title="产品展示"></u-steps-item>
        <u-steps-item title="报价协商"></u-steps-item>
        <u-steps-item title="签订合同"></u-steps-item>
      </u-steps>
    </view>
    <u-gap height="24"></u-gap>
    <e-panel title="基本信息" color-code="001">
      <u--form
        labelPosition="left"
        labelWidth="80"
        :labelStyle="{ color: '#5f6164' }"
      >
        <u-form-item label="客户" borderBottom>
          <text>{{ formData.name }}</text>
        </u-form-item>
        <u-form-item label="负责销售" borderBottom>
          <u-tag
            :text="formData.sale"
            type="info"
            shape="circle"
            bgColor="#F2F2F3"
            borderColor="#F2F2F3"
            color="#303133"
          ></u-tag>
        </u-form-item>
        <u-form-item label="地区" borderBottom>
          <text>{{ formData.area }}</text>
        </u-form-item>
        <u-form-item label="公司域名" borderBottom>
          <text>{{ formData.domain }}</text>
        </u-form-item>
        <u-form-item label="公司性质">
          <text>{{ formData.type }}</text>
        </u-form-item>
      </u--form>
    </e-panel>
    <u-gap height="24"></u-gap>
    <e-panel title="线索明细" color-code="007">
      <u--form
        labelPosition="left"
        labelWidth="80"
        :labelStyle="{ color: '#5f6164' }"
        v-for="(item, index) in formData.clueList"
        :key="index"
      >
        <u-form-item label="线索编号">
          <text>{{ item.code }}</text>
        </u-form-item>
        <u-form-item label="推进阶段">
          <u-tag
            :text="item.advance"
            type="primary"
            shape="circle"
            plain
            bgColor="#EDF3F7"
            borderColor="#EDF3F7"
          ></u-tag>
        </u-form-item>
        <u-form-item label="联系人">
          <u-tag
            :text="item.name"
            type="info"
            shape="circle"
            bgColor="#F2F2F3"
            borderColor="#F2F2F3"
            color="#303133"
          ></u-tag>
        </u-form-item>
        <u-form-item label="职位">
          <text>{{ item.position || '--' }}</text>
        </u-form-item>
        <u-divider v-if="index < formData.clueList.length - 1"></u-divider>
      </u--form>
    </e-panel>
    <u-gap height="24"></u-gap>
    <e-panel title="基本信息" class="page-news" color-code="008">
      <u--form>
        <u-list @scrolltolower="scrolltolower">
          <u-list-item v-for="item in formData.newsList" :key="item.id">
            <u-form-item>
              <view class="page-news-item">
                <view class="page-news-item-info">
                  <text class="page-news-item-info-title u-line-2">
                    {{ item.title }}
                  </text>
                  <text class="page-news-item-info-desc">
                    {{ item.desc }}
                  </text>
                </view>
                <u--image
                  :showLoading="true"
                  class="page-news-item-img"
                  :src="item.src"
                  width="240rpx"
                  height="140rpx"
                ></u--image>
              </view>
            </u-form-item>
          </u-list-item>
        </u-list>
      </u--form>
    </e-panel>
  </e-container>
</template>
<script>
export default {
  name: 'FormDetail',
  data() {
    return {
      formData: {
        newsList: [],
      },
      loading: true,
    };
  },
  onLoad(options) {
    this.getData();
  },
  methods: {
    async getData() {
      uni.showLoading({ title: '正在加载' });
      try {
        this.formData = await uni.$ec.http.post('/detail');
      } catch (err) {
        uni.showToast({
          title: err.message,
          icon: 'none',
        });
      }
      uni.hideLoading();
    },
    scrolltolower() {
      this.loadmore();
    },
    loadmore() {
      for (let i = 0; i < 30; i++) {
        const item = {
          id: uni.$u.guid(),
          title: '娱乐消费电子市场披露2020年至2026年的最新进展',
          desc: '描述信息',
          src: 'https://cdn.uviewui.com/uview/album/1.jpg',
        };
        this.formData.newsList.push(item);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  .page-steps {
    background: #fff;
    padding: 24rpx 0;
  }
  /deep/.u-form-item {
    .u-form-item__body__right__content__slot {
      flex: none;
    }
  }
  .page-news {
    .page-news-item {
      display: flex;
      justify-content: space-between;
      width: 750rpx;

      &-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 140rpx;
        max-width: 414rpx;
        &-title {
          font-size: $uni-font-size-base;
          line-height: 1.5;
          font-weight: 400;
          color: $uni-text-color;
        }
        &-desc {
          font-size: $uni-font-size-sm;
          line-height: 1.5;
          color: $uni-text-color-grey;
        }
      }

      &-img {
        flex-shrink: 0;
      }
    }
  }
}
</style>
