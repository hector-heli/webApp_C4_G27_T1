Vue.component('table-cliente',{
    data(){
        return{
            id:"",
            nombre:"",
            apellido:"",
            telefono:"",
            correo:"",
            datosFila:[],
            datosConsulta:{},
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
                //('.modal fade').modal('toggle'); 
            })
        }
    }
});

Vue.component('table-proveedor',{
    data(){
        return{
            codigoProveedor:"",
            nombreProveedor:"",
            telefonoProveedor:"",
            correoProveedor:"",
            datosFila:[],
            datosConsulta:{},
        }
    },
    template:
        `<div>
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <h2>GESTIÓN <b>PROVEEDORES</b></h2>
                    </div>
                    <div class="col-sm-6">
                        <a href="#addSupplierModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Ingresar nuevo proveedor</span></a>
                        <a href="#deleteSupplierModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Eliminar</span></a>						
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
                        <th>codigo</th>
                        <th>nombre</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for = "(proveedor, index) in datosConsulta">
                        <td> {{index}}</td>
                        <td>
                            <span class="custom-checkbox">
                                <input type="checkbox" id="checkbox1" name="options[]" value="1">
                                <label for="checkbox1"></label>
                            </span>
                        </td>
                        <td>{{ proveedor.codigoProveedor }}</td>
                        <td>{{ proveedor.nombreProveedor }}</td>
                        <td>{{ proveedor.telefonoProveedor }}</td>
                        <td>{{ proveedor.correoProveedor }}</td>
                        <td>
                            <a href="#editSupplierModal" @click="actualizaFormProveedor(index)" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            <a href="#deleteSupplierModal" @click="pre_eliminaProveedor(index)" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
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
            <div id="addSupplierModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">						
                                <h4 class="modal-title">Ingresar Proveedor</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Número de documento</label>
                                    <input type="text" class="form-control" required v-model="codigoProveedor">
                                </div>					
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" required v-model="nombreProveedor">
                                </div>
                                <div class="form-group">
                                    <label>Teléfono</label>
                                    <input type="text" class="form-control" required v-model="telefonoProveedor">
                                </div>
                                <div class="form-group">
                                    <label>Correo</label>
                                    <input type="email" class="form-control" required v-model="correoProveedor"></input>
                                </div>					
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                                <input type="submit" class="btn btn-success" value="Add" v-on:click="guardaProveedor">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Edit Modal HTML -->
            <div id="editSupplierModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">						
                                <h4 class="modal-title">Editar Proveedor</h4>
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
                                <input type="submit" class="btn btn-success" value="Actualizar" @click="actualizaProveedor">
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Delete Modal HTML -->
            <div id="deleteSupplierModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">						
                                <h4 class="modal-title">Eliminar Proveedor</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">					
                                <p>¿Está seguro de eliminar el proveedor No {{this.id}}?</p>
                                <p class="text-warning"><small>Esta acción no se puede deshacer.</small></p>
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar">
                                <input type="submit" class="btn btn-danger" value="Eliminar" @click="eliminaProveedor">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>`,

    mounted() {
        this.consultarProveedor();
    },

    methods: {
        consultarProveedor(){
            const endpoint ="http://localhost:8080/proveedor";
            
            fetch(endpoint  ).then (async response =>{
                this.datosConsulta = await response.json();
                console.log(this.datosConsulta);
            })
        },
        guardaProveedor(){
            const endpoint ="http://localhost:8080/proveedor";
            const opciones ={
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({codigoProveedor:this.codigoProveedor, nombreProveedor:this.nombreProveedor, telefonoProveedor:this.telefonoProveedor, correoProveedor:this.correoProveedor})
            };
            fetch(endpoint,opciones).then (async (response) =>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El proveedor se ha almacenado en la base de datos',
                    showConfirmButton: true,
                    timer: 1500
                });
                this.consultarProveedor();                
            })
        },
        actualizaFormProveedor(index) {
            this.datosFila=this.datosConsulta[index];
            console.log(this.datosFila);
            document.getElementById("txtDocumento").value = this.datosFila.codigoProveedor;
            document.getElementById("txtNombre").value = this.datosFila.nombreProveedor;
            document.getElementById("txtTelefono").value = this.datosFila.telefonoProveedor;
            document.getElementById("txtCorreo").value = this.datosFila.correoProveedor;
        },
        actualizaProveedor(){
            this.codigoProveedor = document.getElementById("txtDocumento").value;
            this.nombreProveedor = document.getElementById("txtNombre").value;
            this.telefonoProveedor = document.getElementById("txtTelefono").value;
            this.correoProveedor = document.getElementById("txtCorreo").value;

            this.guardaProveedor();            
        },
        pre_eliminaProveedor(index){
            this.datosFila = this.datosConsulta[index];
            console.log(this.datosFila.codigoProveedor);
            this.codigoProveedor=this.datosFila.codigoProveedor;
        },
        eliminaProveedor(){
            const endpoint ="http://localhost:8080/proveedor/"+ this.codigoProveedor;
            const opciones = {method:"DELETE"};

            fetch(endpoint,opciones).then (async (response) =>{
                //alert("El proveedor fue eliminado");
                this.id="";
                this.consultarProveedor();
                //('.modal fade').modal('toggle'); 
            })
        }
    }
});

