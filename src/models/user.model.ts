import { Model } from "objection";
import Gender from "./gender.model";
import Tag from "./tag.model";

class User extends Model {
  static tableName = "users";

  id!: number;
  phoneNumber!: string;
  firstName!: string;
  lastName?: string;
  birthday!: string;
  genderId!: number;
  createdAt!: string;
  gender?: Gender;
  preferences?: Gender[];
  tags?: Tag[];

  static get relationMappings() {
    const Gender = require("./gender.model");
    const Orientation = require("./orientation.model");
    const Tag = require("./tag.model");

    return {
      gender: {
        relation: Model.BelongsToOneRelation,
        modelClass: Gender,
        join: {
          from: "users.genderId",
          to: "genders.id",
        },
      },
      orientation: {
        relation: Model.BelongsToOneRelation,
        modelClass: Orientation,
        join: {
          from: "users.orientationId",
          to: "orientations.id",
        },
      },
      preferences: {
        relation: Model.ManyToManyRelation,
        modelClass: Gender,
        join: {
          from: "users.id",
          through: {
            from: "gender_preferences.userId",
            to: "gender_preferences.genderId",
          },
          to: "genders.id",
        },
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: Tag,
        join: {
          from: "users.id",
          through: {
            from: "user_tags.userId",
            to: "user_tags.tagId",
          },
          to: "tags.id",
        },
      },
      reactedByUser: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "users.id",
          through: {
            from: "reactions.initiatorId",
            to: "reactions.recipientId",
            extra: ["like"],
          },
          to: "users.id",
        },
      },
      reactedToUser: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "users.id",
          through: {
            from: "reactions.recipientId",
            to: "reactions.initiatorId",
            extra: ["like"],
          },
          to: "users.id",
        },
      },
    };
  }
}

module.exports = User;
export default User;
