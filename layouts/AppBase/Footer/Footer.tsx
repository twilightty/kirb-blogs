import { Footer, Group, Text } from "@mantine/core";

import { HeaderProps } from "@/layouts/AppBase/Header/types";

export default function FooterSearch() {
  return (
    <Footer
      height="auto"
      style={{
        position: "static",
      }}
    >
      <Group
        position="center"
        style={{
          margin: "5px",
        }}
      >
        <Text>Nghia Tran - 2024</Text>
        <Text>
          Powered by{" "}
          <a
            href="https://nextjs.org"
            style={{
              color: "#69db7c",
              paddingRight: "5px",
            }}
          >
            NextJS
          </a>
          &
          <a
            href="https://mantine.dev"
            style={{
              color: "#69db7c",
              paddingLeft: "5px",
            }}
          >
            Mantine
          </a>{" "}
        </Text>

        <Text>
          Served by{" "}
          <a
            href="https://vercel.com"
            style={{
              color: "#69db7c",
            }}
          >
            Vercel
          </a>
          .{" "}
        </Text>
      </Group>
    </Footer>
  );
}

export type { HeaderProps };
