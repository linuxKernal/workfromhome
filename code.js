
const alertBox = document.getElementById("alertbox");
const alertMessage = document.getElementById("alertMsg");

function alertFunc(str){
    alertMessage.innerText = str;
    if(alertBox.style.display=="none") alertBox.style.display = "";
    else alertBox.style.display = "none";
}

const options = {hour12:true};

const temp = async (param)=>{
    let date = new Date();
    const title = param.title.value.trim();
    const note = param.note.value.trim();
    const code = param.code.value.trim();
    await fetch("https://serverlessmongodb.herokuapp.com/codebase",{method:'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title:title,program:code,time:date.toLocaleString('en-GB', options),note:note})
    })
    .then(async res=>{
        return await res.json();
    })
    .then(data=>{
        alertFunc(data.msg);
    })
    .catch(err=>{
        alertFunc(err)
    })
}
