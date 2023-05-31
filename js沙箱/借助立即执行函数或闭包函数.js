(function (win) {
    var i = {
        f: function() {
            console.log("win fun", this);
        }
    }
    win.i = i
})(window)


function proxyOb() {
    
}