package com.example.ApiCliente.Repositorios;

import java.util.ArrayList;

import com.example.ApiCliente.Modelos.ProveedorModelo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repo extends MongoRepository <ProveedorModelo, Long> {
    ArrayList<ProveedorModelo> findByNombre(String nombre);
    ProveedorModelo findByCorreo(String correo);
}
