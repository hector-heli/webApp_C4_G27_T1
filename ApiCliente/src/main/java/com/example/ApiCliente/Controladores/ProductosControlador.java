package com.example.ApiCliente.Controladores;

import java.util.*;

import com.example.ApiCliente.Modelos.ProductosModelo;
import com.example.ApiCliente.Servicios.ProductosServicios;


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
@RequestMapping("/producto")

public class ProductosControlador {
    @Autowired
    ProductosServicios serv;

    @PostMapping()
    public ProductosModelo guardarProducto(@RequestBody ProductosModelo producto) {
        return serv.guardarProducto(producto);
    }

    @GetMapping()
    public ArrayList<ProductosModelo> consultaTodos() {
        return serv.consultaTodos();
    }

    @DeleteMapping(path = "/{codigoProducto}")
    public boolean eliminarProducto(@PathVariable("codigoProducto") Long codigoProducto){
        return serv.eliminarProducto(codigoProducto);
    }

    @GetMapping(path = "/{codigoProducto}")
    public Optional<ProductosModelo> consultaPorId(@PathVariable("codigoProducto") Long codigoProducto){
        return serv.consultaProductoCodigo(codigoProducto);
    }

    @GetMapping(path = "/buscar/{nombreProducto}")
    public ArrayList<ProductosModelo> obtenerPorNombre(@PathVariable("nombreProducto") String nombreProducto){
        return serv.obtenerProductoPorNombre(nombreProducto);
    }
}
