let xhr = new XMLHttpRequest(); 
let progressBar = $("#progressBar"); 
let url="http://127.0.0.1:5500/006.json";


function handleEvent(e) {
    console.log( `${e.type}: ${e.loaded} bytes transferred\n`);
}

function addListeners(xhr)  
{
     xhr.addEventListener('progress', handleEvent);
}


addListeners(xhr)  ;

function cargar()
{

    xhr.open("GET", url, true);
    alert();
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        try {
            const response = JSON.parse(xhr.responseText);
            if (xhr.status === 200) {
                respuesta = response;
                console.log (respuesta);
             } else {
                alert(response.message);
            }
        } catch (exception) {
            alert("error");
        }
    }
    alert();
    xhr.send();
    alert();
};
}

