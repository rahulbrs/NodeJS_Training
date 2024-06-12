import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { User } from './UserModel';
import { Book } from './booksModel';

interface PaymentAttributes {
  id?: number;
  userId: number;
  bookId: number; 
  amount: number;
  status: string;
  createdAt: Date;
}

class Payment extends Model<PaymentAttributes> implements PaymentAttributes {
  public id!: number;
  public userId!: number;
  public bookId!: number; 
  public amount!: number;
  public status!: string;
  public createdAt!: Date;
}

Payment.init( 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: User,
        key: 'id'
      }
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: Book,
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now(),
    },
  },
  {
    sequelize,
    tableName: 'payments',
     timestamps: false,
  }
);
// Payment.belongsTo(User, {foreignKey: 'userId'})
// Payment.belongsTo(Book, {foreignKey: 'bookId'})
export { Payment };