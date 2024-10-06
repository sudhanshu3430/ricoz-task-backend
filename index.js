if (process.env.ENV === 'dev') require('dotenv').config()
    const express = require('express');
    const cors = require('cors')
    const rootRouter = require('./src/routes/rootRouter')
    
    
    
    const app = express();
    app.use(cors());
    app.use(express.json());
    
    app.use("/api/v1", rootRouter);
    
    app.listen(process.env.PORT);