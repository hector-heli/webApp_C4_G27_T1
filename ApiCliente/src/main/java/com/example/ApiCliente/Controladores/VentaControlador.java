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
@RequestMapping("/venta")
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

    @DeleteMapping(path = "/{factura}")
    public boolean eliminarVenta(@PathVariable("factura") Long factura){
        return serv.eliminarVenta(factura);
    }

    @GetMapping(path = "/{factura}")
    public Optional<VentaModelo> consultaPorId(@PathVariable("factura") Long factura){
        return serv.consultaVentaId(factura);
    }

    @GetMapping(path = "/buscar/{codigoVendedor}")
    public ArrayList<VentaModelo> obtenerVentaPorCodigoVendedor(@PathVariable("codigoVendedor") String codigoVendedor){
        return serv.obtenerVentaPorCodigoVendedor(codigoVendedor);
    }

    @GetMapping(path = "/buscar/{codigoProducto}")
    public VentaModelo obtenerPorCodigoProducto(@PathVariable("codigoProducto") String codigoProducto){
        return serv.obtenerPorCodigoProducto(codigoProducto);
    }
}
