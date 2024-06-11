import Link from "next/link";

import { Anchor, Burger, Group, Header, Image } from "@mantine/core";

import useStyles from "@/layouts/AppBase/Header/styles";
import { HeaderProps } from "@/layouts/AppBase/Header/types";

import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { NavLink } from "@/components/index";

import getHeaderLinks from "@/helpers/header";

import Routes from "@/config/routes";
import settings from "@/config/settings";

export default function HeaderSearch({ open, setOpen }: HeaderProps) {
  const { classes } = useStyles();

  return (
    <Header height={settings.headerSize} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger
            opened={open}
            onClick={() => setOpen((o) => !o)}
            size="sm"
            className={classes.burger}
            aria-label="open application menu"
          />
          <Link passHref href={Routes.blog.href}>
            <Anchor className={classes.logoHref}>
              <Image
                src="/me.jpeg"
                alt="me"
                width={40}
                height={40}
                radius="xl"
              />
            </Anchor>
          </Link>
        </Group>

        <Group>
          <Group className={classes.links}>
            {getHeaderLinks()}
            <NavLink
              label="Portfolio"
              activeLinks={["/portfolio"]}
              key="Portfolio"
              link="https://kirbee.tech"
            />
          </Group>
          <ThemeToggle />
        </Group>
      </div>
    </Header>
  );
}

export type { HeaderProps };
