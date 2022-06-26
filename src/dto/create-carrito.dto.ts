import { ApiProperty } from "@nestjs/swagger";

export class CreateCarrito {
    @ApiProperty()
    readonly compraId: string;
    @ApiProperty()
    readonly items: object;
    @ApiProperty()
    readonly total: number;
    @ApiProperty()
    readonly fecha: Date;
}