import express from 'express';
import client from './db';

const router = express.Router();
router.get("/ping", async (req, res) => {
    const database = await client.query("SELECT 1 + 1").then(() => "up").catch(() => "down");
    res.send({
        environment: process.env.NODE_ENV,
        database,
    });
});

export default router;