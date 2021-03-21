import User from "../models/user.model";

const MALE_GENDER_ID = 1;
const FEMALE_GENDER_ID = 2;

class FeedService {
  findUserByPhoneNumber = (phoneNumber: string) => User.query().findOne({ phoneNumber });

  getSuggestions = (user: User) => {
    const subquery = user.$relatedQuery("reactedByUser").select("recipientId");
    if (user.genderId === 1 || user.genderId === 2) {
      return User.query()
        .where("id", "not in", subquery)
        .andWhereNot("id", "=", user.id)
        .andWhere({
          genderId: user.genderId === MALE_GENDER_ID ? FEMALE_GENDER_ID : MALE_GENDER_ID,
        });
    } else {
      return User.query().where("id", "not in", subquery).andWhereNot("id", "=", user.id);
    }
  };
}

export default FeedService;
