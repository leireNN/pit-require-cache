const chokidar = require("chokidar");

const DEFAULT_OPTIONS = { depth: 99, ignored: /(^|[\/\\])\../ };

const watcher = ({ directory = ".", options = {} } = extendOptions()) => {
  const extendedOptions = extendOptions(options);

  const watcher = chokidar.watch(`${directory}`, extendedOptions);

  watcher.on("change", path => {
    delete require.cache[`${path}`];
    console.log(`File changed: ${path}`);
    console.log(`Require cache ${path} deleted`);
  });
};

const extendOptions = userOptions => ({
  ...DEFAULT_OPTIONS,
  ...userOptions
});

module.exports = { watcher, extendOptions, DEFAULT_OPTIONS };
