package com.example.ApiCliente.Modelos;


import org.springframework.data.annotation.Id;

public class VentaModelo {

    @Id
    private long factura;
    private long codigoVendedor;
    private long codigoProducto;
    private long codigoCliente;
    private int  cantidad;
    private float ventaNeta;
    
    public long getFactura() {
        return factura;
    }
    public void setFactura(long factura) {
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
    public long getCodigoVendedor() {
        return codigoVendedor;
    }
    public void setCodigoVendedor(long codigoVendedor) {
        this.codigoVendedor = codigoVendedor;
    }
    public long getCodigoProducto() {
        return codigoProducto;
    }
    public void setCodigoProducto(long codigoProducto) {
        this.codigoProducto = codigoProducto;
    }
}
