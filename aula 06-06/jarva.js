type="text/javascript"
function adicionar(){
    let lista = document.getElementById("lista")
    let fruta = document.getElementById("fruta")
    if(fruta.value == ""){
        alert("Não foi possivel adicionar um item a lista, o input está vazio")
    } else{
        lista.innerHTML += "<li>" + fruta.value + "</li>"
    }
    fruta.value = ""

   
        
    }
