import { Sequelize } from 'sequelize';

export const newSequelize = new Sequelize('db_emco', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'mariadb'
});

export const syncSequelize = async () => {
    try {
        await newSequelize.sync({ alter: true }) // para desarrollo
        // await sequelize.sync() // para production
        console.log('Connection Sequelize has been established successfully.');
    } catch (error: any) {
        console.error('Unable to connect to the database');
    }
}