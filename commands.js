var fs = require('fs');
module.exports = {

  pwd: function(){
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
  },

  date: function(){
    process.stdout.write(Date());
    process.stdout.write('\nprompt > ');
  },

  echo: function(args){
    process.stdout.write(args);
    process.stdout.write('\nprompt > ');
  },

  cat: function(file){
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) throw err;
      console.log(data);
     // process.stdout.write(args);
    process.stdout.write('\nprompt > ');
    });
  },

  head: function(file){
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) throw err;
      let newLineCount = 0;
      let pos = 0;
      while ( newLineCount < 5 ) {
        if (data[pos] === '\n') {
          newLineCount++;
        }
        pos++;
      }
      console.log(data.slice(0, pos));
     // process.stdout.write(args);
    process.stdout.write('\nprompt > ');
    });
  },

  tail: function(file){
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) throw err;
      let newLineCount = 0;
      let pos = data.length - 1;
      while ( newLineCount < 5 ) {
        if (data[pos] === '\n') {
          newLineCount++;
        }
        pos--;
      }
      console.log(data.slice(pos));
     // process.stdout.write(args);
    process.stdout.write('\nprompt > ');
    });
  },

  ls: function() {
    fs.readdir('.', function(err, files) {
  if (err) throw err;
  files.forEach(function(file) {
    process.stdout.write(file.toString() + "\n");
  });
    process.stdout.write('\nprompt > ');
});
  }

};
