// ejemplo de objeto con metodos

// datos de un producto
const producto = {
    id:"p-07",
    nombre:"Agua de jamaica",
    precio:15,
    categoria:"bebida",
    disponible:true,

    //métodos
    resumen() {
        return this.nombre + " - $" + this.precio + " (" + this.categoria + ")";
    },
    estaDisponible(){
        return this.disponible;
    }

};

// paso uno mostrando el objeto
console.log("---Objeto completo---")
console.log(producto);

