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

    public ProveedorModelo guardarProveedor(ProveedorModelo Proveedor) {
        return repo.save(proveedor);
    }

    public ArrayList<ProveedorModelo> consultaTodos(){
        return (ArrayList<ProveedorModelo>) repo.findAll();
    }

    public boolean eliminarProveedor(Long id){
        if(repo.existsById(id)){
            repo.deleteById(id);
            return true;
        } else{
            return false;
        }
    }

    public Optional<ProveedorModelo> consultaProveedorId(Long id){
        return repo.findById(id);
    }

    public ArrayList<ProveedorModelo> obtenerProveedorPorNombre(String nombre){
        return repo.findByNombre(nombre);
    }

    public ProveedorModelo obtenerPorCorreo(String correo){
        return repo.findByCorreo(correo);
    }
}
