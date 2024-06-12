import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Review } from './ReviewModel';
import { Rating } from './RatingModel';
import { Payment } from './PaymentModel';
// import { Author } from './AuthorModel';

interface BookAttributes {
  id?: number;
  bookCode: string;
  title: string; 
  description:string; 
  publishedYear: number; 
  price: number; 
  authors:string; 
  externalId: string;
}

class Book extends Model<BookAttributes> implements BookAttributes {
  public id!: number;
  public bookCode!: string;
  public title!: string; 
  public description!:string; 
  public publishedYear!: number; 
  public price!: number; 
  public authors!:string; 
  public externalId!: string;
}

Book.init( 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    bookCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    publishedYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    authors: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    externalId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'books',
     timestamps: false,
  }
);
Book.hasMany(Review,{foreignKey: 'bookId'});
Review.belongsTo(Book,{foreignKey: 'bookId'});

Book.hasMany(Rating,{foreignKey: 'bookId'})
Rating.belongsTo(Book,{foreignKey: 'bookId'})

Book.hasMany(Payment,{foreignKey: 'bookId'})
Payment.hasMany(Book,{foreignKey: 'bookId'})
export { Book };