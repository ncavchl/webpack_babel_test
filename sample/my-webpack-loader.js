module.exports = function myWebpackLoader (content){
    
    //파일 내용 반환시 변환해서 
    //  return content;
     return content.replace('console.log(', 'alert(');
}