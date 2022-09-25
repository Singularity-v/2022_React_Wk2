export default function Header() {
    return (
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
    );
}