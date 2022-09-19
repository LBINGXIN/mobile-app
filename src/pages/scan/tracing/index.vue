<template>
  <e-container class="page">
    <u-sticky customNavHeight="0">
      <e-navbar title="烟包追溯"></e-navbar>
      <e-cell
        icon="ms-icon-serviceman_fill"
        title="烟包追溯"
        label="烟包编码：YB2022352627000088"
        color="012"
      ></e-cell>
    </u-sticky>
    <view class="page-info">
      <e-card-detail
        icon="file-text"
        title="烟包信息"
        :model="infoList"
        :showFoot="false"
        titleType="block"
        size="large"
        labelWidth="100"
        :showLabelColon="false"
        :full="true"
        borderRadius="0"
      >
        <view class="page-info-data" slot="body-top">
          <e-data :list="dataList"></e-data>
        </view>
      </e-card-detail>
    </view>
    <view class="page-comp">
      <e-panel title="烟包组成" color="007">
        <view
          class="page-comp-item"
          v-for="(item, index) in compList"
          :key="index"
        >
          <view class="page-comp-item-title">
            <image class="page-comp-item-title-img" :src="item.img"></image>
            <text class="page-comp-item-title-text">{{ item.title }}</text>
          </view>
          <view class="page-comp-item-content">
            <view class="page-comp-item-content-left">
              <view
                class="page-comp-item-content-left-list"
                v-for="(child, childIndex) in item.items"
                :key="childIndex"
              >
                <text class="page-comp-item-content-left-list-label"
                  >{{ child.label }}：</text
                >
                <text class="page-comp-item-content-left-list-value">{{
                  child.value
                }}</text>
              </view>
            </view>
            <view class="page-comp-item-content-right">
              <text class="page-comp-item-content-right-value">{{
                item.size
              }}</text>
              <text class="page-comp-item-content-right-label">{{
                item.unit
              }}</text>
            </view>
          </view>
        </view>
      </e-panel>
    </view>
    <view class="page-logs">
      <e-panel title="流转日志" color="010">
        <u-steps current="0" direction="column" activeColor="#0070d2" dot>
          <u-steps-item
            :title="item.title"
            v-for="(item, index) in logsList"
            :key="index"
          >
            <view class="page-logs-desc" slot="desc">
              <text class="page-logs-desc-value">{{ item.value }}</text>
              <text class="page-logs-desc-label">{{ item.label }}</text>
            </view>
          </u-steps-item>
        </u-steps>
      </e-panel>
    </view>
  </e-container>
</template>
<script>
export default {
  name: 'Tracing',
  data() {
    return {
      infoList: [
        { label: '产地', value: '万州区' },
        { label: '交售形态', value: '原烟' },
        { label: '定级员', value: '李超虎' },
        { label: '状态', value: '中心库在库' },
        { label: '过磅员', value: '罗川洪' },
        { label: '成包日期', value: '2022年07月16日 16:00' },
        { label: '仓管员', value: '向书' },
      ],
      dataList: [
        { title: 'C2F', label: '等级' },
        { title: '49.6', label: '重量(公斤)' },
      ],
      compList: [
        {
          avatar: 'https://cdn.uviewui.com/uview/album/1.jpg',
          title: '李坤瑞',
          items: [
            { label: '部位', value: '上部烟' },
            { label: '定级员', value: '李超瞳' },
            { label: '过磅员', value: '李大洪' },
          ],
          size: '38.9',
          unit: '交售重量 (公斤)',
        },
        {
          avatar: 'https://cdn.uviewui.com/uview/album/1.jpg',
          title: '马老师',
          items: [
            { label: '部位', value: '上部烟' },
            { label: '定级员', value: '李超瞳' },
            { label: '过磅员', value: '李大洪' },
          ],
          size: '38.9',
          unit: '交售重量 (公斤)',
        },
      ],
      logsList: [
        {
          title: '中心库入库',
          value:
            '已到达某某中心库，完成扫码入库，操作员王可可，入库单号8998900234',
          label: '6月28日 16:00:00',
        },
        {
          title: '运辆中',
          value: '调运车辆闽D898XX，驾驶员李达强，调运单DY8908920',
          label: '6月28日 16:00:00',
        },
        {
          title: '站点入库',
          value: '仓管员李伟达',
          label: '6月28日 16:00:00',
        },
        {
          title: '打包完成',
          value: '烟包在恒合烤烟点打包完成，打包员李大洪',
          label: '6月28日 16:00:00',
        },
        {
          title: '站点成包',
          value: '已从站点出库，操作员李伟达',
          label: '6月28日 16:00:00',
        },
        {
          title: '站点成包',
          value: '已从站点出库，操作员李伟达',
          label: '6月28日 16:00:00',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.page {
  &-info {
    &-data {
      padding: 28rpx 0;
    }
  }
  &-comp {
    margin-top: 24rpx;
    padding-bottom: 36rpx;
    background: #fff;
    &-item {
      padding: 16rpx 0 32rpx;
      border-bottom: 1rpx solid $uni-bg-color-grey;
      &-title {
        display: flex;
        align-items: center;
        height: 64rpx;
        &-img {
          display: block;
          width: 48rpx;
          height: 48rpx;
          border-radius: 50%;
          margin-right: 16rpx;
        }
        &-text {
          display: block;
          font-weight: bold;
          font-size: 32rpx;
        }
      }
      &-content {
        display: flex;
        justify-content: space-between;
        &-left {
          padding-left: 64rpx;
          &-list {
            display: flex;
            align-items: center;
            height: 40rpx;
            & + .page-comp-item-content-left-list {
              margin-top: 8rpx;
            }
            &-label {
              display: block;
              width: 140rpx;
              font-size: 28rpx;
              color: $uni-text-color-grey;
            }
            &-value {
              display: block;
              font-size: 28rpx;
              color: $uni-text-color-main;
            }
          }
        }
        &-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          flex-shrink: 0;
          &-value {
            font-weight: bold;
            font-size: 40rpx;
            line-height: 56rpx;
            color: $uni-text-color-main;
          }
          &-label {
            font-size: 28rpx;
            line-height: 44rpx;
            color: $uni-text-color-grey;
          }
        }
      }
    }
  }
  &-logs {
    margin-top: 24rpx;
    &-desc {
      &-value {
        display: block;
        font-size: 24rpx;
        line-height: 40rpx;
      }
      &-label {
        font-size: 20rpx;
        line-height: 30rpx;
        color: $uni-text-color-grey;
      }
    }
  }
}
</style>
