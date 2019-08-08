const { extendOptions, DEFAULT_OPTIONS } = require("./watcher");

let testCounter = 0;

const prettify = object => JSON.stringify(object, null, 2);
const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const test = ({ actual, expected, given }) => {
  const ok = deepEqual(actual, expected);
  
  console.log(
    ok
      ? `ok ${testCounter + 1} Given ${given}`
      : `not ok ${testCounter + 1} Given ${given}, 
    
      Expected:
      ${prettify(expected)}, 
      
      Actual:
      ${prettify(actual)}`
  );

  testCounter+=1
};


test({
  given: "no options returns the default options",
  actual: extendOptions(),
  expected: DEFAULT_OPTIONS
});

test({
  actual: extendOptions({ directory: "foo" }),
  expected: { ...DEFAULT_OPTIONS, directory: "foo" },
  given: "any option, the option will be preserved"
});

test({
  actual: extendOptions({ directory: ".", options: null }),
  expected: { ...DEFAULT_OPTIONS, directory: ".", options: null },
  given: "options options to null, extend DEFAULT_OPTIONS with options set to null"
});

test({
  actual: extendOptions({ directory: ".", options: {} }),
  expected: { ...DEFAULT_OPTIONS, directory: ".", options: {} },
  given: "options options to empty object, extend DEFAULT_OPTIONS with options set to empty object"
});