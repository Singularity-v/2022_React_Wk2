import './index.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-md nav__bg">
        <div className="container ">
          <a className="navbar-brand nav__brand" href="#"><img src="image/me.png" alt=""/></a>
          
          <ul className="navbar-nav col-lg-8 center-nav" >
            <li className="nav-item">
              <a className="nav-link" href="#">關於課程</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">關於我</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">聯絡方式</a>
            </li>
          </ul>

          <a className="navbar-brand nav__brand" href="#"><img src="image/heart.png" alt=""/></a>

        </div>
      </nav>
      <header className="header d-flex align-items-center">
        <div className="container" styles="width:90%;">
          <div className="row" >
                <div className="header_RightWord col-lg-3 col-md-5 header_LeftWord_word">
                    <span className="dot"></span>
                    <div>
                        <br/>
                        <p>這裡是</p>
                        <p>毛毛天地！</p>
                    </div>
                    <div >
                        <br/>
                        <p>是個想要</p>
                        <p>飛上天的兔子</p>
                    </div>

                </div>
                <img src="image/rabbit.png" alt="" className="col-lg-6 col-md-7"/>
                <div className="header_LeftWord col-lg-3 col-md-12">
                    <div className="header_RightWord_word">
                        <p className="stroke" data-stroke="3D建模">3D建模</p>
                        <p className="stroke" data-stroke="網頁設計">網頁設計</p>
                        <p className="stroke" data-stroke="平面設計">平面設計</p>
                        <p className="stroke" data-stroke="APP設計">APP設計</p>
                    </div>

                    <div className="header_LeftWord_btn d-flex align-items-center">
                        <button type="button" className="btn btn_more">More</button>
                        <span className="dot"></span>
                        
                    </div>
                </div>
            </div>
        </div>
      </header>
      <article className="category">
        <div className="container ">
          <div className="big_box">
            <span className="dot"></span>
            <p className="category_title">分類</p>
            <span className="dot"></span>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <a className="category-link" href="#">
                <div className="container_test card">
                  <img src="image/WebApp.png" alt="" />
                  <p className="category_name">網頁設計、APP設計</p>
                  <div className="overlay">
                    <span className="dot"></span>
                    <div className="category_info">
                      <span>- Adobe XD -</span>
                      <span>- Figma -</span>
                      <span>- Visual Studio Code -</span>
                    </div>
  
                    <img src="image/Arrow 1.png" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a className="category-link" href="#">
                <div className="container_test card">
                  <img src="image/UIUX.png" alt="" />
                  <p className="category_name">UI / UX</p>
                  <div className="overlay">
                    <span className="dot"></span>
                    <div className="category_info">
                      <span>- Adobe XD -</span>
                      <span>- Figma -</span>
                    </div>
                    <img src="image/Arrow 1.png" alt=""/>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a className="category-link" href="#">
                <div className="container_test card">
                  <img src="image/Grafic.png" alt="" />
                  <p className="category_name">平面設計</p>
                  <div className="overlay">
                    <span className="dot"></span>
                    <div className="category_info">
                      <span>- Adobe Illustrator -</span>
                      <span>- Adobe Indesign -</span>
                      <span>- Adobe Photoshop -</span>
                    </div>
                    <img src="image/Arrow 1.png" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a className="category-link" href="#">
                <div className="container_test card">
                  <img src="image/Line.jpg" alt="" />
                  <p className="category_name">Line Bot</p>
                  <div className="overlay">
                    <span className="dot"></span>
                    <div className="category_info">
                      <span>- Python -</span>
                      <span>- Spyder -</span>
                      <span>- Colab -</span>
                      <span>- Figma -</span>
                    </div>

                    <img src="image/Arrow 1.png" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a className="category-link" href="#">
                <div className="container_test card">
                  <img src="image/3D.png" alt="" />
                  <p className="category_name">建模作品</p>
                  <div className="overlay">
                    <span className="dot"></span>
                    <div className="category_info">
                      <span>- Blender -</span>
                      <span>- 3Ds Max -</span>
                    </div>

                    <img src="image/Arrow 1.png" alt="" />
                  </div>
                </div>
              </a>
            </div>   
            <div className="col-lg-4 col-md-6">
              <a className="category-link" href="#">
                <div className="container_test card">
                  <img src="image/Other.png" alt="" />
                  <p className="category_name">其他</p>
                  <div className="overlay">
                    <span className="dot"></span>
                    <div className="category_info">
                      <span>- 繪本 -</span>
                      <span>- 動畫 -</span>
                    </div>

                    <img src="image/Arrow 1.png" alt=""/>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
      <footer className="footer">
        <div className="text-center py-5">
          <div className="container">
            <h6>
              &copy; Copyright All rights reserved.
            </h6>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
