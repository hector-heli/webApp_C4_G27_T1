package com.example.ApiCliente.Modelos;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class VentaModelo {
    @Id

    private Long codigoCliente;
    private String codigoVendedor;
    private String codigoProducto;
    private Date fecha;
    private String factura;
    private int  cantidad;
    private float ventaNeta;
    private float costo;
    private Long pedido;
    
    public long getCodigoCliente() {
        return codigoCliente;
    }
    public void setCodigoCliente(long codigoCliente) {
        this.codigoCliente = codigoCliente;
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
    public Date getFecha() {
        return fecha;
    }
    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
    public String getFactura() {
        return factura;
    }
    public void setFactura(String factura) {
        this.factura = factura;
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
    public float getCosto() {
        return costo;
    }
    public void setCosto(float costo) {
        this.costo = costo;
    }
    public long getPedido() {
        return pedido;
    }
    public void setPedido(long pedido) {
        this.pedido = pedido;
    }


}
