import Tag from "../models/tag.model";

class TagsService {
  getTags = () => Tag.query();
}

export default TagsService;
