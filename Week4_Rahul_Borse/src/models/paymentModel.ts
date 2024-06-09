import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { v4 as uuidv4 } from 'uuid';

interface PaymentAttributes {
    id?: string;
    invoiceId: number;
    totalAmount: number;
    receivedOn: Date;
}

class Payment extends Model<PaymentAttributes> implements PaymentAttributes {
    public id!: string;
    public invoiceId!: number;
    public totalAmount!: number;
    public receivedOn!: Date;
}

Payment.init( 
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    invoiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    receivedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'payments',
     timestamps: false,
  }
);

export { Payment };