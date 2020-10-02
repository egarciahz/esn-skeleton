'use strict';
import Sequelize, {
  Model,
  DataTypes
} from "sequelize";
/**
 * @class hello
 * 
 * @param {Sequelize} sequelize
 * @param {DataTypes} Types
 * 
 * @return {hello}
 */
export default function helloModelFactory(sequelize, Types) {
  class hello extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hello.init({
    name: Types.STRING
  }, {
    sequelize,
    modelName: 'hello',
    timestamps: true,
  });
  return hello;
};
