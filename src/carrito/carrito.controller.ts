import { Controller, Body, Post, Get, Delete, Param, Put } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CreateCarrito } from 'src/dto/create-carrito.dto';
import { Carrito } from 'src/interfaces/carrito.interface';

@Controller('carrito')
export class CarritoController {
    constructor(private readonly carritoService: CarritoService) { }

    @Post()
    async create(@Body() createCarritoDto: CreateCarrito): Promise<Carrito> {
        this.carritoService.create(createCarritoDto);
        return createCarritoDto;
    }

    @Get()
    async findAll(): Promise<Carrito[]> {
        return this.carritoService.findAll();
    }

    @Get('/:id')                                //funciona obtener producto mediante id
    async getProducto(@Param('id') id: string) {
    const producto = await this.carritoService.getProducto(id);
    if (!producto) console.log("no se encontro producto")
    return producto;
    }
  
    @Put(':id')                                 //funciona actualizar producto
    async actualizarProducto(@Param('id') id: string, @Body() updateCatDto: CreateCarrito) {
        const producto = await this.carritoService.actualizarProducto (id, updateCatDto);
        if (!producto) console.log("no se encontro producto")
        return producto;
    }
    
    @Delete(':id')                                    //funciona borra producto por id
    async borrarId(@Param('id') id: string) {   
        const producto = await this.carritoService.borrarId(id);
        if (!producto) console.log("no se encontro producto")
        return producto;
    }
    

    @Delete()
    async borrarTodo() {
        return this.carritoService.borrarTodo();
    }
}
