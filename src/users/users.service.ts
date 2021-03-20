import User from "../models/user.model";
import CreateUserDto from "./dto/create-user.dto";

class UsersService {
  getUsers = () => User.query();

  createUser = (payload: CreateUserDto) => User.query().insertAndFetch(payload);
}

export default UsersService;
