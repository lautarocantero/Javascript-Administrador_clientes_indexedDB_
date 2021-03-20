( 
    function() {
        let DB;

        document.addEventListener('DOMContentLoaded', () =>{
            //conectarme a la base de datos
            conectarDB();
            formulario.addEventListener('submit',validarCliente);
        })

        
        
        function validarCliente(e){
        
            e.preventDefault();

            

            const nombre = document.querySelector('#nombre').value;
            const email = document.querySelector('#email').value;
            const telefono = document.querySelector('#telefono').value;
            const empresa = document.querySelector('#empresa').value;

            if( nombre === '' || email === '' || telefono === '' || empresa === ''){
                imprimirAlerta('todos los campos son obligatorios','error');
                return;
            }
            
            //crear cliente     
            const cliente = {
                //forma de hacerlo
                nombre: nombre,
                //al nombre y clave ser los mismos puedo : 
                email, 
                telefono,
                empresa,
            }
            cliente.id = Date.now();
            crearNuevoCliente(cliente);

        }

        function crearNuevoCliente(cliente){
            //transaccion para agregar al db
            const transaction = DB.transaction(['crm'],'readwrite');
            //para manipular el db
            const objectStore = transaction.objectStore('crm');
            //agregar registro al db
            objectStore.add(cliente);

            transaction.onerror = function () {
                imprimirAlerta('hubo un error al subir el cliente...','error');
            }  
            transaction.oncomplete = function(){
                imprimirAlerta('El cliente se agrego correctamente');

                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 3000);
            }
            
        }   

        

})();

