import User from "../models/user.model";

class LikesService {
  findUserByPhoneNumber = (phoneNumber: string) => User.query().findOne({ phoneNumber });

  getLikedByUser = (user: User) => user.$relatedQuery("reactedByUser").where({ like: true });

  getLikedToUser = (user: User) => user.$relatedQuery("reactedToUser").where({ like: true });
}

export default LikesService;
