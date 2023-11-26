//1.) For the given JSON iterate over all for loop(for, for in, for of,for each)

var student = {
    "name":"Sakthi",
    "gender": "male",
    "dept":"EEE",
    "Batch":"B54"
};
var keys = Object.keys(student);
for(var i = 0; i<keys.length; i++){
   var key = keys[i];
   console.log(key+ ":" +student[key]);
}

for(var a in student){
    console.log(a, student[a]);
}

for (var [key, value] of Object.entries(student)) {
    console.log(key + ": " + value);
  }

Object.entries(student).forEach(([key, value]) => {
    console.log(key + ": " + value);
  });