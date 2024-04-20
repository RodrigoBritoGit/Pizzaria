import { hash } from "bcryptjs"
import prismaClient  from "../../prisma"

interface UserRequest{
    name: string,
    email: string,
    password: string
}

class CreateUserService {
    async execute({name,email,password}: UserRequest){
        // Verificar se foi enviado o email
        if(!email){
            throw new Error("Email incorreto")
        }

        // Verificar se esse email já está cadastrado na plataforma
        const userAlreadExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        const passwordHash = await hash(password, 8);

        if (userAlreadExists){
            throw new Error("Usúario já cadastrado na plataforma")
        }

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            }
        })

        return user;
    }
}

export {CreateUserService};