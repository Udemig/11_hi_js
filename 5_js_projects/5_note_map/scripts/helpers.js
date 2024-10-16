import { gotoIcon, homeIcon, jobIcon, parkIcon } from "./constants.js";

// status değerine bağlı olarak dinamik doğru icon'u return eden fonk
function getIcon(status) {
  switch (status) {
    case "goto":
      return gotoIcon;

    case "home":
      return homeIcon;

    case "job":
      return jobIcon;

    case "park":
      return parkIcon;

    default:
      return undefined;
  }
}

export default getIcon;

// status değerinin türkçe karşılığını return eden fonk
export function getStatus(status) {
  switch (status) {
    case "goto":
      return "Ziyaret";

    case "home":
      return "Ev";

    case "job":
      return "İş";

    case "park":
      return "Park";

    default:
      return "Önemsiz";
  }
}
