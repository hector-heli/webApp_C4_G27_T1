package com.example.ApiCliente.Controladores;

import java.util.*;

import com.example.ApiCliente.Modelos.ClienteModelo;
import com.example.ApiCliente.Servicios.ClienteServicios;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;;

@RestController
@CrossOrigin(origins="*", methods={RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
@RequestMapping("/cliente")
public class ClienteControlador {
    @Autowired
    ClienteServicios serv;

    @PostMapping()
    public ClienteModelo guardarCliente(@RequestBody ClienteModelo cliente) {
        return serv.guardarCliente(cliente);
    }

    @GetMapping()
    public ArrayList<ClienteModelo> consultaTodos() {
        return serv.consultaTodos();
    }

    @DeleteMapping(path = "/{id}")
    public boolean eliminarCliente(@PathVariable("id") Long id){
        return serv.eliminarCliente(id);
    }

    @GetMapping(path = "/{id}")
    public Optional<ClienteModelo> consultaPorId(@PathVariable("id") Long id){
        return serv.consultaClienteId(id);
    }

    @GetMapping(path = "/buscar/{nombre}")
    public ArrayList<ClienteModelo> obtenerPorNombre(@PathVariable("nombre") String nombre){
        return serv.obtenerClientePorNombre(nombre);
    }

    @GetMapping(path = "/buscacorreo/{correo}")
    public ClienteModelo obtenerPorCorreo(@PathVariable("correo") String correo){
        return serv.obtenerPorCorreo(correo);
    }
}
