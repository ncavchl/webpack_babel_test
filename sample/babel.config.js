module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "79", // 크롬 79까지 지원하는 코드를 만든다
          ie: "11", // ie 11까지 지원하는 코드를 만든다
        },
        useBuiltIns:'usage', // 'entry', false 폴리필 사용방식 지정 - 총 3가지
        corejs: {
          //폴리필 버전
          version:2, //3
        }
      },
    ],
  ],
}