import { Injectable, HttpException } from '@nestjs/common';
import { Carrito } from 'src/interfaces/carrito.interface';

@Injectable()
export class CarritoService {
    private readonly Carrito: Carrito[] = [];

    create(prod: Carrito) {
        this.Carrito.push(prod);
    }

    findAll(): Carrito[] {
        return this.Carrito;
    }

    getProducto(productoId){
        const prod = this.Carrito.find((prod) => prod.compraId === productoId);
        if (!prod) {
            throw new HttpException('Product does not exist', 404);
        } 
        return prod
    }

    actualizarProducto(productoId, body){
        const index = this.Carrito.findIndex((prod) => prod.compraId === productoId);
      if (!index) {
        throw new HttpException('Product does not exist', 404);
      }
      let newProduct = (this.Carrito[index] = body);
      return (newProduct);
    }

    borrarId(productoId){
        const prod = this.Carrito.splice(
            this.Carrito.findIndex((el) => el.compraId === productoId),
            1,
        );
        if (!prod) {
            throw new HttpException('Product does not exist', 404);
        } 
        return prod
    }

    borrarTodo() {
        const prod = this.Carrito.splice(0, this.Carrito.length);
        if (!prod) {
            throw new HttpException('Product does not exist', 404);
        } 
        return prod
    }

}
