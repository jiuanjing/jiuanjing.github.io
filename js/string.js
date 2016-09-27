// function f2() {
//     var n = 9999;
//     return function () {
//         return n;
//     }
// }
// var n = (f2())();
// console.log(n);

// var a = [2,3,4];
// var b = a;
// a.push(5);
// console.log(a,b);//[2,3,4,5] [2,3,4]
// a = [3,4,5,6];
// console.log(a,b);//[3,4,5,6][2,3,4]

function counter() {
    var cnt = 0;

    function getCnt() {
        return cnt;
    }

    function setCnt(val) {
        cnt = val;
    }

    return {
        getCnt: getCnt,
        setCnt: setCnt
    }
}

var f = counter();
console.log(f.getCnt());
f.setCnt(12);
console.log(f.getCnt());