Vue.component('table-venta',{
    data(){
        return{
            factura:"",
            codigoVendedor:"",
            codigoProducto:"",
            codigoCliente:"",
            cantidad:"",
            ventaNeta:"",
            datosFila:[],
            datosConsulta:{},
        }
    },
    template:
        `<div>
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <h2>GESTIÓN <b>VENTAS</b></h2>
                    </div>
                    <div class="col-sm-6">
                        <a href="#addSaleModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Ingresar nuevo venta</span></a>
                        <a href="#deleteSaleModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Eliminar</span></a>						
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
                        <th>Factura</th>
                        <th>Código del Vendedor</th>
                        <th>Código del Producto</th>
                        <th>Código del Cliente</th>
                        <th>Cantidad</th>
                        <th>Venta Neta</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for = "(venta, index) in datosConsulta">
                        <td> {{index}}</td>
                        <td>
                            <span class="custom-checkbox">
                                <input type="checkbox" id="checkbox1" name="options[]" value="1">
                                <label for="checkbox1"></label>
                            </span>
                        </td>
                        <td>{{ venta.factura }}</td>
                        <td>{{ venta.codigoVendedor }}</td>
                        <td>{{ venta.codigoProducto }}</td>
                        <td>{{ venta.codigoCliente }}</td>
                        <td>{{ venta.cantidad }}</td>
                        <td>{{ venta.ventaNeta }}</td>
                        <td>
                            <a href="#editSaleModal" @click="actualizaFormVenta(index)" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            <a href="#deleteSaleModal" @click="pre_eliminaVenta(index)" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
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
            <div id="addSaleModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">						
                                <h4 class="modal-title">Ingresar Venta</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Número de Factura</label>
                                    <input type="number" class="form-control" required v-model="factura">
                                </div>					
                                <div class="form-group">
                                    <label>Código del Vendedor</label>
                                    <input type="number" class="form-control" required v-model="codigoVendedor">
                                </div>
                                <div class="form-group">
                                    <label>Código del Producto</label>
                                    <input type="number" class="form-control" required v-model="codigoProducto">
                                </div>
                                <div class="form-group">
                                    <label>Código del Cliente</label>
                                    <input type="number" class="form-control" required v-model="codigoCliente">
                                </div>
                                <div class="form-group">
                                    <label>Cantidad Vendida</label>
                                    <input type="number" class="form-control" required v-model="cantidad">
                                </div>
                                <div class="form-group">
                                    <label>Venta Neta</label>
                                    <input type="number" class="form-control" required v-model="ventaNeta">
                                </div>				
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                                <input type="submit" class="btn btn-success" value="Add" v-on:click="guardaVenta">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Edit Modal HTML -->
            <div id="editSaleModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">						
                                <h4 class="modal-title">Editar Venta</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Número de Factura</label>
                                    <input type="number" class="form-control" required id="txtFactura" disabled>
                                </div>
                                <div class="form-group">
                                    <label>Código del Vendedor</label>
                                    <input type="number" class="form-control" required id="txtCodigoVendedor">
                                </div>					
                                <div class="form-group">
                                    <label>Código del Producto</label>
                                    <input type="number" class="form-control" required id="txtCodigoProducto">
                                </div>
                                <div class="form-group">
                                    <label>Código del Cliente</label>
                                    <input type="number" class="form-control" required id="txtCodigoCliente">
                                </div>		
                                <div class="form-group">
                                    <label>Cantidad Vendida</label>
                                    <input type="number" class="form-control" required id="txtCantidad">
                                </div>
                                <div class="form-group">
                                    <label>Venta Neta</label>
                                    <input type="number" class="form-control" required id="txtVentaNeta">
                                </div>		
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar"/>
                                <input type="submit" class="btn btn-success" value="Actualizar" @click="actualizaVenta">
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Delete Modal HTML -->
            <div id="deleteSaleModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">						
                                <h4 class="modal-title">Eliminar Venta</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">					
                                <p>¿Está seguro de eliminar la venta con factura No {{this.factura}}?</p>
                                <p class="text-warning"><small>Esta acción no se puede deshacer.</small></p>
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar">
                                <input type="submit" class="btn btn-danger" value="Eliminar" @click="eliminaVenta">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>`,

    mounted() {
        this.consultarVenta();
    },

    methods: {
        consultarVenta(){
            const endpoint ="http://localhost:8080/venta";
            
            fetch(endpoint  ).then (async response =>{
                this.datosConsulta = await response.json();
                console.log(this.datosConsulta);
            })
        },
        guardaVenta(){
            const endpoint ="http://localhost:8080/venta";
            const opciones ={
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({factura:this.factura, codigoVendedor:this.codigoVendedor, codigoProducto:this.codigoProducto, codigoCliente:this.codigoCliente, cantidad:this.cantidad, ventaNeta:this.ventaNeta})
            };
            fetch(endpoint,opciones).then (async (response) =>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'La venta se ha almacenado en la base de datos',
                    showConfirmButton: true,
                    timer: 1500
                });
                this.consultarVenta();                
            })
        },
        actualizaFormVenta(index) {
            this.datosFila=this.datosConsulta[index];
            console.log(this.datosFila);
            document.getElementById("txtFactura").value = this.datosFila.factura;
            document.getElementById("txtCodigoVendedor").value = this.datosFila.codigoVendedor;
            document.getElementById("txtCodigoProducto").value = this.datosFila.codigoProducto;
            document.getElementById("txtCodigoCliente").value = this.datosFila.codigoCliente;
            document.getElementById("txtCantidad").value = this.datosFila.cantidad;
            document.getElementById("txtVentaNeta").value = this.datosFila.ventaNeta;
        },
        actualizaVenta(){
            this.factura = document.getElementById("txtFactura").value;
            this.codigoVendedor = document.getElementById("txtCodigoVendedor").value;
            this.codigoProducto = document.getElementById("txtCodigoProducto").value;
            this.codigoCliente = document.getElementById("txtCodigoCliente").value;
            this.cantidad = document.getElementById("txtCantidad").value;
            this.ventaNeta = document.getElementById("txtVentaNeta").value;

            this.guardaVenta();            
        },
        pre_eliminaVenta(index){
            this.datosFila = this.datosConsulta[index];
            console.log(this.datosFila.factura);
            this.factura=this.datosFila.factura;
        },
        eliminaVenta(){
            const endpoint ="http://localhost:8080/venta/"+ this.factura;
            const opciones = {method:"DELETE"};

            fetch(endpoint,opciones).then (async (response) =>{
                //alert("la venta fue eliminada");
                this.factura="";
                this.consultarVenta();
                //('.modal fade').modal('toggle'); 
            })
        }
    }
});

