import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn} from "typeorm";
import {User} from "./user";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(() => User, user => user.photos)
    @JoinColumn()
    user: User;

}