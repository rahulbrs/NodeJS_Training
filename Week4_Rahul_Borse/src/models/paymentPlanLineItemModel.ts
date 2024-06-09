import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { v4 as uuidv4 } from 'uuid';

interface PaymentPlanLineItemAttributes {
    id?: string;
    sowPaymentPlanId: string
    sowId:string;
    orderId: string
    particular: string
    rate: number
    unit: number
    total: number
}

class PaymentPlanLineItem extends Model<PaymentPlanLineItemAttributes> implements PaymentPlanLineItemAttributes {
    public id!: string;
    public sowPaymentPlanId!: string;
    public sowId!: string;
    public orderId!: string;
    public particular!: string;
    public rate!: number;
    public unit!: number;
    public total!: number;
}

PaymentPlanLineItem.init( 
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    sowPaymentPlanId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderId: {
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
    tableName: 'payment_plan_line_items',
     timestamps: false,
  }
);

export { PaymentPlanLineItem };