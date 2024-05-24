import {Sequelize} from 'sequelize';

const sequelize = new Sequelize({
    username: 'postgres',
    host: 'localhost',
    database: 'testdatabase',
    password: 'root',
    port: 5432,
    dialect: 'postgres'
});

sequelize.authenticate()
.then(()=>{
    console.log('Connection established successfully.')
}).catch((error)=>{
    console.log('Unable to connect to the database: ', error);
})

sequelize.sync()
.then(()=>{
    console.log('All Models synchronized with Db.')
}).catch((error)=>{
    console.log('Unable to synchronize models with Db: ', error);
})

export default sequelize;