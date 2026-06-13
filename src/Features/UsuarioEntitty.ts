import { db } from "../db/db";
import { Model, Optional, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize"
import { DataTypes } from "sequelize"

export class UsuarioCreadoForMe extends Model<InferAttributes<UsuarioCreadoForMe>, InferCreationAttributes<UsuarioCreadoForMe>> {
    
    declare id: number
    declare name: string
    declare lastname: string
    declare edad: number

}

UsuarioCreadoForMe.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,          // conexión a la BD
    tableName: "usuarios",  // nombre de la tabla
    timestamps: false       // desactiva createdAt/updatedAt
});
