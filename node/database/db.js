import {Sequelize} from "sequelize"

const db = new Sequelize('database_app', 'root', 'Br1359on',{
    host:'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }

})

export default db