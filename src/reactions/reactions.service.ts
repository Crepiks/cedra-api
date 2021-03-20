import User from "../models/user.model";

class ReactionsService {
    detailUserByPhoneNumber = (phoneNumber: string) =>
    User.query().findOne({ phoneNumber }).withGraphFetched({
      gender: true,
      orientation: true,
      preferences: true,
      tags: true,
    });

  getReactedByUser = (user: User) => user.$relatedQuery("reactedByUser");
}

export default ReactionsService;
