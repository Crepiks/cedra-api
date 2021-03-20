import User from "../models/user.model";

class UsersService {
  getUsers = () => User.query();
}

export default UsersService;
