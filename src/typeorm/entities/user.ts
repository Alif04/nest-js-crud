import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'users'})
export class user {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number
    
    @Column()
    nama: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    role: string

    @Column()
    no_telepon: string

    @Column()
    jenis_kelamin: string

    @Column()
    createdAt: Date

    @Column({ nullable: true})
    authStrategy: string
}