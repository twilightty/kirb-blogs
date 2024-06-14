import Link from "next/link";

import { Anchor, Burger, Group, Header, Image, Footer, Text } from "@mantine/core";

import useStyles from "@/layouts/AppBase/Header/styles";
import { HeaderProps } from "@/layouts/AppBase/Header/types";

import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { NavLink } from "@/components/index";

import getHeaderLinks from "@/helpers/header";

import Routes from "@/config/routes";
import settings from "@/config/settings";

export default function FooterSearch() {
  const { classes } = useStyles();

  return (
    <Footer height="auto">
        <Group position="center" style={{
            margin: "5px"

        }}>
            <Text>Nghia Tran - 2024</Text>
            <Text>Powered by <a href="https://nextjs.org" style={{
                color: "#69db7c",
                paddingRight: "5px"
            }}>NextJS</a>
                 & 
                 <a href="https://mantine.dev" style={{
                color: "#69db7c",
                paddingLeft: "5px"
            }}>Mantine</a> </Text>
            
            <Text>Served by <a href="https://vercel.com" style={{
                color: "#69db7c"
            }}>Vercel</a>. </Text>
        </Group>
    </Footer>
  );
}

export type { HeaderProps };
