const path = require('path');

module.exports = {
    mode:'development',
    entry:{
        main: './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    }
}
// mode - development, production
// entry - 포인트 시작점
// output 
// (1)entry의 key 이름으로 [name] 생성 
// (2) 노드의 path 모듈가져와서, 절대경로 계산해주는 resolve
