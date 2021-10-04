import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoute from './routes/user.route'
import {createConnection} from 'typeorm'
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';


const app = express();
const port = process.env.PORT || 3000;
createConnection();
// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
// routes
app.use(userRoute)
//swagger
const swaggerOptions={
    swaggerDefinition:{
        info:{
            title: "Ejemplo",
            version:"1.0.0"
        },
    },
    apis:["./dist/controllers/**.js"]
}
const swaggerDocs=swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
