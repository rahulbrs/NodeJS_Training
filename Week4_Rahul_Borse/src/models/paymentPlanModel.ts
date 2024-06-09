import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { v4 as uuidv4 } from 'uuid';

interface PaymentPlanAttributes {
    id?: string;
    sowId:string;
    customerId:string;
    plannedInvoiceDate:Date;
    totalActualAmount:number;
  
}

class PaymentPlan extends Model<PaymentPlanAttributes> implements PaymentPlanAttributes {
    public id!: string;
    public sowId!: string;
    public customerId!: string;
    public plannedInvoiceDate!: Date;
    public totalActualAmount!: number;
}

PaymentPlan.init( 
  {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      sowId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customerId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      plannedInvoiceDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      totalActualAmount:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  },
  {
    sequelize,
    tableName: 'payment_plans',
     timestamps: false,
  }
);

export { PaymentPlan };