require('dotenv').config();
const express = require('express');
const pool =   require('./db');
console.log("BASE_URL:", process.env.BASE_URL);
console.log(process.env.DATABASE_URL);

const {nanoid} = require('nanoid');
const app = express();

app.use(express.static('public'));

app.use(express.json());

app.post('/shorten' , async(req,res)=>{

    let { original_url } = req.body;

    if (!original_url.startsWith('http://') && !original_url.startsWith('https://')) {
        original_url = 'https://' + original_url;
    }

    const short_url = nanoid(6);

    const BASE_URL = process.env.BASE_URL;

    try{
        await pool.query("INSERT INTO urls (original_url,  short_url) VALUES ($1,$2)" ,[original_url,short_url]);

        res.json({
            short_url : `${BASE_URL}/${short_url}`,
        });
    } 
    catch(err){
        console.error(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.get('/:code' , async(req,res)=>{
    const {code} = req.params;

    console.log("CODE:", code);


    const result = await pool.query(
        "SELECT * FROM urls WHERE short_url = $1", [code]
    );

    console.log("DB RESULT:", result.rows);

    if(result.rows.length === 0){
        return res.status(404).send('URL not found');
    }

    const original = result.rows[0].original_url;
    console.log("REDIRECTING TO:", original);

    res.redirect(original);
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});