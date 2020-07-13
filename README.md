# WEB приложение для доставки

## Инструкция по использованию

Установка рабочего окружения:

    yarn install (npm install)

Запуск сервера для разработки:

    yarn start (npm run start)

Собрать приложение:

    yarn build (npm run build)

Поднять верcию приложения:

    npm version major | minor | patch

Собрать документацию:

    yarn doc (npm run doc)

Запустить линтер:

    yarn lint (npm run lint)

## Внутреннее устройство

```
|-- frontend
    |-- dist
    |-- docs
    |-- node_modules
    |-- src
    |   |-- core
    |   |   |--helpers.js
    |   |   |--module.js
    |   |   |--observ.js
    |   |   |--root.module.js
    |   |-- images
    |   |   |--index.js
    |   |-- modules
    |   |   |--Auth
    |   |   |--Main
    |   |   |--Root
    |   |-- config.js
    |   |-- quasar.config.js
    |   |-- index.html
    |   |-- index.js
    |-- .gitignore
    |-- .eslintrc.js
    |-- package.json
    |-- postcss.config.js
    |-- README.md
    |-- webpack.config.js
```

- **dist** - папка для хранения скомпилированных файлов
- **docs** - папка для работы с документацией
- **src** - весь код программы
- **src/core** - базовые классы для модулей и helpers
- **src/images** - файлы с расширением png|jpeg|jpg|svg
- **src/modules** - модули приложения
- **src/modules/Auth** - модуль авторизации
- **src/modules/Main** - модуль главной страницы
- **src/modules/Root** - root модуль
- **src/config.js** - глобальный конфиг приложения
- **src/quasar.config.js** - конфиг для Quasar
- **src/index.html** - главный html шаблон
- **src/index.js** - точка входа

## Документация

#### Пример документации метода (функции)

    1) Описание метода
    2) Описываем '@param' параметры функции
    3) Описываем '@returns' если функция что-то возвращает

```
/**
  * Описание метода (сортирует массив)
  * @param {Array} arr - Массив
  * @return {Array} arr - Возвращает отсортированный массив
  */
function example (arr) {
    return arr.sort()
}
```

#### `@const` - {Тип данных} - Название константы - описание

```
/**
  *  @const {Number} SEARCH_TIME_IN - Каждые 500мс обновляется данные с инпута
  */
const SEARCH_TIME_IN = 500;
```

#### `@module` - название модуля

    1) Описываем название модуля
    2) Указываем директорию в которой находится данный файл
        Начальная директория src
        Если директория components то пишем Component,  modules - Module, и по аналогии
```
/**
  * Модуль Авторизация       - (Название модуля, можно краткое его описание)
  * @module Module/Auth/App  - (Путь к файлу)
  */
```

#### `@param` - {Тип данных} - название параметра - краткое описание
```
/**
  * @param {String} name - Имя
  * @param {Number} [size = 11] size - размер - (Дефолтное значение 11)
  *                 [в квадратных скобках указывается не обязательный параметр]
  * @param {Object} obj - Объект (описываем все свойства внутри объекта)
  * @param {String} obj.name - имя объект
  * @param {Object} obj.options - опции объекта
  * @param {String} obj.options.color - опция объекта цвет
  * @param {Number} obj.options.price - опция объекта цена
  */
function example (name, size = 11, obj) {}
```

#### `@returns` - документирует значение, которое возвращает функция.

```
/**
  * @returns {Array} arr - Возвращает измененный массив
  */
```

#### `@vue-computed` - {Тип данных} - название - (краткое описание)
```
/**
  * @vue-computed {String} reverseText - Переворачивает текст
  */
reverseText(message) {
    return message.split('').reverse().join('')
}
```

#### `@vue-date` - {Тип данных} - название - (краткое описание)

```
/**
  * @vue-date {String} name - имя
  * @vue-date {Object} - order - объект заказа
  * @vue-date {String} - order.name - название заказа
  */
data () {
    return {
        name: 'какое-то имя',
        order: {
            name: 'название заказа'
        }
    }
}
```

#### `@vue-event` - {Тип данных} - название - (краткое описание)
```
/**
  * @vue-event {Number} pushCount - Емитит value
  */
this.$emit('pushCount', value);
```

#### `@vue-prop` - {Тип данных} - название - (краткое описание)
```
/**
  * @vue-prop {String} name     - имя
  * @vue-prop {Number} [age=1]  - age [не обязательный параметр]
  */
props: {
    name: {type: String},
    age: {type: Number, default: 1}
}
```


## ESlint Vscode

В проекте используем плагин [eslint-plugin-vue][eslintPlugin]

Для того чтобы настроить связь Vscode c Eslint необходимо:

1. Установить расширение: [ESLint][ESLint]
2. Установить расширение: [Vetur][Vetur]

3. Открыть файл:
- Windows: `%APPDATA%\Code\User\settings.json`
- macOS : `$HOME/Library/Application Support/Code/User/settings.json`
- Linux: `$HOME/.config/Code/User/settings.json`

4. Добавить в файл `settings.json`:
```
  "editor.formatOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    }
  ],
  "eslint.autoFixOnSave": true,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
```




[ESLint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[Vetur]: https://marketplace.visualstudio.com/items?itemName=octref.vetur
[eslintPlugin]: https://eslint.vuejs.org/