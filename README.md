# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Encuesta](#3-encuesta)
* [4. Historias de Usuario](#4-historias-de-usuario)
* [5. Diseño de Prototipos](#5-diseño-de-prototipos)
* [6. Testeo](#6-testeo)
* [7. Herramientas que se usaron para el trabajo Front-End](#6-herramientas-que-se-usaron-para-el-trabajo-Front-End)


***

## 1. Preámbulo

![](https://i.ibb.co/1R36TZ5/Logo.png)

League of Legends es un juego de estrategia que se juega en línea y que es multijugador. Tiene millones de jugadores en todo el mundo y, por ahora es uno de los esports de referencia y que más público atraen. Durante el juego, los equipos trabajan juntos para lograr una condición de victoria que sucede al destruir la estructura central en la base del equipo enemigo.

En todos los modos de juego, los jugadores controlan personajes llamados campeones, que son elegidos o asignados en cada partida, y que tienen un conjunto de habilidades únicas. Es con esos campeones con los que se juega toda la partida.

## 2. Resumen del proyecto

Este es un sitio informativo para jugadores de League of Leagengs de nivel intermedio que ya han avanzado en el juego pero aún no cuentan con bastantes opciones de personajes para elegir, por lo tanto no conocen las principales características de cada “Campeón” que van desbloqueando.

Es por eso que la interfaz de este sitio está pensada para mostrar a los 134 primeros personajes con los datos más relevantes de cada uno, El Usuario podrá utilizar un input de buscador, para encontrar directamente el campeón que le interesa conocer. Al visualizarlos todos podrá ordenarlos alfabéticamente de forma ascendente (“A-Z”), descendente (“Z-A”) y aleatoriamente.

También cuenta con la opción de filtrar todos estos personajes por  “roles”  que definen y agrupan a ciertos campeones de acuerdo a su tipo.

Esta forma de visualizar la información permite al jugador conocer mejor al campeón antes de elegirlo y facilitar su juego. 

https://llaira.github.io/SCL015-data-lovers/src/ link a la página final.

## 3. Encuesta

Para descubrir lo que el usuario necesita, nos unimos a una comunidad de jugadores de “League of Leagengs” en Facebook, quienes se mostraron muy interesados en participar en la encuesta que teníamos preparada para ellos y de los que obtuvimos muchas respuestas en un par de horas.

![](https://i.ibb.co/XWznb3s/Graficos-Encuestas.png)

###  Las principales conclusiones de esta encuesta fueron:

- Querían conocer las habilidades y potencias de cada campeón.
- El rango de edad de la mayoría de los participantes estaba entre los 19 y los 25 años.
- La mayoría de los participante eran jugadores de nivel “Oro” y “Plata” (intermedios).
- Los dispositivos favoritos para visualizar el sitio fueron PC/Notebook y smartphone.



### 4. Historias de Usuario

Reunimos todos los comentarios que los participantes de la encuesta nos dejaron,
los cuales se podían dividir en dos grupos, ya que coincidían en dos puntos:

**Conocer a los campeones y manejar estrategias y ataques.**

![](https://i.ibb.co/cTQ5R6w/Encuesta-Usuarios.png)
Estas dos opciones se convirtieron en nuestras principales **Historias de Usuario**

**Primera Historia de Usuario: **
**Yo como:** Jugador nivel oro (Intermedio).
**Quiero:** Conocer las habilidades y potencias de cada campeón.
**Para:** Tener una mayor percepción de lo que un campeón puede hacer sobre otros y sus limitaciones.

**Definición de terminado.**
- El Usuario puede acceder a cada campeón desde el input buscar o visualizar todos los campeones, desplegados en un tablero, cada uno con su imagen y su nombre.
- El usuario puede ordenar este tablero de campeones alfabéticamente de forma ascendente (“A-Z”), descendente (“Z-A”) y aleatoriamente para que sea más fácil dar con el indicado.
- El usuario puede Filtrar el tablero de campeones por alguna de las opciones de roles : “Apoyo”, “Asesino”, “Luchador”, “Mago”, “Tanque” o “Tirador” y así tener noción de las fortalezas de cada campeón.

**Segunda Historia de Usuario:**
**Yo como: **Jugador Menor de nivel 30.
**Quiero:** Conocer poderes y ataques de cada campeón.
**Para:** Poder tener un ataque táctico y proteger a mi equipo.

**Definición de terminado.**
- En la tarjeta de cada Campeón, el usuario puede obtener info como: “Ataque”, “Defensa”, “Magia” y  “Dificultad”.


## 5. Diseño de Prototipos

**Bocetos realizados en papel. **
![](https://i.ibb.co/5cZgd8R/Primer-Sketch.png)

------------


![](https://i.ibb.co/VtkdGNK/Segundo-Sketch.png)

**Prototipo en alta fidelidad.**
Para realizar el prototipo de alta fidelidad, buscamos referencias de sitios relacionados con el juego y miramos propuestas de diseñadores UI para definir los colores, balance, contraste, alineación y repetición, según lo indican los los fundamentos de visual design.

Usamos Figma para trabajar en el.
[Prototipo en Figma](http://https://www.figma.com/file/cwooaMjGtJLNUHWHJJmyp7/Lol-Data-Lovers?node-id=1%3A4 "Prototipo en Figma")

![](https://i.ibb.co/KNLfkr0/Incio.png)
![](https://i.ibb.co/ZBdBbW4/Home-Tablero.png)
![](https://i.ibb.co/5kNkL34/Home-Select.png)
![](https://i.ibb.co/Sxs7WQV/Home-Modal.png)
![](https://i.ibb.co/X8zyFX5/Prototipos-Movil.png)

**Testeos de usabilidad**
Probamos con usuarios el prototipo en figma para asegurarnos que se entendiera el control de flujo. Estos nos comentaron que el color de la letra de los “Placeholder” de los inputs no se distinguían bien (eran más oscuros en un principio). Se optó por dejarlos de color blanco.


### Decisiones de Diseño

Si bien en un principio el sitio se diseñó considerando un modal para cada campeón donde se desplegaba información más específica de cada uno. Decidimos en virtud del tiempo, que era mejor mostrar esta info dentro de la misma tarjeta del campeón que se visualiza en el tablero principal.

![](https://i.ibb.co/KqLgJnh/Dise-o-Final.png)

En el caso del formato para mobile, decidimos quitar los botones con forma de oro, y que lo principal fuesen los filtros y el tablero. 

## 6. Testeo

Para testear utilizamos Jets. 
En un comienzo este no nos reconocía las pruebas ya que existía errores al asignar valores erróneos en los parámetros de las funciones que queríamos probar, estos fueron corregidos y las pruebas pasaron el 70% en Statements,  Functions y Lines.

![](https://i.ibb.co/zncTkf7/Tests.png)

Hubo sólo una función que no se pudo testar, que corresponde a filtrar por “Aleatorio” ya que no se puede precisar su resultado.


## 7. Herramientas que se usaron para el trabajo Front-End7

* [Visual Studio Code](https://code.visualstudio.com/)
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)
