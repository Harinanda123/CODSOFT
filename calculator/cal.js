
const show = document.getElementById("show");



function displayvalue(input){
    show.value=show.value+input;
   
}

function clearvalues(){
    show.value=" ";

}
function removelast(){
    show.value=show.value.slice(0,-1);

}

function paranthesis() {
    if (show.value) {
        show.value = "(" + show.value + ")";
    }
}


function result(){
    try{
       
        show.value = eval(show.value);
    }
    catch{
        show.value = "ERROR";
    }
}