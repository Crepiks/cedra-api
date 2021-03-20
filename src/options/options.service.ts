import Gender from "../models/gender.model";
import Orientation from "../models/orientation.model";

class OptionsService {
  getGenders = () => Gender.query();

  getOrientations = () => Orientation.query();
}

export default OptionsService;
