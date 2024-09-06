"use strict";
// import path from "path";
// import { envs } from "./config/envs";
// import { AppRoutes } from "./presentation/routes";
// import { Server } from "./presentation/server";
// import { MongoConnect } from "./service/dao/mongo/mongo-connect";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// (() => {
//   main();
// })();
// async function main() {
//   //     const swaggerOptions = {
//   //       definition:{
//   //           openapi:'3.0.1',
//   //           info:{
//   //               title:'Documentacion del poder',
//   //               description:'API pensada para clase de Swagger',
//   //               version:'1.0.0'
//   //           }
//   //       },
//   //       apis:[`./src/docs/**/*.yml`]
//   //   }
//   const port =  process.env.PORT || envs.PORT
//   const server = new Server({
//     port,
//     public_path: path.join(__dirname, "../public"),
//     routes: AppRoutes.routes,
//     routeCors: envs.ROUTE_CORS,
//     //   swaggerOptions:swaggerOptions
//   });
//   try {
//     await MongoConnect.start({
//       mongo_url: envs.MONGO_URL,
//       dbName: envs.DB_NAME,
//     }); // Primera llamada
//   } catch (error) {
//     console.error("Error al conectar a MongoDB", error);
//     return;
//   }
//   console.log(port);
//   server.start();
// }
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.get('/', (_req, res) => {
    return res.send('Express Typescript on Vercel');
});
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map