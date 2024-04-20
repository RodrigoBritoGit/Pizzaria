import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AutenticacaoRequest {
    email: string,
    password: string
}

class AutencicacaoUserService {
    async execute ({email,password}: AutenticacaoRequest) {
        
        //Verificar se o email existe
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })

        if (!user) {
            throw new Error("Usuário ou senha incorretos")
        }

        // Verificar se a senha está correta
        const passwordMatch = await compare(password,user.password);

        if(!passwordMatch){
            throw new Error("Usuário ou senha incorretos")
        }

        // gerar Token JWT 

        return email;
    }
}

export {AutencicacaoUserService};