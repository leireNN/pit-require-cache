
<p align="center">
  <img width="300" align="center" alt="exprexo" src="https://repository-images.githubusercontent.com/201253235/b302c380-b9b6-11e9-97e2-0808231c3f71">
</p>


# pit-require-cache 🐕

# What is pit-require-cache? 🤷‍

**pit-require-cache** is a zero-configuration watcher that deletes `require's` cache for any updated file.

## Use case 🖌
Lets say that you are importing trought require a specific file and then serving that file trought a express server, then you update that file and as `require` cache the files already imported you need to stop the server and start it again. 
With `pit-require-cache` is not needed anymore, just instantiate the watcher once and then it will delete the cache for you making the changes appear all straight.

## Installation 🧱

`npm install pit-require-cache`

## Usage 🐶

```js
const { watcher } = require('pit-require-cache')

watcher()
```


## Available Options 🧪

```js

const options = {
  persistent: true,
 
  ignored: '*.txt',
  ignoreInitial: false,
  followSymlinks: true,
  cwd: '.',
  disableGlobbing: false,
 
  usePolling: true,
  interval: 100,
  binaryInterval: 300,
  alwaysStat: false,
  depth: 99,
  awaitWriteFinish: {
    stabilityThreshold: 2000,
    pollInterval: 100
  },
  ignorePermissionErrors: false,
  atomic: true
}

watcher(options)
```

### Main options:
```js
  directory        Directory to be watched           [default: ".", string or array of strings]

  persistent       Show version number               [default: true, boolean]

  ignored          Ignored files                     [default: '', string, example: '*.txt']

  ignoreInitial    Add/addDir events are also        [default: false, boolean]
                   emitted while instantiating

  followSymlinks   Watch followinf symbolic links    [default: true, boolean]

  cwd              Base directory                    [default: '.', string]

  usePolling       Whether to use fs.watchFile or    [default: false, boolean]
                   fs.watchtrue

  interval         Interval for polling              [default: 100, number]

  binaryInterval   Interval polling for binary files.[default: 300, number]

  depth            Limits how many levels of 
                   subdirectories will be traversed. [default: undefined, number]

  awaitWriteFinish Wait until the size of the file   [default: undefined, example: {
                   stays constant.                      stabilityThreshold: 2000,
                                                        pollInterval: 100
                                                      }, object]
  ignorePermissionErrors Silence the access errors   [default: false, boolean]
```
As we are using `chokidar` module for the watcher implementation, there are a couple more options that can be checked on `chokidar`'s module docs https://www.npmjs.com/package/chokidar/v/2.0.4


#### Credits ❤️

<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>