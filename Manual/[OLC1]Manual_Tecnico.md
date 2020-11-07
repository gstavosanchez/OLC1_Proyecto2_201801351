# Proyecto No.2 con Docker 
## Universidad de San Carlos de Guatemala
### Organizacion de Lenguajes y Compiladores 1
### Ing.Mauel Castillo
### Aux.Huriel
## **Manual Tecino**
### Elmer Gustavo Sanchez Garcia
### **201801351**
### Fecha de Entrega: 6 de noviembre de 2020

---


## Jison
Jison toma una gramatica libre de contexto  como entrada y genera una archivo JavaScriopt capaz de analizar el lenguaje descrito por esa gramatica.Luego se puede usar el script generado para analizar las entradas y aceptar o rechazar realizando acciones basadas en la entrada.


En este caso se utilizo ***jison*** para realizar los dos analisis el lexico como sintactico entradas basadas en el lenguaje *Java* , asi poder determinar si poose errores lexicos o sintacticos.

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

```typescript
//docker run -p 5000:5000 gstavosanchez/server-py -> Servidor de node js para python
//docker run -p 3000:3000 gstavosanchez/client-go -> cliente de Golang

```


## Servidor con Node JS

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

### Rutas del Servidor

Estas son rutas que el cliente de ***go lang*** va consumir,esta es la encargada de comunicar  el area de la logica del proyecto con las rutas.

```typescript
const router = Router();
router.post('/analyze',analizar);
router.post('/upload',multer.single('file'),uploadFile);
router.get('/file',getFile);
router.get('/download',downloadFile)
router.get('/downloadReport',downloadReport)

```

### Sentencia
Como en una analisis de un lenguaje de programacion casa linea de codigo es una sentencia o instruccion, esto da la posiblidad de poder realizar el ***Patron Interprete*** este un patron de diseño , como se puede observar se implementa una clase abstracta, esto con lleva utilizar herencia para las demas clases. Esto oblica a que las clases que implementa esta clase tengan este atributo y 

```typescript
export abstract class Sentencia {
    private linea:number;
    private column:number;
    public constructor(
        line:number,
        column:number
    ) {
        this.linea = line;
        this.column = column;
    }

    abstract translate():string;
    abstract getNameSon():string;
    abstract generateGrafo(g:Grafo,padre:string):void;
}
```

### Traduccion de una Clase

Para realizar la traduccion de una **Clase** como se puede obserar en el codigo de abaja se utilizo el patron interprete y 

```typescript
export class Class extends Sentencia {
    private type:Type;
    private id:string;
    private sentencias:Array<Sentencia>;

    constructor(
        type:Type,
        id:string,
        sentencias:Array<Sentencia>,
        line:number,
        column:number
    ) {
        super(line,column);
        this.type = type;
        this.id = id;
        this.sentencias = sentencias;
    }
    translate():string{
        switch(this.type){
            case Type.MAIN: return this.getTranslateClass("class");
            case Type.INTERFACE :return this.getTranslateClass("interface");
            case Type.CLASS: return this.getTranslateClass("class");
            default:return "";
        }
    }
    getNameSon():string{return "CLASS"}

    private getTranslateClass(tipo:string):string{
        if(this.sentencias.length == 0 && tipo == "class" || this.sentencias == null && tipo == "class") return `class ${this.id} {}`
        if(this.sentencias.length == 0 && tipo == "interface" || this.sentencias == null && tipo == "interface") return `interface ${this.id} {}`

        let data:string = `${tipo} ${this.id} {\n`
        let listaSetencias:string  = ""
        this.sentencias.forEach(element => {
            listaSetencias += element.translate();
        });
        data += `${listaSetencias}\n`;

        return data+"\n}\n";
    }
}

```
