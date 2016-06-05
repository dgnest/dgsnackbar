# dgsnackbar
[![npm version](https://img.shields.io/npm/v/dgsnackbar.svg)](https://www.npmjs.com/package/dgsnackbar)

dgsnackbar :sunglasses: es un plugin super liviano en js para la creación de snackbars en material design.

See [English version](README_EN.MD)

##Como Usarlo

###Instalación

Puedes instalar dgsnackbar via npm:
```bash
npm install dgsnackbar
```

Tambien puede [descargarlo](dist/) y insertar las referencias al javascript y css:

```html
<script src="dist/dgsnackbar.min.js"></script>
<link rel="stylesheet" type="text/css" href="dist/dgsnackbar.min.css">
```
**Nota:** Para que dgsnackbar funcione correctamente necesitas usar [fontawesome](http://fontawesome.io/) :heart_eyes:

###Ejemplos básicos

```js
dgsnackbar('Este es mi dgsnackbar');
```

Un dgsnackbar con um mensaje exitoso
```js
dgsnackbar({
  message: 'Este es mi dgsnackbar exitoso',
  type: 'success'
});
```

###Opciones
Las opciones por defecto son:
```js
var options = {
  message: 'Este es mi dgsnackbar',   // Este es el mensaje que se mostrará en el dgsnackbar.
  type: 'normal',                     // Este es el tipo de dgsnackbar, exiten tres tipos "normal", "success", "error".
  duration: 700                       // Este es la duracion en milisegundos en el que se mostrará el dgsnackbar.
};

dgsnackbar(options);
```

--------
*Hecho con :heart: y :coffee: por el equipo de [dgnest](http://dgnest.com)*