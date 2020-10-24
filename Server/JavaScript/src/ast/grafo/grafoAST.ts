import { AST } from '../AST'
import { Grafo } from './grafo';
export class GrafoAST {
    private arbol:AST;
    constructor(
        arbol:AST
    ) {
        this.arbol = arbol;
   }

   getGrafo():string{
    let grafo = "digraph G{\n\n ";        
    grafo += "  nodo0[label=\"AST\"];\n";
    let g = new Grafo(1, grafo);
    this.arbol.generateGrafo(g,"nodo0");
    
    g.grafo += "\n}";
    
    //console.log(g.grafo);
    return g.grafo;
   }
}