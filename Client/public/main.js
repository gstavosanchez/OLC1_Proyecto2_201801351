//const url = "http://localhost:3000/code"

const url = "http://localhost:4000/analyze"


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
    //console.log(data)
    await fetch(url, {
        method: 'POST', // or 'PUT'
        body: data, // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        
        //console.log(response)
        setConsolOutputJS(response);
      });
   
}

function setConsolOutputJS(response){
  let console = ace.edit("Console");
  console.getSession().setValue('');
  if(response.Error != undefined || response.Error != null ){
    console.getSession().setValue(response.Error);
  }else if(response.Translate != undefined || response.Translate != null ){
    console.getSession().setValue(response.Translate);
  }else{
    alert(`${response.Fatal}`)
    //console.log("fatal")
  }
  
}


function openFile(){

  console.log('hola')

  

}