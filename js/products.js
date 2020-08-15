var productsurlArray = [];
function showItemsList(array){

    let contenido = "";
    for(let i = 0; i < array.length; i++){
    contenido = array[i];
        contenido += 'Nombre' + category.name + '<br>';
        contenido += 'Descripción' + category.description + '<br>'
        contenido += 'Precio' + category.cost;
        contenido += '<br><hr><br>';
        

        document.getElementById("listado").innerHTML = contenido;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
getJSONData(PRODUCTS_URL).then(function(resultObj){
    if(resultObj.status === "ok")
    {
        productsurlArray = resultObj.data;
        showItemsList(productsurlArray)
    }
});
    });



    //Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.