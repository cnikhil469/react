// import Calculator from "./Calculator";
// import UseStateHookAdv from "./UseStateHookAdv";
// import DeleteArray from "./DeleteArrray";
// import ShowData from "./ShowData";
// import SubmitForm from "./SubmitForm";
// import Todo from "./Todo";
// import UseEffectAdv from "./UseEffectAdv";
// import UseEffectAdv2 from "./UseEffectAdv2";
// import UseEffectAdv3 from "./UseEffectAdv3";
// import UseReducerFunc from "./reducer/useReducerFunc";
import UseReducerAdv from "./reducer/useReducerAdv";
function App() {
  const LazyAbout = React.lazy(() => import("./About"));
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects />}>
          <Route path="projectsa" element={<ProjectsA />} />
          <Route path="projectsb" element={<ProjectsB />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UsersData />} />
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
