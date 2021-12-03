package com.example.ApiCliente.Controladores;

import java.util.*;

import com.example.ApiCliente.Modelos.ProveedorModelo;
import com.example.ApiCliente.Servicios.ProveedorServicios;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins="*", methods={RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
@RequestMapping("/cliente")
public class PoveedorControlador {
    @Autowired
    ProveedorServicios serv;

    @PostMapping()
    public ProveedorModelo guardarCliente(@RequestBody ProveedorModelo cliente) {
        return serv.guardarProveedor(proveedor);
    }

    @GetMapping()
    public ArrayList<ProveedorModelo> consultaTodos() {
        return serv.consultaTodos();
    }

    @DeleteMapping(path = "/{id}")
    public boolean eliminarProveedor(@PathVariable("id") Long id){
        return serv.eliminarProveedor(id);
    }

    @GetMapping(path = "/{id}")
    public Optional<ProveedorModelo> consultaPorId(@PathVariable("id") Long id){
        return serv.consultaProveedorId(id);
    }

    @GetMapping(path = "/buscar/{nombre}")
    public ArrayList<ProveedorModelo> obtenerPorNombre(@PathVariable("nombre") String nombre){
        return serv.obtenerProveedorPorNombre(nombre);
    }

    @GetMapping(path = "/buscacorreo/{correo}")
    public ProveedorModelo obtenerPorCorreo(@PathVariable("correo") String correo){
        return serv.obtenerPorCorreo(correo);
    }
}
