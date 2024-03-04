"use client";
import React,{useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem,  Button} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";



export default function HomeNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {title: "Home", link: '/'},
    {title: "Career", link: '/career'},
    {title: "About", link: '/about'},
    {title: "Technologies", link: '/technologies'},
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="fixed top-0 left-0">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="gap-4">
        <Link color="foreground" href="/">
        <img src="https://i.ibb.co/yNJ23mH/ok7logo.png" alt="ok7logo"
          className="w-8 h-8"
        />
          {/* <p className="font-bold text-white text-inherit">Technical Services</p> */}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/career">
            Careers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/technologies">
            Technologies
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/career" variant="flat">
            Apply Now!
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              color={
                "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
