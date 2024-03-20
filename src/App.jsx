import { useState , useEffect } from 'react'
import './App.css'
import ImageProfile from './components/ImageProfile';
import Title from './components/Title';
import axios from 'axios';
import moment from 'moment';

function App() {
  const enpoint = 'https://sheetdb.io/api/v1/rjnu11gpps65s';

  
    const [hide, setHide] = useState(false);
    const [data, setdata] = useState([]);
  
    const callAPi = async () =>{
      return axios.get(enpoint).then((response) => {
        const data = response.data
        setdata(data)
      })
    }
    console.log(data)
  
    useEffect( () =>{
      callAPi()
    }, [])
    
    return (
      <>
        <div className="main">
          <div className="leftPort">
            <ImageProfile images="/src/assets/700ff14b-4153-46dd-b9d5-2f42206cfeb9.png" />
  
            <Title title="ณัชผล ละออ">
              <p style={{textTransform: 'uppercase'}}>it support</p>
            </Title>
  
  
            <Title title="Contract">
              <p>{moment("2026/03/20").format("DD/MM/YYYY")}</p>
  
              <p style={{ display: hide ? 'none' : 'block' }}>tel: 0931494591</p>
              <button onClick={() => setHide(!hide)}>{hide ? 'show' : 'hide'}</button>
              <p>Email: natchapol215@gmail.com</p>
            </Title>
  
            <Title title="eduction">
              <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ GPA 3.75 </p>
              <p>มหาลัย</p>
            </Title>
  
          </div>
  
        
  
  
          <div className="rightPort">
  
            <Title title="Profile">
              <p>ผมเป็นคนที่ชอบเกี่ยวกับฮาร์ดเเวร์เเละคอมพิวเตอร์ ผมเป็นคนที่พร้อมจะเรียนรู้สิ่งใหม่ๆ พัฒนาตัวเองได้เสมอ สามารถทำงานเป็นทีมได้ เเละยังต้องการเรียนรู้ประสบการณ์การทำงาน เพื่อต่อยอดในอนาคต</p>
            </Title>
  
  
            <Title title="workExpreience">
              <p>งานพาร์ทไทมน์</p>
              <h6>SF Cinema I Terminal 21 Rama 3</h6>
            </Title>
            
  
            <Title title="skill">
              
              <ul>
                <li>ซ่อมบำรุง</li>
                <li>ประกอบคอมพิวเตอร์</li>
                <li>Blender ( 3D model )</li>
                <li>มีความรับผิดชอบ</li>
                <li>ทำงานเป็นทีม</li>
                <li>ทักษะการปรับตัว</li>
              </ul>
            </Title>
  
  
          </div>
        </div>
  
        <div className="tables">
          <h2>ข้อมูลคนในห้อง</h2>
            {data.map((record) => 
            <div key={record.code}>
  
               {record.code}
                {record.name}
             
             </div>
             )}
        </div>
      </>
    )
  }
  
export default App
