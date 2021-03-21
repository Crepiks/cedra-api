import User from "../models/user.model";

class LikesService {
  findUserByPhoneNumber = (phoneNumber: string) => User.query().findOne({ phoneNumber });

  getLikedByUser = (user: User) => user.$relatedQuery("reactedByUser").where({ like: true });
}

export default LikesService;
