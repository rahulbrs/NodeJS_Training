import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { User } from './UserModel';
import { Book } from './booksModel';

interface ReviewAttributes {
  id?: number;
  userId: number;
  bookId: number; 
  content: string;
}

class Review extends Model<ReviewAttributes> implements ReviewAttributes {
  public id!: number;
  public userId!: number;
  public bookId!: number; 
  public content!: string;
}

Review.init( 
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'reviews',
     timestamps: false,
  }
);

Review.belongsTo(User, {foreignKey: 'userId'})
Review.belongsTo(Book, {foreignKey: 'bookId'})
export { Review };