import AccordionDemo from "../components/AccordionDemo";
import AlertDialogDemo from "../components/AlertDialogDemo";
import AspectRatioDemo from "../components/AspectRatioDemo";
import AvatarDemo from "../components/AvatarDemo";
import CheckboxDemo from "../components/CheckboxDemo";

export const tabItems = [
  { label: "AtoC", value: "tab1" },
  { label: "DtoN", value: "tab2" },
  { label: "PtoS", value: "tab3" },
  { label: "TtoZ", value: "tab4" },
];
export const Demos1 = [
  {
    title: "Accordian",
    comp: <AccordionDemo />,
  },
  {
    title: "AlertDialog",
    comp: <AlertDialogDemo />,
  },
  {
    title: "AspectRatio",
    comp: <AspectRatioDemo />,
  },
  {
    title: "Avatar",
    comp: <AvatarDemo />,
  },
  {
    title: "Checkbox",
    comp: <CheckboxDemo />,
  },
];
