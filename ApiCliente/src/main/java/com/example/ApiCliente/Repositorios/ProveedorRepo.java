package com.example.ApiCliente.Repositorios;

import java.util.ArrayList;

import com.example.ApiCliente.Modelos.ProveedorModelo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProveedorRepo extends MongoRepository <ProveedorModelo, Long> {
    ArrayList<ProveedorModelo> findByNombreProveedor(String nombreProveedor); 
    ProveedorModelo findByCorreoProveedor(String correoProveedor); 
}
