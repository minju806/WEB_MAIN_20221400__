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
//console.log(c); // Error: c is not defined
console.log(c_1); // var 접근
let d = 5;

//let d = '값 재할당'; // Error: Identifier 'd' has already been declared
console.log(d); // 5

const e = '상수1 접근';
//e = 5; // Error: Assignment to constant variable.
//const f; // Error: Missing initializer in const declaration
console.log(e); // 상수1 접근

const searchButton = document.getElementById("search_btn");
if (searchButton) {
    searchButton.addEventListener('click', search_message);
} else {
    console.error('Element with id "search_btn" not found.');
}

function search_message() {
    alert("검색을 수행합니다!");
}