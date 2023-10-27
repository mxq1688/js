import express, { Request, Response, Application } from 'express'
const app: Application = express()
const PORT = process.env.PORT || 8001

app.get("/", (req: Request, res: Response): void => {
    console.log(req, res);
    
    res.send("Hello Typescript with Node.js!")
})

app.listen(PORT, (): void => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
})