Vue.component('table-articulo',{
    data(){
        return{
            codigoProducto:"",
            stockDisponible:"",
            precioUnitario:"",
            nombreProducto:"",
            unidadMedida:"",
            datosFila:[],
            datosConsulta:{},
        }
    },
    template:
        `<div>
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <h2>GESTIÓN <b>PRODUCTOS</b></h2>
                    </div>
                    <div class="col-sm-6">
                        <a href="#addProductModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Ingresar nuevo producto</span></a>
                        <a href="#deleteProductModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Eliminar</span></a>						
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
                        <th>Código del Producto</th>
                        <th>Stock Disponible</th>
                        <th>Precio Unitario</th>
                        <th>Nombre del Producto</th>
                        <th>Unidad de Medida</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for = "(producto, index) in datosConsulta">
                        <td> {{index}}</td>
                        <td>
                            <span class="custom-checkbox">
                                <input type="checkbox" id="checkbox1" name="options[]" value="1">
                                <label for="checkbox1"></label>
                            </span>
                        </td>
                        <td>{{ producto.codigoProducto }}</td>
                        <td>{{ producto.stockDisponible }}</td>
                        <td>{{ producto.precioUnitario }}</td>
                        <td>{{ producto.nombreProducto }}</td>
                        <td>{{ producto.unidadMedida }}</td>
                        <td>
                            <a href="#editProductModal" @click="actualizaFormProducto(index)" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            <a href="#deleteProductModal" @click="pre_eliminaProducto(index)" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
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
            <div id="addProductModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">						
                                <h4 class="modal-title">Ingresar Producto</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Código del Producto</label>
                                    <input type="number" class="form-control" required v-model="codigoProducto">
                                </div>					
                                <div class="form-group">
                                    <label>Stock Disponible</label>
                                    <input type="number" class="form-control" required v-model="stockDisponible">
                                </div>
                                <div class="form-group">
                                    <label>Precio Unitario</label>
                                    <input type="number" class="form-control" required v-model="precioUnitario">
                                </div>
                                <div class="form-group">
                                    <label>Nombre del Producto</label>
                                    <input type="text" class="form-control" required v-model="nombreProducto">
                                </div>
                                <div class="form-group">
                                    <label>Unidad de Medida</label>
                                    <input type="text" class="form-control" required v-model="unidadMedida">
                                </div>			
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                                <input type="submit" class="btn btn-success" value="Add" v-on:click="guardaProducto">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Edit Modal HTML -->
            <div id="editProductModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">						
                                <h4 class="modal-title">Editar Producto</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Código del Producto</label>
                                    <input type="number" class="form-control" required id="txtCodigoProducto" disabled>
                                </div>
                                <div class="form-group">
                                    <label>Stock Disponible</label>
                                    <input type="number" class="form-control" required id="txtStockDisponible">
                                </div>					
                                <div class="form-group">
                                    <label>Precio Unitario</label>
                                    <input type="number" class="form-control" required id="txtPrecioUnitario">
                                </div>
                                <div class="form-group">
                                    <label>Nombre del Producto</label>
                                    <input type="text" class="form-control" required id="txtNombreProducto">
                                </div>		
                                <div class="form-group">
                                    <label>Unidad de Medida</label>
                                    <input type="text" class="form-control" required id="txtUnidadMedida">
                                </div>	
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar"/>
                                <input type="submit" class="btn btn-success" value="Actualizar" @click="actualizaProducto">
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Delete Modal HTML -->
            <div id="deleteProductModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">						
                                <h4 class="modal-title">Eliminar Producto</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">					
                                <p>¿Está seguro de eliminar el producto de código No {{this.codigoProducto}}?</p>
                                <p class="text-warning"><small>Esta acción no se puede deshacer.</small></p>
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar">
                                <input type="submit" class="btn btn-danger" value="Eliminar" @click="eliminaProducto">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>`,

    mounted() {
        this.consultarProducto();
    },

    methods: {
        consultarProducto(){
            const endpoint ="http://localhost:8080/producto";
            
            fetch(endpoint  ).then (async response =>{
                this.datosConsulta = await response.json();
                console.log(this.datosConsulta);
            })
        },
        guardaProducto(){
            const endpoint ="http://localhost:8080/producto";
            const opciones ={
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({codigoProducto:this.codigoProducto, stockDisponible:this.stockDisponible, precioUnitario:this.precioUnitario, nombreProducto:this.nombreProducto, unidadMedida:this.unidadMedida})
            };
            fetch(endpoint,opciones).then (async (response) =>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El producto se ha almacenado en la base de datos',
                    showConfirmButton: true,
                    timer: 1500
                });
                this.consultarProducto();                
            })
        },
        actualizaFormProducto(index) {
            this.datosFila=this.datosConsulta[index];
            console.log(this.datosFila);
            document.getElementById("txtCodigoProducto").value = this.datosFila.codigoProducto;
            document.getElementById("txtStockDisponible").value = this.datosFila.stockDisponible;
            document.getElementById("txtPrecioUnitario").value = this.datosFila.precioUnitario;
            document.getElementById("txtNombreProducto").value = this.datosFila.nombreProducto;
            document.getElementById("txtUnidadMedida").value = this.datosFila.unidadMedida
        },
        actualizaProducto(){
            this.codigoProducto = document.getElementById("txtCodigoProducto").value;
            this.stockDisponible = document.getElementById("txtStockDisponible").value;
            this.precioUnitario = document.getElementById("txtPrecioUnitario").value;
            this.nombreProducto = document.getElementById("txtNombreProducto").value;
            this.unidadMedida = document.getElementById("txtUnidadMedida").value;

            this.guardaProducto();            
        },
        pre_eliminaProducto(index){
            this.datosFila = this.datosConsulta[index];
            console.log(this.datosFila.codigoProducto);
            this.codigoProducto=this.datosFila.codigoProducto;
        },
        eliminaProducto(){
            const endpoint ="http://localhost:8080/producto/"+ this.codigoProducto;
            const opciones = {method:"DELETE"};

            fetch(endpoint,opciones).then (async (response) =>{
                //alert("El producto fue eliminado");
                this.codigoProducto="";
                this.consultarProducto();
                //('.modal fade').modal('toggle'); 
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
