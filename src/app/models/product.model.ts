export interface Product{


    id: number;
    nombre: string;
    precio: number;
    fecha: Date;

}

export interface Result{
    mensaje: string;
    object: Product[]
}