const menus = {
  apm: `
    This is APM help`,

  infrastructure : `
    This is Infra help
    `,
  browser: `
    This is browser help
    `,
  help: `
    1 ..... for APM help use command $valuetracker help apm
    2 ..... for Infrastructure help use command $valuetracker help infra
    3 ..... for Browser help use command $valuetracker help browser
    `,
}

module.exports.help = function(args) {
  const subCmd = args._[0] === 'help' ? args._[1] : args._[0];
  console.log(menus[subCmd] || menus.help);
}
