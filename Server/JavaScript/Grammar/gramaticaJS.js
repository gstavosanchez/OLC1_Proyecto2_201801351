/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramaticaJS = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[5,7],$V2=[1,16],$V3=[1,17],$V4=[1,19],$V5=[1,20],$V6=[1,21],$V7=[1,22],$V8=[1,23],$V9=[1,24],$Va=[1,25],$Vb=[2,7,12,61,62,63,64,65,66,67],$Vc=[1,45],$Vd=[1,38],$Ve=[1,36],$Vf=[1,37],$Vg=[1,40],$Vh=[1,41],$Vi=[1,42],$Vj=[1,43],$Vk=[1,44],$Vl=[2,7,9,12,18,37,39,40,42,43,44,61,62,63,64,65,66,67],$Vm=[1,50],$Vn=[1,51],$Vo=[1,52],$Vp=[1,53],$Vq=[1,54],$Vr=[1,55],$Vs=[1,56],$Vt=[1,57],$Vu=[1,58],$Vv=[18,22,45,46,47,48,49,50,51,52,53],$Vw=[22,61,62,63,64,65,66,67],$Vx=[1,76],$Vy=[18,22,45,46,48,49,50,51,52,53],$Vz=[18,22,48,49,50,51,52,53],$VA=[1,89],$VB=[1,90],$VC=[1,91],$VD=[1,92],$VE=[1,94],$VF=[1,93],$VG=[1,95],$VH=[1,96],$VI=[2,7,9,12,37,39,40,41,42,43,44,61,62,63,64,65,66,67],$VJ=[2,9,12,37,39,40,42,43,44,61,62,63,64,65,66,67],$VK=[1,103];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INI":3,"LISTA_CLASES":4,"EOF":5,"CLASE":6,"public_":7,"TIPO_CLASE":8,"identificador":9,"llaveAbre":10,"LISTA_SENTENCIAS_GLBOALES":11,"llaveCierra":12,"class_":13,"interface_":14,"SENTENCIAS_GLOBALES":15,"FUNCION":16,"DECLARACION":17,"pcoma":18,"TIPO":19,"parAbre":20,"LISTA_PARAMETROS":21,"parCierra":22,"BLOQUE_SENTENCIA":23,"igual":24,"EXPRESION":25,"PARAMETRO":26,"coma":27,"LISTA_SENTENCIAS":28,"SENTENCIAS":29,"ASIGNACION":30,"WHILE":31,"FOR":32,"DOWHILE":33,"IF":34,"PRINT":35,"RETURN":36,"while_":37,"CONDICION":38,"for_":39,"if_":40,"else_":41,"do_":42,"print_":43,"return_":44,"mas":45,"menos":46,"por":47,"mayorQI":48,"menorQI":49,"menorQ":50,"mayorQ":51,"or_":52,"and_":53,"not_":54,"PRIMITIVO":55,"decimal":56,"cadena":57,"caracter":58,"true_":59,"false_":60,"int_":61,"string_":62,"double_":63,"float_":64,"char_":65,"void_":66,"boolean_":67,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"public_",9:"identificador",10:"llaveAbre",12:"llaveCierra",13:"class_",14:"interface_",18:"pcoma",20:"parAbre",22:"parCierra",24:"igual",27:"coma",37:"while_",39:"for_",40:"if_",41:"else_",42:"do_",43:"print_",44:"return_",45:"mas",46:"menos",47:"por",48:"mayorQI",49:"menorQI",50:"menorQ",51:"mayorQ",52:"or_",53:"and_",54:"not_",56:"decimal",57:"cadena",58:"caracter",59:"true_",60:"false_",61:"int_",62:"string_",63:"double_",64:"float_",65:"char_",66:"void_",67:"boolean_"},
productions_: [0,[3,2],[3,0],[4,2],[4,1],[6,6],[8,1],[8,1],[11,2],[11,1],[15,1],[15,1],[15,2],[16,7],[17,5],[17,3],[21,2],[21,1],[26,3],[26,2],[23,3],[23,2],[28,2],[28,1],[29,1],[29,1],[29,1],[29,1],[29,1],[29,1],[29,1],[29,1],[29,2],[29,2],[30,4],[31,3],[38,3],[32,9],[34,3],[34,5],[34,5],[33,5],[35,3],[36,3],[25,3],[25,3],[25,3],[25,2],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,2],[25,3],[25,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[19,1],[19,1],[19,1],[19,1],[19,1],[19,1],[19,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

		var root = new AST($$[$0-1])
		return root;
	
break;
case 3: case 8: case 16: case 22:
 $$[$0-1].push($$[$0]); this.$ = $$[$0-1];
break;
case 4:
 this.$ = [$$[$0]];
break;
case 5:
 this.$= new Class($$[$0-4], $$[$0-3], $$[$0-1], this._$.first_line, this._$.first_column); 
break;
case 6:
this.$ = Type.CLASS
break;
case 7:
this.$ = Type.INTERFACE
break;
case 9: case 17: case 23:
 this.$ = [$$[$0]]
break;
case 10: case 11: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31:
 this.$ = $$[$0]; 
break;
case 12: case 32: case 33:

		console.log('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); 
	
break;
case 13:
 this.$= new Funcion($$[$0-5], $$[$0-4], $$[$0], this._$.first_line, this._$.first_column,$$[$0-2]); 
break;
case 14:
 this.$= new Declaracion($$[$0-4], $$[$0-3], $$[$0-1], this._$.first_line, this._$.first_column); 
break;
case 15:
 this.$= new Declaracion($$[$0-2], $$[$0-1], null, this._$.first_line, this._$.first_column); 
break;
case 18:
 this.$ = new Parametro($$[$0-2], $$[$0-1], this._$.first_line, this._$.first_column); 
break;
case 19:
 this.$ = new Parametro($$[$0-1], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 20: case 36:
 this.$ = $$[$0-1]; 
break;
case 34:
 this.$ = new Asignacion($$[$0-3], $$[$0-1], this._$.first_line, this._$.first_column); 
break;
case 35:
 this.$ = new While($$[$0-1], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 37:
 this.$ = new For($$[$0-6], $$[$0-4], $$[$0-2], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 38:
 this.$ = new If($$[$0-1], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 39: case 40:
 this.$ = new If($$[$0-3], $$[$0-2], this._$.first_line, this._$.first_column,$$[$0]); 
break;
case 41:
this.$ = new DoWhile($$[$0-3], $$[$0-1], this._$.first_line, this._$.first_column);
break;
case 42:
 this.$ = new Print( $$[$0-1], this._$.first_line, this._$.first_column); 
break;
case 43:
 this.$ = new Return( $$[$0-1], this._$.first_line, this._$.first_column); 
break;
case 44:
 this.$ = new OperacionAritmetica( TypeOperation.SUMA, $$[$0-2], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 45:
 this.$ = new OperacionAritmetica( TypeOperation.RESTA, $$[$0-2], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 46:
 this.$ = new OperacionAritmetica( TypeOperation.MULTIPLICACION, $$[$0-2], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 47:
 this.$ = new OperacionAritmetica( TypeOperation.NEGATIVO, $$[$0], null, this._$.first_line, this._$.first_column); 
break;
case 48:
 this.$ = new OperacionRelacional( TypeOperation.MAYOR_IGUAL, $$[$0-2], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 49:
 this.$ = new OperacionRelacional( TypeOperation.MENOR_IGUAL, $$[$0-2], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 50:
 this.$ = new OperacionRelacional( TypeOperation.MENOR, $$[$0-2], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 51:
 this.$ = new OperacionRelacional( TypeOperation.MAYOR, $$[$0-2], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 52:
 this.$ = new OperacionLogica( TypeOperation.OR, $$[$0-2], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 53:
 this.$ = new OperacionLogica( TypeOperation.AND, $$[$0-2], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 54:
 this.$ = new OperacionLogica( TypeOperation.NOT, $$[$0], null, this._$.first_line, this._$.first_column); 
break;
case 55:
this.$ = $$[$0-1];
break;
case 56:
 this.$ = $$[$0];
break;
case 57: case 58: case 59: case 62:
 this.$ = new Primitivo( $$[$0], this._$.first_line, this._$.first_column); 
break;
case 60:
 this.$ = new Primitivo( true, this._$.first_line, this._$.first_column); 
break;
case 61:
 this.$ = new Primitivo( false, this._$.first_line, this._$.first_column); 
break;
case 63:
this.$ = Type.INT
break;
case 64:
this.$ = Type.STRING
break;
case 65:
this.$ = Type.DOUBLE
break;
case 66:
this.$ = Type.FLOAT
break;
case 67:
this.$ = Type.CHAR
break;
case 68:
this.$ = Type.VOID
break;
case 69:
this.$ = Type.BOOLEAN
break;
}
},
table: [{1:[2,2],3:1,4:2,6:3,7:$V0},{1:[3]},{5:[1,5],6:6,7:$V0},o($V1,[2,4]),{8:7,13:[1,8],14:[1,9]},{1:[2,1]},o($V1,[2,3]),{9:[1,10]},{9:[2,6]},{9:[2,7]},{10:[1,11]},{2:$V2,7:$V3,11:12,15:13,16:14,17:15,19:18,61:$V4,62:$V5,63:$V6,64:$V7,65:$V8,66:$V9,67:$Va},{2:$V2,7:$V3,12:[1,26],15:27,16:14,17:15,19:18,61:$V4,62:$V5,63:$V6,64:$V7,65:$V8,66:$V9,67:$Va},o($Vb,[2,9]),o($Vb,[2,10]),o($Vb,[2,11]),{18:[1,28]},{19:29,61:$V4,62:$V5,63:$V6,64:$V7,65:$V8,66:$V9,67:$Va},{9:[1,30]},{9:[2,63]},{9:[2,64]},{9:[2,65]},{9:[2,66]},{9:[2,67]},{9:[2,68]},{9:[2,69]},o($V1,[2,5]),o($Vb,[2,8]),o($Vb,[2,12]),{9:[1,31]},{18:[1,33],24:[1,32]},{20:[1,34]},{9:$Vc,20:$Vd,25:35,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},o($Vl,[2,15]),{19:48,21:46,26:47,61:$V4,62:$V5,63:$V6,64:$V7,65:$V8,66:$V9,67:$Va},{18:[1,49],45:$Vm,46:$Vn,47:$Vo,48:$Vp,49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu},{9:$Vc,20:$Vd,25:59,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},{9:$Vc,20:$Vd,25:60,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},{9:$Vc,20:$Vd,25:61,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},o($Vv,[2,56]),o($Vv,[2,57]),o($Vv,[2,58]),o($Vv,[2,59]),o($Vv,[2,60]),o($Vv,[2,61]),o($Vv,[2,62]),{19:48,22:[1,62],26:63,61:$V4,62:$V5,63:$V6,64:$V7,65:$V8,66:$V9,67:$Va},o($Vw,[2,17]),{9:[1,64]},o($Vl,[2,14]),{9:$Vc,20:$Vd,25:65,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},{9:$Vc,20:$Vd,25:66,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},{9:$Vc,20:$Vd,25:67,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},{9:$Vc,20:$Vd,25:68,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},{9:$Vc,20:$Vd,25:69,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},{9:$Vc,20:$Vd,25:70,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},{9:$Vc,20:$Vd,25:71,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},{9:$Vc,20:$Vd,25:72,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},{9:$Vc,20:$Vd,25:73,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},o($Vv,[2,47]),o($Vv,[2,54]),{22:[1,74],45:$Vm,46:$Vn,47:$Vo,48:$Vp,49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu},{10:$Vx,23:75},o($Vw,[2,16]),o($Vw,[2,19],{27:[1,77]}),o($Vy,[2,44],{47:$Vo}),o($Vy,[2,45],{47:$Vo}),o($Vv,[2,46]),o($Vz,[2,48],{45:$Vm,46:$Vn,47:$Vo}),o($Vz,[2,49],{45:$Vm,46:$Vn,47:$Vo}),o($Vz,[2,50],{45:$Vm,46:$Vn,47:$Vo}),o($Vz,[2,51],{45:$Vm,46:$Vn,47:$Vo}),o([18,22,52],[2,52],{45:$Vm,46:$Vn,47:$Vo,48:$Vp,49:$Vq,50:$Vr,51:$Vs,53:$Vu}),o([18,22,52,53],[2,53],{45:$Vm,46:$Vn,47:$Vo,48:$Vp,49:$Vq,50:$Vr,51:$Vs}),o($Vv,[2,55]),o($Vb,[2,13]),{2:$VA,9:$VB,12:[1,79],17:81,19:18,28:78,29:80,30:82,31:83,32:84,33:85,34:86,35:87,36:88,37:$VC,39:$VD,40:$VE,42:$VF,43:$VG,44:$VH,61:$V4,62:$V5,63:$V6,64:$V7,65:$V8,66:$V9,67:$Va},o($Vw,[2,18]),{2:$VA,9:$VB,12:[1,97],17:81,19:18,29:98,30:82,31:83,32:84,33:85,34:86,35:87,36:88,37:$VC,39:$VD,40:$VE,42:$VF,43:$VG,44:$VH,61:$V4,62:$V5,63:$V6,64:$V7,65:$V8,66:$V9,67:$Va},o($VI,[2,21]),o($VJ,[2,23]),o($VJ,[2,24]),o($VJ,[2,25]),o($VJ,[2,26]),o($VJ,[2,27]),o($VJ,[2,28]),o($VJ,[2,29]),o($VJ,[2,30]),o($VJ,[2,31]),{12:[1,100],18:[1,99]},{24:[1,101]},{20:$VK,38:102},{20:[1,104]},{10:$Vx,23:105},{20:$VK,38:106},{20:$VK,38:107},{9:$Vc,20:$Vd,25:108,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},o($VI,[2,20]),o($VJ,[2,22]),o($VJ,[2,32]),o($VJ,[2,33]),{9:$Vc,20:$Vd,25:109,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},{10:$Vx,23:110},{9:$Vc,20:$Vd,25:111,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},{17:112,19:18,61:$V4,62:$V5,63:$V6,64:$V7,65:$V8,66:$V9,67:$Va},{37:[1,113]},{10:$Vx,23:114},{18:[1,115]},{18:[1,116],45:$Vm,46:$Vn,47:$Vo,48:$Vp,49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu},{18:[1,117],45:$Vm,46:$Vn,47:$Vo,48:$Vp,49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu},o($VJ,[2,35]),{22:[1,118],45:$Vm,46:$Vn,47:$Vo,48:$Vp,49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu},{18:[1,119]},{20:$VK,38:120},o($VJ,[2,38],{41:[1,121]}),o($VJ,[2,42]),o($VJ,[2,43]),o($VJ,[2,34]),o([10,18],[2,36]),{9:$Vc,20:$Vd,25:122,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},{18:[1,123]},{10:$Vx,23:124,34:125,40:$VE},{18:[1,126],45:$Vm,46:$Vn,47:$Vo,48:$Vp,49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu},o($VJ,[2,41]),o($VJ,[2,39]),o($VJ,[2,40]),{9:$Vc,20:$Vd,25:127,46:$Ve,54:$Vf,55:39,56:$Vg,57:$Vh,58:$Vi,59:$Vj,60:$Vk},{22:[1,128],45:$Vm,46:$Vn,47:$Vo,48:$Vp,49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu},{10:$Vx,23:129},o($VJ,[2,37])],
defaultActions: {5:[2,1],8:[2,6],9:[2,7],19:[2,63],20:[2,64],21:[2,65],22:[2,66],23:[2,67],24:[2,68],25:[2,69]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

	const {Sentencia} = require("../dist/ast/Sentencia");
	const {Type,TypeOperation} = require("../dist/ast/Tipo");
	const {AST} = require("../dist/ast/AST");

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
	
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0://ignorando los espacios en blanco
break;
case 1:/* ignore comment line */
break;
case 2:/* ignore comment Multilinea*/
break;
case 3:return 61;
break;
case 4:return 62;
break;
case 5:return 67;
break;
case 6:return 65;
break;
case 7:return 64;
break;
case 8:return 66;
break;
case 9:return 43;
break;
case 10:return 37;
break;
case 11:return 40;
break;
case 12:return 41;
break;
case 13:return 13;
break;
case 14:return 14;
break;
case 15:return 44;
break;
case 16:return 'break_';
break;
case 17:return 'continue_';
break;
case 18:return 'main_';
break;
case 19:return 'args_';
break;
case 20:return 7;
break;
case 21:return 'static_';
break;
case 22:return 41;
break;
case 23:return 42;
break;
case 24:return 'dobleIgual_';
break;
case 25:return 24;
break;
case 26:return 18;
break;
case 27:return 27;
break;
case 28:return 10;
break;
case 29:return 12;
break;
case 30:return 'corchetes';
break;
case 31:return 'adicion_';
break;
case 32:return 45;
break;
case 33:return 'sustraccion_';
break;
case 34:return 46;
break;
case 35:return 47;
break;
case 36:return 'division';
break;
case 37:return 20;
break;
case 38:return 22;
break;
case 39:return 49;
break;
case 40:return 48;
break;
case 41:return 50;
break;
case 42:return 51;
break;
case 43:return 'difirente_';
break;
case 44:return 53;
break;
case 45:return 52;
break;
case 46:return 54;
break;
case 47:return 'xor_';
break;
case 48:return 59;
break;
case 49:return 60;
break;
case 50: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 57; /*//"*/ 
break;
case 51:return 58;
break;
case 52:return 56;
break;
case 53:return 9;
break;
case 54:
break;
case 55:
break;
case 56:return 5;
break;
case 57: 
		console.error('Error léxico: ' + yy_.yytext + ', line: ' + yy_.yylloc.first_line + ', column: ' + yy_.yylloc.first_column); 
	
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:int\b)/i,/^(?:string\b)/i,/^(?:boolean\b)/i,/^(?:char\b)/i,/^(?:float\b)/i,/^(?:void\b)/i,/^(?:print\b)/i,/^(?:while\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:class\b)/i,/^(?:interface\b)/i,/^(?:return\b)/i,/^(?:break\b)/i,/^(?:continue\b)/i,/^(?:main\b)/i,/^(?:args\b)/i,/^(?:public\b)/i,/^(?:static\b)/i,/^(?:else\b)/i,/^(?:do\b)/i,/^(?:==)/i,/^(?:=)/i,/^(?:;)/i,/^(?:,)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\[\])/i,/^(?:\+\+)/i,/^(?:\+)/i,/^(?:--)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:\()/i,/^(?:\))/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:!=)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:!)/i,/^(?:\^)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:"[^\"]*")/i,/^(?:'[^']')/i,/^(?:[0-9]+(\.[0-9]+)?)/i,/^(?:([a-zA-Z_])[a-zA-Z0-9_]*)/i,/^(?:[ \r\t]+)/i,/^(?:\n)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramaticaJS;
exports.Parser = gramaticaJS.Parser;
exports.parse = function () { return gramaticaJS.parse.apply(gramaticaJS, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}