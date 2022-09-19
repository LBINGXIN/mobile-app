<script>
export default {
  onLaunch: function () {
    console.log('App Launch');
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
};
</script>

<style lang="scss">
/*每个页面公共css */
@import 'uview-ui/index.scss';
@import '~@euler/mobile-ui/style/index.scss';
@import './static/fonts/iconfont.css';

/* #ifdef APP-PLUS */
@font-face {
  font-family: 'uicon-iconfont';
  src: url('./static/fonts/u-view-font.ttf') format('truetype');
}
/* #endif */
</style>
