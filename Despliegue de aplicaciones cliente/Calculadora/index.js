const res = document.getElementById("container");

function calcule(input){
    res.value += input;
}

function resultado(){
    res.value = eval(res.value);
}

function clearContainer(){
    res.value ="";
}