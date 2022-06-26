import { Injectable, HttpException } from '@nestjs/common';
import {Productos} from '../interfaces/productos.interface'

@Injectable()
export class ProductosService {
    private readonly Productos: Productos[] = [];

    create(prod: Productos) {
        this.Productos.push(prod);
    }

    findAll(): Productos[] {
        return this.Productos;
    }
    findOne(id): Productos[] {
        return this.Productos;
    }
    getProducto(productoId){
        const prod = this.Productos.find((prod) => prod.id === productoId);
        if (!prod) {
            throw new HttpException('Product does not exist', 404);
        } 
        return prod
    }

    actualizarProducto(productoId, body){
        const index = this.Productos.findIndex((prod) => prod.id === productoId);
      if (!index) {
        throw new HttpException('Product does not exist', 404);
      }
      let newProduct = (this.Productos[index] = body);
      return (newProduct);
    }

    borrarId(productoId){
        const prod = this.Productos.splice(
            this.Productos.findIndex((el) => el.id === productoId),
            1,
        );
        if (!prod) {
            throw new HttpException('Product does not exist', 404);
        } 
        return prod
    }

    borrarTodo() {
        const prod = this.Productos.splice(0, this.Productos.length);
        if (!prod) {
            throw new HttpException('Product does not exist', 404);
        } 
        return prod
    }
    
}
