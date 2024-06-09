import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { v4 as uuidv4 } from 'uuid';

interface SowAttributes {
  id?: string;
  invoiceEmailAddresses: string[];
  customerId: string;
  customerPONumber:string;
  title:string;
  customerSONumber:string;
  validityPeriod:{
    validFrom:Date;
    validUpto:Date;
  };
  totalValue:number;
  currency:string;

}

class SOW extends Model<SowAttributes> implements SowAttributes {
  public id!: string;
  public invoiceEmailAddresses!: string[];
  public customerId!: string;
  public customerPONumber!:string;
  public title!:string;
  public customerSONumber!:string;
  public validityPeriod!:{
    validFrom:Date;
    validUpto:Date;
  };
  public totalValue!:number;
  public currency!:string;
}

SOW.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    invoiceEmailAddresses: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerPONumber:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerSONumber:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    validityPeriod:{
      type: DataTypes.JSONB,
      allowNull: false,
    },
    totalValue:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currency:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'sows',
    timestamps: false,
  }
);

export { SOW };