import {Realm} from '@realm/react';
import moment from 'moment';

interface NewUser {
  name: string;
  email?: string;
}

export class User extends Realm.Object<User> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  email!: string;
  joinedOn!: string;

  static generate(newUser: NewUser) {
    return {
      _id: new Realm.BSON.ObjectId(),
      ...newUser,
      joinedOn: moment().toString(),
    };
  }

  static schema = {
    name: 'User',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      email: 'string',
      joinedOn: 'string',
    },
  };
}

interface NewAccount {
  name: string;
  currency: string;
  accountType: number;
  inOverallBalance: boolean;
  balance: number;
  userId: Realm.BSON.ObjectId;
}

export class Account extends Realm.Object<Account> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  currency!: string;
  balance!: number;
  accountType!: number;
  inOverallBalance!: boolean;
  createdOn!: string;
  userId!: Realm.BSON.ObjectId;

  static generate(newAccount: NewAccount) {
    return {
      _id: new Realm.BSON.ObjectId(),
      ...newAccount,
      createdOn: moment().toString(),
    };
  }

  static schema = {
    name: 'Account',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      currency: 'string',
      balance: 'int',
      accountType: 'int',
      inOverallBalance: 'bool',
      createdOn: 'string',
      userId: 'objectId',
    },
  };
}

interface NewTransaction {
  accountId: Realm.BSON.ObjectId;
  amount: number;
  type: number;
  categoryId: Realm.BSON.ObjectId;
  description: string;
  userId: Realm.BSON.ObjectId;
}

export class Transaction extends Realm.Object<Transaction> {
  _id!: Realm.BSON.ObjectId;
  accountId!: Realm.BSON.ObjectId;
  date!: string;
  amount!: number;
  type!: number;
  categoryId!: Realm.BSON.ObjectId;
  description!: string;
  userId!: Realm.BSON.ObjectId;

  static generate(newTransaction: NewTransaction) {
    return {
      _id: new Realm.BSON.ObjectId(),
      ...newTransaction,
      date: moment().toString(),
    };
  }

  static schema = {
    name: 'Transaction',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      accountId: 'objectId',
      date: 'string',
      amount: 'int',
      type: 'int',
      categoryId: 'objectId',
      description: 'string',
      userId: 'objectId',
    },
  };
}

interface NewCategory {
  name: string;
  icon: string;
  color: string;
  type: number;
  userId: Realm.BSON.ObjectId;
}

export class Category extends Realm.Object<Category> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  icon!: string;
  color!: string;
  type!: number;
  createdOn!: string;
  userId!: Realm.BSON.ObjectId;

  static generate(newCategory: NewCategory) {
    return {
      _id: new Realm.BSON.ObjectId(),
      ...newCategory,
      createdOn: moment().toString(),
    };
  }

  static schema = {
    name: 'Category',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      icon: 'string',
      color: 'string',
      type: 'int',
      createdOn: 'string',
      userId: 'objectId',
    },
  };
}

export const schemas = [User, Account, Transaction, Category];
