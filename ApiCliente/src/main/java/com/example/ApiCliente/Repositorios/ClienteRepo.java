package com.example.ApiCliente.Repositorios;

import java.util.ArrayList;

import com.example.ApiCliente.Modelos.ClienteModelo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepo extends MongoRepository <ClienteModelo, Long> {
    ArrayList<ClienteModelo> findByNombre(String nombre);
    ClienteModelo findByCorreo(String correo);
}
