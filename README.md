# Problem example

https://github.com/jasmine/jasmine/issues/1971

## Installation
1. Checkout repo
2. run `npm i`
3. run `node jasmine.config.js` to run tests

## Quick summary
The task is to run onprepare function before kicking off specs. 
This function serves 2 main purposes:
- runs several async functions
- sets up jasmine reporters, ONE OF THE REPORTERS IS USING A VALUE RETURNED BY ASYNC FUNC

## Approaches

### 1. Helper file (this is currently implemented in the repo)

The code goes to on-prepare.js.
For better explanation, see console.log, which has integers for the expected order

#### Problem

The spec is ran before on-prep function is completed.
One of the reported is not even added.
Below is the output

```javascript
jasmine-on-prepare sp$ node jasmine.config.js 
1 modules imported
2 reporters setup
Jasmine started
6 it #1

  example
    ✓ it #1 (0.001 sec)
7 it #2
    ✓ it #2 (0 sec)
8 it #3
    ✓ it #3 (0 sec)

Executed 3 of 3 specs SUCCESS in 0.008 sec.
3 setup func #1 executed
4 setup func #2 executed
5 onPrepare work completed
```

### 2. Move the code to `jasmine.config.js`

The code goes to `jasmine.config.js`.

#### Problem

I get `jasmine.getEnv() is not a function`. 
Likely because the line is ran, before `jasmine.execute()` is called.
I'm not sure if I can construct Env class and add reporters directly

### 3. Move the async code to `jasmine.config.js`, and leave reporters in on-prepare.js

#### Problem

This doesn't work for me, because one of the reporters uses value from async function to construct it
