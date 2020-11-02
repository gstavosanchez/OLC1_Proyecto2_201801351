const urlPY = "http://localhost:5000";
const url = "http://localhost:4000/analyze";
const urlUpload = "http://localhost:4000/upload";


const fileData = document.getElementById("upload");

async function analizar() {
  const jtxtJSharp = ace.edit("Editor");
  const entrada = jtxtJSharp.getSession().getValue();
  //console.log(entrada);
  await setCodePython(entrada);
  await setCode(entrada);
  
}

async function setCode(texto) {
  const codeJava = {
    Code: texto,
  };
  const data = JSON.stringify(codeJava);

  const res = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  //console.log(res.data.valor)
  console.log(res)
  let consola = ace.edit("Console");
  consola.getSession().setValue("");
  if(res.data.tipo == "Translate"){
    consola.getSession().setValue(res.data.valor);
    const imgURL = `http://localhost:4000/uploads/${res.data.img}`
    setTimeout(window.open(imgURL),3000);
    //window.open(imgURL);
  }else if(res.data.Error){
    consola.getSession().setValue(res.data.Error);
  }else{
    consola.getSession().setValue(res.data.Fatal);
    
  } 
  
}

async function openFile(value) {
  const formData = new FormData();
  formData.append("file", value);

  const res = await axios.post(urlUpload, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  let console = ace.edit("Editor");
  console.getSession().setValue("");
  if (res.data.code) {
    console.getSession().setValue(res.data.code);
  } else {
    alert(`${res.data.Error}`);
  }
}


fileData.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (file) {
    await openFile(file);
  } else {
    alert("No open file");
  }
});

const setCodePython = async (texto) => {
  const codeJava = {
    code: texto,
  };
  const data = JSON.stringify(codeJava);

  const res = await axios.post(`${urlPY}/analizar`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  //console.log(res)
  let consola = ace.edit("ConsoleTwo");
  consola.getSession().setValue("");
  consola.getSession().setValue(res.data.valor);
}
