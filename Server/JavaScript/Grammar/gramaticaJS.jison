%{
	const {Sentencia} = require("../dist/ast/Sentencia");
	const {Type,TypeOperation} = require("../dist/ast/Tipo");
	const {AST} = require("../dist/ast/AST");
	const {NodoError} = require("../dist/ast/error");

	const {Primitivo} = require("../dist/ast/expresion/Primitivo");
	const {Identificador} = require("../dist/ast/expresion/Identificador");
	const {OperacionAritmetica} = require("../dist/ast/expresion/OperacionAritmetica");
	const {OperacionLogica} = require("../dist/ast/expresion/OperacionLogica");
	const {OperacionRelacional} = require("../dist/ast/expresion/OperacionRelacional");

	const {Asignacion} = require("../dist/ast/sentencias/Asignacion");
	const {Class} = require("../dist/ast/sentencias/Class");
	const {Declaracion} = require("../dist/ast/sentencias/Declaracion");
	const {Funcion} = require("../dist/ast/sentencias/Funcion");
	const {If} = require("../dist/ast/sentencias/If");
	const {Parametro} = require("../dist/ast/sentencias/Parametro");
	const {Print} = require("../dist/ast/sentencias/Print");
	const {Return} = require("../dist/ast/sentencias/Return");
	const {While} = require("../dist/ast/sentencias/While");
	const {DoWhile} = require("../dist/ast/sentencias/DoWhile");
	const {For} = require("../dist/ast/sentencias/For");
	
%}
%{
	var listError = [];
	function agregarError(tipo,value,descripcion,fila,columna){
		newError = new NodoError(tipo,value,descripcion,fila,columna);
		listError.push(newError);
	};
	%}

/* Definició Léxica */
%lex

%options case-insensitive

%%
\s+					//ignorando los espacios en blanco
"//".*				/* ignore comment line */
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]		/* ignore comment Multilinea*/

"int"			    return 'int_';
"string"			return 'string_';
"boolean"			return 'boolean_';
"char"				return 'char_';
"float"				return 'float_';
"void"				return 'void_';

"print"				return 'print_';
"println"			return 'println_';
"System"			return 'system_';
"out"				return 'out_';
"while"				return 'while_';
"if"				return 'if_';
"else"				return 'else_';
"class"				return 'class_';
"interface"			return 'interface_';
"return"			return 'return_';
"break"				return 'break_';
"continue"			return 'continue_';
"main"				return 'main_';
"args"				return 'args_';
"public"			return 'public_';
"static"			return 'static_';
"else"				return 'else_';
"do"				return 'do_';


"=="				return 'dobleIgual_';
"="					return 'igual';
";"					return 'pcoma';
"."					return 'punto_';
","					return 'coma';
"{"					return 'llaveAbre';
"}"					return 'llaveCierra';
"[]"				return 'corchetes';

"++"				return 'adicion_';
"+"					return 'mas';
"--"				return 'sustraccion_';
"-"					return 'menos';
"*"					return 'por';
"/"					return 'division';
"("					return 'parAbre';
")"					return 'parCierra';

"<="				return 'menorQI';
">="				return 'mayorQI';
"<"					return 'menorQ';
">"					return 'mayorQ';
"!="				return 'difirente_';

"&&"				return 'and_';
"||"				return 'or_';
"!"					return 'not_';
"^"					return 'xor_';

"true"				return 'true_';
"false"				return 'false_';

