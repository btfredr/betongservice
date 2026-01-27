"use client";

import Link from "next/link";
import {useState} from "react";

const navItems = [
    {label: "Hjem", path: "/"},
    {label: "Tjenester", path: "/"},
    {label: "Referanser", path: "/"},
    {label: "Om oss", path: "/"},
    {label: "Kontakt", path: "/"},
];

function Header() {
  return (
    <div>Header</div>
  )
}

export default Header