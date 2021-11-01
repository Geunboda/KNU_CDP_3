import React, { Fragment, useState, useEffect } from "react";
import { TabContent, TabPane } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_COLOR,
  ADD_COSTOMIZER,
  ROUTER_ANIMATION,
  ADD_MIXlAYOUT
} from "../../../redux/actionType";
const ThemeCustomize = props => {
  const configDB = useSelector(content => content.Customizer.customizer);
  const [activeTab1, setActiveTab1] = useState("1");
  const [layout_type, setLayout_type] = useState(configDB.settings.layout_type);
  const mix_layout = configDB.color.mix_layout;
  const primary_color = localStorage.getItem("primary_color");
  const secondary_color = localStorage.getItem("secondary_color");
  const layout_version = localStorage.getItem("layout_version");
  const layout_animation = "slidefade";
  const color = localStorage.getItem("color");
  const sidebar_type = configDB.settings.sidebar.type;

  const dispatch = useDispatch();

  //set layout_type
  document.body.setAttribute("main-theme-layout", layout_type);
  document.documentElement.dir = layout_type;

  useEffect(() => {
    localStorage.setItem("animation", layout_animation);
    dispatch({ type: ADD_COSTOMIZER });

    dispatch({
      type: ADD_COLOR,
      payload: {
        color,
        primary_color,
        secondary_color,
        layout_version
      }
    });
    dispatch({ type: ROUTER_ANIMATION, payload: layout_animation });

    //set sidebar_type
    document.querySelector(".page-wrapper").className =
      "page-wrapper " + sidebar_type;
    // mix_layout type
    if (mix_layout === "default") {
      document.body.className = layout_version;
    } else {
      document.body.className = mix_layout;
    }
    document.body.className = layout_version;

    // eslint-disable-next-line
  }, [dispatch]);

  const colorChangeTheme = value => {
    if (value === "color-1") {
      localStorage.setItem("color", "color-1");
      localStorage.setItem("layout_version", "light");
      localStorage.setItem("primary_color", "#7e37d8");
      localStorage.setItem("secondary_color", "#fe80b2");
    }
    window.location.reload();
  };

  const handleCustomizerMix = e => {
    console.log(e.target.id);
    e.preventDefault();
    document.querySelectorAll(".customizer-mix li").forEach(item => {
      item.classList.remove("active");
    });
    document.body.className = e.currentTarget.getAttribute("data-attr");
    e.currentTarget.classList.add("active");
    dispatch({
      type: ADD_MIXlAYOUT,
      payload: e.currentTarget.getAttribute("data-attr")
    });
  };

  return (
    <Fragment>
      <div className="customizer-contain">
        <div className="customizer-body custom-scrollbar">
          <TabContent activeTab={activeTab1}>
            <TabPane tabId="1">
              {/* <h6>Light layout</h6> */}
              <ul className="layout-grid customizer-color">
                <li
                  className="color-layout"
                  data-attr="light-1"
                  data-primary="#7e37d8"
                  data-secondary="#1ea6ec"
                  onClick={() => colorChangeTheme("color-1")}
                >
                  <div></div>
                </li>
              </ul>
              <h6 className="">Mix Layout</h6>
              <ul className="layout-grid customizer-mix">
                <li
                  className="color-layout active"
                  data-attr="color-only"
                  onClick={handleCustomizerMix}
                >
                  <div className="header bg-light">
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className="body">
                    <ul>
                      <li className="bg-light sidebar"></li>
                      <li className="bg-light body"></li>
                    </ul>
                  </div>
                </li>
                <li
                  className="color-layout"
                  data-attr="dark-only"
                  onClick={handleCustomizerMix}
                >
                  <div className="header bg-dark">
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className="body">
                    <ul>
                      <li className="bg-dark sidebar"></li>
                      <li className="bg-dark body"></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </Fragment>
  );
};

export default ThemeCustomize;
