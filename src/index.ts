import server from './server';
import client from './db';

const PORT = process.env.PORT || 3000;


(async () => {
    await client.connect();
    server.listen(PORT, () => {
        console.log(`started at ${PORT}`);
    });
})();