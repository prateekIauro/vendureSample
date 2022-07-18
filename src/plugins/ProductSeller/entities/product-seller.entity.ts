import { DeepPartial, Product, ProductVariant, VendureEntity } from '@vendure/core';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class ProductSeller extends VendureEntity {
    constructor(input?: DeepPartial<ProductSeller>) {
        super(input);
    }

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Product, product => product.id)
    products: Product[];

    @Column("varchar")
    name: string;

    @Column('text')
    bio: string;

    @Column("varchar")
    image: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}