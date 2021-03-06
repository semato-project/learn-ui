import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainTemplate from "../../appUIConfig/templates/MainTemplate";
import {routes} from "../../../utils/routes";
import DashboardTeacher from "../Teacher/DashboardTeacher";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import configureStore from "../../../store/configureStore";
import HomePage from "./HomePage";
import Courses from "../Teacher/Courses";
import AddCourse from "../Teacher/AddCourse";
import TeacherCourseDetails from "../Teacher/TeacherCourseDetails";
import PrivateRoute from "../../../utils/routes/PrivateRoute";
import News from "../Teacher/News";
import Publications from "../Teacher/Publications";
import {USER_ROLES} from "../../../utils/types/index";
import StudentCourseDetails from "../Student/StudentCourseDetails";

const {store,persistor} = configureStore();

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
    <MainTemplate>
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.PUBLIC.HOME} component={HomePage}/>
                <PrivateRoute exact acceptedRoles={[USER_ROLES.ROLE_LECTURER.API_NAME]} path={routes.ROLE_LECTURER.DASHBOARD} component={DashboardTeacher}/>
                <PrivateRoute exact acceptedRoles={[USER_ROLES.ROLE_LECTURER.API_NAME]} path={routes.ROLE_LECTURER.COURSES} component={Courses}/>
                <PrivateRoute exact acceptedRoles={[USER_ROLES.ROLE_LECTURER.API_NAME, USER_ROLES.ROLE_STUDENT.API_NAME]} path={routes.ROLE_STUDENT.COURSES} component={Courses}/>
                <PrivateRoute exact acceptedRoles={[USER_ROLES.ROLE_LECTURER.API_NAME]} path={routes.ROLE_LECTURER.COURSE_DETAILS} component={TeacherCourseDetails}/>
                <PrivateRoute exact acceptedRoles={[USER_ROLES.ROLE_STUDENT.API_NAME]} path={routes.ROLE_STUDENT.COURSE_DETAILS} component={StudentCourseDetails}/>
                <PrivateRoute exact acceptedRoles={[USER_ROLES.ROLE_LECTURER.API_NAME]} path={routes.ROLE_LECTURER.ADD_COURSE} component={AddCourse}/>
                <PrivateRoute exact acceptedRoles={[USER_ROLES.ROLE_LECTURER.API_NAME, USER_ROLES.ROLE_STUDENT.API_NAME]} path={routes.ROLE_STUDENT.NEWS} component={News}/>
                <PrivateRoute exact acceptedRoles={[USER_ROLES.ROLE_LECTURER.API_NAME, USER_ROLES.ROLE_STUDENT.API_NAME]} path={routes.ROLE_STUDENT.PUBLICATIONS} component={Publications}/>
            </Switch>
        </BrowserRouter>
    </MainTemplate>
        </PersistGate>
    </Provider>
);

export default Root;
