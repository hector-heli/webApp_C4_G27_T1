Vue.component('registroCliente',{
    data(){
        return{
            id:"",
            nombre:"",
            apellido:"",
            telefono:"",
            correo:"",
        }
    },
    template:`<div>
                <h1>REGISTRO DE CLIENTES</h1>
                <label>Cédula: </label>
                <input type="text" v-model="id"><br><br>
                <label>Nombre: </label>
                <input type="text" v-model="nombre"><br><br>
                <label>Apellido: </label>
                <input type="text" v-model="apellido"><br><br>
                <label>Teléfono: </label>
                <input type="tel" v-model="telefono"><br><br>
                <label>Correo-E: </label>
                <input type="email" v-model="correo"><br><br>
                <input type="button" value="Guardar Cliente" v-on:click="guardarCliente">
            </div>`,
    methods: {
        guardarCliente(){
            const endpoint="http://localhost:8080/cliente";
            const opciones={
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({id:this.id,nombre:this.nombre,apellido:this.apellido,telefono:this.telefono,correo:this.correo})
            };
            fetch(endpoint,opciones).then(async response=>{
                Swal.fire({
                    position:'top-end',
                    icon:'success',
                    title:'¡Cliente Guardado!',
                    showConfirmButton: false,
                    timer: 2000
                })
            });
        },
    }
})

Vue.component('VerTodosCliente',{
    data(){
        return{
            datosConsulta:{},
        }
    },
    template:`<div>
                <table border="1">
                    <thead>
                        <tr>
                            <td>Cedula</td>
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>Telefono</td>
                            <td>Correo</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cliente in datosConsulta">
                            <td>{{cliente.id}}</td>
                            <td>{{cliente.nombre}}</td>
                            <td>{{cliente.apellido}}</td>
                            <td>{{cliente.telefono}}</td>
                            <td>{{cliente.correo}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>`,
    mounted() {
        this.consultarClientes();
    },
    methods:{
        consultarClientes(){
            const endpoint="http://localhost:8080/cliente";
            const opciones ={method:'GET'}
            fetch(endpoint).then(async response=>{
                this.datosConsulta=await response.json();
            })
        },
    }
})

Vue.component('buscarClientePorId',{
    data(){
        return{
            idBuscar:"",
            datos:[]
        }
    },
    template:`
        <div>
            <label>Cédula</label>
            <input type="text" v-model="idBuscar"><input type="button" value="BUSCAR" v-on:click="buscarCedula">
            <table>
                <thead>
                    <tr>
                        <th>Cedula</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cliente in datos">
                        <td>{{cliente.id}}</td>
                        <td>{{cliente.nombre}}</td>
                        <td>{{cliente.apellido}}</td>
                        <td>{{cliente.telefono}}</td>
                        <td>{{cliente.correo}}</td>
                    </tr>
                </tbody>
            </table>
        </div>`,
    methods:{
        buscarCedula(){
            var endpoint='http://localhost:8080/cliente/' + this.idBuscar;
            var opciones={method:'GET'};

            fetch(endpoint,opciones).then(async response=>{
                this.datos=await response.json();
            })
        }
    }
})

Vue.component('buscarClientePorNombre',{
    data(){
        return{
            nombrebuscar:"",
            datos:[]
        }
    },
    template:`
        <div>
            <label>Nombre</label>
            <input type="text" v-model="nombrebuscar"><input type="button" value="BUSCAR" v-on:click="buscarNombre">
            <table>
                <thead>
                    <tr>
                        <th>Cedula</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cliente in datos">
                        <td>{{cliente.id}}</td>
                        <td>{{cliente.nombre}}</td>
                        <td>{{cliente.apellido}}</td>
                        <td>{{cliente.telefono}}</td>
                        <td>{{cliente.correo}}</td>
                    </tr>
                </tbody>
            </table>
        </div>`,
    methods:{
        buscarNombre(){
            var endpoint='http://localhost:8080/cliente/buscar/' + this.nombrebuscar;
            var opciones={method:'GET'};

            fetch(endpoint,opciones).then(async response=>{
                this.datos=await response.json();
            })
        }
    }
})

Vue.component('eliminarCliente',{
    data(){
        return{
            id:"",
            nombre:"",
            apellido:"",
            telefono:"",
            correo:"",
            ideliminar:"",
        }
    },
    template:`<div>
                <h1>Eliminar Clientes</h1>
                <label>ingrese la cédula</label>
                <input type="text" v-model="ideliminar">
                <input type="button" value="Eliminar" v-on:click="eliminaCliente">
            </div>`,
    methods:{
        eliminaCliente(){
            const endpoint="http://localhost:8080/cliente/"+this.ideliminar;
            const opciones={method:'DELETE'};
        
            fetch(endpoint,opciones).then(async response=>{
                alert("El cliente fue eliminado");
                this.ideliminar="";
                this.consultarClientes();
            })
        }
    }
})

new Vue({
    el:"#app",
    data(){
        return{
            menu:0,
        }
    }
})