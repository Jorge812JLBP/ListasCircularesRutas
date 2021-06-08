/*

Crear una estructura circular simple o doble, donde el nodo será una Base (nombre, minutos), 
y la estructura de datos, representará una ruta de transporte, por lo que a la ruta se podrán:

-Agregar
-Buscar
-Eliminar
-Imprimir

    y además se agregará el siguiente método.
crearRecorrido(baseInicio, horaInicio, horaFin)
Se buscara la base inicio y se mostrara el recorrido por cada una de las bases hasta que se llegue a la hora final 
Para la interfaz se requieren dos formularios, uno para ingresar los datos de las bases 
y hacer todas las operaciones y el segundo formulario es para que el usuario ingrese los horarios
 y la base de inicio para obtener la tarjeta de trabajo.

*/

function capturar()
{
    function Base(numeroRuta,nombreBase,minutos)
    {
        this.numeroRuta=numeroRuta;
        this.nombreBase=nombreBase;
        this.minutos=minutos;
        this.info=function()
        {
           return "div" + "<h4>" +"Listado de rutas" + "</h4>" + "<br>" + " La ruta " + this.numeroRuta +
            "<br>" + " De base en " + this.nombreBase + "<br>" + " Hace " + this.minutos + 
            " para llegar a su destino";
        }
        this.siguiente=null;
    }
    var numeroRutaCapturar = document.getElementById("rutat").value;
    var nombreCapturar = document.getElementById("baset").value;
    var minutosCapturar = document.getElementById("minutost").value;
   


     nuevaRuta = new Base(numeroRutaCapturar,nombreCapturar,minutosCapturar);

    console.log(nuevaRuta);

    agregar();
    
    
}





this.inicio=null;
function agregar()
{
    
   if (this.inicio==null)
        this.inicio=nuevaRuta;
      else
      {
        let t=this.inicio
        while(t.siguiente!=null)
        {
          t=t.siguiente; 
        }                
        t.siguiente=nuevaRuta;
      }
}






function imprimir()
{
    let res="";
    let t=this.inicio;
    while(t!=null)
    {
      res +=" La ruta " + t.numeroRuta + " <br> " + " de base " + t.nombreBase + " <br> " + " hace " + t.minutos + 
      " minutos para llegar a su destino " + "<br>" +"----------------------------------------" + "<br>";
      t=t.siguiente;
    }
      return document.getElementById("ListaRutas").innerHTML=res;
}





function buscar(busquedaruta)
{
let t=this.inicio;
while(t!=null && t.numeroRuta!=busquedaruta)
{
    t=t.siguiente;
}
return document.getElementById("busruta").innerHTML= "  --> Numero de ruta: " + t.numeroRuta + "  --> Base: " + t.nombreBase + "  --> Minutos: " + t.minutos;

}






function eliminar(eliminarruta)
{
    if(this.inicio!=null)
    {
        if(this.inicio.numeroRuta==eliminarruta)
        {
            this.inicio=this.inicio.siguiente;
        }
        else
        {
            let t= this.inicio;
            while(t.siguiente!=null)
            {
                if(t.siguiente.numeroRuta==eliminarruta)
                {
                    t.siguiente=t.siguiente.siguiente;
                    return true;
                }
                else
                {
                    t=t.siguiente;
                }
            }
        }
    }
   
}




function recorrido(BaseInicio,HRSInicio,MINInicio,HRSFin,MINFin)
{
    let baseInicio= buscar(BaseInicio);
    let Trayecto="";
    let TiempoInicial=parseInt((HRSInicio*60)+MINInicio);
    let TiempoFinal=parseInt((HRSFin*60)+MINFin);
    let tiempo=TiempoInicial;
    let tpm=baseInicio;

    
    if(baseInicio==null)
    {
        return false;
    }
    else
    {
        while(tiempo>TiempoInicial || tiempo<TiempoFinal)
        {
            if(tiempo>TiempoFinal)
            {
                return Trayecto;
                
            }
            else
            {
                Trayecto+= "<h4>" + "A las" + convertir(tiempo) + " esta en base " + tpm.BaseInicio + "<br>";
                tiempo+=parseInt(tpm.minutos);
                tpm=tpm.siguiente;
                document.getElementById("Tarjetat").value=Trayecto;
            }
        }
    }

}

function convertir(tiempo)
    {
        let minutos=tiempo%60;
        let horas=(tiempo-minutos)/60;
        if(minutos<10)
        {
            return horas + " : " + " 0 " + minutos;
        }
        else
        {
            return horas + " : " + minutos;
        }
    }




    


