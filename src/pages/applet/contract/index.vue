<template>
  <e-container class="page">
    <u-sticky customNavHeight="0">
      <e-navbar title="合同信息"></e-navbar>
      <e-cell
        icon="https://cdn.uviewui.com/uview/album/1.jpg"
        title="李伟国的合同"
        label="合同编号：2022352627000088"
      ></e-cell>
      <e-tabs :list="tabList" @change="handleChangeTab"></e-tabs>
    </u-sticky>
    <ContactBase v-show="tab === 'base'"></ContactBase>
    <PlantingAgreement v-show="tab === 'agreement'"></PlantingAgreement>
    <ContractTerms v-show="tab === 'terms'"></ContractTerms>
  </e-container>
</template>

<script>
import ContactBase from './contract-base';
import PlantingAgreement from './planting-agreement';
import ContractTerms from './contract-terms';
export default {
  name: 'Contact',
  components: {
    ContactBase,
    PlantingAgreement,
    ContractTerms,
  },
  data() {
    return {
      tab: 'base',
      keyword: '',
      tabList: [
        {
          name: '合同基本信息',
          type: 'base',
        },
        {
          name: '种植收购约定',
          type: 'agreement',
        },
        {
          name: '合同条款',
          type: 'terms',
        },
      ],
    };
  },
  methods: {
    // tab 切换
    handleChangeTab(item) {
      this.tab = item.type;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
}
</style>
