module.exports = function(sequelize, DataTypes){
  return sequelize.define('host', {
    description: DataTypes.STRING,
    status:      DataTypes.INTEGER,
    avaliablity: DataTypes.FLOAT
  }, {
    instanceMethods: {
      isServerUp: function(){
        return this.status == 3;
      },
      getTextStatus: function(){
        return conf.CactiStatus[this.status]
      }
    }
  });
}
