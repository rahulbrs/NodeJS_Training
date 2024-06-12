import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Book } from './booksModel';
// import { Book } from './booksModel';

interface AuthorAttributes {
  id?: number;
  name: string;
  bio: string; 
  birthdate:Date; 
  isSystemUser: boolean; 
}

class Author extends Model<AuthorAttributes> implements AuthorAttributes {
  public id!: number;
  public name!: string;
  public bio!: string; 
  public birthdate!:Date; 
  public isSystemUser!: boolean; 
}

Author.init( 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isSystemUser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'authors',
     timestamps: false,
  }
);

Book.belongsToMany(Author, {through: 'BookAuthors'})
Author.belongsToMany(Book, {through: 'BookAuthors'})
export { Author };