import { GetUserDto, LoginUserDto, RegisterUserDto } from "../../domain/dtos";
import { UserEntity } from "../../domain/entity/user.entity";
import { UserRepository } from "../../domain/repository";
import { UserService } from "../dao/mongo";



export class UserRepositoryImpl implements UserRepository{

    constructor(
        readonly userService:UserService
    ){}
    getUsers(): Promise<GetUserDto[]> {
        return this.userService.getUsers()
    }
    deteletUsers(): Promise<{id:string, email:string}[]> {
        return this.userService.deteletUsers()
    }
    loggoutUser(token: string): Promise<{ message: string; }> {
        return this.userService.loggoutUser(token)
    }
    
    changeRoleToUser(id:string): Promise<UserEntity> {
        return this.userService.changeRoleToUser(id)
    }
    validateUser(token: string): Promise<Boolean> {
        return this.userService.validateUser(token)
    }
    validateTimeToken(token: string): Promise<{ ok: Boolean; message: string; email?: string | undefined; }> {
        return this.userService.validateTimeToken(token)
    }
    sendChangePassword(email: string): Promise<any> {
        return this.userService.sendChangePassword(email)
    }
    changePassword(password: string, email: string): Promise<string> {
        return this.userService.changePassword(password, email)
    }
    loginUser(loginDto: LoginUserDto): Promise<{ userEntity: UserEntity; token: any; }> {
        return this.userService.loginUser(loginDto)
    }
    registerUser(registerDto: RegisterUserDto): Promise<{ userEntity: UserEntity; token: any; }> {
        return this.userService.registerUser(registerDto)
    }
    renewToken(token: string): Promise<{ ok: Boolean; message?: string; userEntity?: UserEntity; token?: any; }> {
        return this.userService.renewToken(token)
    }
 

}