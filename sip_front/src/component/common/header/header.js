import React, { useState, useEffect, useCallback } from "react";
import { AlignCenter, Settings, LogOut, Search } from "react-feather";

import { Form, FormGroup } from "reactstrap";
import { MENUITEMS } from "../sidebar/menu";
import { Link } from "react-router-dom";
const Header = props => {
  // eslint-disable-next-line
  const [rightSidebar, setRightSidebar] = useState(true);
  const [mainmenu, setMainMenu] = useState(MENUITEMS);
  const [searchValue, setsearchValue] = useState("");
  const [searchinput, setSearchinput] = useState(false);
  const [spinner, setspinner] = useState(false);
  // eslint-disable-next-line
  const [searchResult, setSearchResult] = useState(false);
  // eslint-disable-next-line
  const [searchResultEmpty, setSearchResultEmpty] = useState(false);
  const layout_version = localStorage.getItem("layout_version");

  const [mixLayoutBtn, setMixLayoutBtn] = useState(false);

  const [sidebar, setSidebar] = useState("iconsidebar-menu");

  const escFunction = useCallback(event => {
    if (event.keyCode === 27) {
      setsearchValue("");
    }
  }, []);

  useEffect(() => {
    if (layout_version === "light") {
      setMixLayoutBtn(false);
    } else {
      setMixLayoutBtn(true);
    }
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const Customizer = () => {
    if (rightSidebar) {
      setRightSidebar(!rightSidebar);
      document.querySelector(".customizer-contain").classList.add("open");
    } else {
      setRightSidebar(!rightSidebar);
      document.querySelector(".customizer-contain").classList.remove("open");
    }
  };

  const handleSearchKeyword = keyword => {
    keyword ? addFix() : removeFix();
    const items = [];
    if (keyword.length > 0) {
      setsearchValue(keyword);
      setspinner(true);
      setTimeout(function () {
        setspinner(false);
      }, 1000);
    } else {
      setspinner(false);
    }
    mainmenu.filter(menuItems => {
      if (
        menuItems.title.toLowerCase().includes(keyword) &&
        menuItems.type === "link"
      ) {
        items.push(menuItems);
      }
      if (!menuItems.children) return false;
      menuItems.children.filter(subItems => {
        if (
          subItems.title.toLowerCase().includes(keyword) &&
          subItems.type === "link"
        ) {
          subItems.icon = menuItems.icon;
          items.push(subItems);
        }
        if (!subItems.children) return false;
        subItems.children.filter(suSubItems => {
          if (suSubItems.title.toLowerCase().includes(keyword)) {
            suSubItems.icon = menuItems.icon;
            items.push(suSubItems);
          }
          return suSubItems;
        });
        return subItems;
      });
      checkSearchResultEmpty(items);
      setsearchValue(items);
      return menuItems;
    });
  };

  const addFix = () => {
    setSearchResult(true);
    document.querySelector(".Typeahead-menu").classList.add("is-open");
    document.body.classList.add("offcanvas");
  };

  const removeFix = () => {
    setSearchResult(false);
    setsearchValue("");
    document.querySelector(".Typeahead-menu").classList.remove("is-open");
    document.body.classList.remove("offcanvas");
  };

  const checkSearchResultEmpty = items => {
    if (!items.length) {
      setSearchResultEmpty(true);
      document.querySelector(".empty-menu").classList.add("is-open");
    } else {
      setSearchResultEmpty(false);
      document.querySelector(".empty-menu").classList.remove("is-open");
    }
  };

  const openCloseSidebar = sidebartoggle => {
    if (sidebartoggle === "iconsidebar-menu") {
      setSidebar("iconbar-mainmenu-close");
      document
        .querySelector(".iconsidebar-menu")
        .classList.add("iconbar-mainmenu-close");
    } else if (sidebartoggle === "iconbar-mainmenu-close") {
      setSidebar("iconbar-second-close");
      document
        .querySelector(".iconsidebar-menu")
        .classList.add("iconbar-second-close");
      document
        .querySelector(".iconsidebar-menu")
        .classList.remove("iconbar-mainmenu-close");
    } else {
      setSidebar("iconsidebar-menu");
      document
        .querySelector(".iconsidebar-menu")
        .classList.remove("iconbar-second-close");
    }
  };

  const openCloseSearch = () => {
    if (searchinput) {
      setSearchinput(!searchinput);
      document.querySelector(".Typeahead-input").classList.add("open");
    } else {
      setSearchinput(!searchinput);
      document.querySelector(".Typeahead-input").classList.remove("open");
    }
  };

  return (
    <div className="page-main-header">
      <div className="main-header-right">
        <div className="text-center p-l-25">
          <div className="logo-wrapper">
            <Link to="/safecare/dashboard">
              <img
                src={require("../../../assets/images/logo/logo.png")}
                alt=""
                width={100}
              />
            </Link>
          </div>
        </div>
        <div className="mobile-sidebar m-3">
          <div className="media-body text-right switch-sm">
            <label className="switch">
              <AlignCenter
                className="font-primary"
                onClick={() => openCloseSidebar(sidebar)}
              />
            </label>
          </div>
        </div>
        <div className="nav-right col pull-right right-menu">
          <ul className="nav-menus">
            <li>
              <Form
                className="form-inline search-form light"
                action="#javascript"
                method="get"
              >
                <FormGroup>
                  <div className="Typeahead Typeahead--twitterUsers">
                    <div className="u-posRelative">
                      <input
                        className="Typeahead-input form-control-plaintext "
                        id="demo-input"
                        type="text"
                        placeholder="검색"
                        defaultValue={searchValue}
                        onChange={e => handleSearchKeyword(e.target.value)}
                      />
                      <div
                        className={`spinner-border Typeahead-spinner ${
                          spinner === true ? "show" : ""
                        }`}
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <span
                        className="d-sm-none mobile-search"
                        onClick={openCloseSearch}
                      >
                        <Search />
                      </span>
                    </div>
                    <div
                      className="Typeahead-menu custom-scrollbar"
                      id="search-outer"
                    >
                      {searchValue
                        ? searchValue.map((data, index) => {
                            return (
                              <div className="ProfileCard u-cf" key={index}>
                                <div className="ProfileCard-avatar">
                                  {data.icon}
                                </div>
                                <div className="ProfileCard-details">
                                  <div className="ProfileCard-realName">
                                    <Link
                                      to={data.path}
                                      className="realname"
                                      onClick={removeFix}
                                    >
                                      {data.title}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>
                    <div className="Typeahead-menu empty-menu">
                      <div className="tt-dataset tt-dataset-0">
                        <div className="EmptyMessage">
                          Opps!! There are no result found.
                        </div>
                      </div>
                    </div>
                  </div>
                </FormGroup>
              </Form>
            </li>

            {mixLayoutBtn ? (
              <li>
                <Settings
                  onClick={Customizer}
                  className="font-primary onhover-dropdown"
                ></Settings>
              </li>
            ) : (
              <li>
                <Settings
                  onClick={Customizer}
                  className="font-primary onhover-dropdown"
                ></Settings>
              </li>
            )}

            <li>
              <span className="media user-header onhover-dropdown">
                <LogOut className="img-fluid " />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
