import profile from "./images/me_01.jpg";
import closes from "./images/close.png";
import qrwat from "./images/qrcode.svg";
import buyme from "./images/bmc_qr.png" ;
import line_knok from "./images/ลายกนก.png";
import phompay from "./images/phompay.png";
import facebook from "./images/facebook.svg";
import instar from "./images/instagram.svg";
import linkin from "./images/linkedin.svg";
import "./App.css";

const image_schd = [require('./images/hands.png'), require('./images/rice.png'),require('./images/monk.png'),require('./images/bowl.png')]
const sup_mom = ["ฝั่งมารดา","นาง ประไพ   พันธุเดช (ยาย)" ,"นางสาว วรนาถ   พันธุเดช (มารดา)"].map((sup_mom) => (<h2>{sup_mom}<br /></h2>));
const sup_dad = ["ฝั่งบิดา","นาง สำเนาว์   จันทสิทธิ์ (ย่า)","นาย สิน   จันทสิทธิ์ (ปู่) ","นาง จิระนันท์   จันทสิทธิ์ (ป้า)", "นาย กฤษณะ   จันทสิทธิ์ (บิดา)"].map((sup_dad) => (<h2>{sup_dad}<br /></h2>));
const sup_other = ["และ เพื่อนๆ พี่น้อง ญาติๆ","ท่านผู้เจริญทั้งหลาย ทั้งที่รู้จัก และ ไม่รู้จักทั้งหลาย",].map((sup_other) => (<p>{sup_other}<br /></p>));

const btn_buyme = () => {
  document.getElementById("phompay").style.visibility = 'hidden';
}

function App() {
  return (
    <div className="container">
      <section className="header_01">
        <div className="sub_header_01">
          <img className="profile_01" src={profile} alt="thename" />
          <section >
            <h1>วันเสาร์ที่ ๒๙ มิถุนายน ๒๕๖๗</h1>
            <h2>(แรม ๘ ค่ำ เดือน ๗)</h2>
            <div className="schedule_">
              <img className="icon_schd" src={image_schd[0]} alt="ปลงผมนาค" />
              <h1>๑๔.๐๐<br/> ปลงผมนาค, ทำขวัญนาค</h1>
            </div>
          </section>
          <section>
            <h1>วันอาทิตย์ที่ ๓๐ มิถุนายน ๒๕๖๗</h1>
            <h2>(แรม ๙ ค่ำ เดือน ๗)</h2>
            <div className="schedule_">
              <img className="icon_schd" src={image_schd[1]} alt="ทำบุญเช้า" />
              <h1>๐๗.๐๐ <br/> ถวายภัตตาหารเช้าแด่พระภิกษุสงฆ์</h1>
            </div>
            <div className="schedule_">
              <img className="icon_schd" src={image_schd[2]} alt="บวชสาย" />
              <h1>๐๘.๐๐ <br/> นำนาคเข้าพิธีอุปสมบท</h1>
            </div>
            <div className="schedule_">
              <img className="icon_schd" src={image_schd[3]} alt="ถวายเพล" />
              <h1>๑๑.๐๐ <br/> ถวายภัตตาหารเพลแด่พระภิกษุสงฆ์</h1>
            </div>
          </section>
        </div>
        <div className="sub_header_02">
          <div className="fullname">
            <h1>ขอเชิญนายทุนทุกๆท่านเข้าร่วมงานอุปสมบทเราเอง</h1>
            <h2 className="namess">นาย ธรรมรัต จันทสิทธิ์ (โนเนม)</h2>
          </div>
          <div className="location_01">
            <h1>ณ วัดท่าศาลา</h1>
            <h2>ต.รำพัน อ.ท่าใหม่ จ.จันทบุรี</h2>
            <img style={{ width:"30%" }} src={line_knok} alt="footer" />
          </div>
        </div>
      </section>
      <section className="body_01">
        <div className="supported">
          <div className="support">
            <h1>SUPPORTED BY</h1> <br />
            {sup_mom} <br />
            {sup_dad} <br /> <br />
            {sup_other} <br />
          </div>
        </div>
        <div className="qrcode">
            <img src={qrwat} alt="qrwat"  />
        </div>
      </section>
      <section className="footer_01">
        <div className="discourse">
          <hr />
          <p>
            ...กรรมใดที่กระผมเคยล่วงเกินท่านๆไป <br />
            ไม่ว่าจะด้วย กายกรรมก็ดี วจีกรรมก็ดี มโนกรรมก็ดี <br />
            อย่าจองเวรกูเลย ปล่อยกูไปเถอะสู <br />
            กราบ ๑ กราบ ๒ กราบ ๓... <br />
            🙇‍♂️
          </p>
        </div>
        <div className="map_Nphomp">
          <div className="map_wat">
          <p> ขออภัย หากมิได้มากราบเชิญด้วยฉันตัวเอง นะจ๊ะ นะจ๊ะ </p>
            <iframe
              className="wat"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.0211891569634!2d101.91074907575228!3d12.646614521918721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31037be48f6d3491%3A0x74b86398c45e451a!2sWat%20Tha%20Sala!5e0!3m2!1sen!2sth!4v1708570100775!5m2!1sen!2sth"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="wat"
              target="blank"
            ></iframe>
          </div>
          
        </div>
        <div className="flexbox-a">
          <a
            href="https://www.facebook.com/profile.php?id=100016860340699"
            id="facebook"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">
              <img src={facebook} alt="Facebook" />
            </button>
          </a>
          <a
            href="https://www.instagram.com/thename.co.th/?hl=th"
            id="instargram"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">
              <img src={instar} alt="ig" />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/thammarat-chanthasit-47143126a/"
            id="linkin"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">
              <img src={linkin} alt="in"/>
            </button>
          </a>
        </div>
        <p1>POWERED LIFE BY MONEY || CREATED BY GETASOHARD</p1>
      </section>
      <section className="phompay" id="phompay">
        <button className="btn_01" onClick={btn_buyme} > 
        <img src={closes} alt="x" style={{ padding:"0",background:"#ffffff00", margin:"2px 0", width:"13%" }} /> Close </button>
        <img src={phompay} alt="phompay" id="phompay_1" />
        <a href="https://buymeacoffee.com/thammarat2i" target="blank">
          <img src={buyme} alt="bmc" />
        </a>
        <p>BUY ME A COFFEE !! ☕</p>
      </section>
    </div>
  );
}

export default App;
