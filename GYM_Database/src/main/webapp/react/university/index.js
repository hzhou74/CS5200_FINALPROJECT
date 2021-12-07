import CourseList from "./courses/course-list";
import SectionList from "./sections/section-list";
import CourseEditorForm from "./courses/course-editor-form";
import SectionEditorForm from "./sections/section-editor-form";
import MembershipList from "./MembershipPlan/membership-list";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/membership_plan", "/"]} exact={true}>
                    <MembershipList/>
                </Route>
                {/*<Route path="/membership_plan/:id" exact={true}>*/}
                {/*    <MembershipFormEditor/>*/}
                {/*</Route>*/}

                <Route path={["/courses", "/"]} exact={true}>
                    <CourseList/>
                </Route>
                <Route path="/courses/:id" exact={true}>
                    <CourseEditorForm/>
                </Route>
                <Route path="/courses/:courseId/sections" exact={true}>
                    <SectionList/>
                </Route>
                <Route path="/sections/:sectionId" exact={true}>
                    <SectionEditorForm/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
