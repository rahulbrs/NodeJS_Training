import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { User } from './UserModel';
import { Book } from './booksModel';

interface RatingAttributes {
  id?: number;
  userId: number;
  bookId: number; 
  rating: number;
}

class Rating extends Model<RatingAttributes> implements RatingAttributes {
  public id!: number;
  public userId!: number;
  public bookId!: number; 
  public rating!: number;
}

Rating.init( 
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
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'ratings',
     timestamps: false,
  }
);
// Rating.belongsTo(User, {foreignKey: 'userId'})
// Rating.belongsTo(Book, {foreignKey: 'bookId'})
export { Rating };