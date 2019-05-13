import {Client} from 'pg';

const client = new Client({
    password: 'localdbpassword',
    user: 'localdbuser',
    host: 'postgres',
    database: 'example-db'
});

export default client;