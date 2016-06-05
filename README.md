# ttcr

## Notice

`This package is currently under development.`

## Installation

Installation is easiest through npm:

`npm install ttcr --save`

## CLI

```
$ npm install --global ttcr
```

```
$ ttcr --help

  Usage
    $ ttcr "<url>"

  Example
    $ ttcr "https://samcus.co"
```

ttcr will use the callback function with the following signature callback(ratio, requestError).
The requestError will be whatever error request passes back, the ratio will be empty if there was an issue.
## License

MIT © [Samuel Custer](https://samcus.co)
