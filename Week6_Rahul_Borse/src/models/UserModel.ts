import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Review } from './ReviewModel';
import { Rating } from './RatingModel';
import { Payment } from './PaymentModel';

interface UserAttributes {
  id?: number;
  username: string;
  password: string; 
  email: string;
  role: 'user'| 'admin'
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string; 
  public email!: string;
  public role!: 'user'| 'admin';
}

User.init( 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      allowNull: false,
      defaultValue: 'user',
    },
  },
  {
    sequelize,
    tableName: 'users',
     timestamps: false,
  }
);
User.hasMany(Review, {foreignKey: 'userId'})
Review.belongsTo(User, {foreignKey: 'userId'})
User.hasMany(Rating, {foreignKey: 'userId'})
Rating.belongsTo(User, {foreignKey: 'userId'})
User.hasMany(Payment, {foreignKey: 'userId'})
Payment.belongsTo(User, {foreignKey: 'userId'})
export { User };