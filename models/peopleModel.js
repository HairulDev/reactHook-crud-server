import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes} = Sequelize;

const People = db.define('peoples',{
    firstName: {
        type: DataTypes.STRING
    },
    hobi: {
        type: DataTypes.STRING
    },
    dob: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default People;