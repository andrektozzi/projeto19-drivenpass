import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));