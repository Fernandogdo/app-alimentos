export class Alimento {
    constructor(
        _id = '',
        subcategoria = '',
        autor = '',
        fecha = '',
        categoria = '',
        nombre_comun = '',
        nombre_cientifico = '',
        otro_nombre = '',
        origen = '',
        conservacion_alimento = '',
        description = '',
        temporada = '',
        presentacion = '',
        unidades = '',
        mercado = '',
        supermercado = '',
        kilocalorias = '',
        glucidos = '',
        proteinas = ''

    ){

        this._id = _id;
        this.subcategoria = subcategoria;
        this.autor = autor;
        this.fecha = fecha;
        this.categoria = categoria;
        this.nombre_comun = nombre_comun;
        this.nombre_cientifico = nombre_cientifico;
        this.otro_nombre = otro_nombre;
        this.origen = origen;
        this.conservacion_alimento = conservacion_alimento;
        this.description = description;
        this.temporada = temporada;
        this.presentacion = presentacion;
        this.unidades = unidades;
        this.mercado = mercado;
        this.supermercado = supermercado;
        this.kilocalorias = kilocalorias;
        this.glucidos = glucidos;
        this.proteinas = proteinas

    }
    _id?: string;
    subcategoria?: string;
    autor?: string;
    fecha?: string;
    categoria?: string;
    nombre_comun?: string;
    nombre_cientifico?: string;
    otro_nombre?: string;
    origen?: string;
    conservacion_alimento?: string;
    description?: string;
    temporada?: string;
    presentacion?: string;
    unidades?: string ;
    mercado?: string;
    supermercado?: string;
    kilocalorias?: string;
    glucidos: string;
    proteinas?: string;

}
