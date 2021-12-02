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

    public boolean eliminarVenta(Long id){
        if(repo.existsById(id)){
            repo.deleteById(id);
            return true;
        } else{
            return false;
        }
    }

    public Optional<VentaModelo> consultaVentaId(Long id){
        return repo.findById(id);
    }

    public ArrayList<VentaModelo> obtenerVentaPorNombre(String nombre){
        return repo.findByNombre(nombre);
    }

    public VentaModelo obtenerPorCorreo(String correo){
        return repo.findByCorreo(correo);
    }
}
