import { IUser } from "../model/user.ts";

let users: Array<IUser> = [{
  id: "1",
  name: "Naruto Uzumaki",
  email: "naruto.uzumaki@viladafolha.com.br",
  create_at: new Date("2020-05-13"),
  update_at: new Date("2020-05-13"),
}, {
  id: "2",
  name: "Uchira Sasuke",
  email: "sasuke.uchira@akatsuki.com.br",
  create_at: new Date("2020-05-13"),
  update_at: new Date("2020-05-13"),
}, {
  id: "3",
  name: "Monkey D. Luffy",
  email: "monkey.d.luffy@goingmerry.com.br",
  create_at: new Date("2020-05-13"),
  update_at: new Date("2020-05-13"),
}, {
  id: "4",
  name: "Izuku Midoriya",
  email: "izuku.midoriya@heroes.com.br",
  create_at: new Date("2020-05-13"),
  update_at: new Date("2020-05-13"),
}];

const getUsers = ({ response }: { response: any }) => {
  response.body = users;
};
