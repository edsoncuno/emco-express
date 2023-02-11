import { DataTypes } from 'sequelize';

import { newSequelize } from '../../shared/infrastructure/NewSequelize';

export const StakeholderModelSequelize = newSequelize.define('Stakeholder', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dni: {
        type: DataTypes.BIGINT
    },
    name: {
        type: DataTypes.STRING
    },
    ruc: {
        type: DataTypes.BIGINT
    },
    type: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'tbl_stakeholder',
    timestamps: false
});