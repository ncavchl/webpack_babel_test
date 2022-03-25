/**
 * TODO: IE11에서도 동작하는 자바스크립트로 변환할수 있게 바벨을 구성하세요.
 */
 module.exports = {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
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
