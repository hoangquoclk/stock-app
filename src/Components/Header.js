import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCompany, setCompanyName, resetState, setCurrentPage } from '../Actions';

const url = 'http://stockproject123.somee.com/api/home/?mact=';

const Header = () => {
    const dispatch = useDispatch();

    const company = useSelector(state => state.company);

    const companyName = useSelector(state => state.companyName);

    // const currentPage = useSelector(state => state.currentPage);

    const searchRef = useRef();

    const getCompanyName = async() => {
        await axios({
            method: 'get',
            url: url + company
        }).then(({data}) => {
            dispatch(setCompanyName(data));
        });
    }

    useEffect(() => {
        if(company) {
            getCompanyName();
        }
    }, [company]);

    const handleSearch = () => {
        let searchText = searchRef.current.value;
        searchText = searchText.toUpperCase();
        // console.log(searchText);
        dispatch(resetState());
        dispatch(searchCompany(searchText));
        
    }

    const handlePage = () => {
        let radio = document.getElementsByName('analysis');
        radio.forEach((ele) => {
            if(ele.checked) {
                dispatch(setCurrentPage(ele.value));
            }
        })
    }

    return(
        <>
            <header>
                <div className="logo">
                    <img src="https://cafefcdn.com/zoom/600_315/2016/b-c3-a1o-gi-c3-a1-qu-e1-ba-a3ng-c-c3-a1o-b-c3-a1o-cafef-vn-2016-1468288680334.png" alt=""/>
                </div>
                <div className="title-web">
                    <marquee behavior="alternate">Website phân tích môn hệ thống thông tin kế toán</marquee>
                </div>
            </header>

            
            <div className="search">
                
                    <label htmlFor="searchText">Mã</label>
                    <input type="text" id="searchText" placeholder="Company Code" autoComplete="off"
                    ref={searchRef}
                    />
                    {/* <input type="submit" id="btn-search"  /> */}
                    <button id="btn-search" onClick={() => {handleSearch()}}>Tìm kiếm</button>
                
            </div>

            

            {
                companyName ? 
                <div className="company-name">
                    <h1>{companyName}</h1>
                </div> :
                <div className="anhNen">
                </div>
            }
            

            {
                companyName && <div className="choose-analysis">
                <input type="radio" name="analysis" id="trangChinh"
                defaultChecked
                onClick={() => handlePage()}
                 value="trangChinh" />
                <label htmlFor="trangChinh">Theo năm</label>

                <input type="radio" name="analysis" id="quy" value="quy"
                onClick={() => handlePage()} 
                />
                <label htmlFor="quy">Theo quý</label>

                <input type="radio" name="analysis" id="4M" value="4M"
                onClick={() => handlePage()} 
                />
                <label htmlFor="4M">4 M</label>
    
                <input type="radio" name="analysis" id="canslim" value="canslim"
                 onClick={() => handlePage()}
                />
                <label htmlFor="canslim">CANSLIM</label>
                
            </div>
            }
            <hr></hr>
        </>
    );
}

export default Header;