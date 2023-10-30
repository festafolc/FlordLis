import {createPool} from 'mysql2/promise';

const dbConnection = async () => {

    const pool = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'Festafolc1!',
        database: 'FlordLis',
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10,
        idleTimeout: 60000,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0
    });

    return pool;
}

export default dbConnection;