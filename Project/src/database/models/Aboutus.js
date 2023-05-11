module.exports = (sequelize, dataTypes) => {
  let alias = 'Aboutus';
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      name: {
          type: dataTypes.STRING(128),
      },
      description: {
          type: dataTypes.TEXT,
      },
      img: {
          type: dataTypes.STRING(128),
      },
      job: {
        type: dataTypes.STRING(128),
    }
  };
  let config = {
      timestamps: false,
  }
  const AboutUs = sequelize.define(alias, cols, config);

  return AboutUs
};