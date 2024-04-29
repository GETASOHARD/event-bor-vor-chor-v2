import profile from "./images/profile_01.jpg";
import closes from "./images/close.svg";
import half from "./images/half.svg";
import qrwat from "./images/qrcode.svg";
import fb_logo from "./images/facebook.svg"
import ig_logo from "./images/instagram.svg"
import ln_logo from "./images/linkedin.svg"
import buyme from "./images/bmc_qr.png" ;
import line_knok from "./images/ลายกนก.png";
import "./App.css";

const time = ["xx:xx", "xx:xx", "xx:xx", "xx:xx"].map((time) => (<span>{time}<br /></span>));
const events = ["-- No1 --", "-- none --", "-- none --", "-- none --"].map((events) => (<span>{events}<br /></span>));
const sup_mom = ["ฝั่งมารดา","นางสาว วรนาถ   พันธุเดช (มารดา)","นาง ประไพ   พันธุเดช (ยาย)",].map((sup_mom) => (<h2>{sup_mom}<br /></h2>));
const sup_dad = ["ฝั่งบิดา","นาย กฤษณะ   จันทสิทธิ์ (บิดา)","นาง สำเนาว์   จันทสิทธิ์ (ย่า)","นาย สิน   จันทสิทธิ์ (ปู่) ",].map((sup_dad) => (<h2>{sup_dad}<br /></h2>));
const sup_other = ["และ เพื่อนๆ พี่น้อง ญาติๆ","ท่านผู้เจริญทั้งหลาย ทั้งที่รู้จัก และ ไม่รู้จักทั้งหลาย",].map((sup_other) => (<p>{sup_other}<br /></p>));
const btn_buyme = () => {
  document.getElementById("phompay").style.visibility = 'hidden';
}
function App() {
  return (
    <div className="container">
      <div className="header_01">
        <div className="sub_header_01">
          <img className="profile_01" src={profile} alt="thename" />
          <h1>วันอาทิตย์ที่ 30 เดือน มิถุนายน 2567</h1>
          <h2>(แรม 1 ค่ำ เดือน 8)</h2>
          <div className="scheduled">
            <div className="time">{time}</div>
            <div className="half">
              <img src={half} alt="dot" />
            </div>
            <div className="event ">{events}</div>
          </div>
          <p>บวชแล้ว บวชอยู่ บวชต่อ</p>
        </div>
        <div className="sub_header_02">
          <div className="fullname">
            <h1>ขอเชิญนายทุนทุกๆท่านเข้าร่วมงานอุปสมบทเราเอง</h1>
            <h2>นาย ธรรมรัต จันทสิทธิ์ (โนเนม)</h2>
          </div>
          <div className="location_01">
            <h1>ณ วัดท่าศาลา</h1>
            <h2>ต.รำพัน อ.ท่าใหม่ จ.จันทบุรี</h2>
            <img style={{ marginTop: "0em", width:"30%" }} src={line_knok} alt="footer" />
          </div>
        </div>
      </div>
      <div className="body_01">
        <div className="supported">
          <div className="support">
            <h1>SUPPORTED BY</h1> <br />
            {sup_mom} <br />
            {sup_dad} <br /> <br />
            {sup_other} <br />
          </div>
        </div>
        <div className="qrcode">
          <img src={qrwat} alt="qrwat" />
        </div>
      </div>
      <div className="footer_01">
        <div className="discourse">
          <hr />
          <p>
            ...กรรมใดที่กระผมเคยล่วงเกินท่านๆไป <br />
            ไม่ว่าจะด้วย กายกรรมก็ดี วจีกรรมก็ดี มโนกรรมก็ดี <br />
            อย่าจองเวรกูเลย ปล่อยกูไปเถอะสู <br />
            กราบ 1 กราบ 2 กราบ 3... <br />
            🙇‍♂️
          </p>
        </div>
        <div className="map_Nphomp">
          <div className="map_wat">
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
              <img src={fb_logo} alt="Facebook" />
            </button>
          </a>
          <a
            href="https://www.instagram.com/thename.co.th/?hl=th"
            id="instargram"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">
              <img src={ig_logo} alt="ig" />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/thammarat-chanthasit-47143126a/"
            id="linkin"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">
              <img src={ln_logo} alt="in"/>
            </button>
          </a>
        </div>
        <p1>POWERED LIFE BY MONEY || CREATED BY GETASOHARD</p1>
      </div>
      <div className="phompay" id="phompay">
        <button className="btn_01" onClick={btn_buyme} > 
        <img src={closes} alt="x" style={{ margin:"2px 0", width:"15%" }} /> Close </button>
        <a href="https://buymeacoffee.com/thammarat2i" target="blank">
          <img src={buyme} alt="bmc" />
        </a>
        
        <p>BUY ME A BEER !! 🍺 <br/> OR A COFFEE !! ☕ </p>
      </div>
    </div>
    
  );
}

export default App;
