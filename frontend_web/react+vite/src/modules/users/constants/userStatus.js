import { usersIcons } from "../../../assets/icons/mainIcons";

export const userStatus = {
  0: {
    text: "Deshabilitado",
    modalType: "enable",
    visibilityIcon: false,
    icon: usersIcons.inactiveCircle,
    styles: "bg-gray-50 text-gray-400 border-gray-400 dark:bg-[#1f2937]",
  },
  1: {
    text: "Activo",
    modalType: "disable",
    visibilityIcon: true,
    icon: usersIcons.activeCircle,
    styles:
      "bg-green-200 text-green-600 border-green-500 dark:text-[#00ff3779] dark:bg-[#00ff151f]",
  },
};
