import User from "../models/user.model";

class FeedService {
  findUserByPhoneNumber = (phoneNumber: string) => User.query().findOne({ phoneNumber });
}

export default FeedService;
