Vue.component('table-consulta',{
    data(){
        return{
            id:"",
            nombre:"",
            apellido:"",
            telefono:"",
            correo:"",
            datosFila:[],
            datosConsulta:{},
            index:0,
        }
    },
    template:
        `<div>
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <h2>GESTIÓN <b>CLIENTES</b></h2>
                    </div>
                    <div class="col-sm-6">
                        <a href="#addClientModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Ingresar nuevo cliente</span></a>
                        <a href="#deleteClientsModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Eliminar</span></a>						
                    </div>
                </div>
            </div>
            <table border="1" cellspacing="1" cell>
                <thead>
                    <tr>
                        <th>Orden</th>
                        <th>
                            <span class="custom-checkbox">
                                <input type="checkbox" id="selectAll">
                                <label for="selectAll"></label>
                            </span>
                        </th>
                        <th>Documento</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for = "(cliente, index) in datosConsulta">
                        <td> {{index}}</td>
                        <td>
                            <span class="custom-checkbox">
                                <input type="checkbox" id="checkbox1" name="options[]" value="1">
                                <label for="checkbox1"></label>
                            </span>
                        </td>
                        <td>{{ cliente.id }}</td>
                        <td>{{ cliente.nombre }}</td>
                        <td>{{ cliente.apellido }}</td>
                        <td>{{ cliente.telefono }}</td>
                        <td>{{ cliente.correo }}</td>
                        <td>
                            <a href="#editClientModal" @click="actualizaFormCliente(index)" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            <a href="#deleteClientModal" @click="pre_eliminaCliente(index)" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="clearfix">
                <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul class="pagination">
                    <li class="page-item disabled"><a href="#">Previous</a></li>
                    <li class="page-item"><a href="#" class="page-link">1</a></li>
                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                    <li class="page-item active"><a href="#" class="page-link">3</a></li>
                    <li class="page-item"><a href="#" class="page-link">4</a></li>
                    <li class="page-item"><a href="#" class="page-link">5</a></li>
                    <li class="page-item"><a href="#" class="page-link">Next</a></li>
                </ul>
            </div>
            <!-- Add Modal HTML -->
            <div id="addClientModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">						
                                <h4 class="modal-title">Ingresar Cliente</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Número de documento</label>
                                    <input type="text" class="form-control" required v-model="id">
                                </div>					
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" required v-model="nombre">
                                </div>
                                <div class="form-group">
                                    <label>Apellido</label>
                                    <input type="text" class="form-control" required v-model="apellido">
                                </div>
                                <div class="form-group">
                                    <label>Teléfono</label>
                                    <input type="text" class="form-control" required v-model="telefono">
                                </div>
                                <div class="form-group">
                                    <label>Correo</label>
                                    <input type="email" class="form-control" required v-model="correo"></input>
                                </div>					
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                                <input type="submit" class="btn btn-success" value="Add" v-on:click="guardaCliente">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Edit Modal HTML -->
            <div id="editClientModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">						
                                <h4 class="modal-title">Editar Cliente</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Número de documento</label>
                                    <input type="text" class="form-control" required id="txtDocumento" disabled>
                                </div>					
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" required id="txtNombre">
                                </div>
                                <div class="form-group">
                                    <label>Apellido</label>
                                    <input type="text" class="form-control" required id="txtApellido">
                                </div>
                                <div class="form-group">
                                    <label>Teléfono</label>
                                    <input type="text" class="form-control" required id="txtTelefono">
                                </div>
                                <div class="form-group">
                                    <label>Correo</label>
                                    <input type="email" class="form-control" required id="txtCorreo">
                                </div>					
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar"/>
                                <input type="submit" class="btn btn-success" value="Actualizar" @click="actualizaCliente">
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Delete Modal HTML -->
            <div id="deleteClientModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">						
                                <h4 class="modal-title">Eliminar Cliente</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">					
                                <p>¿Está seguro de eliminar el cliente No {{this.id}}?</p>
                                <p class="text-warning"><small>Esta acción no se puede deshacer.</small></p>
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar">
                                <input type="submit" class="btn btn-danger" value="Eliminar" @click="eliminaCliente">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>`,

    mounted() {
        this.consultarCliente();
    },

    methods: {
        consultarCliente(){
            const endpoint ="http://localhost:8080/cliente";
            
            fetch(endpoint  ).then (async response =>{
                this.datosConsulta = await response.json();
                console.log(this.datosConsulta);
            })
        },
        guardaCliente(){
            const endpoint ="http://localhost:8080/cliente";
            const opciones ={
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id:this.id, nombre:this.nombre, apellido:this.apellido, telefono:this.telefono,correo:this.correo})
            };
            fetch(endpoint,opciones).then (async (response) =>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El cliente se ha almacenado en la base de datos',
                    showConfirmButton: true,
                    timer: 1500
                });
                this.consultarCliente();                
            })
        },
        actualizaFormCliente(index) {
            this.datosFila=this.datosConsulta[index];
            console.log(this.datosFila);
            document.getElementById("txtDocumento").value = this.datosFila.id;
            document.getElementById("txtNombre").value = this.datosFila.nombre;
            document.getElementById("txtApellido").value = this.datosFila.apellido;
            document.getElementById("txtTelefono").value = this.datosFila.telefono;
            document.getElementById("txtCorreo").value = this.datosFila.correo;
        },
        actualizaCliente(){
            this.id = document.getElementById("txtDocumento").value;
            this.nombre = document.getElementById("txtNombre").value;
            this.apellido = document.getElementById("txtApellido").value;
            this.telefono = document.getElementById("txtTelefono").value;
            this.correo = document.getElementById("txtCorreo").value;

            this.guardaCliente();            
        },
        pre_eliminaCliente(index){
            this.datosFila = this.datosConsulta[index];
            console.log(this.datosFila.id);
            this.id=this.datosFila.id;
        },
        eliminaCliente(){
            const endpoint ="http://localhost:8080/cliente/"+ this.id;
            const opciones = {method:"DELETE"};

            fetch(endpoint,opciones).then (async (response) =>{
                //alert("El Cliente fue eliminado");
                this.id="";
                this.consultarCliente();
                ('.modal fade').modal('toggle'); 
            })
        }
    }
});

new Vue({
    el:"#app",
    data(){
        return{
            menu:0,
        }
    }
})