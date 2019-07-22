const menus = {
  apm: `
    valuetracker [command] <options>

    apm .............. APM Details
    insights ........... Work in progress
    infrastructure ............ Work in progress
     ............... show help menu for a command`,

  today: `
    outside today <options>

    --location, -l ..... the location to use`,

  forecast: `
    outside forecast <options>

    --location, -l ..... the location to use`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help' ? args._[1] : args._[0];
  console.log(menus[subCmd] || menus.main);
}
