
const alertBox = document.getElementById("alertbox");
const alertMessage = document.getElementById("alertMsg");

function alertFunc(str){
    alertMessage.innerText = str;
    if(alertBox.style.display=="none") alertBox.style.display = "";
    else alertBox.style.display = "none";
}


const temp = async (param)=>{
    let date = new Date();
    const title = param.title.value.trim();
    const note = param.title.value.trim();
    const code = param.title.value.trim();
    await fetch(`serverlessmongodb.herokuapp.com/codebase?title=${title}&note=${note}&program=${code}&time=${date.toLocaleString('en-US')}`,{method:'POST'})
    .then(async res=>{
        return await res.json();
    })
    .then(data=>{
        alertFunc(data);
    })
    .catch(err=>{
        alertFunc(err)
    })
}
