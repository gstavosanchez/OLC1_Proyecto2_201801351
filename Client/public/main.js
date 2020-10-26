//const url = "http://localhost:3000/code"

const url = "http://localhost:4000/analyze"
const urlUpload = "http://localhost:4000/upload"


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


async function openFile(value){
  const formData = new FormData();
  formData.append('file',value);
  
  const res = await axios.post(urlUpload,formData,{
    headers:{
      'Content-Type': 'multipart/form-data'
    }
  });

  
    
  let console = ace.edit("Editor");
  console.getSession().setValue('');
  if(res.data.code){
    console.getSession().setValue(res.data.code);
  }else{
    alert(`${res.data.Error}`);
  } 
  
}


const fileData = document.getElementById('upload');

fileData.addEventListener('change',async (e) =>{
  const file = e.target.files[0];
  if(file){
    await openFile(file)
  }else{
    alert('No open file');
  }
  
});






