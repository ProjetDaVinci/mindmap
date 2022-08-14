import * as React from "react";
import { SVGProps } from "react";

const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 3h16M0 8h16M0 13h16" stroke="#fff" strokeWidth={2} />
  </svg>
);

export default Menu;
