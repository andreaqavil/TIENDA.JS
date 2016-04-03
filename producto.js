/*
Este software busca tus productos de primera Necesidad "TIENDA"
*/
//TIENDA DE VIVERES

var html = '';


var tiendaProductos = ["Fideos", "Carne", "Pollo", "Queso Parmesano", "Leche", "Canela"];

function print(mensaje){
	document.write("<p>" + mensaje + "</p>");
}


while(true)
{
busqueda = prompt ("Presione q para salir, l para mostrar lista o Ingrese el producto: ");
/*busqueda = busqueda.toLowerCase();*/
if(busqueda=="salir" || busqueda=="fin" || busqueda=="Hasta Pronto" || busqueda=="quit" || busqueda=="q")
{
alert("Gracias por usar el Buscador, Hasta Pronto!");
break;
}
else if(busqueda=="lista" || busqueda=="inventario" || busqueda=="l"){
print("En nuestra tiendita tenemos: " + tiendaProductos.join(", "));
}
else
{
if(tiendaProductos.indexOf(busqueda)>=0)
{
alert("Esta Disponible " + busqueda + " Gracias por su Compra!");
}
else
{
alert(" No contamos con el producto " + busqueda + " Puede realizar su pedido para el dia de mañana!");
}
}
}