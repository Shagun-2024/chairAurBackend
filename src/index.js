import dotenv from "dotenv";
import { app } from "./app.js";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

/* 
Dotenv configuration with custom pathClaude finished the responseYou said: what is the use ofwhat is the use of dotenv.config({
  path: "./.env",
});7:59 PMClaude responded: dotenv.dotenv.config() loads environment variables from a .env file into process.env, making them accessible throughout your Node.js app.
The path option tells dotenv where to find the .env file. In this case, ./.env means "look for .env in the current working directory."
Why specify the path explicitly?
By default, dotenv already looks for .env in the current working directory, so dotenv.config() alone would work the same here. But specifying the path is useful when:

Your .env file is in a different directory (e.g., path: "../.env" or path: "./config/.env")
You have multiple environments and want to load a specific one (e.g., path: "./.env.production")
You want to make the config location explicit and clear to other developers
*/
dotenv.config({
  path: "./.env",
});


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!!", err);
  });
