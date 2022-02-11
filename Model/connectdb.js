
import Sequelize from 'sequelize'

const db = new Sequelize('voating', 'root', 'adminpassword', {
  host: 'localhost',
  dialect:  'mysql' ,
  define: {
        timestamps: false
    }

});

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  export default db