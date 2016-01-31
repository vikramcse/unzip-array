# unzip-array
A javascript implementation of unzip function

Install the module with: `npm install unzip-array`

## Example

```js
var unzip = require('unzip-array');
var result = unzip([[1, 2], [8, 33], [4, 9]]);
console.log(result); 
// -> [[1, 8, 4], [2, 33, 9]]
```
