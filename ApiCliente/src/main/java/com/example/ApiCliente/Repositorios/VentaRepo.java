package com.example.ApiCliente.Repositorios;

import java.util.ArrayList;

import com.example.ApiCliente.Modelos.VentaModelo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VentaRepo extends MongoRepository <VentaModelo, Long> {
    ArrayList<VentaModelo> findByCodigoVendedor(long codigoVendedor);
    VentaModelo findByCodigoProducto(long codigoProducto);
}
