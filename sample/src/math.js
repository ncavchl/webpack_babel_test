var math = math || {};

//IIFE 즉시실행 함수
(function(){
    function sum(a,b){
        return a+b;
    }
    math.sum = sum;
})()