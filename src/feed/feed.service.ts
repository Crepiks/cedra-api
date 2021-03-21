import User from "../models/user.model";

class FeedService {
  findUserByPhoneNumber = (phoneNumber: string) => User.query().findOne({ phoneNumber });

  getSuggestions = (user: User) => {
    const subquery = user.$relatedQuery("reactedByUser").select("recipientId");
    return User.query().where("id", "not in", subquery).andWhereNot("id", "=", user.id);
  };
}

export default FeedService;
