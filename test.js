let s = "aniket mandal ne";
let arr = s.trim().toLowerCase().split('').filter(a => a != ' ');
let fil = arr.filter((n, i, ar) => ar.indexOf(n) === i);

count = 0;
for (let a of s) {
    if (a == ' ') {
        count++;
    }
}

let co = s.split('').length;

console.log(co);