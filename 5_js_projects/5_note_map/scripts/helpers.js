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
