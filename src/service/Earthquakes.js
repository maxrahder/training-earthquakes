import axios from "axios";
import { data } from "./EarthquakesMockData";

const url = "//apis.is/earthquake/is";

const Earthquakes = {
  get() {
    return new Promise((resolve, reject) => {
      axios.get(url).then(response => {
        response.data.results.map(
          item => (item.timestamp = new Date(item.timestamp))
        );
        resolve(response.data.results);
      });
    });
  }
};
export default Earthquakes;
