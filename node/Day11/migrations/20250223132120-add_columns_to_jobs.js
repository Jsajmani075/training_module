


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Jobs',"location",{
       
        allowNull: false,
        type: Sequelize.STRING
      
  });
  await queryInterface.addColumn('Jobs',"experience_level",{
     
      allowNull: false,
      type: Sequelize.INTEGER
    
});
await queryInterface.addColumn('Jobs',"expire_days",{

    allowNull: false,
    type: Sequelize.INTEGER

});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Jobs', 'location');
    await queryInterface.removeColumn('Jobs', 'experience_level');
    await queryInterface.removeColumn('Jobs', 'expire_days');
  }
};
