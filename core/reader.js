var fs = require('fs');
var path = require('path');
var generator = require('./css-generator');
var allClasses =[];
var FinalData;

function dataReader(){
function resultClass(str){
  let result = str.match(/class=(".*?")/g);
  if(result != null || result != undefined){
  result = result.map(function(x){ return x.replace(/class="/g,"") });
  result = result.map(function(x){ return x.replace(/"/g,"") });
   return result;
  }else{
    return 0;
  }
} 

readFiles('html/', (FinalData) => {
  const str = FinalData;
 var result = resultClass(str,function(){
  });
  if (result != 0){
    for (var i = 0; i < result.length; i++) {
      var classes = result[i].toString().split(/\s+/);
      for (var j = 0; j < classes.length; j++) {
        var cls = classes[j];
       if (cls && allClasses.indexOf(cls) === -1)
          {
            allClasses.push(cls);
          }
      }
    }
  }else{
    console.log('Please add Classes into HTML');
  }
  generator(allClasses);
}); 

function readFiles(dir, processFile) {
  fs.readdir(dir, (error, fileNames) => {
    if (error) throw error;
    fileNames.forEach(filename => {
      const name = path.parse(filename).name;
      const ext = path.parse(filename).ext;
      const filepath = path.resolve(dir, filename);
      try {
          var data = fs.readFileSync(filepath, 'utf8')
          FinalData = FinalData += data;
        } catch (err) {
          console.error(err)
        }
      fs.stat(filepath, function(error, stat) {
        if (error) throw error;
        const isFile = stat.isFile();
      });
    });
    processFile(FinalData);
  });
}
}
module.exports = dataReader;


