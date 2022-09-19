export default {
  session: false, //开发期可以不启用 登录拦截
  http: {
    // 请求的 baseURL
    baseURL: '',
    // 接口报错统一提示处理，不需要可不配置。
    error(err) {
      uni.showToast({
        title: err?.message || '网络错误',
        icon: 'error',
        duration: 1500,
      });
    },
  },
  permission: {
    mode: 'token',
    baseURL: 'http://10.233.28.82:9999',
  },
  // permission: {
  //   mode: 'rop',
  //   config: {
  //     baseURL: 'http://dev.hsit.com.cn/demo/router',
  //     projectCode: '',
  //     appKey: '600000',
  //     appSecret: 'CE1299BBF42F415AA08B91A47E86FB4E',
  //     locale: 'zh',
  //     clientType: 'MBLET', // 客户端类型，值有APP、MBLET
  //   },
  // },
  apis: require.context('@/apis', true, /\.js$/),
  //其他配置省略
  database: {
    resolve: require.context('@/database', true, /(\.js$)|(\.sql$)/),
    config: [
      {
        //数据库名称
        name: 'test',
        //数据库路径
        path: '_doc/test.db',
        // 执行脚本，会按照数组顺序执行脚本，每个脚本执行一次后会有记录，下次进入程序就不会执行
        // 默认 sql 文件，会根据换行分割，每行为一个 sql 语句进行执行
        // 如果该 sql 文件为一个执行单位，需要额外配置 'xxxxxx!file'
        init: ['test/01-test-test-create!file', 'test/02-test-test-insert'],
      },
    ],
  },
  components: {
    EIcon: {
      rules: [
        {
          test: '^ms-.*',
          type: 'font-class',
          fontFamily: 'ms-iconfont',
        },
      ],
    },
  },
};
