import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { v4 as uuidv4 } from 'uuid';

interface InvoiceAttributes {
    id?: number;
    totalInvoiceValue: number;
    sowId:string;
    status: string;
    customerId: string;
    invoiceSentOn: Date
    // paymentReceivedOn: Date
    invoiceVersionNumber: number
}

class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
    public id!: number;
    public totalInvoiceValue!: number;
    public sowId!:string;
    public status!: string;
    public invoiceSentOn!: Date
    public customerId!: string;
    // public paymentReceivedOn!: Date
    public invoiceVersionNumber!: number
}

Invoice.init( 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    totalInvoiceValue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoiceSentOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // paymentReceivedOn: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    invoiceVersionNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'invoices',
     timestamps: false,
  }
);

export { Invoice };