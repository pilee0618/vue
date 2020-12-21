var a = 1;
var b = 2;
export default function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// export default  导出 暴露出去


//export default {
//    a(){}
//    b(){}
// } 导出多个 用对象