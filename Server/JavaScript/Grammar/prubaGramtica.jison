%{
%}
/* Definició Léxica */
%lex

%options case-insensitive

%%
\s+					//ignorando los espacios en blanco
"//".*				/* ignore comment line */
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]		/* ignore comment Multilinea*/

"int"			    return 'int_';
"numeric"			return 'numeric_';
"string"			return 'string_';
"boolean"			return 'boolean_';
"char"				return 'char_';
"float"				return 'float_';
"void"				return 'void_';

"print"				return 'print_';
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


"="					return 'igual';
";"					return 'pcoma';
"{"					return 'llaveAbre';
"}"					return 'llaveCierra';
"[]"				return 'corchetes';

"+"					return 'mas';
"-"					return 'menos';
"*"					return 'por';
"/"					return 'division';
"("					return 'parAbre';
")"					return 'parCierra';

"<"					return 'menorQ';
">"					return 'mayorQ';

"&&"				return 'and_';
"||"				return 'or_';
"!"					return 'not_';

"true"				return 'true_';
"false"				return 'false_';

\"[^\"]*\"				{ yytext = yytext.substr(1,yyleng-2); return 'cadena'; /*//"*/ }



[0-9]+("."[0-9]+)?		return 'decimal';


([a-zA-Z_])[a-zA-Z0-9_]*		return 'identificador';
[ \r\t]+			{}
\n					{}
<<EOF>>				return 'EOF';
.	{ 
		console.error('Error léxico: ' + yytext + ', line: ' + yylloc.first_line + ', column: ' + yylloc.first_column); 
	}

/lex

%left 'or_'
%left 'and_'
%left 'mayorQ' 'menorQ'

%left 'mas' 'menos'
%left 'por' 'division'

%left uMenos
%right 'not_'



%start INI

%% 
INI : LISTA_CLASES EOF
	| ;

LISTA_CLASES :
		LISTA_CLASES CLASE 
	|	CLASE
	;

CLASE :
		public_ TIPO_CLASE identificador llaveAbre LISTA_SENTENCIAS_GLBOALES llaveCierra
	|	public_ TIPO_CLASE identificador llaveAbre  llaveCierra
	|	public_ static_ void_ main_ parAbre string_ corchetes args_ parCierra llaveAbre LISTA_SENTENCIAS_GLBOALES llaveCierra
	;

TIPO_CLASE:
		class_
	|	interface_
	;

LISTA_SENTENCIAS_GLBOALES: 
		LISTA_SENTENCIAS_GLBOALES SENTENCIAS_GLOBALES
	| SENTENCIAS_GLOBALES
	;
SENTENCIAS_GLOBALES:
		LISTA_FUNCIONES
	|	LISTA_DECLARACIONES
	;

LISTA_FUNCIONES:
		LISTA_FUNCIONES FUNCION
	| FUNCION
	;
LISTA_DECLARACIONES:
		LISTA_DECLARACIONES DECLARACION 
	|	DECLARACION
	;

FUNCION:
		public_ TIPO identificador parAbre LISTA_PARAMETROS parCierra  BLOQUE_SENTENCIA 
	;

DECLARACION:
		TIPO identificador igual EXPRESION pcoma
	|	TIPO identificador pcoma
	|	error pcoma
	;


LISTA_PARAMETROS:
		LISTA_PARAMETROS PARAMETRO 
	|	PARAMETRO
	;
PARAMETRO:
		TIPO identificador coma
	|	TIPO identificador
	| ;
	

BLOQUE_SENTENCIA:
		llaveAbre LISTA_SENTENCIAS llaveCierra
	|	llaveAbre llaveCierra
	;

LISTA_SENTENCIAS:
		LISTA_SENTENCIAS SENTENCIAS
	|	SENTENCIAS
	;

SENTENCIAS:
		DECLARACION
	|	ASIGNACION
	|	WHILE
	|	FOR
	|	DOWHILE
	|	IF
	|	PRINT
	|	break_
	|	continue_
	|	RETURN
	;

ASIGNACION:
		identificador igual EXPRESION pcoma
	|	error pcoma
	;
WHILE:
		while_ 	CONDICION BLOQUE_SENTENCIA
	;
CONDICION:
		parAbre EXPRESION parCierra 
	;

FOR:
		for_ parAbre DECLARACION pcoma EXPRESION pcoma EXPRESION parCierra BLOQUE_SENTENCIA
	;

IF:
		if_ CONDICION BLOQUE_SENTENCIA
	;

DOWHILE:
		do_ BLOQUE_SENTENCIA while_ parAbre EXPRESION parCierra pcoma
	|	error pcoma
	;

PRINT:
		print_	CONDICION pcoma
	|	error pcoma
	;
RETURN:
		return_ EXPRESION pcoma
	|	error pcoma
	;

EXPRESION:
		//Aritmeticas
		EXPRESION mas EXPRESION
	|	EXPRESION menos EXPRESION
	|	EXPRESION por EXPRESION
	|	EXPRESION division EXPRESION
		//Relacionales
	| 	EXPRESION mayorQ igual EXPRESION
	|	EXPRESION menorQ igual EXPRESION
	| 	EXPRESION menorQ EXPRESION
	|	EXPRESION mayorQ EXPRESION
	|	EXPRESION igual igual EXPRESION
		//Logicos
	|	EXPRESION or_ EXPRESION
	|	EXPRESION and_ EXPRESION
	|	not_ EXPRESION
	|	parAbre EXPRESION parCierra
	|	PRIMITIVO
	;

PRIMITIVO:
		decimal
	|	cadena
	|	true_
	|	false_
	|	identificador
	;

TIPO:
		int_
	|	string_
	|	double_
	|	float_
	|	char_
	|	void_
	;