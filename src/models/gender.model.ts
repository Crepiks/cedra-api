import { Model } from "objection";

class Gender extends Model {
  static tableName = "genders";

  id!: number;
  name!: string;
  createdAt!: string;

  static get relationMappings() {
    const User = require("./User");

    return {
      prefer: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "genders.id",
          through: {
            from: "user_genders.genderId",
            to: "user_genders.userId",
          },
          to: "users.id",
        },
      },
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: "genders.id",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Gender;
export default Gender;
