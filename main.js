import getRandom from "./util.js"; // 倒入
var a = 1;

function test() {
    console.log('sdsd'); // 模块化标准：在模块里定义全局函数和变量只能在模块内部使用 出了模块则无法使用 一个js文件则为一个模块
}

console.log(getRandom(20,30));

//console.log(a);
//console.log(test);