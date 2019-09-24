const minimist = require('minimist');
const error = require('./utils/error');
const apm = require('./cmds/apm');
const infra = require('./cmds/infrastructure');
const synthetic = require('./cmds/synthetic');
const help = require('./cmds/help');
const package = require('./package.json');



module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let cmd = args._[0] || 'help';

  if (args.version || args.v) {
    cmd = 'version';
  }

  if (args.help || args.h) {
    cmd = 'help';
  }

  switch (cmd) {
    case 'apm':
      apm.exec(args);
      break;
    case 'help':
      help.help(args);
      break;
    case 'version':
      console.log(package.version);
      break;
    case 'synthetic':
      synthetic.exec(args);
      break;
    default:
      error(`"${cmd}" is not a valid command!`, true);
      break;
  }
};