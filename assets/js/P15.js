console.log("hola")
function getAllP(){
    var allParas = document.getElementsByTagName("p")
    var num = allParas.length;
  
    var parrafos = document.getElementsByTagName("p")

    for(var i=0; i<num; i++){
        console.log(allParas[i].innerText)
    }
}
console.log("parrafos: " + allparrafos[0])

function getTagDiv(){
    var alldivs = document.getElementsByName("paquito")
    for(var i=0; i<allDivs.length; i++){
        console.log(allDivs[i])
    }
    console.log("Hay "+ allDivs.length + " elementos con el nombre paquito")
}

function getElemeInnerDiv(){
    var divs = document.getElementsByName("innerDiv")
    //for(var i=0; i<divs.length; i++){
      //  console.log(divs[i])
    //}
    console.log(divs)
}