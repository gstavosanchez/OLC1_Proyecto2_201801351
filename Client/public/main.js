const url = "http://localhost:3000/code"

async function analizar(){
    const jtxtJSharp = ace.edit("Editor");
    const entrada = jtxtJSharp.getSession().getValue();
    //console.log(entrada);
    await setCode(entrada)
    
}

async function setCode(texto){
    const codeJava = {
        "Code":texto
    }
    const data = JSON.stringify(codeJava)
    console.log(data)
    await fetch(url, {
        method: 'POST', // or 'PUT'
        body: data, // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
   
}