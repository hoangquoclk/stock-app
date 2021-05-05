import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {setCdkt} from '../Actions';

const urlCDKT = "https://localhost:5001/api/home/kqkd";


const FourM = () => {
    const dispatch = useDispatch();

    const getDataCDKT = async() => {
        const res = await axios({
            method: 'post',
            url: urlCDKT,
            data: {
                name: "MWG",
                year: 2020
            }
        }).then(({data}) => {
            dispatch(setCdkt(data));
        })
    }

    useEffect(() => {
        getDataCDKT();

    }, []);

    return(
        <>
            <div className="can-doi-ke-toan">
                <h1>CÂN ĐỐI KẾ TOÁN</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <button><i className="fas fa-arrow-circle-left"></i> Trước</button>
                                <button>Sau <i className="fas fa-arrow-circle-right"></i></button>
                            </th>
                            <th>
                                2017
                            </th>
                            <th>
                                2018
                            </th>
                            <th>
                                2019
                            </th>
                            <th>
                                2020
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="parentData">
                            <th>Tài sản ngắn hạn</th>
                            <th>
                                10,000,000,000
                            </th>
                            <th>
                                10,000,000,000
                            </th>
                            <th>
                                10,000,000,000
                            </th>
                            <th>
                                10,000,000,000
                            </th>
                        </tr>
                        <tr className="childData">
                            <td>1. Tiền và các khoảng tương đương tiền</td>
                            <td>10,000,000</td>
                            <td>10,000,000</td>
                            <td>10,000,000</td>
                            <td>10,000,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
            <div className="ket-qua-hoat-dong-kinh-doanh">
                <h1>KẾT QUẢ HOẠT ĐỘNG KINH DOANH</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <button><i className="fas fa-arrow-circle-left"></i> Trước</button>
                                <button>Sau <i className="fas fa-arrow-circle-right"></i></button>
                            </th>
                            <th>
                                2017
                            </th>
                            <th>
                                2018
                            </th>
                            <th>
                                2019
                            </th>
                            <th>
                                2020
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="childData">
                            <td>1. Tiền và các khoảng tương đương tiền</td>
                            <td>10,000,000</td>
                            <td>10,000,000</td>
                            <td>10,000,000</td>
                            <td>10,000,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="luu-chuyen-tien-te-gian-tiep">
                <h1>LƯU CHUYỂN TIỀN TỆ GIÁN TIẾP</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <button><i className="fas fa-arrow-circle-left"></i> Trước</button>
                                <button>Sau <i className="fas fa-arrow-circle-right"></i></button>
                            </th>
                            <th>
                                2017
                            </th>
                            <th>
                                2018
                            </th>
                            <th>
                                2019
                            </th>
                            <th>
                                2020
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="childData">
                            <td>1. Tiền và các khoảng tương đương tiền</td>
                            <td>10,000,000</td>
                            <td>10,000,000</td>
                            <td>10,000,000</td>
                            <td>10,000,000</td>
                        </tr>
                        <tr className="parentData">
                            <th>Tài sản ngắn hạn</th>
                            <th>
                                10,000,000,000
                            </th>
                            <th>
                                10,000,000,000
                            </th>
                            <th>
                                10,000,000,000
                            </th>
                            <th>
                                10,000,000,000
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="anh">
                <h1>PHÂN TÍCH 4M DOANH NGHIỆP</h1>
            </div>
            
            <div className="bo-11-chi-so">
                <h1>11 BỘ CHỈ SỐ DOANH NGHIỆP</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Chỉ số
                            </th>
                            <th>
                                2015
                            </th>
                            <th>
                                2016
                            </th>
                            <th>
                                2017
                            </th>
                            <th>
                                2018
                            </th>
                            <th>
                                2019
                            </th>
                            <th>
                                2020
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="parentData">
                            <th>1. Sales</th>
                            <th>10,000,000</th>
                            <th>10,000,000</th>
                            <th>10,000,000</th>
                            <th>10,000,000</th>
                            <th>10,000,000</th>
                            <th>10,000,000</th>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

            <div className="bo-11-chi-so">
                <h1>ĐIỂM DOANH NGHIỆP</h1>
                <table>
                    <thead>
                        <tr>
                            <th rowSpan="2">
                                Chỉ số
                            </th>
                            <th>
                                1
                            </th>
                            <th>
                                3
                            </th>
                            <th>
                                5
                            </th>
                            <th rowSpan="2">
                                Tham chiếu
                            </th>
                            <th rowSpan="2">
                                Tỷ trọng
                            </th>
                            <th rowSpan="2">
                                Điểm TP
                            </th>
                            <th rowSpan="2">
                                Tổng
                            </th>
                        </tr>
                        <tr>
                            <th>30</th>
                            <th>35</th>
                            <th>35</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="parentData">
                            <th>1. Sales</th>
                            <th>10,000,000</th>
                            <th>10,000,000</th>
                            <th>10,000,000</th>
                            <th>10,000,000</th>
                            <th>10,000,000</th>
                            <th>10,000,000</th>
                            <th>10,000,000</th>
                        </tr>
                        <tr className="Tong">
                            <th colSpan="7"></th>
                            <th>10,000,000</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FourM;