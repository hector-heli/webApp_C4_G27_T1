package com.example.ApiCliente.Modelos;


import org.springframework.data.annotation.Id;

public class VentaModelo {

    @Id
    private Long factura;
    private long codigoCliente;
    private int  cantidad;
    private float ventaNeta;
    private String codigoVendedor;
    private String codigoProducto;
    private String fecha;

    
    public Long getFactura() {
        return factura;
    }
    public void setFactura(Long factura) {
        this.factura = factura;
    }
    public long getCodigoCliente() {
        return codigoCliente;
    }
    public void setCodigoCliente(long codigoCliente) {
        this.codigoCliente = codigoCliente;
    }
    public int getCantidad() {
        return cantidad;
    }
    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
    public float getVentaNeta() {
        return ventaNeta;
    }
    public void setVentaNeta(float ventaNeta) {
        this.ventaNeta = ventaNeta;
    }
    public String getCodigoVendedor() {
        return codigoVendedor;
    }
    public void setCodigoVendedor(String codigoVendedor) {
        this.codigoVendedor = codigoVendedor;
    }
    public String getCodigoProducto() {
        return codigoProducto;
    }
    public void setCodigoProducto(String codigoProducto) {
        this.codigoProducto = codigoProducto;
    }
    public String getFecha() {
        return fecha;
    }
    public void setFecha(String fecha) {
        this.fecha = fecha;
    }
    
    
}
