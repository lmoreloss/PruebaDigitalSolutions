Link a Vercel: https://prueba-digital-solutions.vercel.app/

Esta prueba tecnica se basa en desarrollar una pagina web con el siguiente esquema

+---------------------------+-------------------------------------------------+
|                           |                                                 |
|     Producto normal 1     |                                                 |
|          Precio 1         |                                                 |
|                           |                                                 |
|---------------------------|                                                 |
|                           |                                                 |
|     Producto normal 2     |                                                 |
|          Precio 2         |                      VIDEO                      |
|                           |                                                 |
|---------------------------|                                                 |
|                           |                                                 |
|     Producto normal 3     |                                                 |
|          Precio 3         |                                                 |
|                           |                                                 |
+---------------------------+-------------------------------------------------+
|                           |                           |                     |
|     Producto normal 4     |                           |                     |
|          Precio 4         |         IMAGEN            |  Producto Especial  |
|                           |                           |       Precio        |
|---------------------------|                           |                     |
|                           |                           |                     |
|     Producto normal 5     |                           |                     |
|          Precio 5         |                           |                     |
|                           |                           |                     |
+---------------------------+---------------------------+---------------------+

Donde se puede usar cualquier framework de front end disponible, sin embargo por simplicidad y por cuestiones deespacio en disco,
se decidio hacerla con HTML, CSS y Javascript, usando herramientas de Bootstrap.

Se proporcionan 6 archivos: data.json, img1-3.jpg y vid1-2.mp4. El objetivo es desarrollar la pagina web lo mas parecido al esquema, usando
data.json para mostrar los productos y sus precios, asi como añadir los src de las tags <img> y <video>

En cuanto a la estructura de HTML, se usan rows y columns de Bootstrap para darle estructura fisica a la pagina con las filas y columnas. 
El apartado de Video y de Imagen se solicitaron que fuesen carruseles, y Bootstrap tiene carruseles prehechos, con lo cual se añaden los
elementos de cada carrusel (2 videos y 3 imagenes) para luego poner los src mediante javascript.

En cuanto a los productos, se solicita que se muestren productos normales y especiales ciclicamente, y usando una funcion en javascript y una clase en CSS
se logra que cada vez que los productos vayan a cambiar, se haga una animacion de Fade-out y Fade-in con los nuevos productos a mostrarse
Este ciclo se logra con setInterval() en Javascript, haciendo que las funciones responsables de mostrar y cambiar los textos en los productos
se ejecute de forma ciclica cada 5 segundos para los productos normales y cada 10 segundos para los productos especiales.

Para el video se usa un carrusel de Bootstrap, cada elemento tiene su src no establecido en el HTML, ya que eso se hace desde javascript
mediante data.json. Los videos se reproducen automaticamente, estan silenciados y se repiten ciclicamente. El carrusel permite cambiar entre los videos
con las flechas en el carrusel. Se usa un width de 120% para que el video sea lo mas grande posible sin hacer desplazamiento vertical

El carrusel de las imagenes, al igual que el de videos, no tiene su src establecido en el HTML. Este carrusel se desplaza automaticamente
y puede detenerse su desplazamiento colocando el cursor sobre la imagen. Debido a que una de las imagenes tiene una relacion de aspect de 1:1
se usa la clase de Boostrap "--bs-aspect-ratio: 67%;" la cual la hace mas parecida a las otras 2 imagenes.

En cuanto a la parte de javascript es donde se hace toda la logica de cambio entre productos, poner los src y aplicar clases de CSS para dar mas
presentacion.
Al inico se establecen variables globales para saber si mostrar los primeros 5 productos, los ultimos 5 productos (ambas siendo flags), e
l primer prodcuto especial o el segundo producto especial, asi como sus precios.
Se usa una funcion asincrona para tomar los valores de data.json y asignar ese resultado a una variable global.
Los src se toman de la variable global a los videos y las imagenes usando document.getElementById().setAttribute() y luego de eso se establecen
los intervalos para la logica de cambio de los productos.

Las siguientes dos funciones de scriptComida.js se encargan de ir rotando los productos para desplegar los 5 primero, los ultimos 5, el producto
especial 1 o el producto especial 2, cambiando sus innerHTML al valor correspondiente en la variable global, tomando el nombre del producto
y el precio de ese mismo producto, alternando las flags de mostrar los productos, añadiendo las clases de HTML responsables de hacer
el fade-out y el fade-in a 400 milisegundos.

Al final de scripComida.js simplemente se añade un eventListener que se dispara cuando el DOM se carga, disparando la funcion inicial de obtener los datos
de data.json

Las clases de CSS en su mayoria fueron clases de Bootstrap obtenidas de su documentacion oficial, sin embargo para recrear lo mas cerca posible
el diagrama, tanto html como body se establecieron con un height de 100% y overflow-x en hidden.
Se hicieron clases para altura y ancho personalizadas al 80 para aplicarlo al carrusel de videos, ya que abarca 4 "filas" de alto de entre las 5 que hay,
ocupando un 80% de ellas.
El fondo se decidio por algo parecido al fuego, brasas o un asador, teniendo en cuenta la tematica de cortes de carne que existen.
Debido a que Bootstrap fuerza un color de texto muchas veces no apto, se decidio usar un color blanco en las etiquetas <p> para hacer un buen resalte
Las ultimas 4 clases de CSS se encargan de la animacion de fade-out y fade-in de los textos de los productos, usando una transcion de 400 milisegundos
con un ease-in-out, para hacer que tanto la aplicacion de la clase como la remocion de la misma se hagan en esa transicion
