## Universidad de San Carlos de Guatemala
### Organizacion de Lenguajes y Compiladores 1
### Ing.Mauel Castillo
### Aux.Huriel
# Proyecto No.2 with Docker 
### **Elmer Gustavo Sanchez Garcia**
### **201801351**
### Fecha de Entrega: 6 de noviembre de 2020

---


## Jison
Jison toma una gramatica libre de contexto  como entrada y genera una archivo JavaScriopt capaz de analizar el lenguaje descrito por esa gramatica.Luego se puede usar el script generado para analizar las entradas y aceptar o rechazar realizando acciones basadas en la entrada.


En este caso se utilizo ***jison*** para analizar entradas basadas en el lenguaje *Java* , asi poder determinar si poose errores lexicos o sintacticos.

Ejemplo de la gramatica utilizada:

```
SENTENCIAS:
	  INVOCACION { $$ = $1;}
	| DECLARACION { $$ = $1; }
	| ASIGNACION { $$ = $1; }
	| WHILE { $$ = $1; }
	| FOR { $$ = $1; }
	| DOWHILE { $$ = $1; }
	| IF { $$ = $1; }
	| PRINT { $$ = $1; }
	| RETURN { $$ = $1; }
	| CAMBIO { $$ = $1;}
	| BREAK_CONTINUE { $$ = $1;}
	| error pcoma{}
    ;
	
```
## Node Js

Node js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.


Se utilizo ***Node JS*** para implementar la logica del codigo pero utilizo una variante que fue que se utilizo el lenguaje de programacion ***TypeScript*** esta tiene una ventaja sobre javascript por que pose un tipado fuerte de datos y es mas facil hacerlo escalable el proyecto.

## Docker

Es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos.
***Docker*** utiliza características de aislamiento de recursos del kernel Linux, tales como cgroups y espacios de nombres (namespaces) para permitir que "contenedores" independientes se ejecuten dentro de una sola instancia de Linux, evitando la sobrecarga de iniciar y mantener máquinas virtuales


## Servidor with Node JS

### App

Esta archivo sirve para leventar un servidor de node

```typescript
const app = express();

//Setitings 
app.set('port',process.env.PORT || 4000);

//Middelewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Rutas

app.get('/',(req,res )=>{
    res.send(`The api is at http://localhost:${app.get('port')}`);
})

app.use(analizadorRoutes);
//Folder 
app.use('/uploads',express.static(path.resolve('uploads')));

export default app;
```
