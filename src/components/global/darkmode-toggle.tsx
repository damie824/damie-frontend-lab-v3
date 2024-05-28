import { useEffect, useState } from "react";
import { Button, MenuList, MenuListItem } from "react95";

export default function DarkmodeToggle() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(
        storedTheme === "dark"
          ? "dark"
          : storedTheme === "system"
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
            : "light"
      );
    }

    const body = document.body;

    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes") {
          setTheme(
            body.getAttribute("data-theme") === "dark" ? "dark" : "light"
          );
        }
      });
    });

    observer.observe(body, {
      attributes: true,
    });
  }, []);
  function handleButton(changeTo: string) {
    let newTheme = changeTo;
    if (changeTo === "system") {
      newTheme =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      localStorage.setItem("theme", "system");
    } else {
      localStorage.setItem("theme", changeTo);
    }
    setTheme(newTheme);

    document.body.setAttribute("data-theme", newTheme);
    setOpen(false);
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {open ? (
        <MenuList style={{ marginBottom: "10px" }}>
          <MenuListItem primary size="sm" onClick={() => handleButton("light")}>
            Light
          </MenuListItem>
          <MenuListItem primary size="sm" onClick={() => handleButton("dark")}>
            Dark
          </MenuListItem>
          <MenuListItem
            primary
            size="sm"
            onClick={() => handleButton("system")}
          >
            System
          </MenuListItem>
        </MenuList>
      ) : (
        <></>
      )}
      <Button
        onClick={() => {
          setOpen(!open);
        }}
        style={{
          fontSize: "20px",
          width: "fit-content",
        }}
        active={open}
      >
        {theme === "light" ? "🌞" : "🌙"}
      </Button>
    </div>
  );
}
