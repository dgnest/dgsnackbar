# dgsnackbar
[![npm version](https://img.shields.io/npm/v/dgsnackbar.svg)](https://www.npmjs.com/package/dgsnackbar)

dgsnackbar :sunglasses: is a lightweight js plugin to create material design snackbar.

##How to use

###Usage

You can install dgsnackbar through npm:
```bash
npm install dgsnackbar
```

Or [download](dist/) the package and reference the javaScript and CSS files manually

```html
<script src="dist/dgsnackbar.min.js"></script>
<link rel="stylesheet" type="text/css" href="dist/dgsnackbar.min.css">
```
**Note:** dgsnackbar need [fontawesome](http://fontawesome.io/) :heart_eyes: to work correctly.

###Examples

```js
dgsnackbar('This is my dgsnackbar');
```

Un dgsnackbar con um mensaje exitoso
```js
dgsnackbar({
  message: 'this is my successful dgsnackbar',
  type: 'success'
});
```

###Options

Default options are the following:
```js
var options = {
  message: 'Este es mi dgsnackbar',   // dgsnackbar message.
  type: 'normal',                     // dgsnackbar type ("normal", "success" or "error").
  duration: 700                       // time in miliseconds that show dgsnackbar.
};

dgsnackbar(options);
```

--------
*Made with :heart: and :coffee: by [dgnest](http://dgnest.com) team*