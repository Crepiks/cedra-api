import User from "../models/user.model";
import CreateUserDto from "./dto/create-user.dto";
import UpdateUserDto from "./dto/update-user.dto";

class UsersService {
  getUsers = () => User.query();

  createUser = (payload: CreateUserDto) => User.query().insertAndFetch(payload);

  findUserByPhoneNumber = (phoneNumber: string) => User.query().findOne({ phoneNumber });

  updateUser = (user: User, payload: UpdateUserDto) => user.$query().patchAndFetch(payload);

  deleteUser = (user: User) => user.$query().delete();
}

export default UsersService;
