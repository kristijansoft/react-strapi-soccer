import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Main from "../pages/Main";
import MessageFromCeo from "../pages/MessageFromCeo";
import Media from "../pages/Media";
import DepartmentPage from "../pages/DepartmentPage";
import { NewsDetailPage } from "../pages/NewsDetailsPage";
import { NewsPage } from "../pages/NewsPage";
import { OngoingProjects } from "../pages/OngoingProjects";
import { FinishedProjects } from "../pages/FinishedProjects";
import Career from "../pages/Career";
import ProcurementAndStrategicPlan from "../pages/ProcurementAndStrategicPlan";
import { OngoingProjectDetailPage } from "../pages/OngoingProjectDetailPage";
import { FinishedProjectDetailPage } from "../pages/FinishedProjectDetailPage";
import Resources from "../pages/Resources";
import ContactPage from "../pages/Contacts";
import LeaveMessage from "../pages/LeaveMessage";
import CorporateProfile from "../pages/CorporateProfile";
import Gallery from "../pages/Gallery";
import Video from "../pages/Video";
import Divisions from "../pages/Divisions";
import GridPage from "../Component/GridPage";

const MainNavigator = () => {
  const { path } = useRouteMatch();
  console.log(path);
  let routes = (
    <Switch>
      <Route path={`${path}`} exact component={Main}></Route>
      <Route path={`${path}MessagesFromCeo`} component={MessageFromCeo}></Route>
      <Route path={`${path}newsPage/:id`} component={NewsDetailPage}></Route>
      <Route path={`${path}newsPage`} component={NewsPage}></Route>
      <Route path={`${path}Career`} component={Career}></Route>
      <Route path={`${path}Regional`} component={ContactPage}></Route>
      <Route path={`${path}LeaveMessage`} component={LeaveMessage}></Route>
      <Route
        path={`${path}CorporateProfile`}
        component={CorporateProfile}
      ></Route>

      <Route path={`${path}LatestNews`} component={NewsPage}></Route>
      <Route path={`${path}AnnualReport`} component={Resources}></Route>
      <Route path={`${path}PressRelease`} component={NewsPage}></Route>
      {/* 
      <Route
        path={`${path}StrategicPlan`}
        component={ProcurementAndStrategicPlan}
      ></Route> */}
      <Route
        path={`${path}OngoingProjects/:id`}
        component={OngoingProjectDetailPage}
      ></Route>
      <Route
        path={`${path}OngoingProjects`}
        component={OngoingProjects}
      ></Route>
      <Route
        path={`${path}FinishedProjects/:id`}
        component={FinishedProjectDetailPage}
      ></Route>

      <Route
        path={`${path}FinishedProjects`}
        component={FinishedProjects}
      ></Route>

      <Route path={`${path}viewAll`} component={Media}></Route>

      <Route path={`${path}Divisions`} component={Divisions}></Route>
      <Route path={`${path}Gallery`} component={Gallery}></Route>
      <Route path={`${path}Video`} component={Video}></Route>
      <Route path={`${path}grid`} component={GridPage}></Route>

      <Redirect to="/"></Redirect>
    </Switch>
  );

  return <div>{routes}</div>;
};

export default MainNavigator;
