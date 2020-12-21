var sum = function (a, b) {
    return a + b;
};

console.log(sum(1, 2));

var sum1 = (a, b) => {
    return a + b;
}

console.log(sum1(2, 3));

var sum2 = (a, b) => a + b;

console.log(sum2(3, 4));

var print = data => {
    console.log(data);
}

print('hhhh');

var print1 = data => console.log(data);

print1('jjj');


var obj = {
    count: 0,
    start() {
        var that = this;
        setInterval(function () { // setInterval是直接调用 导致this指向window 而这里执行环境是node global指向全局 global没有count变量
            that.count++;
            console.log(that.count);
        }, 1000);
    },
};

obj.start();

var obj1 = {
    count: 100,
    start() {
        setInterval(() => { // this指向谁？取决于箭头函数定义的位置，那个位置this指向谁，箭头函数里的this也指向谁。绑定在一起的
            this.count--;
            console.log(this.count);
        }, 1000);
    },
};

obj1.start();