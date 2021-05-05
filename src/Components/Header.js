import React from 'react';

const Header = () => {

    return(
        <>
            <header>
                <div className="logo">
                    <img src="https://boxmedia.com.vn/wp-content/uploads/2018/12/cafef.jpg" alt=""/>
                </div>
                <div className="title-web">
                    <marquee behavior="alternate">Website phân tích môn hệ thống thông tin kế toán</marquee>
                </div>
            </header>

            <div className="search">
                <form>
                    <label htmlFor="searchText">Mã</label>
                    <input type="text" id="searchText" placeholder="MWG" autoComplete="off"/>
                    <input type="submit" value="Xem" id="btn-search"/>
                </form>
            </div>

            <div className="company-name">
                <h1>Công ty cổ phần thế giới di động</h1>
            </div>

            <div className="choose-analysis">
                <input type="radio" name="analysis" id="4M" value="4M" defaultChecked/><label htmlFor="4M">4 M</label>
                <input type="radio" name="analysis" id="canslim" value="canslim"/><label htmlFor="canslim">CANSLIM</label>
            </div>
            <hr></hr>
        </>
    );
}

export default Header;