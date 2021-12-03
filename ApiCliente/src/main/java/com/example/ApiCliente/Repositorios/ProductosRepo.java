package com.example.ApiCliente.Repositorios;

import java.util.ArrayList;

import com.example.ApiCliente.Modelos.ProductosModelo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductosRepo extends MongoRepository <ProductosModelo, Long> {
    ArrayList<ProductosModelo> findByNombre(String nombreProducto);
    ProductosModelo findByCorreo(String correo);

    
}
