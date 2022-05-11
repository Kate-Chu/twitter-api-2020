'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Identity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Identity.hasMany(models.User, { foreignKey: 'identityId' })
    }
  }
  Identity.init({
    identity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Identity',
    tableName: 'Identities',
    underscored: true
  })
  return Identity
}