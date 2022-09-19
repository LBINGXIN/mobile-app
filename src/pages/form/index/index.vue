<template>
  <e-container class="page">
    <e-navbar title="表单"></e-navbar>
    <view class="page-form">
      <u--form
        labelPosition="left"
        labelWidth="120"
        :model="formData"
        :rules="rules"
        ref="uForm"
      >
        <u-form-item
          label="线索来源"
          prop="clue"
          borderBottom
          @click="showClue = true"
          required
        >
          <u--input
            v-model="formData.clue"
            disabled
            disabledColor="#ffffff"
            placeholder="请选择线索来源"
            border="none"
          ></u--input>
          <u-icon slot="right" name="arrow-right"></u-icon>
        </u-form-item>
        <u-form-item
          label="推进阶段"
          prop="advance"
          @click="showAdvance = true"
          required
        >
          <u--input
            v-model="formData.advance"
            disabled
            disabledColor="#ffffff"
            placeholder="请选择推进阶段"
            border="none"
          ></u--input>
          <u-icon slot="right" name="arrow-right"></u-icon>
        </u-form-item>
        <view class="page-form-title">客户联系人信息</view>
        <u-form-item label="联系人" prop="name" borderBottom>
          <u--input
            v-model="formData.name"
            border="none"
            placeholder="请输入联系人"
          ></u--input>
        </u-form-item>
        <u-form-item label="电子邮箱" prop="email">
          <u--input
            v-model="formData.email"
            border="none"
            placeholder="请输入电子邮箱"
          ></u--input>
        </u-form-item>
        <view class="page-form-title">客户联系人信息</view>
        <u-form-item
          label="客户"
          prop="customer"
          borderBottom
          @click="showCustomer = true"
        >
          <u--input
            v-model="formData.customer"
            disabled
            disabledColor="#ffffff"
            placeholder="请选择客户"
            border="none"
          ></u--input>
          <u-icon slot="right" name="arrow-right"></u-icon>
        </u-form-item>
        <u-form-item
          label="负责销售"
          prop="sale"
          borderBottom
          @click="showSale = true"
        >
          <u--input
            v-model="formData.sale"
            disabled
            disabledColor="#ffffff"
            placeholder="请选本公司销售员"
            border="none"
          ></u--input>
          <u-icon slot="right" name="arrow-right"></u-icon>
        </u-form-item>
        <u-form-item label="地区" prop="area" @click="showArea = true">
          <u--input
            v-model="formData.area"
            disabled
            disabledColor="#ffffff"
            placeholder="请选择地区"
            border="none"
          ></u--input>
          <u-icon slot="right" name="arrow-right"></u-icon>
        </u-form-item>
        <view class="page-form-title">需求产品信息</view>
        <u-form-item
          prop="area"
          borderBottom
          v-for="(item, index) in formData.productList"
          :key="index"
        >
          <text>{{ item.name }}</text>
          <u-icon slot="right" name="arrow-right"></u-icon>
        </u-form-item>
        <view class="page-form-add">
          <u-button
            type="primary"
            plain
            text="新增1条"
            @click="showModal = true"
          ></u-button>
        </view>
        <view class="page-form-title">其它信息</view>
        <u-form-item
          label="签约日期"
          prop="date"
          borderBottom
          @click="showDate = true"
        >
          <u--input
            v-model="formData.date"
            disabled
            disabledColor="#ffffff"
            placeholder="请选择签约日期"
            border="none"
          ></u--input>
        </u-form-item>
        <u-form-item label="签约金额" prop="money">
          <u--input
            type="number"
            v-model="formData.money"
            border="none"
            placeholder="请输入签约金额"
          ></u--input>
          <text slot="right">RMB</text>
        </u-form-item>
      </u--form>
    </view>

    <view class="page-footer">
      <u-button
        type="primary"
        plain
        text="详情"
        @click="handleDetail"
      ></u-button>
      <u-button type="primary" text="提交" @click="handleSubmit"></u-button>
    </view>

    <u-action-sheet
      :show="showClue"
      :actions="clueList"
      title="请选择线索来源"
      @close="showClue = false"
      @select="handleSelect($event, 'clue')"
    >
    </u-action-sheet>
    <u-action-sheet
      :show="showAdvance"
      :actions="advanceList"
      title="请选择推进阶段"
      @close="showAdvance = false"
      @select="handleSelect($event, 'advance')"
    >
    </u-action-sheet>
    <u-action-sheet
      :show="showCustomer"
      :actions="customerList"
      title="请选择客户"
      @close="showCustomer = false"
      @select="handleSelect($event, 'customer')"
    >
    </u-action-sheet>
    <u-action-sheet
      :show="showSale"
      :actions="saleList"
      title="请选本公司销售员"
      @close="showSale = false"
      @select="handleSelect($event, 'sale')"
    >
    </u-action-sheet>
    <u-action-sheet
      :show="showArea"
      :actions="areaList"
      title="请选择地区"
      @close="showArea = false"
      @select="handleSelect($event, 'area')"
    >
    </u-action-sheet>

    <u-modal
      :show="showModal"
      showCancelButton
      @cancel="handleClose"
      @confirm="handleConfirm"
    >
      <u--form
        labelPosition="left"
        labelWidth="80"
        :model="updateData"
        :rules="updateRules"
        ref="updateForm"
      >
        <u-form-item label="产品名称" prop="productName" required>
          <u--input
            v-model="updateData.productName"
            border="none"
            placeholder="请输入产品名称"
          ></u--input>
        </u-form-item>
      </u--form>
    </u-modal>

    <u-datetime-picker
      :show="showDate"
      mode="date"
      @confirm="handleDate"
      @cancel="handleCloseDate"
    ></u-datetime-picker>

    <u-toast ref="uToast"></u-toast>
  </e-container>
