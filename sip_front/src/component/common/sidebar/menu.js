import React from "react";
export const MENUITEMS = [
  {
    title: "안심케어",
    icon: <i className="pe-7s-home pe-lg"></i>,
    path: "/safecare/dashboard",
    type: "sub",
    active: true,
    bookmark: true,
    children: [
      { title: "독거노인 AI 안심케어", type: "sub" },
      { title: "대쉬보드", type: "link", path: "/safecare/dashboard" },
      { title: "위치별 보기", type: "link", path: "/safecare/location" },
      { title: "전체 보기", type: "link", path: "/safecare/overallstatus" },
    ]
  },
  {
    title: "QR",
    icon: <i className="fa fa-qrcode"></i>,
    path: "/qr/location",
    type: "sub",
    active: true,
    bookmark: true,
    children: [
      { title: "QR출입관리", type: "sub" },
      { title: "지도별 보기", type: "link", path: "/qr/location" },
      { title: "전체 보기", type: "link", path: "/qr/overallstatus" }
    ]
  },
  {
    title: "헬스케어",
    icon: <i className="icofont icofont-runner"></i>,
    path: "/health/location",
    type: "sub",
    active: true,
    bookmark: true,
    children: [
      { title: "AI 헬스케어", type: "sub" },
      { title: "경로당별 보기", type: "link", path: "/health/location" },
      { title: "전체 보기", type: "link", path: "/health/overallstatus" }
    ]
  },
  {
    title: "심신케어",
    icon: <i className="fa fa-heart"></i>,
    path: "/mind/location",
    type: "sub",
    active: true,
    bookmark: true,
    children: [
      { title: "AI 심신케어", type: "sub" },
      { title: "경로당별 보기", type: "link", path: "/mind/location" },
      { title: "전체 보기", type: "link", path: "/mind/overallstatus" },
      {
        title: "정서",
        type: "link",
        path: "/mind/emotional",
        visiable: true
      },
      {
        title: "적응",
        type: "link",
        path: "/mind/adaptation",
        visiable: true
      },
      {
        title: "대인관계",
        type: "link",
        path: "/mind/interpersonal",
        visiable: true
      },
      {
        title: "사회적성향",
        type: "link",
        path: "/mind/socialorientation",
        visiable: true
      },
      {
        title: "종합의견",
        type: "link",
        path: "/mind/generalopinion",
        visiable: true
      }
    ]
  },
  {
    title: "화상회의",
    icon: <i className="fa fa-phone-square"></i>,
    path: "/call/chanel",
    type: "sub",
    active: true,
    bookmark: true,
    children: [
      { title: "화상회의", type: "sub" },
      { title: "현재 진행중인 회의", type: "link", path: "/call/chanel" },
      { title: "회의기록", type: "link", path: "/call/history" }
    ]
  }
];
