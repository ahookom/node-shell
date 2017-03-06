let commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
  let input = data.toString().trim();
  let cmdArr = input.split(' ');
  let cmd = cmdArr.shift();
  let args = cmdArr.join(' ');

  if (Object.keys(commands).includes(cmd)){
    commands[cmd](args);
  }
  //process.stdout.write('You typed: ' + cmd);


  //process.stdout.write('\nprompt > ');

});
