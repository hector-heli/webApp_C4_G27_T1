package com.example.ApiCliente.Modelos;

import org.springframework.data.annotation.Id;

public class ProveedorModelo {

    @Id
    private Long codigoProveedor;
    private String nombreProveedor;
    private String telefonoProveedor;
    private String correoProveedor;

    public Long getCodigoProveedor() {
        return codigoProveedor;
    }
    public void setCodigoProveedor(Long codigoProveedor) {
        this.codigoProveedor = codigoProveedor;
    }
    public String getNombreProveedor() {
        return nombreProveedor;
    }
    public void setNombreProveedor(String nombreProveedor) {
        this.nombreProveedor = nombreProveedor;
    }
    public String getTelefonoProveedor() {
        return telefonoProveedor;
    }
    public void setTelefonoProveedor(String telefonoProveedor) {
        this.telefonoProveedor = telefonoProveedor;
    }
    public String getCorreoProveedor() {
        return correoProveedor;
    }
    public void setCorreoProveedor(String correoProveedor) {
        this.correoProveedor = correoProveedor;
    }
}
