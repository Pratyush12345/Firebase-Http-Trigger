var fs=require('fs');
console.log('Before reading');

fs.readFile('http://startituphnp.000webhostapp.com/file.txt','utf8', function(error, data){
console.log(data);
});

console.log('After reading');