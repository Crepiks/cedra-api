import User from "../models/user.model";
import Tag from "../models/tag.model";
import CreateUserDto from "./dto/create-user.dto";
import UpdateUserDto from "./dto/update-user.dto";

class UsersService {
  getUsers = () => User.query();

  createUser = (payload: CreateUserDto) => User.query().insertAndFetch(payload);

  findUserByPhoneNumber = (phoneNumber: string) => User.query().findOne({ phoneNumber });

  detailUserByPhoneNumber = (phoneNumber: string) =>
    User.query().findOne({ phoneNumber }).withGraphFetched({
      gender: true,
      orientation: true,
      preferences: true,
      tags: true,
    });

  updateUser = (user: User, payload: UpdateUserDto) => user.$query().patchAndFetch(payload);

  deleteUser = (user: User) => user.$query().delete();

  findTagById = (tagId: number) => Tag.query().findById(tagId);

  findTagForUserById = (user: User, tagId: number) => user.$relatedQuery("tags").findById(tagId);

  relateTag = (user: User, tag: Tag) => user.$relatedQuery("tags").relate(tag);

  unrelateTag = (user: User, tagId: number) =>
    user.$relatedQuery("tags").unrelate().findById(tagId);
}

export default UsersService;
