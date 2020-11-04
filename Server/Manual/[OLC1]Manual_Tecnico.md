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