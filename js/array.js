document.write("<h1>" + "hello" + "</h1>");
let persons = [{
    "id": 1,
    "first_name": "Thaddeus",
    "last_name": "Hammerson",
    "email": "thammerson0@homestead.com",
    "gender": "Male",
    "ip_address": "200.63.199.255"
}, {
    "id": 2,
    "first_name": "Grover",
    "last_name": "Pineaux",
    "email": "gpineaux1@studiopress.com",
    "gender": "Male",
    "ip_address": "223.106.17.37"
}, {
    "id": 3,
    "first_name": "Osmund",
    "last_name": "Spleving",
    "email": "ospleving2@i2i.jp",
    "gender": "Male",
    "ip_address": "246.230.9.138"
}];

let ages = [29, 30, 34, 23, 43, 12, 17, 52, 10, 31, 38];
for (let age of ages) {
    //document.write(age + "<br />");
}

ages.forEach(age => {
    //document.write(age + "<br />");
})

ages.map(age => {
    //document.write(age + "<br />");
})

const age = ages.filter(age => age >= 21)
document.write(age + "<br />");

ages.sort(age => {
    //document.write(age + "<br />");
})

ages.reduce(age => {
    //document.write(age + "<br />");
})