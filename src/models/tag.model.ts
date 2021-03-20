import { Model } from "objection";
import User from "./user.model";

class Tag extends Model {
  static tableName = "tags";

  id!: number;
  name!: string;
  createdAt!: string;
  users?: User[];

  static get relationMappings() {
    const User = require("./user.model");

    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "tags.id",
          through: {
            from: "user_tags.tagId",
            to: "user_tags.userId",
          },
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Tag;
export default Tag;
