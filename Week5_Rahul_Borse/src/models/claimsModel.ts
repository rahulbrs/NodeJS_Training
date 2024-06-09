import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Employee } from './employeeModel';

interface ClaimsAttributes {
  id?: string;
  key: string;
  value: string;
  employeeId: string;
  
}

class Claims extends Model<ClaimsAttributes> implements ClaimsAttributes {
  public id!: string;
  public key!: string;
  public value!: string;
  public employeeId!: string;
}

Claims.init( 
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'claims',
     timestamps: false,
  }
);
Claims.belongsTo(Employee, {foreignKey: 'employeeId'})
export { Claims };