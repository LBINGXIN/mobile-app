<template>
  <e-container class="page">
    <view class="page-list">
      <u-list @scrolltolower="handleMore">
        <e-card-detail
          label-width="100"
          :showLabelColon="false"
          theme="list"
          :model="infoList"
          size="large"
          bodyBorderBottom
        ></e-card-detail>
        <u-list-item v-for="(child, childIndex) in list" :key="child.id">
          <view class="page-list-item">
            <e-panel :title="child.title" :value="child.value" color="001">
              <e-table border>
                <e-tr>
                  <e-th>烟叶品种</e-th>
                  <e-th width="260rpx">约定收购量(公斤)</e-th>
                  <e-th>种植面积(亩)</e-th>
                </e-tr>
                <e-tr v-for="(item, index) in child.tableData" :key="index">
                  <e-td>{{ item.varieties }}</e-td>
                  <e-td width="260rpx">{{ item.quantity }}</e-td>
                  <e-td>{{ item.area }}</e-td>
                </e-tr>
              </e-table>
              <view class="page-sign">
                <view class="page-sign-item">
                  <text class="page-sign-item-title">电子合同专用章</text>
                  <image
                    class="page-sign-item-img"
                    :src="child.partyAImg"
                  ></image>
                  <text class="page-sign-item-date"
                    >签章日期：{{ child.partyADate }}</text
                  >
                </view>
                <view class="page-sign-item" @click="handleSign(childIndex)">
                  <text class="page-sign-item-title">乙方签字</text>
                  <image
                    v-if="child.signImg"
                    class="page-sign-item-img sign"
                    :src="child.signImg"
                  ></image>
                  <text class="page-sign-item-placeholder" v-else>
                    暂未签名
                  </text>
                  <text class="page-sign-item-date"
                    >签章日期：{{ child.signDate }}</text
                  >
                </view>
              </view>
            </e-panel>
          </view>
        </u-list-item>
      </u-list>
    </view>

    <u-overlay :show="showSign">
      <view class="page-model">
        <e-autograph
          size="10"
          @cancel="handleCancel"
          @success="handleSuccess"
        ></e-autograph>
      </view>
    </u-overlay>
  </e-container>
</template>
<script>
export default {
  name: 'PlantingAgreement',
  data() {
    return {
      // 显示弹窗
      showSign: false,
      // 当前选中索引
      currentIndex: null,
      infoList: [
        { label: '收购地点', value: '上杭县烟草分公司城关收购点中心点' },
        { label: '收购时间', value: '按甲方收购点统一安排预约交售' },
      ],
      list: [
        {
          id: '001',
          title: '合同签订时信息',
          value: '签订日期：2022-03-28',
          tableData: [
            {
              varieties: '红花大金元',
              quantity: '1500.00',
              area: '10.00',
            },
            {
              varieties: '红花大金元',
              quantity: '1500.00',
              area: '10.00',
            },
            {
              varieties: '红花大金元',
              quantity: '1500.00',
              area: '10.00',
            },
          ],
          partyAImg: 'https://cdn.uviewui.com/uview/album/1.jpg',
          partyADate: '2022年08月08日',
          signImg: '',
          signDate: '2022年08月08日',
        },
        {
          id: '002',
          title: '合同签订时信息',
          value: '签订日期：2022-03-28',
          tableData: [
            {
              varieties: '红花大金元',
              quantity: '1500.00',
              area: '10.00',
            },
            {
              varieties: '红花大金元',
              quantity: '1500.00',
              area: '10.00',
            },
            {
              varieties: '红花大金元',
              quantity: '1500.00',
              area: '10.00',
            },
          ],
          partyAImg: 'https://cdn.uviewui.com/uview/album/1.jpg',
          partyADate: '2022年08月08日',
          signImg: '',
          signDate: '2022年08月08日',
        },
      ],
    };
  },
  methods: {
    handleMore() {
      // todo
    },
    // 取消
    handleCancel() {
      this.showSign = false;
    },
    // 显示签名
    handleSign(index) {
      this.currentIndex = index;
      this.showSign = true;
    },
    // 获取签名
    handleSuccess(sign) {
      // 这边需要做签名图片上传
      const { currentIndex } = this;
      this.$set(this.list[currentIndex], 'signImg', sign);
      this.handleCancel();
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  &-list {
    &-item {
      margin-top: 24rpx;
      padding-bottom: 44rpx;
      background: #fff;
    }
  }
  &-sign {
    display: flex;
    margin-top: 40rpx;
    &-item {
      flex: 1;
      &-title {
        font-weight: 500;
        font-size: 28rpx;
        line-height: 28rpx;
      }
      &-placeholder {
        display: block;
        width: 100%;
        height: 200rpx;
        font-size: 24rpx;
        line-height: 200rpx;
        text-align: center;
        color: $uni-text-color-disable;
      }
      &-img {
        display: block;
        width: 200rpx;
        height: 200rpx;
        margin: 20rpx auto;
        &.sign {
          width: 100%;
        }
      }
      &-date {
        display: block;
        font-size: 24rpx;
        line-height: 40rpx;
        color: $uni-text-color-grey;
      }
    }
  }
  &-model {
    width: 100%;
    height: 100%;
  }
}
</style>
