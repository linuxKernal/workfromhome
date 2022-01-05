const inputBox = document.getElementsByClassName("textBox")

const list = ["program title","valid description","program"];

inputBox[0].setAttribute("placeholder",list[0]);
inputBox[1].setAttribute("placeholder",list[1]);
inputBox[2].setAttribute("placeholder",list[2]);

const textBox = document.getElementById("title")
const textBox1 = document.getElementById("note")
const textBox12 = document.getElementById("code")

const newText = (param)=>{
    if(param=="0") {
        textBox.style.visibility = "visible";
        index[0].setAttribute("placeholder","");
    }
    if(param=="1"){
        textBox1.style.visibility = "visible";
        index[1].setAttribute("placeholder","");
    } 
    if(param=="2"){
        textBox12.style.visibility = "visible";
        index[2].setAttribute("placeholder","");
    }

}
