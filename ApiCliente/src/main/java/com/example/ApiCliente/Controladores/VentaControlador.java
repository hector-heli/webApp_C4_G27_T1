package com.example.ApiCliente.Controladores;

import java.util.*;

import com.example.ApiCliente.Modelos.VentaModelo;
import com.example.ApiCliente.Servicios.VentaServicios;


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
public class VentaControlador {
    @Autowired
    VentaServicios serv;

    @PostMapping()
    public VentaModelo guardarVenta(@RequestBody VentaModelo venta) {
        return serv.guardarVenta(venta);
    }

    @GetMapping()
    public ArrayList<VentaModelo> consultaTodos() {
        return serv.consultaTodos();
    }

    @DeleteMapping(path = "/{id}")
    public boolean eliminarVenta(@PathVariable("id") Long id){
        return serv.eliminarVenta(id);
    }

    @GetMapping(path = "/{id}")
    public Optional<VentaModelo> consultaPorId(@PathVariable("id") Long id){
        return serv.consultaVentaId(id);
    }

    @GetMapping(path = "/buscar/{nombre}")
    public ArrayList<VentaModelo> obtenerPorNombre(@PathVariable("nombre") String nombre){
        return serv.obtenerVentaPorNombre(nombre);
    }

    @GetMapping(path = "/buscacorreo/{correo}")
    public VentaModelo obtenerPorCorreo(@PathVariable("correo") String correo){
        return serv.obtenerPorCorreo(correo);
    }
}
