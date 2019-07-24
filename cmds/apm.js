const ora = require('ora')
const spinner = ora({spinner: "shark",color: 'yellow', text: 'Loading'});
// const getWeather = require('../utils/weather')
// const getLocation = require('../utils/location')

function timerFunc(arg) {
  // console.log(`arg was => ${arg}`);
  spinner.succeed(["Doin it"])
  spinner.stop()
}

module.exports = async (args) => {
  spinner.start();
  setTimeout(timerFunc, 4000, 'Yayoo!');

  // try {
  //   const location = args.location || args.l || await getLocation()
  //   const weather = await getWeather(location)

  //   spinner.stop()

  //   console.log(`Forecast for ${location}:`)
  //   weather.forecast.forEach(item =>
  //     console.log(`\t${item.date} - Low: ${item.low}° | High: ${item.high}° | ${item.text}`))
  // } catch (err) {
  //   spinner.stop()

  //   console.error(err)
  // }
}
