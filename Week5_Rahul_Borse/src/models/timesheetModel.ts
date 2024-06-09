import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Employee } from './employeeModel';
import { Shift } from './shiftModel';

interface TimesheetAttributes {
  id?: string;
  employeeId: string;
  shiftId: string;
  projectName: string;
  taskName: string;
  fromDate: Date;
  toDate: Date;
}

class Timesheet extends Model<TimesheetAttributes> implements TimesheetAttributes {
  public id!: string;
  public employeeId!: string;
  public shiftId!: string;
  public projectName!: string;
  public taskName!: string;
  public fromDate!: Date;
  public toDate!: Date;
}

Timesheet.init( 
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
    shiftId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taskName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fromDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    toDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'timesheets',
     timestamps: false,
  }
);
Timesheet.belongsTo(Employee,{foreignKey: 'employeeId'});
Timesheet.belongsTo(Shift,{foreignKey: 'shiftId'});
export { Timesheet };