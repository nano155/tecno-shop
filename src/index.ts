import path from "path";
import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";
import { MongoConnect } from "./service/dao/mongo/mongo-connect";

(() => {
  main();
})();

async function main() {
//     const swaggerOptions = {
//       definition:{
//           openapi:'3.0.1',
//           info:{
//               title:'Documentacion del poder',
//               description:'API pensada para clase de Swagger',
//               version:'1.0.0'
//           }
//       },
//       apis:[`./src/docs/**/*.yml`]
//   }

      const server = new Server({
          port:envs.PORT,
          public_path:path.join(__dirname, "../public"),
          routes:AppRoutes.routes,
          routeCors:envs.ROUTE_CORS
        //   swaggerOptions:swaggerOptions
      })

      console.log(envs.ROUTE_CORS);
      
      try {
          await MongoConnect.start({mongo_url:envs.MONGO_URL, dbName:envs.DB_NAME}); // Primera llamada
        } catch (error) {
          console.error('Error al conectar a MongoDB', error);
          return;
        }
    

      server.start()

}