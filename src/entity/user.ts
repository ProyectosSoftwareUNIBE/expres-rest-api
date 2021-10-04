import {Entity, PrimaryGeneratedColumn, Column,OneToMany} from "typeorm";
import {Photo} from "./photo";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column()
    isActive : boolean;

    @OneToMany(() => Photo, photo => photo.user,{ cascade: true })
    photos: Photo[];

}
