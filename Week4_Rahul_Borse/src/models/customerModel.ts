import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { v4 as uuidv4 } from 'uuid';

interface CustomerAttributes {
  id?: string;
  organizationId: string;
  msaValidFrom: Date;
  msaValidUpto: Date;
  legalName: string;
  ndaSignedOn: Date;
  shortName: string;
  ndaValidFrom: Date;
  ndaValidUpto: Date;
  addressId: string;
  displayName: string;
  isNdaSigned: boolean;
  isMsaSigned: boolean;
  msaSignedOn: Date;

}

class Customer extends Model<CustomerAttributes> implements CustomerAttributes {
  public id!: string;
  public organizationId!: string;
  public msaValidFrom!: Date;
  public msaValidUpto!: Date;
  public legalName!: string;
  public ndaSignedOn!: Date;
  public shortName!: string;
  public ndaValidFrom!: Date;
  public ndaValidUpto!: Date;
  public addressId!: string;
  public displayName!: string;
  public isNdaSigned!: boolean;
  public isMsaSigned!: boolean;
  public msaSignedOn!: Date;
}

Customer.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    organizationId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    msaValidFrom: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    msaValidUpto: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    legalName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ndaSignedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    shortName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ndaValidUpto: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ndaValidFrom: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isNdaSigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isMsaSigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    msaSignedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'clients',
    timestamps: false,
  }
);

export { Customer };