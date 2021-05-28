import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {setCdkt, setKqhdkd, setLcttgt, setChiSoDN_4M, setDiemDN_4M,
     isLoading, unLoading, setTongDiem, setCurrentPage} from '../Actions';
import Loading from '../Components/Loading';

const urlKQKD = "https://localhost:5001/api/home/kqkd";
const urlCDKT = "https://localhost:5001/api/home/cdkt";
const urlLCTTGT = "https://localhost:5001/api/home/lctt";

const FourM = () => {
    const dispatch = useDispatch();

    const company = useSelector(state => state.company);

    const cdkt = useSelector(state => state.cdkt);

    const kqhdkd = useSelector(state => state.kqhdkd);

    const lcttgt = useSelector(state => state.lcttgt);

    const chiSoDN_4M = useSelector(state => state.chiSoDN_4M);

    const diemDN_4M = useSelector(state => state.diemDN_4M);

    const loading = useSelector(state => state.loading);

    const tongDiem = useSelector(state => state.tongDiem);

    const year_periods = [1, 3, 5];
    const year_proportion = [30, 35, 35];

    const getDataKQHDKD = async(years) => {
        const bigData = [];
        const cdkt_1 = [];
        const cdkt_2 = [];
        const cdkt_3 = [];
        const cdkt_4 = [];
        const cdkt_5 = [];
        const cdkt_6 = [];
        const cdkt_7 = [];
        const cdkt_8 = [];
        const cdkt_9 = [];
        const cdkt_10 = [];
        const cdkt_11 = [];
        const cdkt_12 = [];
        const cdkt_13 = [];
        const cdkt_14 = [];
        const cdkt_15 = [];
        const cdkt_16 = [];
        const cdkt_17 = [];
        const cdkt_18 = [];
        const cdkt_19 = [];
        const cdkt_20 = [];
        const cdkt_21 = [];
        const cdkt_22 = [];
        const cdkt_23 = [];
        
        dispatch(isLoading());

        for(const year of years) {
            var res = await axios({
                method: 'post',
                url: urlKQKD,
                data: {
                    name: company,
                    year: year
                }
            }).then(({data}) => {
                bigData.push(data);
                dispatch(unLoading());
            });
        }

        bigData.map((item, index) => {
            if(index === 0) {
                cdkt_1.push(item[0][0]);
                cdkt_2.push(item[1][0]);
                cdkt_3.push(item[2][0]);
                cdkt_4.push(item[3][0]);
                cdkt_5.push(item[4][0]);
                cdkt_6.push(item[5][0]);
                cdkt_7.push(item[6][0]);
                cdkt_8.push(item[7][0]);
                cdkt_9.push(item[8][0]);
                cdkt_10.push(item[9][0]);
                cdkt_11.push(item[10][0]);
                cdkt_12.push(item[11][0]);
                cdkt_13.push(item[12][0]);
                cdkt_14.push(item[13][0]);
                cdkt_15.push(item[14][0]);
                cdkt_16.push(item[15][0]);
                cdkt_17.push(item[16][0]);
                cdkt_18.push(item[17][0]);
                cdkt_19.push(item[18][0]);
                cdkt_20.push(item[19][0]);
                cdkt_21.push(item[20][0]);
                cdkt_22.push(item[21][0]);
                cdkt_23.push(item[22][0]);
            }
            cdkt_1.push(item[0][1]);
                cdkt_2.push(item[1][1]);
                cdkt_3.push(item[2][1]);
                cdkt_4.push(item[3][1]);
                cdkt_5.push(item[4][1]);
                cdkt_6.push(item[5][1]);
                cdkt_7.push(item[6][1]);
                cdkt_8.push(item[7][1]);
                cdkt_9.push(item[8][1]);
                cdkt_10.push(item[9][1]);
                cdkt_11.push(item[10][1]);
                cdkt_12.push(item[11][1]);
                cdkt_13.push(item[12][1]);
                cdkt_14.push(item[13][1]);
                cdkt_15.push(item[14][1]);
                cdkt_16.push(item[15][1]);
                cdkt_17.push(item[16][1]);
                cdkt_18.push(item[17][1]);
                cdkt_19.push(item[18][1]);
                cdkt_20.push(item[19][1]);
                cdkt_21.push(item[20][1]);
                cdkt_22.push(item[21][1]);
                cdkt_23.push(item[22][1]);
        });
        const data = [cdkt_1, cdkt_2, cdkt_3, cdkt_4, cdkt_5,
            cdkt_6, cdkt_7, cdkt_8, cdkt_9, cdkt_10, cdkt_11, cdkt_12, cdkt_13, cdkt_14,
            cdkt_15, cdkt_16, cdkt_17, cdkt_18, cdkt_19, cdkt_20, cdkt_21, cdkt_22, cdkt_23];
        // console.log(data);
        dispatch(setKqhdkd(data));
    }
    
    const getDataCDKT = async(years) => {
        const bigData = [];
        const cdkt_1 = [];
        const cdkt_2 = [];
        const cdkt_3 = [];
        const cdkt_4 = [];
        const cdkt_5 = [];
        const cdkt_6 = [];
        const cdkt_7 = [];
        const cdkt_8 = [];
        const cdkt_9 = [];
        const cdkt_10 = [];
        const cdkt_11 = [];
        const cdkt_12 = [];
        const cdkt_13 = [];
        const cdkt_14 = [];
        const cdkt_15 = [];
        const cdkt_16 = [];
        const cdkt_17 = [];
        const cdkt_18 = [];
        const cdkt_19 = [];
        const cdkt_20 = [];
        const cdkt_21 = [];
        const cdkt_22 = [];
        const cdkt_23 = [];
        
        dispatch(isLoading());

        for(const year of years) {
            var res = await axios({
                method: 'post',
                url: urlCDKT,
                data: {
                    name: company,
                    year: year
                }
            }).then(({data}) => {
                bigData.push(data);
                dispatch(unLoading());
            });
        }

        bigData.map((item, index) => {
            if(index === 0) {
                cdkt_1.push(item[0][0]);
                cdkt_2.push(item[1][0]);
                cdkt_3.push(item[4][0]);
                cdkt_4.push(item[8][0]);
                cdkt_5.push(item[17][0]);
                cdkt_6.push(item[20][0]);
                cdkt_7.push(item[26][0]);
                cdkt_8.push(item[27][0]);
                cdkt_9.push(item[35][0]);
                cdkt_10.push(item[45][0]);
                cdkt_11.push(item[48][0]);
                cdkt_12.push(item[51][0]);
                cdkt_13.push(item[57][0]);
                cdkt_14.push(item[64][0]);
                cdkt_15.push(item[65][0]);
                cdkt_16.push(item[66][0]);
                cdkt_17.push(item[81][0]);
                cdkt_18.push(item[94][0]);
                cdkt_19.push(item[95][0]);
                cdkt_20.push(item[97][0]);
                cdkt_21.push(item[115][0]);
                cdkt_22.push(item[118][0]);
                cdkt_23.push(item[119][0]);
            }
            cdkt_1.push(item[0][1]);
            cdkt_2.push(item[1][1]);
            cdkt_3.push(item[4][1]);
            cdkt_4.push(item[8][1]);
            cdkt_5.push(item[17][1]);
            cdkt_6.push(item[20][1]);
            cdkt_7.push(item[26][1]);
            cdkt_8.push(item[27][1]);
            cdkt_9.push(item[35][1]);
            cdkt_10.push(item[45][1]);
            cdkt_11.push(item[48][1]);
            cdkt_12.push(item[51][1]);
            cdkt_13.push(item[57][1]);
            cdkt_14.push(item[64][1]);
            cdkt_15.push(item[65][1]);
            cdkt_16.push(item[66][1]);
            cdkt_17.push(item[81][1]);
            cdkt_18.push(item[94][1]);
            cdkt_19.push(item[95][1]);
            cdkt_20.push(item[97][1]);
            cdkt_21.push(item[115][1]);
            cdkt_22.push(item[118][1]);
            cdkt_23.push(item[119][1]);
        });
        const data = [cdkt_1, cdkt_2, cdkt_3, cdkt_4, cdkt_5,
            cdkt_6, cdkt_7, cdkt_8, cdkt_9, cdkt_10, cdkt_11, cdkt_12, cdkt_13, cdkt_14,
            cdkt_15, cdkt_16, cdkt_17, cdkt_18, cdkt_19, cdkt_20, cdkt_21, cdkt_22, cdkt_23];
        // console.log(data);
        dispatch(setCdkt(data));
    }

    const getDataLCTT = async(years) => {
        const bigData = [];
        const cdkt_1 = [];
        const cdkt_2 = [];
        const cdkt_3 = [];
        const cdkt_4 = [];
        const cdkt_5 = [];
        const cdkt_6 = [];

        dispatch(isLoading());
        
        for(const year of years) {
            var res = await axios({
                method: 'post',
                url: urlLCTTGT,
                data: {
                    name: company,
                    year: year
                }
            }).then(({data}) => {
                bigData.push(data);
                dispatch(unLoading());
            });
        }

        bigData.map((item, index) => {
            if(index === 0) {
                cdkt_1.push(item[0][0]);
                cdkt_2.push(item[25][0]);
                cdkt_3.push(item[26][0]);
                cdkt_4.push(item[48][0]);
                cdkt_5.push(item[49][0]);
                cdkt_6.push(item[67][0]);
            }
            cdkt_1.push(item[0][1]);
            cdkt_2.push(item[25][1]);
            cdkt_3.push(item[26][1]);
            cdkt_4.push(item[48][1]);
            cdkt_5.push(item[49][1]);
            cdkt_6.push(item[67][1]);
        });
        const data = [cdkt_1, cdkt_2, cdkt_3, cdkt_4, cdkt_5,
            cdkt_6];
        // console.log(data);
        dispatch(setLcttgt(data));
    }


    const years = [2015, 2016, 2017, 2018, 2019, 2020];
    useEffect(() => {
        if(company) {
            getDataCDKT(years);
            getDataKQHDKD(years);
            getDataLCTT(years);
        }
        // console.log(company);
    }, [company]);

    useEffect(() => {
        if(cdkt && kqhdkd && lcttgt) {
            if(kqhdkd[19] && cdkt[19]) {
                createChiSoDN_4M();
            }
        }
        
    }, [cdkt, kqhdkd, lcttgt]);

    useEffect(() => {
        if(chiSoDN_4M[0]) {
            createDiemDN_4M();
            console.log(chiSoDN_4M[0]);
        }
    }, [chiSoDN_4M]);

    useEffect(() => {
        dispatch(setCurrentPage('trangChinh'));
    }, [])

    const createChiSoDN_4M = () => {
        const data = [];
        const EPS = [];
        const BVPS = [];
        const SALES = [];
        const TTTT = [];
        const NoVaLoiNhuan = [];
        const Effectiveness = [];
        const Effciency = [];
        const Productivity = [];
        const ROA = [];
        const ROE = [];
        const ROIC = [];
        SALES.push("Sales");
        EPS.push("EPS");
        BVPS.push("BVPS");
        TTTT.push("Tăng trưởng tiền thuần từ HDKD");
        NoVaLoiNhuan.push("Nợ năm gần nhất");
        NoVaLoiNhuan.push(parseFloat(cdkt[14][6].replace(/,/g, '')));
        NoVaLoiNhuan.push("Lợi nhuận năm gần nhất");
        NoVaLoiNhuan.push(parseFloat(kqhdkd[19][6].replace(/,/g, '')));
        Effectiveness.push("Effectiveness");
        Effciency.push("Effciency");
        Productivity.push("Productivity");
        ROA.push("ROA (%)");
        ROE.push("ROE (%)");
        ROIC.push("ROIC (%)");

        for(var i = 1; i < 7; i++) {
            EPS[i] = Math.round((parseFloat(kqhdkd[19][i].replace(/,/g, '')) / parseFloat(cdkt[19][i].replace(/,/g, '')) * 10000) * 100 ) / 100;
            SALES[i] = parseFloat(kqhdkd[0][i].replace(/,/g, ''));
            BVPS[i] = Math.round((parseFloat(cdkt[18][i].replace(/,/g, '')) / parseFloat(cdkt[19][i].replace(/,/g, '')) * 10000) * 100 ) / 100;
            TTTT[i] = parseFloat(lcttgt[1][i].replace(/,/g, ''));
            Effectiveness[i] = Math.round((parseFloat(kqhdkd[0][i].replace(/,/g, '')) / parseFloat(cdkt[13][i].replace(/,/g, ''))) * 100 ) / 100;
            Effciency[i] = Math.round((parseFloat(kqhdkd[19][i].replace(/,/g, '')) / parseFloat(kqhdkd[0][i].replace(/,/g, ''))) * 100 ) / 100;
            Productivity[i] = Math.round((parseFloat(lcttgt[1][i].replace(/,/g, '')) / parseFloat(kqhdkd[19][i].replace(/,/g, ''))) * 100 ) / 100;
            ROA[i] = Math.round((parseFloat(kqhdkd[19][i].replace(/,/g, '')) / parseFloat(cdkt[13][i].replace(/,/g, '')) * 100) * 100 ) / 100;
            ROE[i] = Math.round((parseFloat(kqhdkd[19][i].replace(/,/g, '')) / parseFloat(cdkt[18][i].replace(/,/g, '')) * 100) * 100 ) / 100;
            ROIC[i] = Math.round((parseFloat(kqhdkd[19][i].replace(/,/g, '')) / parseFloat(cdkt[14][i].replace(/,/g, '')) * 100) * 100 ) / 100;
        }
        // data.push(cdkt[0]);
        data.push(SALES);
        data.push(EPS);
        data.push(BVPS);
        data.push(TTTT);
        data.push(NoVaLoiNhuan);
        data.push(Effectiveness);
        data.push(Effciency);
        data.push(Productivity);
        data.push(ROA);
        data.push(ROE);
        data.push(ROIC);
        dispatch(setChiSoDN_4M(data));
    }

    const RATE = function(periods, payment, present, future, type, guess) {
        guess = (guess === undefined) ? 0.01 : guess;
        future = (future === undefined) ? 0 : future;
        type = (type === undefined) ? 0 : type;
      
        // Set maximum epsilon for end of iteration
        var epsMax = 1e-10;
      
        // Set maximum number of iterations
        var iterMax = 10;
      
        // Implement Newton's method
        var y, y0, y1, x0, x1 = 0,
          f = 0,
          i = 0;
        var rate = guess;
        if (Math.abs(rate) < epsMax) {
          y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
        } else {
          f = Math.exp(periods * Math.log(1 + rate));
          y = present * f + payment * (1 / rate + type) * (f - 1) + future;
        }
        y0 = present + payment * periods + future;
        y1 = present * f + payment * (1 / rate + type) * (f - 1) + future;
        i = x0 = 0;
        x1 = rate;
        while ((Math.abs(y0 - y1) > epsMax) && (i < iterMax)) {
          rate = (y1 * x0 - y0 * x1) / (y1 - y0);
          x0 = x1;
          x1 = rate;
            if (Math.abs(rate) < epsMax) {
              y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
            } else {
              f = Math.exp(periods * Math.log(1 + rate));
              y = present * f + payment * (1 / rate + type) * (f - 1) + future;
            }
          y0 = y1;
          y1 = y;
          ++i;
        }
        return Math.round(rate * 100) / 100;
    };

    const getRate = (year_num, first, last) => {
        if(first >=0 && last >= 0) {
            return RATE(year_num, 0, -first, last, 0, 0.1);
        }
        return RATE(year_num, 0, first, last, 0, 0.1);
    }
    
    const getArrRate = (arr) => {
        const newArr = [];
        year_periods.forEach((item) => {
            newArr.unshift(getRate(item, arr[arr.length - 1 - item], arr[arr.length - 1]));
        })
        
        return newArr;
    }

    const getTongDiem = (arr) => {
        let tong = 0;
        for(let i = 0; i < 3; i ++) {
            if(arr[i + 1] >= arr[4]) {
                tong += year_proportion[i];
            }
            else {
                tong += arr[i + 1] / arr[4] * year_proportion[i];
            }
        }
        return Math.round(tong * 100) / 100;
    }

    const createDiemDN_4M = () => {
        const data = [];
        // let TongDiem = [];
        let EPS = [];
        let BVPS = [];
        let SALES = [];
        let TTTT = [];
        let NoVaLoiNhuan = [];
        let Effectiveness = [];
        let Effciency = [];
        let Productivity = [];
        let ROA = [];
        let ROE = [];
        let ROIC = [];
        SALES.push("Sales");
        EPS.push("EPS");
        BVPS.push("BVPS");
        TTTT.push("Tăng trưởng tiền thuần từ HDKD");
        NoVaLoiNhuan.push("Nợ năm gần nhất");
        NoVaLoiNhuan.push(parseFloat(cdkt[14][6].replace(/,/g, '')));
        NoVaLoiNhuan.push("Lợi nhuận năm gần nhất");
        NoVaLoiNhuan.push(parseFloat(kqhdkd[19][6].replace(/,/g, '')));
        NoVaLoiNhuan.push("< 3*Lợi Nhuận");
        NoVaLoiNhuan.push(0.1);
        if(NoVaLoiNhuan[1] < 3 * NoVaLoiNhuan[3]) {
            NoVaLoiNhuan.push(100);
        }
        else {
            NoVaLoiNhuan.push(0);
        }
        
        Effectiveness.push("Effectiveness");
        Effciency.push("Effciency");
        Productivity.push("Productivity");
        ROA.push("ROA");
        ROE.push("ROE");
        ROIC.push("ROIC");

        // SALES.push(useRate())
        SALES = SALES.concat(getArrRate(chiSoDN_4M[0]));
        SALES = SALES.concat([0.2, 0.15]);
        SALES = SALES.concat(getTongDiem(SALES));
        EPS = EPS.concat(getArrRate(chiSoDN_4M[1]));
        EPS = EPS.concat([0.2, 0.2]);
        EPS = EPS.concat(getTongDiem(EPS));
        BVPS = BVPS.concat(getArrRate(chiSoDN_4M[2]));
        BVPS = BVPS.concat([0.15, 0.05]);
        BVPS = BVPS.concat(getTongDiem(BVPS));
        TTTT = TTTT.concat(getArrRate(chiSoDN_4M[3]));
        TTTT = TTTT.concat([0.15, 0.15]);
        TTTT = TTTT.concat(getTongDiem(TTTT));
        Effectiveness = Effectiveness.concat(getArrRate(chiSoDN_4M[5]));
        Effectiveness = Effectiveness.concat([0.1]);
        Effectiveness.push(0.05);
        Effectiveness = Effectiveness.concat(getTongDiem(Effectiveness));
        Effciency = Effciency.concat(getArrRate(chiSoDN_4M[6]));
        Effciency = Effciency.concat([0.1]);
        Effciency = Effciency.concat(getTongDiem(Effciency));
        Productivity = Productivity.concat(getArrRate(chiSoDN_4M[7]));
        Productivity = Productivity.concat([0.1]);
        Productivity = Productivity.concat(getTongDiem(Productivity));
        ROA = ROA.concat(getArrRate(chiSoDN_4M[8]));
        ROA = ROA.concat([0.15, 0.1]);
        ROA = ROA.concat(getTongDiem(ROA));
        ROE = ROE.concat(getArrRate(chiSoDN_4M[9]));
        ROE = ROE.concat([0.2, 0.05]);
        ROE = ROE.concat(getTongDiem(ROE));
        ROIC = ROIC.concat(getArrRate(chiSoDN_4M[10]));
        ROIC = ROIC.concat([0.15, 0.15]);
        ROIC = ROIC.concat(getTongDiem(ROIC));

        SALES.push(Math.round((SALES[5] * SALES[6]) * 100) / 100);
        EPS.push(Math.round((EPS[5] * EPS[6]) * 100) / 100);
        BVPS.push(Math.round((BVPS[5] * BVPS[6]) * 100) / 100);
        TTTT.push(Math.round((TTTT[5] * TTTT[6]) * 100) / 100);
        NoVaLoiNhuan.push(Math.round((NoVaLoiNhuan[5]*NoVaLoiNhuan[6]) * 100) / 100);
        Effectiveness.push(Math.round(((Effectiveness[6] + Effciency[5] + Productivity[5]) * Effectiveness[5]) * 100) / 100);
        ROE.push(Math.round((ROE[5] * ROE[6]) * 100) / 100);
        ROA.push(Math.round((ROA[5] * ROA[6]) * 100) / 100);
        ROIC.push(Math.round((ROIC[5] * ROIC[6]) * 100) / 100);
        let TongDiem = SALES[7] + EPS[7] + BVPS[7] + TTTT[7] + NoVaLoiNhuan[7] + Effectiveness[7]
        + ROE[7] + ROA[7] + ROIC[7];
        
        const tong = Math.round(TongDiem * 100) / 100;
        
        data.push(SALES);
        data.push(EPS);
        data.push(BVPS);
        data.push(TTTT);
        data.push(NoVaLoiNhuan);
        data.push(Effectiveness);
        data.push(Effciency);
        data.push(Productivity);
        data.push(ROA);
        data.push(ROE);
        data.push(ROIC);

        dispatch(setDiemDN_4M(data));
        dispatch(setTongDiem(tong));

    }

    if(loading) {
        return (
            <Loading />
        );
    }

    return(
        <>
        {
            cdkt.length !== 0 && (
                <div className="can-doi-ke-toan">
                <h1>CÂN ĐỐI KẾ TOÁN</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Chỉ số
                            </th>
                            {
                                years.map(year => {
                                    return (
                                        <th key={year}>
                                            {year}
                                        </th>
                                    );
                                })
                            }
                        </tr>
                    </thead>

                    <tbody>
                        
                        {
                            cdkt.map((item, index) => {
                                if(index === 0 || index === 6 || index === 14 || index === 17
                                    || index === 20
                                ) {
                                    return (
                                        <tr className="parentData" key={index}>
                                            <th>{item[0]}</th>
                                            <th>
                                                {item[1]}
                                            </th>
                                            <th>
                                                {item[2]}
                                            </th>
                                            <th>
                                                {item[3]}
                                            </th>
                                            <th>
                                                {item[4]}
                                            </th>
                                            <th>
                                                {item[5]}
                                            </th>
                                            <th>
                                                {item[6]}
                                            </th>
                                        </tr>
                                    );
                                    }
                                else if (index === 13 || index === 21){
                                    return (
                                        <tr key={index}>
                                            <th>{item[0]}</th>
                                            <th>
                                                {item[1]}
                                            </th>
                                            <th>
                                                {item[2]}
                                            </th>
                                            <th>
                                                {item[3]}
                                            </th>
                                            <th>
                                                {item[4]}
                                            </th>
                                            <th>
                                                {item[5]}
                                            </th>
                                            <th>
                                                {item[6]}
                                            </th>
                                        </tr>
                                    );
                                }
                                return (
                                    <tr key={index}>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                        <td>{item[4]}</td>
                                        <td>{item[5]}</td>
                                        <td>{item[6]}</td>
                                    </tr>
                                );
                            })
                        }
                        
                        
                    </tbody>
                </table>
            </div>
            )
        }

        {
            kqhdkd.length !== 0 && (
                <div className="ket-qua-hoat-dong-kinh-doanh">
                <h1>KẾT QUẢ HOẠT ĐỘNG KINH DOANH</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Chỉ số
                            </th>
                            {
                                years.map(year => {
                                    return (
                                        <th key={year}>
                                            {year}
                                        </th>
                                    );
                                })
                            }
                        </tr>
                    </thead>

                    <tbody>
                    {
                            kqhdkd.map((item, index) => {
                                if(index === 0 || index === 1 || index === 2 || index === 4
                                    || index === 10 || index === 13 || index === 14 || index === 17
                                    || index === 19
                                ) {
                                    return (
                                        <tr key={index}>
                                            <th>{item[0]}</th>
                                            <th>
                                                {item[1]}
                                            </th>
                                            <th>
                                                {item[2]}
                                            </th>
                                            <th>
                                                {item[3]}
                                            </th>
                                            <th>
                                                {item[4]}
                                            </th>
                                            <th>
                                                {item[5]}
                                            </th>
                                            <th>
                                                {item[6]}
                                            </th>
                                        </tr>
                                    );
                                    }
                                return (
                                    <tr key={index}>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                        <td>{item[4]}</td>
                                        <td>{item[5]}</td>
                                        <td>{item[6]}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            )
        }
            
            
        {
            lcttgt.length !== 0 && (
                <div className="luu-chuyen-tien-te-gian-tiep">
                <h1>LƯU CHUYỂN TIỀN TỆ GIÁN TIẾP</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Chỉ số
                            </th>
                            {
                                years.map(year => {
                                    return (
                                        <th key={year}>
                                            {year}
                                        </th>
                                    );
                                })
                            }
                        </tr>
                    </thead>

                    <tbody>
                    {
                        lcttgt.map((item, index) => {
                            if(index === 0 || index === 2 || index === 4 
                            ) {
                                return (
                                    <tr className="parentData" key={index}>
                                        <th>{item[0]}</th>
                                        <th>
                                            {item[1]}
                                        </th>
                                        <th>
                                            {item[2]}
                                        </th>
                                        <th>
                                            {item[3]}
                                        </th>
                                        <th>
                                            {item[4]}
                                        </th>
                                        <th>
                                            {item[5]}
                                        </th>
                                        <th>
                                            {item[6]}
                                        </th>
                                    </tr>
                                );
                                }
                            return (
                                <tr key={index}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item[3]}</td>
                                    <td>{item[4]}</td>
                                    <td>{item[5]}</td>
                                    <td>{item[6]}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
            )
        }

            <div className="anh">
                <h1>PHÂN TÍCH 4M DOANH NGHIỆP</h1>
            </div>
            
        {
            chiSoDN_4M.length !== 0 && (
                <div className="bo-11-chi-so">
                <h1>11 BỘ CHỈ SỐ DOANH NGHIỆP</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Chỉ số
                            </th>
                            {
                                years.map(year => {
                                    return <th key={year}>
                                            {year}
                                        </th>
                                }) 
                            }
                        </tr>
                    </thead>

                    <tbody>
                    {
                        chiSoDN_4M.map((item, index) => {
                            if(index === 4) {
                                return  <tr key={index} className="parentData">
                                    <th>{item[0]}</th>
                                    <th>{item[1]}</th>
                                    <th colSpan="4">{item[2]}</th>
                                    <th>{item[3]}</th>
                                </tr>
                            }
                            return <tr key={index} className="parentData">
                                    <th>{item[0]}</th>
                                    <th>{item[1]}</th>
                                    <th>{item[2]}</th>
                                    <th>{item[3]}</th>
                                    <th>{item[4]}</th>
                                    <th>{item[5]}</th>
                                    <th>{item[6]}</th>
                                </tr>
                        }) 
                    }     
                        
                    </tbody>
                </table>
            </div>
            )
        }

        {
            diemDN_4M.length !== 0 && (
                <div className="bo-11-chi-so">
                <h1>ĐIỂM DOANH NGHIỆP</h1>
                <table>
                    <thead>
                        <tr>
                            <th rowSpan="2">
                                Chỉ số
                            </th>
                            {
                                year_periods.map((year, index) => {
                                    return (
                                        <th key={index}>
                                            {year}
                                        </th>
                                    );
                                })
                            }
                            
                            
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
                        {
                            year_proportion.map((proportion, index) => {
                                return (
                                    <th key={index}>{proportion}</th>
                                );
                            })
                        }
                        </tr>
                    </thead>

                    <tbody>
                    {
                        diemDN_4M.map((diem, index) => {
                            if(index === 5 || index === 6 || index === 7) {
                                if(index === 5) {
                                    return (
                                        <tr key={index} className="parentData">
                                            <th>{diem[0]}</th>
                                            <th>{diem[1]}</th>
                                            <th>{diem[2]}</th>
                                            <th>{diem[3]}</th>
                                            <th>{diem[4]}</th>
                                            <th rowSpan="3">{diem[5]}</th>
                                            <th>{diem[6]}</th>
                                            <th rowSpan="3">{diem[7]}</th>
                                        </tr>
                                    );
                                }
                                return (
                                    <tr key={index} className="parentData">
                                        <th>{diem[0]}</th>
                                        <th>{diem[1]}</th>
                                        <th>{diem[2]}</th>
                                        <th>{diem[3]}</th>
                                        <th>{diem[4]}</th>
                                        <th>{diem[5]}</th>
                                    </tr>
                                );
                            }
                            return (
                                <tr key={index} className="parentData">
                                    <th>{diem[0]}</th>
                                    <th>{diem[1]}</th>
                                    <th>{diem[2]}</th>
                                    <th>{diem[3]}</th>
                                    <th>{typeof diem[4] !== 'string' ? `${diem[4] * 100}%` : diem[4]}</th>
                                    <th>{diem[5] * 100}%</th>
                                    <th>{diem[6]}</th>
                                    <th>{diem[7]}</th>
                                </tr>
                            );
                        })
                    }
                        <tr className="Tong">
                            <th colSpan="7">Tổng điểm</th>
                            <th>{tongDiem}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            )
        }
        </>
    );
}

export default FourM;