var cartArray = [];


// función que calcula el TOTAL.
function calcTotal(){
    let total = 0;
    let subs = document.getElementsByClassName("subTotal");
    for (let i = 0; i < subs.length; i++){
        total += parseInt(subs[i].innerHTML);
    }
    document.getElementById("total").innerHTML = total;
    calcEnvio()
}


// función que calcula el SUBTOTAL.
function calcSubTotal(count, i){

    let cantidad = parseInt(document.getElementById(`cantidad${i}`).value);
    subtotal = cantidad * count;      
    document.getElementById(`subTotal${i}`).innerHTML = subtotal;
    calcTotal();
}



// función que muestra el carrito
function showCart(array){
    let contenido = "";
    for (let i = 0; i < array.length; i++){
        let cart = array[i];
        let subtotal = cart.count * cart.unitCost;
        contenido += `
        <tr>
        <td><img src='${cart.src}' width="100px"></td>
        <td>${cart.name}</td>
        <td>${cart.currency}</td>
        <td><input style = "width:60px;" onchange="calcSubTotal(${cart.unitCost}, ${i})"
        type="number" id="cantidad${i}" value="${cart.count}" min="1"></td>
        <td>${cart.unitCost}</td>
        
        <td><span class="subTotal" id="subTotal${i}" style="font-weigth:bold;">${subtotal}</span></td>

        

        </tr>
        
       
    `
    document.getElementById("listado").innerHTML = contenido;
}
calcTotal();
}


// Función que calcula el subtotal + envio 
function calcEnvio(){
    let elSubTotal = parseInt(document.getElementById("total").innerHTML);
    let envio;
    let elementos = document.getElementsByName("envio");
    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].checked) {
            envio = parseInt(elementos[i].value);
        }
    }

    let totalConEnvio = elSubTotal + envio;
    let contenido = `
    <tr>
    <td> <b>Costo subtotal:</b> $ ${elSubTotal}</td>
    <br>
    <td> <b>Costo de envío: </b> $ ${envio}</td>
    <br>
    <td> <b>Total: </b> $ ${totalConEnvio}</td>  
                

    </tr>
    `

    document.getElementById("totalConEnvio").innerHTML = contenido;

}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e){
    getJSONData(CART_INFO_URL).then(function (resultObj){
        if(resultObj.status === "ok"){
            cartArray = resultObj.data.articles;
            showCart (cartArray)
            calcEnvio ()
        }
    });


    let elementos = document.getElementsByName("envio");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener("change", function(){
            calcEnvio()
        });
    }

});