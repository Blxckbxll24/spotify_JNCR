import express from 'express';
import mysql from "mysql";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());
const conexion = mysql.createConnection({
    server: 'localhost',
    user: 'root',
    password:'',
    database:'spotify'

});

conexion.connect(function(error){
    if (error){
        console.log("error en la bd")
    }else{
        console.log('conectado exitosamente')    }
})

app.listen(8082, () => {
    console.log("servidor inciado");
})