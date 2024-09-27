"use client";

import {
  Box,
  Drawer,
  List,
  ListItem,
  SvgIcon,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { ListSideBar } from "./config";
import { device } from "@/assests/width-responsive";
import { usePathname } from "next/navigation";

interface ISideBar {
  open: boolean;
  mode?: "dark" | "light";
  drawerWidth: string;
}

const SideBar: FC<ISideBar> = ({ open, mode = "light", drawerWidth }) => {
  const pathname = usePathname();
  const matches = useMediaQuery(`${device.tablet}`);

  /* STATE */
  const [width, setWidth] = useState(drawerWidth);

  useEffect(() => {
    if (matches) {
      setWidth(drawerWidth);
    } else {
      setWidth("50px");
    }
  }, [matches, drawerWidth]);

  return (
    <Box component={"nav"} width={drawerWidth}>
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: width,
          },
        }}
      >
        <List>
          {ListSideBar.map((item) => (
            <ListItem key={item.title} className={`${!matches ? "px-1" : ""}`}>
              <Link href={item.href} className="w-full">
                <Box
                  component={"div"}
                  className={`w-full flex items-center gap-4 p-2 ${
                    !matches && "justify-center"
                  }
                  ${
                    pathname.includes(item.href)
                      ? "border border-solid border-black rounded-lg p-2"
                      : ""
                  }
                  
                  `}
                >
                  <SvgIcon
                    component={
                      mode === "dark" ? item.iconFilled : item.iconOutlined
                    }
                  />
                  {matches ? <p className="font-bold">{item.title}</p> : null}
                </Box>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
