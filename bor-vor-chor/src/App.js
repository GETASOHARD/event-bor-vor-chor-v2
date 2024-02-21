import profile from './images/profile_01.jpg'; 
import half from './images/half.svg' ;
import footer from './images/footer.svg';
import './App.css';

let time = ['xx:xx', 'xx:xx', 'xx:xx', 'xx:xx'].map(time => <span>{time}<br /></span>)
let events = ['-- none --', '-- none --', '-- none --', '-- none --'].map(events => <span>{events}<br /></span>)

function App() {
  return (
    <div className="container">
      <div className='header_01' > 
        <div className='sub_header_01'>
            <img className='profile_01' src={profile} alt='thename' />
            <h1>วัน dddd ที่ dd เดือน MMMM ปี yyyy</h1>
            <h2>ขึ้น/ แรม XX ค่ำ เดือน MM</h2>
            <div className='scheduled'>
              <div className='time'>
                {time}
              </div>
              <div className='half'>
                <img src={half} alt='dot' />
              </div>
              <div className='event '>
                {events}
              </div>
            </div>
            <p>บวชแล้ว บวชอยู่ บวชต่อ</p>
        </div>
        <div className='sub_header_02'>
            <div className='fullname'>
              <h1>ขอเชิญนายทุนทุกๆท่านเข้าร่วมงานอุปสมบทเราเอง</h1>
              <h2>นาย ธรรมรัต   จันทสิทธิ์   (โนเนม)</h2>
            </div>
            <div className='location_01'>
              <h1>ณ วัดท่าศาลา</h1>
              <h2>ต.รำพัน อ.ท่าใหม่ จ.จันทบุรี</h2>
              <img style={{marginTop:'1em'}} src={footer} alt='footer'  />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
