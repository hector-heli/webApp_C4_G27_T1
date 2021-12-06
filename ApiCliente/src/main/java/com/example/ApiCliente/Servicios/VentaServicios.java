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

    public boolean eliminarVenta(Long codigoCliente){
        if(repo.existsById(codigoCliente)){
            repo.deleteById(codigoCliente);
            return true;
        } else{
            return false;
        }
    }

    public Optional<VentaModelo> consultaVentaId(Long codigoCliente){
        return repo.findById(codigoCliente);
    }

    public ArrayList<VentaModelo> obtenerVentaPorCodigoVendedor(String codigoVendedor){
        return repo.findByCodigoVendedor(codigoVendedor);
    }

    public VentaModelo obtenerPorCodigoProducto(String codigoProducto){
        return repo.findByCodigoProducto(codigoProducto);
    }
}
