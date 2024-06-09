import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Employee } from './employeeModel';

interface ShiftAttributes {
  id?: string;
  employeeId: string;
  startTime: Date;
  endTime?: Date | null;
  actualHours?: number;
}

class Shift extends Model<ShiftAttributes> implements ShiftAttributes {
  public id!: string;
  public employeeId!: string;
  public startTime!: Date;
  public endTime!: Date | null;
  public actualHours!: number;
}

Shift.init( 
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    employeeId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    actualHours: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
  },
  {
    sequelize,
    tableName: 'Shifts',
     timestamps: false,
  }
);

Shift.belongsTo(Employee,{foreignKey:'employeeId'})
export { Shift };