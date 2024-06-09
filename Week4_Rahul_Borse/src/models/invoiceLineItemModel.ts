import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { v4 as uuidv4 } from 'uuid';

interface InvoiceLineItemAttributes {
    id?: number;
    invoiceId: number;
    orderNo: string;
    particular: string;
    rate: number;
    unit: number;
    total: number;
}

class InvoiceLineItem extends Model<InvoiceLineItemAttributes> implements InvoiceLineItemAttributes {
    public id!: number;
    public invoiceId!: number;
    public orderNo!: string;
    public particular!: string;
    public rate!: number;
    public unit!: number;
    public total!: number;
}

InvoiceLineItem.init( 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    invoiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orderNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    particular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'invoice_line_items',
     timestamps: false,
  }
);

export { InvoiceLineItem };