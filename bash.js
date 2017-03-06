let commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
  var cmd = data.toString().trim();

  if(Object.keys(commands).includes(cmd)){
    commands[cmd]();
  }
  //process.stdout.write('You typed: ' + cmd);


  process.stdout.write('\nprompt > ');

});
