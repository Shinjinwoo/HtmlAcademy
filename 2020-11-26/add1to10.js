var sum = 0;
for ( var i = 0; i < 10; i++){
    //코드 에러 
    sum += i;
}
// 합을 메시지로 전송
postMessage(sum);