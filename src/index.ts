import express, {Application, Request, Response} from "express"; 
import morgan from "morgan";
import userRoutes from './routes/users'; 
 
const PORT = process.env.PORT || 3000; 

const app: Application = express(); 

app.use(morgan("tiny")); 

app.use(express.json()); 

app.use('/api/v1/users', userRoutes) 
 
app.get("/ping", async (_req : Request, res: Response) => { 

 res.send({ 

 message: "hello from Una, dee do do", 

 }); 
}); 

  app.get("/bananas", async (_req : Request, res: Response) => { 

    res.send({ 
   
    message: "THIS IS BANANAS", 
   
    }); 
   }); 

   app.get("/apples", async (_req : Request, res: Response) => { 

    res.send({ 
   
    message: "THIS IS APPLES", 
   
    }); 
   });  

   app.get("/music", async (_req : Request, res: Response) => { 

    res.send({ 
   
    message: "sitting on the dock of the bay", 
   
    }); 
   });  

   app.listen(PORT, () => { 

    console.log("Server is running on port  --", PORT); 

    }); 