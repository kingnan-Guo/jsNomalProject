function name1() {
    console.log(a);
    // console.log(c);
    c()
    console.log(arguments);
    var a =1;
    function c() {
        console.log('123');
    }
}

name1(123,22)