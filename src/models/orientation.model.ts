import { Model } from "objection";

class Orientation extends Model {
  static tableName = "orientations";

  id!: number;
  name!: string;
  createdAt!: string;

  static get relationMappings() {
    const User = require("./User");

    return {
      user: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: "orientations.id",
          to: "users.orientationId",
        },
      },
    };
  }
}

module.exports = Orientation;
export default Orientation;
