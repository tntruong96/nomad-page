import {
  BorderColorOutlined,
  BorderColor,
  Collections,
  CollectionsOutlined,
  AssignmentInd,
  AssignmentIndOutlined,
} from "@mui/icons-material";
import { SvgIconComponent } from "@mui/icons-material";

export const ListSideBar: {
  id: number;
  title?: string;
  iconOutlined: SvgIconComponent;
  iconFilled: SvgIconComponent;
  href: string;
}[] = [
  {
    id: 1,
    title: "Blog",
    iconOutlined: BorderColorOutlined,
    iconFilled: BorderColor,
    href: "/blog",
  },
  {
    id: 2,
    title: "Gallery",
    iconOutlined: CollectionsOutlined,
    iconFilled: Collections,
    href: "/gallery",
  },
  {
    id: 3,
    title: "My Resume",
    iconOutlined: AssignmentIndOutlined,
    iconFilled: AssignmentInd,
    href: "/resume",
  },
];
