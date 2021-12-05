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

public class ProveedorControlador {
    @Autowired
    ProveedorServicios serv;

    @PostMapping()
    public ProveedorModelo guardarProveedor(@RequestBody ProveedorModelo proveedor) {
        return serv.guardarProveedor(proveedor);
    }

    @GetMapping()
    public ArrayList<ProveedorModelo> consultaTodos() {
        return serv.consultaTodos();
    }

    @DeleteMapping(path = "/{codigoProveedor}")
    public boolean eliminarProveedor(@PathVariable("codigoProveedor") Long codigoProveedor){
        return serv.eliminarProveedor(codigoProveedor);
    }

    @GetMapping(path = "/{codigoProveedor}")
    public Optional<ProveedorModelo> consultaPorId(@PathVariable("codigoProveedor") Long codigoProveedor){
        return serv.consultaProveedorId(codigoProveedor);
    }

    @GetMapping(path = "/buscar/{nombreProveedor}")
    public ArrayList<ProveedorModelo> obtenerPorNombre(@PathVariable("nombreProveedor") String nombreProveedor){
        return serv.obtenerProveedorPorNombre(nombreProveedor);
    }

    @GetMapping(path = "/buscacorreo/{correoProveedor}")
    public ProveedorModelo obtenerPorCorreo(@PathVariable("correoProveedor") String correoProveedor){
        return serv.obtenerPorCorreo(correoProveedor);
    }
}
