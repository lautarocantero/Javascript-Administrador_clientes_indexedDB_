
function conectarDB(){
    const abrirConeccion = window.indexedDB.open('crm',1);

    abrirConeccion.onerror = () =>{
        console.log('ha ocurrido un error al abrir la coneccion...');
    }

    abrirConeccion.onsuccess = () =>{
            DB = abrirConeccion.result;
    }

}

function imprimirAlerta(mensaje,tipo){

    const alerta = document.querySelector('.alerta');
    if(!alerta){
       
        //crear alerta
        const divAlerta = document.createElement('DIV');
        divAlerta.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto','mt-6','text-center','border','alerta');
        
        if(tipo === 'error'){
            divAlerta.classList.add('bg-red-100','border-red-400','text-red-700');
        } else{
            divAlerta.classList.add('bg-green-100','border-green-200','text-green-700');
        }
    
        divAlerta.textContent = mensaje;

        formulario.appendChild(divAlerta);


        setTimeout(() => {
            divAlerta.remove();
        }, 3000);

    }
    

}