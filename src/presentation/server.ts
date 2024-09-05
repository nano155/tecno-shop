import express, { Router } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import { SwaggerAdapter, SwaggerOptions } from "../config";
import path from "path";

interface Options {
  port: number;
  public_path: string;
  routes: Router;
  routeCors: string;
//   swaggerOptions: SwaggerOptions;
}
export class Server {
  public readonly app = express();
  public readonly port;
  public readonly routes;
  public readonly public_path;
  public readonly routeCors;
//   public readonly swaggerOptions;

  constructor(options: Options) {
    this.port = options.port;
    this.public_path = options.public_path;
    this.routes = options.routes;
    this.routeCors = options.routeCors
    // this.swaggerOptions = options.swaggerOptions;

    this.configureMiddleware();
    this.configureRoutes();
  }

  private configureMiddleware() {
    // const { swaggerUiServe, swaggerUiSetup } = SwaggerAdapter.create(
    //   this.swaggerOptions
    // );

    this.app.use(
      cors({
        origin: this.routeCors,
        credentials: true,
      })
    );

    // this.app.use("/apidocs", swaggerUiServe, swaggerUiSetup);
    this.app.use(express.json({ limit: '50mb' })); // Aumentar límite de carga útil
    this.app.use(cookieParser());
    this.app.use(express.urlencoded({ extended: true, limit: '50mb' })); // Aumentar
    this.app.use(express.static(this.public_path));
  }

  private configureRoutes() {
    this.app.use(this.routes);

    this.app.get('*', (req, res) => {
      res.sendFile(path.join(this.public_path, 'index.html'));
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Escuchando en el puerto ${this.port}`);
    });
  }

}