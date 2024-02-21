import profile from './images/profile_01.jpg'; 
import half from './images/half.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='header_01'>
        <div className='sub_header_01'>
            <img className='profile_01' src={profile} alt='thename'/>
            <h1>วัน dddd ที่ dd เดือน MMMM ปี yyyy</h1>
            <h2>ขึ้น/ แรม XX ค่ำ เดือน MM</h2>
            <div className='scheduled'>
              <div className='time'>
                <span>xx:xx</span> <br />
                <span>xx:xx</span> <br />
                <span>xx:xx</span> <br />
                <span>xx:xx</span> <br />
              </div>
              <div className='half'>
                <img src={half} alt='dot' />
              </div>
              <div className='event '>
                  <span className='text-blue-400' >-- none --</span> <br />
                  <span>-- none --</span> <br />
                  <span>-- none --</span> <br />
                  <span>-- none --</span> <br />
              </div>
            </div>
        </div>
        <div className='sub_header_02'>

        </div>
      </div>
    </div>
  );
}

export default App;
