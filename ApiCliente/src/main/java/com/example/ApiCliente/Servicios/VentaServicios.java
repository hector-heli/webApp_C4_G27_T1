package com.example.ApiCliente.Servicios;

import java.util.*;

import com.example.ApiCliente.Modelos.VentaModelo;
import com.example.ApiCliente.Repositorios.VentaRepo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VentaServicios {
    @Autowired
    VentaRepo repo;

    public VentaModelo guardarVenta(VentaModelo venta) {
        return repo.save(venta);
    }

    public ArrayList<VentaModelo> consultaTodos(){
        return (ArrayList<VentaModelo>) repo.findAll();
    }

    public boolean eliminarVenta(long factura){
        if(repo.existsById(factura)){
            repo.deleteById(factura);
            return true;
        } else{
            return false;
        }
    }

    public Optional<VentaModelo> consultaVentaId(long factura){
        return repo.findById(factura);
    }

    //public ArrayList<VentaModelo> obtenerVentaPorCodigoVendedor(long codigoVendedor){
    //    return repo.findByCodigoVendedor(codigoVendedor);
    //}

    //public VentaModelo obtenerPorCodigoProducto(long codigoProducto){
    //    return repo.findByCodigoProducto(codigoProducto);
    //}
}
