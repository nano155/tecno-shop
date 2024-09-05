"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
// import { AuthRoutes } from "./user/routes";
// import { ProductRoutes } from "./product/routes";
// import { CartRoutes } from "./cart/routes";
// import { PaymentsRoutes } from "./payment/routes";
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        // router.use('/api/users', AuthRoutes.routes)
        // router.use('/api/products', ProductRoutes.routes)
        // router.use('/api/carts', CartRoutes.routes)
        // router.use('/api/payments', PaymentsRoutes.routes)
        return router;
    }
}
exports.AppRoutes = AppRoutes;
//# sourceMappingURL=routes.js.map