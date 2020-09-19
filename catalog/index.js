import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import logo from "./static/logo/DD-regular-logo-text.svg";

const pages = [
  {
    path: "/",
    title: "認識 DD",
    content: pageLoader(() => import("./DD-welcome.md"))
  },
  {
    title: '品牌',
    pages: [
      {
        path: '/DD-brand/logo',
        title: 'Logo',
        content: pageLoader(() => import('./DD-brand/brand-logo.md'))
      },
      {
        path: '/DD-brand/color',
        title: '顏色',
        content: pageLoader(() => import('./DD-brand/brand-color.md'))
      },
    ]
  },
  {
    title: "圖表",
    pages: [
      {
        path: '/DD-chart/color',
        title: '圖表用色',
        content: pageLoader(() => import('./DD-Chart/chart-color.md'))
      },
      {
        path: '/DD-chart/purpose',
        title: '圖表用途',
        content: pageLoader(() => import('./DD-Chart/chart-purpose.md'))
      },
    ]
  }
];
const theme = {
  fontFamily: ['Roboto, Helvetica, Arial, "黑體-繁", "Noto Sans TC", "微軟正黑體", sans-serif'],
  pageHeadingBackground: '#616161',
  textColor: '#595959',
  linkColor: '#5CAE77',
  sidebarColorText: '#494949',
  sidebarColorTextActive: '#50AD56',
  navBarTextColor: '#595959'
}

const customStyle = ['/dd.css']


ReactDOM.render(
  <Catalog title="融數基地 DD Story Hub" 
  pages={pages} 
  theme={theme}
  logoSrc={logo}
  styles={customStyle}/>,
  document.getElementById("dd-content")
);
