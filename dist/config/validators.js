"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validators = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const regularExp_1 = require("./regularExp");
const entity_1 = require("../domain/entity");
const envs_1 = require("./envs");
class Validators {
    static validatorMongoId(id) {
        const valid = mongoose_1.default.isValidObjectId(id);
        return valid;
    }
    static validatorsDataTypeRegister(user) {
        const { first_name, last_name, age, email, password } = user;
        let role;
        if (!first_name) {
            throw new Error("first name is missing!");
        }
        if (typeof first_name !== "string") {
            throw new Error("incorrect value in first name!");
        }
        if (!last_name) {
            throw new Error("last name is missing!");
        }
        if (typeof last_name !== "string") {
            throw new Error("incorrect value in last name!");
        }
        if (!email) {
            throw new Error("email is missing!");
        }
        if (!regularExp_1.regularExps.email.test(email)) {
            throw new Error("invalid email!");
        }
        if (!age) {
            throw new Error("age is missing!");
        }
        if (typeof age !== "number") {
            throw new Error("incorrect value in age!");
        }
        if (age < 10 || age > 90) {
            throw new Error("age must be greater than 10 or less than 90");
        }
        if (!password) {
            throw new Error("password is missing!");
        }
        if (password.length < 5) {
            throw new Error("password too short");
        }
        if (email === envs_1.envs.EMAIL_ADMIN && password === envs_1.envs.PASSWORD_ADMIN) {
            role = entity_1.Role.admin;
        }
        else {
            role = entity_1.Role.user;
        }
        return {
            first_name,
            last_name,
            age,
            email,
            password,
            role
        };
    }
    static validatorProductDataType(product) {
        const { title, description, code, price, status, stock, category, owner, thumbnails, } = product;
        if (!title)
            throw new Error("title is required");
        if (typeof title !== "string")
            throw new Error("title value is invalid");
        if (!description)
            throw new Error("description is required");
        if (typeof description !== "string")
            throw new Error("description value is invalid");
        if (!code)
            throw new Error("code is required");
        if (typeof code !== "string")
            throw new Error("code value is invalid");
        if (!price)
            throw new Error("price is required");
        if (typeof price !== "number")
            throw new Error("price value is invalid");
        if (status === null)
            throw new Error("status is required");
        if (typeof status !== "boolean")
            throw new Error("status value is invalid");
        if (!stock)
            throw new Error("stock is required");
        if (typeof stock !== "number")
            throw new Error("stock value is invalid");
        if (!category)
            throw new Error("category is required");
        if (!(category in entity_1.Category))
            throw new Error("invalid category");
        if (!owner) {
            product.owner = 'admin';
        }
        return {
            title,
            description,
            code,
            price,
            status,
            stock,
            category,
            owner,
            thumbnails,
        };
    }
    static validatorUpdateProductDataType(product) {
        const { title, description, code, price, status, stock, category, thumbnails, deletedFile } = product;
        if (title && typeof title !== "string")
            throw new Error("title value is invalid");
        if (title !== undefined && title.length === 0)
            throw new Error("title length is too short");
        if (description && typeof description !== "string")
            throw new Error("description value is invalid");
        if (description !== undefined && title.length === 0)
            throw new Error("title length is too short");
        if (code && typeof code !== "string")
            throw new Error("code value is invalid");
        if (code !== undefined && title.length === 0)
            throw new Error("title length is too short");
        if (price && typeof price !== "number")
            throw new Error("price value is invalid");
        if (price !== undefined && title.length === 0)
            throw new Error("title length is too short");
        if (status && typeof status !== "boolean")
            throw new Error("status value is invalid");
        if (status !== undefined && title.length === 0)
            throw new Error("title length is too short");
        if (stock && typeof stock !== "number")
            throw new Error("stock value is invalid");
        if (stock !== undefined && title.length === 0)
            throw new Error("title length is too short");
        if (category !== undefined && !(category in entity_1.Category))
            throw new Error("invalid category");
        return {
            title,
            description,
            code,
            price,
            status,
            stock,
            category,
            thumbnails,
            deletedFile
        };
    }
    static validatorTicketDataType(ticket) {
        const { code, purchase_datetime, amount, purchaser } = ticket;
        if (!code)
            throw new Error("code is required");
        if (code && typeof code !== "string")
            throw new Error("code value is invalid");
        if (!purchase_datetime)
            throw new Error("purchase_datetime is required");
        if (purchase_datetime && !(purchase_datetime instanceof Date))
            throw new Error("purchase_datetime value is invalid");
        if (!amount)
            throw new Error("amount is required");
        if (amount && typeof amount !== "number")
            throw new Error("amount value is invalid");
        if (!purchaser)
            throw new Error("purchaser is required");
        if (purchaser && typeof purchaser !== "string")
            throw new Error("purchaser value is invalid");
        return { code, purchase_datetime, amount, purchaser };
    }
}
exports.Validators = Validators;
//# sourceMappingURL=validators.js.map