# bot-inspector
Simple node user-agent inspector that detects bot requests.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [TODO](#todo)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Npm:

```sh
npm install bot-inspector
```
Yarn:

```sh
yarn add bot-inspector
```

## Usage

```js
const BotInspector = require('bot-inspector');

function example(req, res) {
  const options = {
    customCrawlers: ['spiderbot'] // string or array of strings
    headers: req.headers // node request headers; object with user-agent prop or on a string literal
  }

  const inspector = BotInspector(options);

  // Do something...

  if (inspector.isCrawler()) {
    // Do something...
  }
}
```

## TODO
- Add some more tests that are missing
- Better documentation
- Add bot exclusions
- Add method to return which bot is calling

## Support

Please [open an issue](https://github.com/manuelxaguilar/bot-inspector/issues/new) for support.

## Contributing

Created this module for personal use but thought it might be helpful for others, if you want to make it more robust, I'd be happy to get some contributions and additions to the codebase.

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/manuelxaguilar/bot-inspector/compare).
