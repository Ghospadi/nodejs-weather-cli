import chalk from "chalk";
import dedent from "dedent-js";

export const printError = (error) => {
  console.log(chalk.bgRed("ERROR") + " " + error);
};

export const printSuccess = (message) => {
  console.log(chalk.bgGreen("Success") + " " + message);
};

export const printHelp = () => {
  console.log(
    dedent`

    ${chalk.bgCyan(" HELP ")}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для устаноки токена

    `
  );
};

export const printWeather = (weather, icon) => {
  console.log(
    dedent` 
    ${chalk.bgBlue(` Погода в городе ${weather.name} `)}
        ${icon}  Состояние: ${weather.weather[0].description}
        Температура: ${weather.main.temp} (ощущается как ${
      weather.main.feels_like
    })
        Влажность: ${weather.main.humidity}%
        Скорость ветра: ${weather.wind.speed}
        
        `
  );
};
