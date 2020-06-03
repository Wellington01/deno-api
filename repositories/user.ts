import db from "../db/mongodb.ts";
import { IUser } from "../model/user.ts";

class UserRepository {
    private usersCollection = db.collection("users");

    async getAll() {
        const users = await this.usersCollection.find();

        return users;
    }

    async getById(id: string) {
        const user:IUser | undefined = await this.usersCollection.findOne({ _id: { $oid: id } });

        return user;
    }

    async create(user: IUser) {
        user.create_at = new Date();
        user.update_at = new Date();

        const { $oid } = await this.usersCollection.insertOne(user);

        return $oid;
    }

    async update(id: string, user: { name?: string; email?: string }) {
        const updateUser = await this.usersCollection.updateOne(
            { _id: { $oid: id } },
            {
                $set: user,
            },
        );

        return updateUser;
    }

    async delete(id: string) {
        const user = await this.usersCollection.deleteOne({ _id: { $oid: id } });

        return user;
    }
}

export default UserRepository;