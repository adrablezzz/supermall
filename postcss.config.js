module.export = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      // viewportWidth: 375,   //视口宽度,对应设计稿宽度
      // viepoortHeight: 667,  //视口高度,对应设计稿高度
      // unitPrecision: 5,     //指定px转换为视窗单位值的最小位数
      // viewportUnit: 'vw',   //指定视窗单位,建议vw
      // selectorBlackList: ['ignore', 'tab-bar', 'tabbar-item'],  //指定不需要转换的类
      // minPixelValue: 1,     //小于或等于1px不转换为视窗单位
      // mediaQuery: false,    //允许在媒体查询中转换px
      // exclude: [/TabBar/],

      unitToConvert: 'px',
      viewportWidth: 320,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568
    }
  }
}