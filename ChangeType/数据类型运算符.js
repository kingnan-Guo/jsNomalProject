console.log(5 + {});//字符串拼接
console.log(5 + [2]);// 
console.log('2'+ 1);
console.log(5 * [2]);
console.log(+'ads');

// -------------number
console.log(Number({a:1}));
console.log(Number([1, 2]));
console.log(Number([ 2]));


// string ()
// 1、toString() -> 原始类型值 -> String()
// 2、valueOf -> 原始类型值 -> String()
console.log(String([ '2',2]));

console.log('booble', Boolean(undefined));


// date 转number 先调 toString
console.log("date ==", Number(new Date()))

// ++i 与 i++
// ++i 先调自增 再参与运算
// i++ 先参与运算再自增
var i,n = 1
var j = i++ + 1
var k = ++n + 1
console.log('j ==', j);
console.log('k ==', k);

// 余数
// 小数 % 大数 == 小数
console.log('2 % 100 = ', 2 % 100);
console.log('50 % 3 = ', 50 % 3);
// 正负号取决于 前一个数 ，如果想正确运算 先取绝对值运算  再算正负号
console.log('-3 % 2 = ', -3 % 2);
console.log('3 % -2 = ', 3 % -2);




// 数值运算符
console.log('+5 = ', +5, '+true =', +true, '+[] =', +[], '-{} = ', -{});
console.log('Number([]) = 0  =>', Number([]));
console.log('Number({}) = Nan  =>', Number({}));
let x = 1
console.log('x = ', x, '-x = ', -x, '-(-x) = ', -(-1));


// 指数运算符
// 从右往左运算
console.log('2 ** 3  ** 2 ==  2 ** (3 ** 2)', 2 ** 3 ** 2);

console.log('2 ** 3 =', 2 ** 'a');


// 位运算符


// 比较运算符
// 当遇到 不是数值的操作数先转为数字
// 将 '3' => number('3)
console.log("5 > '3' ==", 5 > '3');
// Nan 与任何数字做四则计算都是 Nan， 比较计算返回 Boolean 都为 false
console.log("5 > {} ==", 5 > {});

// 字符串拼接
console.log('3'+ NaN);
console.log(3+ NaN);

console.log('NaN == NaN = false =>', NaN == NaN);

// 比较字符编码 大小 unicode
console.log("c > 'a' ==", 'c' > 'a');
// 对比第一位 如果无法对比出来没那么对比下一位
console.log("ca > 'za' ==", 'cz' > 'cbcc');



// 如果有一个不是字符串 分为两种情况
// 原始类型先转数字再比较
console.log("5 > '3' ==", 5 > '3');


console.log("5 > {} ==", 5 > {});
console.log("[2] > [1] ==", [2] > [1] );


// 严格相等 ===
console.log("5 === '5' ==>",5 === '5');
// 
console.log('1 === 0x01', 1 === 0x01);
// 相等运算符  ==  会对数据做转化
console.log(5 == '5');

console.log('-0 == +0 =>', -0 == +0);

console.log('-0 == +0 =>', '-0' == +0);

// 符合类型 比较 地址

console.log({} == {});
var arr= []
var arr2 = arr
console.log('arr = arr2', arr2 === arr);

// 比较 {} 转换成 Number
console.log({} < {});


// Boolean
console.log("Boolean([]) = ", Boolean([]));
// Boolean([]) ==> !Boolean([])
console.log("![] ==  Boolean([]) ==> !Boolean([]) ==> ", ![]);
console.log("!![] = ", !![]);
console.log("!!{} = ", !!{});

console.log("!!null = ", !!null);
console.log("!!33 = ", !!33);


// && 如果 第一个值为 false那么 后面的值不进行计算 叫做短路
// && || 返回值 不转换数据类型
console.log('1 && 2 ==', 1 && 2);
console.log('1 || 2 ==', 1 || 2);


// 位运算符
// 按位非  每一位都取反： 操作数 求负数 减一
console.log('~5 = -6 =>', ~5);
// 两个数字转换成 32 位 ，然后 按位 &（与）
console.log('2 & 10 ==', 2 & 10);
//异或
// 
console.log('12 ^ 10 ==', 12 ^ 10);
// 如果是非数值，两个操作只有一个为真 那么返回1， 如果两个都是神 或者都是假 返回 0，（要将非数字转成数字）
// Number('hello') = NaN
console.log("true ^ 'hello' = 1  =>", true ^ 'hello');


// 移位

console.log("2 << 2", 2 << 2);// 2* (2**2)
console.log("2 >> 2", 2 >> 1);// 2 / (2**1)


console.log('void(0) ==', void(0));
console.log('void(5) ==', void(5));

// 右结合有次方  **


var a = {
    i: 1,
    toString(){
        console.log('toString');
        return a.i++
    }
}

a = {
    i: 1,
    valueOf(){
        console.log('valueOf');
        return a.i++
    }
}
if(a == 1 && a==2 && a ==3 ){
    console.log('end');
}


