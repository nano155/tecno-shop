import { Router } from "express";
import { AuthRoutes } from "./user/routes";
import { ProductRoutes } from "./product/routes";
import { CartRoutes } from "./cart/routes";
import { PaymentsRoutes } from "./payment/routes";



export class AppRoutes{

    static get routes(){
        const router = Router()

        router.use('/api/users', AuthRoutes.routes)
        router.use('/api/products', ProductRoutes.routes)
        router.use('/api/carts', CartRoutes.routes)
        router.use('/api/payments', PaymentsRoutes.routes)

        return router
    }
}