\"[^\"]*\"				{ yytext = yytext.substr(1,yyleng-2); return 'cadena'; /*//"*/ }
"'"[^']"'"				 return 'caracter';

[0-9]+("."[0-9]+)?		return 'decimal';


([a-zA-Z_])[a-zA-Z0-9_]*		return 'identificador';
[ \r\t]+			{}
\n					{}
<<EOF>>				return 'EOF';
.	{ 
		agregarError("Lexico",yytext,"No se reconoce en el lenguaje",yylloc.first_line,yylloc.first_column);
		console.error('Error léxico: ' + yytext + ', line: ' + yylloc.first_line + ', column: ' + yylloc.first_column); 
	}

/lex

%left 'or_'
%left 'and_'
%left 'mayorQ' 'menorQ' 'mayorQI' 'menorQI'


%left 'mas' 'menos'
%left 'por' 'division'

%right 'UMENOS' 'UNOT'



%start INI

%% 
INI : LISTA_CLASES EOF {
		var root = new AST($1,listError)
		return root;
	}
	| ;

LISTA_CLASES :
	 LISTA_CLASES CLASE { $1.push($2); $$ = $1;}
	| CLASE { $$ = [$1];}
	;

CLASE :
	 public_ TIPO_CLASE identificador llaveAbre LISTA_SENTENCIAS_GLBOALES llaveCierra { $$= new Class($2, $3, $5, this._$.first_line, this._$.first_column); }
	| public_ TIPO_CLASE identificador llaveAbre  llaveCierra { $$= new Class($2, $3, [], this._$.first_line, this._$.first_column); }
	;

TIPO_CLASE:
	 class_ {$$ = Type.CLASS}
	| interface_ {$$ = Type.INTERFACE}
	;

LISTA_SENTENCIAS_GLBOALES: 
	 LISTA_SENTENCIAS_GLBOALES SENTENCIAS_GLOBALES { $1.push($2); $$ = $1;}
	| SENTENCIAS_GLOBALES { $$ = [$1]}
	;
SENTENCIAS_GLOBALES:
	  FUNCION { $$ = $1; }
	| DECLARACION { $$ = $1; }
	| error pcoma{
		agregarError("Sintactico",yytext,"Falta simbolo",this._$.first_line,this._$.first_column);
		console.log('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); 
	}
	;

FUNCION:
	 public_ TIPO identificador LISTA_PARAMETROS BLOQUE_SENTENCIA { $$= new Funcion($2, $3, $5, this._$.first_line, this._$.first_column,$4); }
	;

DECLARACION:
	  TIPO identificador igual EXPRESION pcoma { $$= new Declaracion($1, $2, $4, this._$.first_line, this._$.first_column); }
	| TIPO identificador pcoma { $$= new Declaracion($1, $2, [], this._$.first_line, this._$.first_column); }
	;


LISTA_PARAMETROS:
	  LISTA_PARAMETROS PARAMETRO { $1.push($2); $$ = $1;} 
	| PARAMETRO { $$ = [$1]}
	;

PARAMETRO:
	  parAbre TIPO identificador coma parCierra { $$ = new Parametro($2, $3, this._$.first_line, this._$.first_column); }
	| parAbre TIPO identificador parCierra { $$ = new Parametro($2, $3, this._$.first_line, this._$.first_column); }
	| parAbre parCierra { $$ = new Parametro('', '', this._$.first_line, this._$.first_column); }
	;

BLOQUE_SENTENCIA:
	  llaveAbre LISTA_SENTENCIAS llaveCierra { $$ = $2; }
	| llaveAbre llaveCierra {$$ = [];}
	;

LISTA_SENTENCIAS:
	  LISTA_SENTENCIAS SENTENCIAS { $1.push($2); $$ = $1;} 
	| SENTENCIAS { $$ = [$1]}
	;


SENTENCIAS:
	 DECLARACION { $$ = $1; }
	| ASIGNACION { $$ = $1; }
	| WHILE { $$ = $1; }
	| FOR { $$ = $1; }
	| DOWHILE { $$ = $1; }
	| IF { $$ = $1; }
	| PRINT { $$ = $1; }
	| RETURN { $$ = $1; }
	| error pcoma{
		agregarError("Sintactico",yytext,"Falta simbolo",this._$.first_line,this._$.first_column);
		console.log('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); 
	}
	;

ASIGNACION:
	  identificador igual EXPRESION pcoma { $$ = new Asignacion($1, $3, this._$.first_line, this._$.first_column); }
	;

WHILE:
	 while_ CONDICION BLOQUE_SENTENCIA { $$ = new While($2, $3, this._$.first_line, this._$.first_column); }
	;
CONDICION:
	 parAbre EXPRESION parCierra { $$ = $2; }
	;

FOR:
	 for_ parAbre DECLARACION pcoma EXPRESION pcoma EXPRESION parCierra BLOQUE_SENTENCIA { $$ = new For($3, $5, $7, $9, this._$.first_line, this._$.first_column); }
	;

IF:
	  if_ CONDICION BLOQUE_SENTENCIA { $$ = new If($2, $3, this._$.first_line, this._$.first_column); }
	| if_ CONDICION BLOQUE_SENTENCIA else_  BLOQUE_SENTENCIA { $$ = new If($2, $3, this._$.first_line, this._$.first_column,$5); }
	| if_ CONDICION BLOQUE_SENTENCIA else_ IF { $$ = new If($2, $3, this._$.first_line, this._$.first_column,$5); }
	;

DOWHILE:
	  do_ BLOQUE_SENTENCIA while_ CONDICION pcoma {$$ = new DoWhile($2, $4, this._$.first_line, this._$.first_column);}
	;


PRINT:
	  system_ punto_ out_ punto_ print_ CONDICION pcoma { $$ = new Print( $6, this._$.first_line, this._$.first_column); }
	| system_ punto_ out_ punto_ println_ CONDICION pcoma { $$ = new Print( $6, this._$.first_line, this._$.first_column); }
	;
RETURN:
	  return_ EXPRESION pcoma { $$ = new Return( $2, this._$.first_line, this._$.first_column); }
	;



EXPRESION:
		//Aritmeticas
	 EXPRESION mas EXPRESION { $$ = new OperacionAritmetica( TypeOperation.SUMA, $1, $3, this._$.first_line, this._$.first_column); }
	| EXPRESION menos EXPRESION { $$ = new OperacionAritmetica( TypeOperation.RESTA, $1, $3, this._$.first_line, this._$.first_column); }
	| EXPRESION por EXPRESION { $$ = new OperacionAritmetica( TypeOperation.MULTIPLICACION, $1, $3, this._$.first_line, this._$.first_column); }
	//| EXPRESION adicion_ { $$ = new OperacionAritmetica.default( TypeOperation.ADICION, $1, null, this._$.first_line, this._$.first_column); } 
	//| EXPRESION sustraccion_ { $$ = new OperacionAritmetica.default( TypeOperation.SUSTRACCION, $1, null, this._$.first_line, this._$.first_column); }  
	| menos EXPRESION %prec UMENOS { $$ = new OperacionAritmetica( TypeOperation.NEGATIVO, $2, null, this._$.first_line, this._$.first_column); }
		//Relacionales
	| EXPRESION mayorQI EXPRESION { $$ = new OperacionRelacional( TypeOperation.MAYOR_IGUAL, $1, $3, this._$.first_line, this._$.first_column); }
	| EXPRESION menorQI  EXPRESION { $$ = new OperacionRelacional( TypeOperation.MENOR_IGUAL, $1, $3, this._$.first_line, this._$.first_column); }
	| EXPRESION menorQ EXPRESION { $$ = new OperacionRelacional( TypeOperation.MENOR, $1, $3, this._$.first_line, this._$.first_column); }
	| EXPRESION mayorQ EXPRESION { $$ = new OperacionRelacional( TypeOperation.MAYOR, $1, $3, this._$.first_line, this._$.first_column); }
	//| EXPRESION dobleIgual_ EXPRESION { $$ = new OperacionAritmetica.default( TypeOperation.COMPARACION, $1, $3, this._$.first_line, this._$.first_column); }
	//| EXPRESION difirente_ EXPRESION { $$ = new OperacionAritmetica.default( TypeOperation.DIFERENTE, $1, $3, this._$.first_line, this._$.first_column); }
		//Logicos
	| EXPRESION or_ EXPRESION { $$ = new OperacionLogica( TypeOperation.OR, $1, $3, this._$.first_line, this._$.first_column); }
	| EXPRESION and_ EXPRESION { $$ = new OperacionLogica( TypeOperation.AND, $1, $3, this._$.first_line, this._$.first_column); }
	| not_ EXPRESION %prec UNOT { $$ = new OperacionLogica( TypeOperation.NOT, $2, null, this._$.first_line, this._$.first_column); }
	//| EXPRESION xor_ EXPRESION { $$ = new OperacionAritmetica.default( TypeOperation.XOR, $1, $3, this._$.first_line, this._$.first_column); }
	| parAbre EXPRESION parCierra {$$ = $2;}
	| PRIMITIVO { $$ = $1;}
	;

PRIMITIVO:
	 decimal { $$ = new Primitivo( $1, this._$.first_line, this._$.first_column); }
	| cadena { $$ = new Primitivo( $1, this._$.first_line, this._$.first_column); }
	| caracter { $$ = new Primitivo( $1, this._$.first_line, this._$.first_column); }
	| true_ { $$ = new Primitivo( true, this._$.first_line, this._$.first_column); }
	| false_ { $$ = new Primitivo( false, this._$.first_line, this._$.first_column); }
	| identificador { $$ = new Primitivo( $1, this._$.first_line, this._$.first_column); }
	;


TIPO:
	 int_ {$$ = Type.INT}
	| string_ {$$ = Type.STRING}
	| double_ {$$ = Type.DOUBLE}
	| float_ {$$ = Type.FLOAT}
	| char_ {$$ = Type.CHAR}
	| void_ {$$ = Type.VOID}
	| boolean_ {$$ = Type.BOOLEAN}
	;