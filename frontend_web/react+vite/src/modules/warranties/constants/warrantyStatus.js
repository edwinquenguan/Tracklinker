import { warrantiesIcons } from "../../../assets/icons/mainIcons";

export const warrantyStatusConfig = {
  0: {
    text: "Pendiente",
    color: "bg-red-50",
    textColor: "text-red-700",
    borderColor: "border-red-100",
    icon: warrantiesIcons.incompleteIcon
  },
  1: {
    text: "En Proceso",
    color: "bg-yellow-50",
    textColor: "text-yellow-700",
    borderColor: "border-red-100",
    icon: warrantiesIcons.inprocessIcon
  },
  2: {
    text: "Completada",
    color: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    icon: warrantiesIcons.completeIcon,
  },
};
