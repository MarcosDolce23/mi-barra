# Mi Barra

## Descripción
Este proyecto es un desarrollo que surgió entre amigos con la intención de publicar nuestra primera app.
La intención no es hacer una aplicación revolucionaria ni tampoco un gran proyecto. Solo queremos desarrollar nuestros conocimientos en programación e interfaces de usuario.

La aplicación consiste en un buscador de tragos basado en lo que hay al alance en tu hogar, el enfoque es poder ayudar al usuario cuando tiene pocos ingredientes y no sabe qué preparar.

## Tecnología
Es una aplicación cordova mientras que la interfaz de usuario está hecha en React.js

Para poder integrar ambos proyectos (cordova y React.js) fue necesario:
- Copiar las carpeta src/ y public/ de un proyecto React dentro del proyecto cordova.
- Agregar las dependencias necesarias de React al package.json del proyecto cordova.
- Agregar los siguientes <meta> tags en el <head> del archivo public/index.html.
```
<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">
<meta name="format-detection" content="telephone=no">
<meta name="msapplication-tap-highlight" content="no">
<meta name="viewport" content="initial-scale=1, width=device-width, viewport-fit=cover">
```
- Agregar el archivo cordova.js en el <body> de public/index.html.
```
<script src="cordova.js" type="text/javascript"></script>
```
- Configurar el react dom par que sea cargado luego del evento cordova "deviceready".
```
function startApp() {
    // window.StatusBar.hide();
    // window.screen.orientation.lock('portrait');

    var exitApp = false, intval = setInterval(function () { exitApp = false; }, 1000);
    document.addEventListener("backbutton", function (e) {
        e.preventDefault();
        if (exitApp) {
            clearInterval(intval)
                (navigator.app && navigator.app.exitApp())
        }
        else {
            exitApp = true
            window.history.back();
        }
    }, false);

    ReactDOM.render(<App />, document.getElementById('root'));

        window.StatusBar.overlaysWebView(true);
        window.StatusBar.backgroundColorByHexString('#33000000');

}

if (window.cordova) {
    document.addEventListener('deviceready', startApp, false);
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
};
```
- Actualizar el package.json para que la aplicación utilice relative paths.
```
"homepage": "./"
```
  
Para que la aplicación React pueda correr dentro del proyecto cordova es necesario hacer un build de esta y copiar el resultado dentro la carpeta wwww/.
Para automatizar esta tarea agregué un script que se ejecutará mediante el hook "before_prepare" de cordova.
  
## Otros
Por el momento solo estamos desarrollando la aplicación para Android. Dado que el presupuesto es de $0.