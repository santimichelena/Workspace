var productsurlArray = [];
function showItemsList(){

    let contenido = "";
    for(let i = 0; i < productsurlArray.length; i++){
    let products = productsurlArray[i];
        contenido += 'Nombre' + products.name + '<br>';
        contenido += 'Descripción' + products.description + '<br>'
        contenido += 'Precio' + products.cost;
        contenido += '<br><hr><br>';
        

        document.getElementsByClassName("listado").innerHTML = contenido;
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