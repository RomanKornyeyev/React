# REACT 
## Instalación (Windows)
Descargar la última versión (preferentemente LTS) desde el sitio web oficial [Node.js](https://nodejs.org/en/download). Una vez instalado, comprobar en una terminal nueva (cmd/powershell) que se haya instalado tanto node como npm (node packages manager):

```
node -v
```
```
npm -v
```

Salida:

```
C:\user>node -v
v18.16.1

C:\user>npm -v
9.5.1
```

Una vez hecho esto y para poder crear proyectos en React, deberemos instalar el paquete "create-react-app". **En Windows no viene instalado de serie**:



## Creación de proyecto

Hay 2 maneras de crear un proyecto de React. Una más antigua y otra más moderna y mejor.

- ### 1ª: create-react-app (antigua)

    #### Creación

    Primero debemos instalar el paquete "create-react-app". **En Windows no viene instalado de serie**:

    ```
    npm install -g create-react-app
    ```

    Seguidamente, creamos el proyecto con:

    ```
    npx create-react-app my-app
    ```

    #### Lanzamiento

    Nos situamos en el proyecto:

    ```
    cd my-app/
    ```

    Iniciamos la aplicación web con:
    ```
    npm start
    ```

- ### 2ª: Vite + React (nueva)
    [Vite](https://vitejs.dev/) es la forma moderna de trabajar con React, es más eficiente y más rápida. Para empezar, al igual que con create-react-app, hay que instalar el paquete npm para vite. Lo realizaremos con el comando para crear un proyecto y **directamente nos va a preguntar para instalar el paquete NPM.**

    ```
    npm create vite@latest
    ```
    
    Seguidamente introduciremos un nombre de proyecto cuando nos lo pregunte. A su vez posteriormente nos preguntará por el framework (obviamente elegimos React) y por el lenguaje, por "default" elegiremos JavaScript + SWC. SWC es un motor más rápido y eficiente que babel.


    Una vez hecho todo esto y creado el proyecto, procedemos a lanzarlo de una forma similar a React (base). Nos situamos en el proyecto.

    ```
    cd mi-proyecto
    ```

    Instalamos todas las dependencias (solo la primera vez).

    ```
    npm install
    ```

    Hacemos el equivalente a npm start, pero con vite.

    ```
    npm run dev
    ```

    Por lo demás, la estructura de carpetas y etc seguirá la lógica de React.











Una vez dentro del proyecto tendremos esta jerarquía:
```
my-app/
    node_modules/
    public/
    src/
    ...
```

Para comenzar, podemos editar ``src/App.js``. También podemos personalizar esta jerarquía de carpetas para poder personalizarla más a nuestro gusto y separar los distintos componentes que vayamos a crear, así como sus respectivos estilos. Para tenerlo todo más modularizado. Ejemplo:
```
my-app/
    node_modules/
    public/
    src/
        componentes/
            Navbar.js
            Footer.js
        css/
            Navbar.css
            Footer.css
        media/
            logo.png
        App.js
        ...
    ...
```
Como podemos observar, tenemos un archivo CSS por cada componente. Esto es una manera de hacerlo y nos permite modularizar nuestro trabajo.

## Notas generales / miscelanea
### Nomenclatura
Es importante que los **componentes estén escritos en PascalCase**. Si no, no funcionarán (&lt;Button /&gt;). Esto es así, debido a que la librería no los confunda con elementos HTML.

### Estilos
Es importante saber que si le vamos a meter estilos en línea, no podremos hacerlo como en HTML normal. Osea, no podría ser así:
```
<div style='display: flex'></div>
```

¿Por qué? Porque React espera recibir un objeto por parámetro y lo que estamos haciendo en el ejemplo anterior es pasarle un string. La forma correcta sería la siguiente:
```
<div style={{display: 'flex'}}></div>
```

Otra consideración a tener en cuenta es que a la hora de ponerle clases a los elementos HTML, no podremos hacerlo con ``class="mi-clase"``, si no que deberemos hacerlo con ``className='mi-clase'``.

### Props y parámetros
Es importante destacar que dentro de los props o parámtros pasados a un componente de React, hay dos maneras.<br>
**1 Manera: props**
```
<Componente
    titulo={El título de la noticia}
/>
```

El componente lo recibiría así:
```
function Componente({titulo}){
    ...
}
```

**2ª Manera: children**
```
<Componente>
    El título de la noticia
</Componente>
```

El componente lo recibiría así:
```
function Componente({children}){
    ...
}
```

*children es una palabra reservada, que se usa para decir que vas a utilizar el texto/elementos hijos del componente. Importante destacar que children tiene solamente un elemento, que a su vez dentro puede ser un árbol, pero lo que es children como tal, es solo un elemento.

**¿Cuál es la diferencia?** con los props puedes pasar únicamente cadenas de texto, sin embargo, con children puedes pasarle tanto strings, como elementos html, como otros componentes de React. Es más versátil.

### States
La actualización de los estados es asíncrona, es decir, una tarea no bloquea a la siguiente.

## Herramientas
### Cómo leer en JSON en React
Para leer en JSON en React, hace falta importarlo en el archivo en el que estemos trabajando con él (ya sea la app) o un componente:

```
import TareasJson from './db/tareas.json';
```

Obviamente, cambiando el nombre y las rutas. Y después mostrarlo en la página de la siguiente manera, se pueden acceder a índices personalizados (como id, nombre, etc.):

```
{
    TareasJson.map(tarea => {
        return(
            <div>
                {tarea.id}
            </div>
        );
    })
}
```

## Utilidades para los proyectos
Existen algunos paquetes que nos facilitan hacer ciertas cosas, por ejemplo, generar un uuid aleatorio y único. Para ello podremos instalar los paquetes correspondientes a estas utilidades (dentro del proyecto).

### uuid
Generación de clave uuid única. [Página oficial](https://www.npmjs.com/package/uuid)
```
npm install uuid
```

Para usarlo posteriormente, incluirlo con:
```
import { v4 as uuidv4 } from 'uuid';
```

Y llamarlo con:
```
uuidv4();
```

### React Icons
Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
```
npm install react-icons --save
```

[Página oficial](https://react-icons.github.io/react-icons/icons?name=ai) para buscar e incluir iconos (hace falta poner el import correspondiente + dar click a un icono para copiar su componente de React). Ejemplo: ``AiFillAmazonCircle``.

### Math.js
[Math.js](https://mathjs.org/) is an extensive math library for JavaScript and Node.js. It features a flexible expression parser with support for symbolic computation, comes with a large set of built-in functions and constants, and offers an integrated solution to work with different data types like numbers, big numbers, complex numbers, fractions, units, and matrices. Powerful and easy to use. Instalación:
```
npm install mathjs
```

Por ejemplo, para evaluar una expresión se usaría:
```
evaluate(5*5); //25
```



<br><hr><br>

## Miscelanea
### React es declarativo y no imperativo (como JS vanilla)
¿Qué significa esto? Lo ponemos con 2 ejemplos.
- 1 - JS Vanilla es imperativo. Por ejemplo, digamos que queremos salir a comprar el pan, pues tenemos que decir: 
  - Hay que vestirse
  - bajar a la tienda
  - comprar el pan
  - darle el dinero al panadero
  - volver a casa con el pan
- 2 - React. Con el mismo ejemplo de antes esto se reduciría a:
  - Quier pan (si tengo dinero lo consigo y si no, no)

Esto nos facilita mucho las cosas y nos ahorra mucho tiempo.

### Re-renderización
Cada vez que se renderiza de nuevo un elemento (por un cambio de estado, por ejemplo), todos los componentes que estén por debajo, se vuelven a renderizar también en el DOM virtual.

Importante también no usar Math.random(), Date.now() y todo este tipo de chapuzas para asignárselas como keys a los elementos. Lo ideal es que la key de un elemento sea el id/uuid que venga de una base de datos


npm install standard -D

### Sitios para despliegues en producción sencillos
- [netlify](https://app.netlify.com/drop)