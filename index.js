const express =require("express");//para usar la dependecnia instalada, FRAMEWORK para crear la API
const app = express();//creamos una instancia de express

app.set('view engine', 'ejs');//motor de plantillas
app.set('views', path.join(__dirname, 'views'));//ruta de las vistas
app.use(express.static(path.join(__dirname, 'public')));//archivos estaticos

//.get función para aasignar de tipo get las vas a atender haciendo la función de acuerdo a los 3 parametros
app.get("/",(req,res,next) => {
//req: datos del cliente
//res: objeto respuesta al cliente
//next: encadenar funciones 
console.log(req);
res.send("Hellow world!");
});
app.get("/pokemon", (req,res,next)=>{
    res.json({nombre: "Catalina",  edad:"21"});
});


//inicializar servidor
app.listen(3000, ()=> {//se ejecutará en el puerto 3000
    console.log("Server is running...");
});