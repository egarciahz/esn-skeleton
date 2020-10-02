'use strict';
import Sequelize, {
  QueryInterface
} from "sequelize";
/**
 * @param {QueryInterface} queryInterface
 * @param {Sequelize} sequelize
 * 
 * @return {undefined}
 */
async function up(queryInterface, sequelize) {
  await queryInterface.createTable('hellos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: sequelize.DATE
    }
  });
};
/**
 * @param {QueryInterface} queryInterface
 * @param {Sequelize} sequelize
 * 
 * @return {undefined}
 */
async function down(queryInterface, sequelize) {
  await queryInterface.dropTable('hellos');
}
export default {
  up,
  down
};