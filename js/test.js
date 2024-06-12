var jb = 'hi'; // 변수 선언 후 주석 가능(한줄 주석)
var a = 1;
var b;
b = 5;

/*
여러 줄 주석 : 여러 줄에 걸쳐 주석을 처리합니다.
*/

if (true) {
    let c = 'let 접근';
    var c_1 = 'var 접근';
}
//console.log(c); 
console.log(c_1); 
let d = 5;

console.log(d); 

const e = '상수1 접근';
console.log(e); // 상수1 접근

//const search_message = () => {
    //const c = '검색을 수행합니다';
    //alert(c);
//};
    
document.getElementById("search_btn").addEventListener('click', search_message);
    
function search_message(){
    alert("검색을 수행합니다!");
}

function init_logined() {
    console.log("init_logined 함수가 호출되었습니다.");
    // 필요한 초기화 작업을 여기에 추가합니다.
}