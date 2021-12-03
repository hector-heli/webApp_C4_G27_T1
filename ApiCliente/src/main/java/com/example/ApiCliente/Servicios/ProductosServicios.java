package com.example.ApiCliente.Servicios;

import java.util.*;

import com.example.ApiCliente.Modelos.ProductosModelo;
import com.example.ApiCliente.Repositorios.ProductosRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductosServicios {
    @Autowired
    ProductosRepo repo;

    public ProductosModelo guardarProducto(ProductosModelo producto) {
        return repo.save(producto);
    }

    public ArrayList<ProductosModelo> consultaTodos(){
        return (ArrayList<ProductosModelo>) repo.findAll();
    }

    public boolean eliminarProducto(Long codigoProducto){
        if(repo.existsById(codigoProducto)){
            repo.deleteById(codigoProducto);
            return true;
        } else{
            return false;
        }
    }

    public Optional<ProductosModelo> consultaProductoCodigo(Long codigoProducto){
        //return repo.findByCodigoProducto(codigoProducto);
        return repo.findById(codigoProducto);
    }

    public ArrayList<ProductosModelo> obtenerProductoPorNombre(String nombreProducto){
        return repo.findByNombre(nombreProducto);
    }

    public ProductosModelo obtenerPorCorreo(String correo){
        return repo.findByCorreo(correo);
    }
}
