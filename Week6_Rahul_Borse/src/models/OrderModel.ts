import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Book } from './booksModel';
import { User } from './UserModel';

interface OrderAttributes {
  id?: number;
  userId: number;
  bookId: number; 
  amount: number;
  createdAt: Date;
}

class Order extends Model<OrderAttributes> implements OrderAttributes {
  public id!: number;
  public userId!: number;
  public bookId!: number; 
  public amount!: number; 
  public createdAt!: Date;
}

Order.init( 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'orders',
     timestamps: false,
  }
);
// Order.belongsTo(User, {foreignKey: 'userId'})
// Order.belongsTo(Book, {foreignKey: 'bookId'})
export { Order };