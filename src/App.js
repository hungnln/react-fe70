import logo from './logo.svg';
import './App.css';
// import DemoClassComponent from './DemoComponent/DemoClassComponent';
// import DemoFunctionComponent from './DemoComponent/DemoFunctionComponent';
// import BaiTapDungLayout from './BaiTapDungLayout/BaiTapDungLayout';
// import DataBinding from './DataBinding/DataBinding';
// import HandlingEvent from './HandlingEvent/HandlingEvent';
// import EventHandler from './EventHandler/EventHandler';
// import LoginForm from './EventHandler/LoginForm';
import StyleComponent from './StyleComponent/StyleComponent';
import BaiTapChonXe from './StateDemo/BaiTapChonXe/BaiTapChonXe';
import BaiTapGiamFont from './StateDemo/BaiTapGiamFont/BaiTapGiamFont';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DemoProps from './Props/DemoProps/DemoProps';
import BaiTapQLSP from './Props/BaiTapQLSP/BaiTapQLSP';
import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet/BaiTapXemChiTiet';
import CarStore from './Props/CarStore/CarStore';
import DemoPropsChildren from './Props/DemoPropsChildren/DemoPropsChildren';
import BaiTapChonXeRedux from './DemoRedux/BaiTapChonXeRedux/BaiTapChonXeRedux';
import BaiTapQuanLyNguoiDung from './DemoRedux/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung';
import ReactLifeCycle from './ReactLifeCycle/ReactLifeCycle';
import AxiosDemo from './AxiosDemo/AxiosDemo';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import HeaderHome from './Components/HeaderHome/HeaderHome';
import Detail from './pages/Detail/Detail';
import AdminIndex from './pages/Admin/AdminIndex/AdminIndex';
import HookUseState from './pages/HookReact/HookUseState/HookUseState';
import HookUseEffect from './pages/HookReact/HookUseEffect/HookUseEffect';
import ParentComponent from './pages/HookReact/HookUseCallBack/ParentComponent';
import HookUseMemo from './pages/HookReact/HookUseMemo/HookUseMemo';
import HookUseRef from './pages/HookReact/HookUseRef/HookUseRef';
import HookRedux from './pages/HookReact/HookRedux/HookRedux';
import ToDoList from './pages/HookReact/ToDoList/ToDoList';
import DemoHOCModal from './pages/HOC/DemoHOCModal/DemoHOCModal';
import ModalHOC from './pages/HOC/DemoHOCModal/ModalHOC';
import { HomeTemplate } from './templates/HomeTemplate';
import { UserTemplate } from './templates/UserTemplate';
import { AdminTemplate } from './templates/AdminTemplate';
import DemoAntd from './pages/DemoAntd/DemoAntd';
import { history } from './util/setting'
function App() {
  return (
    <Router history={history}>
      {/* <HeaderHome /> */}
      <Switch>
        <HomeTemplate path={'/home'} component={Home} />
        <HomeTemplate exact path={'/contact'} component={Contact}></HomeTemplate>
        <UserTemplate exact path={'/login'} component={Login}></UserTemplate>
        <UserTemplate exact path={'/register'} component={Register}></UserTemplate>
        <HomeTemplate exact path={'/about'} component={About}></HomeTemplate>
        <HomeTemplate exact path={'/detail/:id'} component={Detail}></HomeTemplate>
        <AdminTemplate exact path={'/admin'} component={AdminIndex}></AdminTemplate>
        <HomeTemplate exact path={'/'} component={Home} ></HomeTemplate>
        <HomeTemplate exact path={'/hookusestate/sđs'} component={HookUseState} ></HomeTemplate>
        <HomeTemplate exact path={'/hookuseeffect'} component={HookUseEffect} ></HomeTemplate>
        <HomeTemplate exact path={'/hookusecallback'} component={ParentComponent}></HomeTemplate>
        <HomeTemplate exact path={'/hookusememo'} component={HookUseMemo}></HomeTemplate>
        <HomeTemplate exact path={'/hookuseref'} component={HookUseRef}></HomeTemplate>
        <HomeTemplate exact path={'/hookredux'} component={HookRedux}></HomeTemplate>
        <HomeTemplate exact path={'/todolist'} component={ToDoList}></HomeTemplate>
        <HomeTemplate exact path={'/demohocmodal'} component={DemoHOCModal}></HomeTemplate>
        <HomeTemplate exact path={'/demoantd'} component={DemoAntd}></HomeTemplate>
      </Switch>
      <ModalHOC />
    </Router>

  );
}

export default App;
