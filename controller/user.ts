import { IUser } from "../model/user.ts";
import UserRepository from "../repositories/user.ts";

const userRepository = new UserRepository();

const getUsers = async ({ response }: { response: any }) => {
  const users = await userRepository.getAll();

  response.body = users;
};

const getUser = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const user = await userRepository.getById(params.id);

  if (user) {
    response.status = 200;
    response.body = user;
  } else {
    response.status = 404;
    response.body = { message: "User not found." };
  }
};

const addUser = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  const user: IUser = body.value;

  userRepository.create(user);

  response.body = { message: "OK" };
  response.status = 200;
};

const updateUser = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const body = await request.body();
  const updateUser: { name?: string; email?: string } = body.value;

  const user = await userRepository.update(params.id, updateUser);

  if (user) {
    response.status = 200;
    response.body = { message: "OK" };
  }
};

const deleteUser = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const user = await userRepository.delete(params.id);

  response.body = { message: "OK" };
  response.status = 200;
};

export { getUsers, getUser, addUser, updateUser, deleteUser };