</template>
<script>
export default {
  name: 'Form',
  data() {
    return {
      formData: {
        productList: [
          { name: 'Sensor1107' },
          { name: 'LCD Driver 1306' },
          { name: 'Chip Capacitor GC5608-1' },
        ],
      },
      rules: {
        clue: {
          required: true,
          message: '请选择线索来源',
          trigger: ['blur', 'change'],
        },
        advance: {
          required: true,
          message: '请选择推进阶段',
          trigger: ['blur', 'change'],
        },
      },
      // 线索来源
      showClue: false,
      clueList: [{ name: '网络' }, { name: '广告' }],
      // 推进阶段
      showAdvance: false,
      advanceList: [{ name: '第一阶段' }, { name: '第二阶段' }],
      // 客户
      showCustomer: false,
      customerList: [{ name: '客户A' }, { name: '客户B' }],
      // 销售员
      showSale: false,
      saleList: [{ name: '销售员A' }, { name: '销售员B' }],
      // 地区
      showArea: false,
      areaList: [{ name: '厦门' }, { name: '深圳' }, { name: '广州' }],

      // 新增表单
      updateData: {
        productName: '',
      },
      updateRules: {
        productName: {
          required: true,
          message: '请输入产品名称',
          trigger: ['blur', 'change'],
        },
      },
      showModal: false,
      // 日期
      showDate: false,
    };
  },
  methods: {
    // 详情
    handleDetail() {
      uni.$ec.route('/pages/form/detail/index');
    },
    handleSelect(e, key) {
      this.formData[key] = e.name;
    },
    // 确认
    async handleConfirm() {
      await this.$refs.updateForm.validate();
      const { productName } = this.updateData;
      this.formData.productList.push({ name: productName });
      this.handleClose();
    },
    // 关闭弹窗
    handleClose() {
      this.showModal = false;
      this.$refs.updateForm.clearValidate();
      this.updateData = {
        productName: '',
      };
    },
    // 处理日期
    handleDate(e) {
      this.formData.date = uni.$u.timeFormat(e.value, 'yyyy-mm-dd');
      this.handleCloseDate();
    },
    // 关闭日期
    handleCloseDate() {
      this.showDate = false;
    },
    // 提交
    async handleSubmit() {
      await this.$refs.uForm.validate();
      uni.showLoading({ title: '正在加载' });
      try {
        await uni.$ec.http.post('/add', this.formData);
        uni.showToast({ title: '操作成功' });
      } catch (err) {
        uni.showToast({
          title: err.message,
          icon: 'none',
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  padding-bottom: 136rpx;
  .page-form {
    margin-top: 32rpx;
    padding: 0 32rpx;
    background: #fff;
  }
  .page-form-title {
    font-size: 24rpx;
    line-height: 72rpx;
    padding-left: 32rpx;
    margin: 0 -32rpx;
    color: $uni-text-color-grey;
    background: $uni-bg-color-grey;
  }
  .page-form-add {
    /deep/.u-button {
      border: none;
    }
  }
  .page-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 112rpx;
    background: #fff;
    padding: 0 32rpx;
    box-sizing: border-box;
    /deep/.u-button + .u-button {
      margin-left: 16rpx;
    }
  }
}
</style>
