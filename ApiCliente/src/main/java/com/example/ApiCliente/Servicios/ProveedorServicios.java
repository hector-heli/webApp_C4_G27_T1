package com.example.ApiCliente.Servicios;

import java.util.*;

import com.example.ApiCliente.Modelos.ProveedorModelo;
import com.example.ApiCliente.Repositorios.ProveedorRepo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProveedorServicios {
    @Autowired
    ProveedorRepo repo;

    public ProveedorModelo guardarProveedor(ProveedorModelo proveedor) {
        return repo.save(proveedor);
    }

    public ArrayList<ProveedorModelo> consultaTodos(){
        return (ArrayList<ProveedorModelo>) repo.findAll();
    }

    public boolean eliminarProveedor(Long codigoProveedor){
        if(repo.existsById(codigoProveedor)){
            repo.deleteById(codigoProveedor);
            return true;
        } else{
            return false;
        }
    }

    public Optional<ProveedorModelo> consultaProveedorId(Long codigoProveedor){
        return repo.findById(codigoProveedor);
    }

    public ArrayList<ProveedorModelo> obtenerProveedorPorNombre(String nombreProveedor){
        return repo.findByNombreProveedor(nombreProveedor);
    }

    public ProveedorModelo obtenerPorCorreo(String correoProveedor){
        return repo.findByCorreoProveedor(correoProveedor);
    }
}
