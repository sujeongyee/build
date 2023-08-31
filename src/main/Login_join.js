import { useEffect, useState } from 'react';
import './Login_join.css'

function Login_join() {


  const toggle = () => {
    const container = document.getElementById('container');
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
  };


  return (
    <>

      <div id="container" className="container sign-in">

        <div className="row">

          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="lj_input-group">
                  <i className='bx bx-mail-send'></i>
                  <div className="input-button-wrapper" style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
                    <input type="text" placeholder="아이디" />
                    <input type="button" value="중복확인" className="button_check"
                      style={{ marginLeft: '7px', color: '#757575', width: 'calc(45%)', border: '1px solid #757575', textAlign: 'center', fontWeight: '800', height: '44px', lineHeight: '10px' }} />
                  </div>
                </div>
                <div className="lj_input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input type="password" placeholder="비밀번호" />
                </div>
                <div className="lj_input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input type="password" placeholder="비밀번호 확인" />
                </div>
                <div className="lj_input-group">
                  <i className='bx bx-mail-send'></i>
                  <input type="text" className="corporate_name" placeholder="회사명" />
                </div>
                <div className="lj_input-group">
                  <i className='bx bx-mail-send'></i>
                  <input type="text" className="ceo_name" placeholder="대표명" />
                </div>
                <div className="lj_input-group">
                  <i className='bx bx-mail-send'></i>
                  <div className="input-button-wrapper" style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
                    <input type="text" className="business_registration_number" placeholder="사업자등록번호" />
                    <input type="button" value="인증하기" className="button_check"
                      style={{ marginLeft: '5px', color: '#757575', width: 'calc(45%)', border: '1px solid #757575', textAlign: 'center', fontWeight: '800', height: '44px', lineHeight: '10px' }} />
                  </div>
                </div>
                <div className="lj_input-group">
                  <i className='bx bx-mail-send'></i>
                  <input type="tel" className="company_contactnumber" placeholder="회사 연락처" />
                </div>
                <div className="lj_input-group">
                  <i className='bx bx-mail-send'></i>
                  <input type="text" className="company_address" placeholder="회사주소" />
                </div>
                <div className="lj_input-group">
                  <i className='bx bx-mail-send'></i>
                  <input type="text" className="contact_name" placeholder="담당자 이름" />
                </div>
                <div className="lj_input-group">
                  <i className='bx bx-mail-send'></i>
                  <input type="email" className="contact_email" placeholder="담당자 이메일" />
                </div>
                <div className="lj_input-group">
                  <i className='bx bx-mail-send'></i>
                  <input type="tel" className="contact_phonenumber" placeholder="담당자 연락처" />
                </div>
                <button style={{ color: 'white' }}>
                  가입하기
                </button>
                <p>
                  <span>
                    이미 계정이 있으신가요?
                  </span>
                  <b onClick={toggle} className="pointer">
                    로그인하러가기
                  </b>
                </p>
              </div>
            </div>
          </div>

          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="lj_input-group">
                  <i className='bx bxs-user'></i>
                  <input type="text" placeholder="아이디" />
                </div>
                <div className="lj_input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input type="password" placeholder="비밀번호" />
                </div>
                <button style={{ color: 'white' }}>
                  로그인하기
                </button>
                <p>
                  <b>
                    아이디 찾기
                  </b>
                  <b>
                    비밀번호 찾기
                  </b>
                </p>
                <p>
                  <span>
                    계정이 없으신가요?
                  </span>
                  <b onClick={toggle} className="pointer">
                    가입하러가기
                  </b>
                </p>
              </div>
            </div>
            <div className="form-wrapper">
            </div>
          </div>
        </div>

        <div className="row content-row">
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2 style={{ color: 'white' }}>
                Welcome
              </h2>
            </div>
            <div className="img sign-in">
            </div>
          </div>

          <div className="col align-items-center flex-col">
            <div className="img sign-up">
            </div>
            <div className="text sign-up">
              <h2 style={{ color: 'white' }}>
                가입하기
              </h2>
            </div>
          </div>

        </div>
      </div>
    </>
  )

}
export default Login_join;