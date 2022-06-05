import React, { Component, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./style.scss";

const logo =
"https://scontent.xx.fbcdn.net/v/t1.15752-9/275694922_433622955188371_138991623189077638_n.png?stp=dst-png_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=BmnQPD1e5rAAX-uRuIM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJg_AOE9hzoNAB9mFTU_HKKdRA5L6HPYUBf0UhEdJtvVQ&oe=62BEA3F8";

const browseMusic = [
  {
    icon: 'musical-notes-outline',
    href: '/',
    title: 'Discover',
  },
  {
    icon: 'id-card-outline',
    href: '/genres',
    title: 'Genres',
  },
  {
    icon: 'stats-chart-outline',
    href: '/top-charts',
    title: 'Top Charts',
  },
  {
    icon: 'albums-outline',
    href: '/albums',
    title: 'Albums',
  },
]

const yourMusic = [
  {
    icon: 'musical-notes-outline',
    href: '/new',
    title: "New's",
  },
  {
    icon: 'headset-outline',
    href: '/type',
    title: "Type's",
  },
  {
    icon: 'podium-outline',
    href: '/top100',
    title: "Top 100",
  },
]

const yourPlaylist = [
  {
    icon: 'musical-note-outline',
    href: '/songs',
    title: 'Songs',
  },
  {
    icon: 'layers-outline',
    href: '/playlist',
    title: 'Public Playlist',
  },
  {
    icon: 'duplicate-outline',
    href: '/add-playlist',
    title: 'Add Playlist',
  },
]

const Leftnav = () => {
  const { pathname } = useLocation();
  return (
    <div className="leftnav">
      <div className="leftnav__wrap">
        <div className="l__logo">
          <img src={logo} alt="" />
          <span className="font-weight-bold">Music App</span>
        </div>
        <ul>
          <span className="leftnav__title">BROWSE MUSIC</span>
          {browseMusic.map((item, index) => (
            <li key={index} className={item.href === pathname ? 'active' : ''}>
              <Link to={item.href}>
                <ion-icon name={item.icon}></ion-icon>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <span className="leftnav__title">YOUR MUSIC</span>
          {yourMusic.map((item, index) => (
            <li key={index} className={item.href === pathname ? 'active' : ''}>
              <Link to={item.href}>
                <ion-icon name={item.icon}></ion-icon>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <span className="leftnav__title">YOUR PLAYLIST</span>
          {yourPlaylist.map((item, index) => (
            <li key={index} className={item.href === pathname ? 'active' : ''}>
              <Link to={item.href}>
                <ion-icon name={item.icon}></ion-icon>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leftnav;
