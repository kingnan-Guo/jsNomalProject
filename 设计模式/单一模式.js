// 
function render(dom) {
    this.dom = dom
    this.do = function (data) {
        console.log('this.do ', this.dom);
    }
}
var render = new render('li')

render.do()



// ------
function Rectangle() {
    this.width = 0
    this.setWidth = function(width) {
        this.width = width
        console.log('this.width =', this.width);
    }

}

// Square.prototype = new Rectangle();
function Square() {
    // this.setWidth('5')
}
Square.prototype = new Rectangle();


var asdasd = new Square()
console.dir(asdasd);
// Square()
asdasd.setWidth('990')
// console.log();


