import './App.css';
import windowsApp from "./app/activate_server.exe"
import MacApp from "./app/activate_server_forMac"
import { Button } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import app1 from './image/app1.png';
import app2 from './image/app2.png';
function App() {
  return (
    <div className="App">
      <h1>パノラマ合成アプリの技術説明</h1>
      <p>
        顕微鏡写真を複数枚のりしろができるように撮影し、それらを自動で重ね合わせるアプリ
      </p>
      <div className="outerbox">
        <div className="box">
          <h2 className='subtitle'>フロントエンドとバックエンド両方デプロイ</h2>
          
          <a href="https://main.d3ouuj8nuafnfz.amplifyapp.com/">https://main.d3ouuj8nuafnfz.amplifyapp.com/</a><br />
          <img src={app1}/>
          <p className='description'>
            上記のアプリケーションだと、データの通信に時間がかかってしまうため重ね合わせに必要以上時間を要する。<br />
            バックエンド部分をlocalhostで動かすことで通信時間の短縮を試みた。
          </p>
        
        </div>

        <div className="box">
          <h2 className='subtitle'>バックエンドはローカル</h2>
          <img src={app2}/>
          <p className='description'>
            バックエンドアプリを立ち上げてフロントエンドアプリのURLをアクセスする。<br />
            上記のFlaskアプリを実行ファイルにすることでPython環境がなくても、ワンクリックでアプリを利用することができる。
          </p>
          <div className="downloadLink">
            <h2 className='subtitle'>ダウンロードはこちら</h2>
            <div className="button">
              <Button variant='contained' style={{marginRight: 10}}>
                <a className='download' href={windowsApp} type="button"><DesktopWindowsIcon className='icon' style={{marginRight: 8}} fontSize="large"/><span>Windows OS</span></a>
              </Button>
              
              <Button variant='contained' style={{textTransform: false}}>
                <a className='download' href={MacApp} type="button"><AppleIcon className='icon' style={{marginRight: 8}}  fontSize="large"/>Mac OS</a>
              </Button>
            </div>
          </div>
          
        </div>      
      </div>
      
    </div>
  );
}

export default App;
