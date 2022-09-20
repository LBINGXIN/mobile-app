<template>
  <e-container class="page">
    <web-view :src="params.url" v-if="params.url"></web-view>
  </e-container>
</template>

<script>
export default {
  data() {
    return {
      params: {},
    };
  },
  async onShow() {
    const args = plus.runtime.arguments;
    if (args) {
      debugger;
      const code = this.getUrlParams(args, 'code');
      const { path } = this.params;
      try {
        await this.$permission.getAuthorization({ code });
        uni.navigateTo({
          url: path,
          fail: () => {
            uni.switchTab({
              url: path,
              fail: (err) => {
                console.error('login page return failed', err);
                uni.showToast({
                  title: err.message,
                  icon: 'none',
                });
              },
            });
          },
        });
      } catch (err) {
        uni.showToast({
          title: err.message,
          icon: 'none',
        });
      }
    }
  },
  onLoad({ params }) {
    this.params = JSON.parse(decodeURIComponent(params));
  },
  methods: {
    // 获取url中的某个参数
    getUrlParams(href, key) {
      const reg = new RegExp(`${key}=[^&|#|\/]*`);
      const res = href.match(reg);
      return res ? href.match(reg)[0].split('=')[1] : '';
    },
  },
};
</script>
