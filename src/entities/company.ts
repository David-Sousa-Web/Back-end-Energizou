import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("company")
export class Company {
  @PrimaryGeneratedColumn("uuid")
  Id: string;

  @Column({ type: "text" })
  NomedoCliente: string;

  @Column({ type: "text", nullable: false })
  Senha: string;

  @Column({ type: "text" })
  NomedaEmpresa: string;

  @Column({ type: "text", nullable: false })
  CNPJ: string;

  @Column({ type: "text" })
  CEP: string;

  @Column({ type: "text" })
  Endereco: string;

  @Column()
  Numero: number;

  @Column({ type: "text" })
  Telefone: string;

  @Column({ type: "text" })
  Email: string;
}
