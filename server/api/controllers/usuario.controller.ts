import { AppDataSource, Conecting } from '@/server/api/config/conection.entity';
import { Usuario } from "../entities/usuario.entity";

export class UsuarioController {

    async createUser(name: string) {
        try {
            const newUser = new Usuario();
            newUser.first_name = name;
            if (!name) {
                throw new Error('O nome é obrigatório');
            }
            await AppDataSource.manager.save(newUser);

            return newUser;
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        //return AppDataSource.manager.find(Usuario)
        const userRepository = AppDataSource.getRepository(Usuario);
        return userRepository.find();
    }
}

/* Conecting.then(() => {
    console.log("Data Source has been initialized!: Success");

    const userControlador = new UsuarioController();

    // Criar um novo usuário
    userControlador.createUser("Rafa")
        .then(newUser => {
            console.log("New user, Concluid!:", newUser);
        })
        .catch(error => {
            console.error("Erro ao criar usuário2:", error);
        });

    // Obter todos os usuários
    userControlador.getAll()
        .then(allUsers => {
            console.log("Todos os usuários:", allUsers);
        })
        .catch(error => {
            console.error("Erro ao obter usuários:", error);
        });
})
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    }); */