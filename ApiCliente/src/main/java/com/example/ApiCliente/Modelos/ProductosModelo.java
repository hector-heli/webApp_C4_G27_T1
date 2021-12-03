package com.example.ApiCliente.Modelos;

import org.springframework.data.annotation.Id;

public class ProductosModelo {

    @Id
    private Long codigoProducto;
    private Long stockDisponible;
    private Long precioUnitario;
    private String nombreProducto;
    private String unidadMedida;

    public Long getCodigoProducto() {
        return codigoProducto;
    }
    public void setCodigoProducto(Long codigoProducto) {
        this.codigoProducto = codigoProducto;
    }
    public Long getStockDisponible() {
        return stockDisponible;
    }
    public void setStockDisponible(Long stockDisponible) {
        this.stockDisponible = stockDisponible;
    }
    public Long getPrecioUnitario() {
        return precioUnitario;
    }
    public void setPrecioUnitario(Long precioUnitario) {
        this.precioUnitario = precioUnitario;
    }
    public String getNombreProducto() {
        return nombreProducto;
    }
    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }
    public String getUnidadMedida() {
        return unidadMedida;
    }
    public void setUnidadMedida(String unidadMedida) {
        this.unidadMedida = unidadMedida;
    }
    
}
