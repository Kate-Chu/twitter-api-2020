'use strict'
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('TweetHashtags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hashtag_id: {
        type: Sequelize.INTEGER
      },
      tweet_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('TweetHashtags')
  }
}
