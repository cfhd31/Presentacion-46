import { Controller, Body, Post, Get, Delete, Param, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProducto } from 'src/dto/create-Productos.dto';
import { Productos } from 'src/interfaces/productos.interface';


@Controller('productos')
export class ProductosController {

    constructor(private readonly prodService: ProductosService) { }

    @Post()
    async create(@Body() createProdDto: CreateProducto): Promise<Productos> {
        this.prodService.create(createProdDto);
        return createProdDto;
    }

    @Get()
    async findAll(): Promise<Productos[]> {
        return this.prodService.findAll();
    }

    @Get('/:id')                                //funciona obtener producto mediante id
    async getProducto(@Param('id') id: string) {
    const producto = await this.prodService.getProducto(id);
    if (!producto) console.log("no se encontro producto")
    return producto;
    }
  
    @Put(':id')                                 //funciona actualizar producto
    async actualizarProducto(@Param('id') id: string, @Body() updateCatDto: CreateProducto) {
        const producto = await this.prodService.actualizarProducto (id, updateCatDto);
        if (!producto) console.log("no se encontro producto")
        return producto;
    }
    
    @Delete(':id')                                    //funciona borra producto por id
    async borrarId(@Param('id') id: string) {   
        const producto = await this.prodService.borrarId(id);
        if (!producto) console.log("no se encontro producto")
        return producto;
    }
    

    @Delete()
    async borrarTodo() {
        return this.prodService.borrarTodo();
    }


}
