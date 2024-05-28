import { useState } from "react";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  Toolbar,
  TreeView,
} from "react95";

export default function GlobalHeader() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      style={{
        position: "relative",
      }}
    >
      <Toolbar>
        <Button
          onClick={() => setOpen(!open)}
          active={open}
          style={{ fontWeight: "bold", wordBreak: "keep-all" }}
        >
          DamieLab
        </Button>
        {open && (
          <MenuList
            style={{
              position: "absolute",
              left: "0",
              top: "100%",
              zIndex: 1000,
            }}
            onClick={() => setOpen(false)}
          >
            <a href="/">
              <MenuListItem>
                <span role="img" aria-label="🏠">
                  🏠
                </span>
                <p>Home</p>
              </MenuListItem>
            </a>
            <a href="/profile">
              <MenuListItem>
                <span role="img" aria-label="📸">
                  📸
                </span>
                <p>Profile</p>
              </MenuListItem>
            </a>
            <a href="/about">
              <MenuListItem>
                <span role="img" aria-label="👨‍💻">
                  👨‍💻
                </span>
                <p
                  style={{
                    marginLeft: 80,
                  }}
                >
                  About Me
                </p>
              </MenuListItem>
            </a>
            <Separator />
            <MenuListItem
              disabled
              style={{
                fontSize: 8,
                textAlign: "center",
              }}
            >
              Copyright © 2024. Damie
            </MenuListItem>
          </MenuList>
        )}
        <a href="https://blog.damie.works" target="_blank">
          <Button variant="menu">Blog</Button>
        </a>
        <a href="/projects">
          <Button variant="menu">Projects</Button>
        </a>
        <a href="/now">
          <Button variant="menu">Now</Button>
        </a>
      </Toolbar>
    </AppBar>
  );
}
