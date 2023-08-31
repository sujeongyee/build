import { Route, Routes } from "react-router-dom"
import EnMain from './enMain/EnMain';
import HeaderFooterAd from "./component/HeaderFooterAd";
import HeaderFooterUs from "./component/HeaderFooterUs";
import User from "./userMain/User";
import User1 from "./userMain/User1";
import Admin from "./adminMAin/Admin";
import HeaderFooterEn from "./component/HeaderFooterEn";
import Main from "./main/Main";
import MainInfo from "./main/MainInfo";
import UserList from "./userMain/UserAnnoList";
import UserApply from "./userMain/UserApply";
import UserInQurylist from "./userMain/UserInQurylist";
import UserAnnoList from "./userMain/UserAnnoList";

import MainUser from "./userMain/MainUser";
import "./userMain/client-main-pro.css";

import NoticeWrite from "./adminMAin/NoticeWrite";
import UserInQuryWrite from "./userMain/UserInQuryWrite";
import UserInQuryDetail from "./userMain/UserInQuryDetail";

const menu = [
    { title : 'Home', link : '/' },
    { title : 'Page1', link : 'page1' },
    { title : 'Page2', link : 'page2' },
    { title : 'Page3', link : 'page3' },
  ];

function App() {
    return (

        <Routes>
            <Route element={<Main/>}>
            <Route path="/" element={<MainInfo/>}/>
            </Route>
            
            <Route element={<HeaderFooterEn />}>{/* 엔지니어 페이지 */}

                <Route path='/engineer' element={<EnMain />} />
            </Route>

            <Route element={<HeaderFooterAd />}>{/* 관리자 페이지; */}

                <Route path='/admin' element={<Admin/>} />
                <Route path='/admin/noticeWrite' element={<NoticeWrite />} />
            </Route>

            <Route element={<HeaderFooterUs />}>
              
                <Route path='/user1' element={<MainUser/>} />
                <Route path='/user' element={<User/>} />

            
                <Route path='/user/list' element={< UserList/>} />
                <Route path='/user/apply' element={< UserApply/>} />
                <Route path='/user/inQurylist'element={< UserInQurylist/>} />
                <Route path='/user/inQurywrite'element={< UserInQuryWrite/>} />
                <Route path='/user/inQuryDetail'element={< UserInQuryDetail/>} />
                <Route path='/user/annoList'element={< UserAnnoList/>} />

            </Route>


        </Routes>

    )


}


export default App
