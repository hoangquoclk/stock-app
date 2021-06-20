import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {setCdkt, setKqhdkd, setLcttgt, setChiSoDN_4M, setDiemDN_4M,
     isLoading, unLoading, setTongDiem, setCurrentPage, setChiSoCanslim,
     setCdktQuy, setKqhdkdQuy, setLcttgtQuy} from '../Actions';
import Loading from '../Components/Loading';

// const urlKQKD = "https://localhost:5001/api/home/kqkd";
// const urlCDKT = "https://localhost:5001/api/home/cdkt";
// const urlLCTTGT = "https://localhost:5001/api/home/lctt";
// const urlKQKD_Quy = "https://localhost:5001/api/home/kqkd-quy";
// const urlCDKT_Quy = "https://localhost:5001/api/home/cdkt-quy";
// const urlLCTTGT_Quy = "https://localhost:5001/api/home/lctt-quy";

const urlKQKD = "http://stockproject123.somee.com/api/home/kqkd";
const urlCDKT = "http://stockproject123.somee.com/api/home/cdkt";
const urlLCTTGT = "http://stockproject123.somee.com/api/home/lctt";
const urlKQKD_Quy = "http://stockproject123.somee.com/api/home/kqkd-quy";
const urlCDKT_Quy = "http://stockproject123.somee.com/api/home/cdkt-quy";
const urlLCTTGT_Quy = "http://stockproject123.somee.com/api/home/lctt-quy";

const FourM = () => {
    const dispatch = useDispatch();

    const company = useSelector(state => state.company);

    const cdkt = useSelector(state => state.cdkt);

    const kqhdkd = useSelector(state => state.kqhdkd);

    const lcttgt = useSelector(state => state.lcttgt);

    const cdktQuy = useSelector(state => state.cdktQuy);

    const kqhdkdQuy = useSelector(state => state.kqhdkdQuy);

    const lcttgtQuy = useSelector(state => state.lcttgtQuy);

    const chiSoDN_4M = useSelector(state => state.chiSoDN_4M);

    const diemDN_4M = useSelector(state => state.diemDN_4M);

    const loading = useSelector(state => state.loading);

    const tongDiem = useSelector(state => state.tongDiem);

    const currentPage = useSelector(state => state.currentPage);

    const canslim = useSelector(state => state.canslim);


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
            await axios({
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
        dispatch(setKqhdkd(data));
    }

    const getDataKQHDKD_Quy = async(quys) => {
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

        for(const quy of quys) {
            await axios({
                method: 'post',
                url: urlKQKD_Quy,
                data: {
                    name: company,
                    quy: quy.quy,
                    year: quy.year
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
        dispatch(setKqhdkdQuy(data));
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
            await axios({
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
        dispatch(setCdkt(data));
    }

    const getDataCDKT_Quy = async(quys) => {
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

        for(const quy of quys) {
            await axios({
                method: 'post',
                url: urlCDKT_Quy,
                data: {
                    name: company,
                    quy: quy.quy,
                    year: quy.year
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
        dispatch(setCdktQuy(data));
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
            await axios({
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
        dispatch(setLcttgt(data));
    }

    const getDataLCTT_Quy = async(quys) => {
        const bigData = [];
        const cdkt_1 = [];
        const cdkt_2 = [];
        const cdkt_3 = [];
        const cdkt_4 = [];
        const cdkt_5 = [];
        const cdkt_6 = [];

        dispatch(isLoading());
        
        for(const quy of quys) {
            await axios({
                method: 'post',
                url: urlLCTTGT_Quy,
                data: {
                    name: company,
                    quy: quy.quy,
                    year: quy.year
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
        dispatch(setLcttgtQuy(data));
    }

    const currentDate = new Date();

    const currentMonth = currentDate.getMonth() + 1;

    const currentYear = currentDate.getFullYear();

    let years = [];

    for(let i = 0; i < 6; i++) {
        years.unshift(currentYear-1-i);
    }

    let quys = [];
    
    const importQuys = (quy, year, arr) => {
        for(let i = 0; i < 6; i++) {
            if(quy === 0) {
                quy = 4;
                year--;
            }
            arr.unshift({
                quy: quy,
                year: year
            });
            quy--;
        }
    }

    if(currentMonth > 5) {
        importQuys(1, currentYear, quys);
    }
    else if(currentMonth > 8) {
        importQuys(2, currentYear, quys);
    }
    else if(currentMonth > 11) {
        importQuys(3, currentYear, quys);
    }
    else {
        importQuys(4, currentYear - 1, quys);
    }

    useEffect(() => {
        if(company) {
            getDataCDKT(years);
            getDataCDKT_Quy(quys);
            
            getDataKQHDKD(years);
            getDataKQHDKD_Quy(quys);

            getDataLCTT(years);
            getDataLCTT_Quy(quys);
            

            dispatch(setCurrentPage('trangChinh'));
        }
    }, [company]);

    useEffect(() => {
        if(cdkt && kqhdkd && lcttgt) {
            if(kqhdkd[19] && cdkt[19] && lcttgt[1]) {
                createChiSoDN_4M();
            }
        }
        
    }, [cdkt, kqhdkd, lcttgt]);

    useEffect(() => {
        if(chiSoDN_4M[0]) {
            createDiemDN_4M();
        }
    }, [chiSoDN_4M]);


    useEffect(() => {
        if(kqhdkdQuy) {
            if(kqhdkdQuy[19] && cdktQuy[19]) {
                createCanslimDN(); 
            }
            
        }
    }, [kqhdkdQuy, cdktQuy]);

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
        NoVaLoiNhuan.push(parseFloat(cdkt[16][6].replace(/,/g, '')));
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
        NoVaLoiNhuan.push(parseFloat(cdkt[16][6].replace(/,/g, '')));
        NoVaLoiNhuan.push("Lợi nhuận năm gần nhất");
        NoVaLoiNhuan.push(parseFloat(kqhdkd[19][6].replace(/,/g, '')));
        NoVaLoiNhuan.push("< 3*Lợi Nhuận");
        NoVaLoiNhuan.push(0.2);
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


    const createCanslimDN = async() => {
        const data = [];
        const SALE1 = [0,0];
        const SALE2 = [0,0];
        const SALE3 = [0,0,0,0,0,0,0,0,0];
        const SALE4 = [0,0,0,0,0,0,0,0,0];
        const EPS1 = [0,0];
        const EPS2 = [0,0];
        const EPS3 = [0,0,0,0,0,0,0,0,0];
        const EPS4 = [0,0,0,0,0,0,0,0,0];
        const COPHIEU = [];
        const LOINHUAN = [];
        let C = null;
        let A = null;
        let TongDiem = null;

        //const kqhdkd_1_2019 = 
        await axios({
            method: 'post',
            url: urlKQKD_Quy,
            data: {
                name: company,
                quy: 1,
                year: 2019
            }
        }).then(({data}) => {
            SALE4[0] = parseFloat(data[0][1].replace(/,/g, ''));
            LOINHUAN[0] = parseFloat(data[19][1].replace(/,/g, ''));
        });

        await axios({
            method: 'post',
            url: urlKQKD_Quy,
            data: {
                name: company,
                quy: 2,
                year: 2019
            }
        }).then(({data}) => {
            SALE3[0] = parseFloat(data[0][1].replace(/,/g, ''));
            SALE4[1] = parseFloat(data[0][1].replace(/,/g, ''));
            LOINHUAN[1] = parseFloat(data[19][1].replace(/,/g, ''));
        });

        await axios({
            method: 'post',
            url: urlKQKD_Quy,
            data: {
                name: company,
                quy: 3,
                year: 2019
            }
        }).then(({data}) => {
            SALE3[1] = parseFloat(data[0][1].replace(/,/g, ''));
            SALE4[2] = parseFloat(data[0][1].replace(/,/g, ''));
            LOINHUAN[2] = parseFloat(data[19][1].replace(/,/g, ''));
        });


        SALE2[0] = parseFloat(kqhdkdQuy[0][1].replace(/,/g, ''));
        SALE3[2] = parseFloat(kqhdkdQuy[0][1].replace(/,/g, ''));
        SALE4[3] = parseFloat(kqhdkdQuy[0][1].replace(/,/g, ''));
        LOINHUAN[3] = parseFloat(kqhdkdQuy[19][1].replace(/,/g, ''));
        
        SALE1[0] = parseFloat(kqhdkdQuy[0][2].replace(/,/g, ''));
        SALE3[3] = parseFloat(kqhdkdQuy[0][2].replace(/,/g, ''));
        SALE4[4] = parseFloat(kqhdkdQuy[0][2].replace(/,/g, ''));
        LOINHUAN[4] = parseFloat(kqhdkdQuy[19][2].replace(/,/g, ''));

        SALE3[4] = parseFloat(kqhdkdQuy[0][3].replace(/,/g, ''));
        SALE4[5] = parseFloat(kqhdkdQuy[0][3].replace(/,/g, ''));
        LOINHUAN[5] = parseFloat(kqhdkdQuy[19][3].replace(/,/g, ''));


        SALE3[5] = parseFloat(kqhdkdQuy[0][4].replace(/,/g, '')); 
        SALE4[6] = parseFloat(kqhdkdQuy[0][4].replace(/,/g, ''));
        LOINHUAN[6] = parseFloat(kqhdkdQuy[19][4].replace(/,/g, ''));

        SALE2[1] = parseFloat(kqhdkdQuy[0][5].replace(/,/g, ''));
        SALE3[6] = parseFloat(kqhdkdQuy[0][5].replace(/,/g, ''));
        SALE4[7] = parseFloat(kqhdkdQuy[0][5].replace(/,/g, ''));
        LOINHUAN[7] = parseFloat(kqhdkdQuy[19][5].replace(/,/g, ''));


        SALE1[1] = parseFloat(kqhdkdQuy[0][6].replace(/,/g, ''));
        SALE3[7] = parseFloat(kqhdkdQuy[0][6].replace(/,/g, ''));
        LOINHUAN[8] = parseFloat(kqhdkdQuy[19][6].replace(/,/g, ''));

        // LAY SO CO PHIEU
        //const cdkt_1_2019 = 
        await axios({
            method: 'post',
            url: urlCDKT_Quy,
            data: {
                name: company,
                quy: 1,
                year: 2019
            }
        }).then(({data}) => {
            COPHIEU[0] = parseFloat(data[97][1].replace(/,/g, ''));
        });

        await axios({
            method: 'post',
            url: urlCDKT_Quy,
            data: {
                name: company,
                quy: 2,
                year: 2019
            }
        }).then(({data}) => {
            COPHIEU[1] = parseFloat(data[97][1].replace(/,/g, ''));
        });

        await axios({
            method: 'post',
            url: urlCDKT_Quy,
            data: {
                name: company,
                quy: 3,
                year: 2019
            }
        }).then(({data}) => {
            COPHIEU[2] = parseFloat(data[97][1].replace(/,/g, ''));
        });

        // await axios({
        //     method: 'post',
        //     url: urlCDKT_Quy,
        //     data: {
        //         name: company,
        //         quy: 4,
        //         year: 2019
        //     }
        // }).then(({data}) => {
        //     COPHIEU[3] = parseFloat(data[97][1].replace(/,/g, ''));
        // });
        COPHIEU[3] = parseFloat(cdktQuy[19][1].replace(/,/g, ''));
        COPHIEU[4] = parseFloat(cdktQuy[19][2].replace(/,/g, ''));
        COPHIEU[5] = parseFloat(cdktQuy[19][3].replace(/,/g, ''));
        COPHIEU[6] = parseFloat(cdktQuy[19][4].replace(/,/g, ''));
        COPHIEU[7] = parseFloat(cdktQuy[19][5].replace(/,/g, ''));
        COPHIEU[8] = parseFloat(cdktQuy[19][6].replace(/,/g, ''));
        // await axios({
        //     method: 'post',
        //     url: urlCDKT_Quy,
        //     data: {
        //         name: company,
        //         quy: 1,
        //         year: 2020
        //     }
        // }).then(({data}) => {
        //     COPHIEU[4] = parseFloat(data[97][1].replace(/,/g, ''));
        // });

        // await axios({
        //     method: 'post',
        //     url: urlCDKT_Quy,
        //     data: {
        //         name: company,
        //         quy: 2,
        //         year: 2020
        //     }
        // }).then(({data}) => {
        //     COPHIEU[5] = parseFloat(data[97][1].replace(/,/g, ''));
        // });

        // await axios({
        //     method: 'post',
        //     url: urlCDKT_Quy,
        //     data: {
        //         name: company,
        //         quy: 3,
        //         year: 2020
        //     }
        // }).then(({data}) => {
        //     COPHIEU[6] = parseFloat(data[97][1].replace(/,/g, ''));
        // });

        // await axios({
        //     method: 'post',
        //     url: urlCDKT_Quy,
        //     data: {
        //         name: company,
        //         quy: 4,
        //         year: 2020
        //     }
        // }).then(({data}) => {
        //     COPHIEU[7] = parseFloat(data[97][1].replace(/,/g, ''));
        // });

        // await axios({
        //     method: 'post',
        //     url: urlCDKT_Quy,
        //     data: {
        //         name: company,
        //         quy: 1,
        //         year: 2021
        //     }
        // }).then(({data}) => {
        //     COPHIEU[8] = parseFloat(data[97][1].replace(/,/g, ''));
        // });

        for(let i = 0; i < COPHIEU.length; i++) {
            if(isNaN(COPHIEU[i])) {
                if(i === 0) {
                    COPHIEU[i] = COPHIEU[i+1];
                }
                else {
                    COPHIEU[i] = COPHIEU[i-1];
                }
            }

            if(isNaN(LOINHUAN[i])) {
                if(i === 0) {
                    LOINHUAN[i] = LOINHUAN[i+1];
                }
                else {
                    LOINHUAN[i] = LOINHUAN[i-1];
                }
            }

            if(isNaN(SALE1[i])) {
                if(i === 0) {
                    SALE1[i] = SALE1[i+1];
                }
                else {
                    SALE1[i] = SALE1[i-1];
                }
            }

            if(isNaN(SALE2[i])) {
                if(i === 0) {
                    SALE2[i] = SALE2[i+1];
                }
                else {
                    SALE2[i] = SALE2[i-1];
                }
            }
            if(isNaN(SALE3[i])) {
                if(i === 0) {
                    SALE3[i] = SALE3[i+1];
                }
                else {
                    SALE3[i] = SALE3[i-1];
                }
            }
            if(isNaN(SALE4[i])) {
                if(i === 0) {
                    SALE4[i] = SALE4[i+1];
                }
                else {
                    SALE4[i] = SALE4[i-1];
                }
            }
        }
        
        //EPS
        // q1 - 2019
        EPS4[0] = Math.round((LOINHUAN[0] / COPHIEU[0] * 10000) * 100 ) / 100;
        // q2 - 2019
        EPS4[1] = Math.round((LOINHUAN[1] / COPHIEU[1] * 10000) * 100 ) / 100;
        EPS3[0] = Math.round((LOINHUAN[1] / COPHIEU[1] * 10000) * 100 ) / 100;
        // q3 - 2019
        EPS4[2] = Math.round((LOINHUAN[2] / COPHIEU[2] * 10000) * 100 ) / 100;
        EPS3[1] = Math.round((LOINHUAN[2] / COPHIEU[2] * 10000) * 100 ) / 100;
        // q4 - 2019
        EPS4[3] = Math.round((LOINHUAN[3] / COPHIEU[3] * 10000) * 100 ) / 100;
        EPS3[2] = Math.round((LOINHUAN[3] / COPHIEU[3] * 10000) * 100 ) / 100;
        EPS2[0] = Math.round((LOINHUAN[3] / COPHIEU[3] * 10000) * 100 ) / 100;
        // q1 - 2020
        EPS4[4] = Math.round((LOINHUAN[4] / COPHIEU[4] * 10000) * 100 ) / 100;
        EPS3[3] = Math.round((LOINHUAN[4] / COPHIEU[4] * 10000) * 100 ) / 100;
        EPS1[0] = Math.round((LOINHUAN[4] / COPHIEU[4] * 10000) * 100 ) / 100;
        // q2 - 2020
        EPS4[5] = Math.round((LOINHUAN[5] / COPHIEU[5] * 10000) * 100 ) / 100;
        EPS3[4] = Math.round((LOINHUAN[5] / COPHIEU[5] * 10000) * 100 ) / 100;
        // q3 - 2020
        EPS4[6] = Math.round((LOINHUAN[6] / COPHIEU[6] * 10000) * 100 ) / 100;
        EPS3[5] = Math.round((LOINHUAN[6] / COPHIEU[6] * 10000) * 100 ) / 100;
        // q4 - 2020
        EPS4[7] = Math.round((LOINHUAN[7] / COPHIEU[7] * 10000) * 100 ) / 100;
        EPS3[6] = Math.round((LOINHUAN[7] / COPHIEU[7] * 10000) * 100 ) / 100;
        EPS2[1] = Math.round((LOINHUAN[7] / COPHIEU[7] * 10000) * 100 ) / 100;
        // q1 - 2021
        EPS3[7] = Math.round((LOINHUAN[8] / COPHIEU[8] * 10000) * 100 ) / 100;
        EPS1[1] = Math.round((LOINHUAN[8] / COPHIEU[8] * 10000) * 100 ) / 100;

        // console.log(LOINHUAN);
        // console.log(COPHIEU);
        // console.log(EPS1);
        // console.log(EPS2);
        // console.log(EPS3);
        // console.log(EPS4);
        
        SALE1[2] = Math.round(((SALE1[1] - SALE1[0]) / SALE1[0] * 100) *100) / 100;
        SALE2[2] = Math.round(((SALE2[1] - SALE2[0]) / SALE2[0] * 100) *100) / 100;
        SALE3[8] = Math.round((((SALE3[4] + SALE3[5] + SALE3[6] + SALE3[7]) 
        - (SALE3[0] + SALE3[1] + SALE3[2] + SALE3[3])) / (SALE3[0] + SALE3[1] + SALE3[2] + SALE3[3]) 
        * 100) *100) / 100;
        SALE4[8] = Math.round((((SALE4[4] + SALE4[5] + SALE4[6] + SALE4[7]) 
        - (SALE4[0] + SALE4[1] + SALE4[2] + SALE4[3])) / (SALE4[0] + SALE4[1] + SALE4[2] + SALE4[3]) 
        * 100) *100) / 100;

        EPS1[2] = Math.round(((EPS1[1] - EPS1[0]) / EPS1[0] * 100) *100) / 100;
        EPS2[2] = Math.round(((EPS2[1] - EPS2[0]) / EPS2[0] * 100) *100) / 100;
        EPS3[8] = Math.round((((EPS3[4] + EPS3[5] + EPS3[6] + EPS3[7]) 
        - (EPS3[0] + EPS3[1] + EPS3[2] + EPS3[3])) / (EPS3[0] + EPS3[1] + EPS3[2] + EPS3[3]) 
        * 100) *100) / 100;
        EPS4[8] = Math.round((((EPS4[4] + EPS4[5] + EPS4[6] + EPS4[7]) 
        - (EPS4[0] + EPS4[1] + EPS4[2] + EPS4[3])) / (EPS4[0] + EPS4[1] + EPS4[2] + EPS4[3]) 
        * 100) *100) / 100;

        // tham chiếu
        SALE1[3] = 25;
        SALE2[3] = 25;
        SALE3[9] = 20;
        SALE4[9] = 20;
        EPS1[3] = 25;
        EPS2[3] = 25;
        EPS3[9] = 20;
        EPS4[9] = 20;

        //tỷ trọng thành phần
        SALE1[4] = 15;
        SALE2[4] = 10;
        SALE3[10] = 10;
        SALE4[10] = 5;
        EPS1[4] = 20;
        EPS2[4] = 15;
        EPS3[10] = 15;
        EPS4[10] = 10;
        // điểm sale
        if(SALE1[2] >= SALE1[3]) {
            SALE1[5] = SALE1[4];
        }
        else {
            SALE1[5] = Math.round((SALE1[2] / SALE1[3] * SALE1[4]) * 100) / 100;
        }

        if(SALE2[2] >= SALE2[3]) {
            SALE2[5] = SALE2[4];
        }
        else {
            SALE2[5] = Math.round((SALE2[2] / SALE2[3] * SALE2[4]) * 100) / 100;
        }

        if(SALE3[8] >= SALE3[9]) {
            SALE3[11] = SALE3[10];
        }
        else {
            SALE3[11] = Math.round((SALE3[8] / SALE3[9] * SALE3[10]) * 100) / 100;
        }

        if(SALE4[8] >= SALE4[9]) {
            SALE4[11] = SALE4[10];
        }
        else {
            SALE4[11] = Math.round((SALE4[8] / SALE4[9] * SALE4[10]) * 100) / 100;
        }

        // điểm EPS
        if(EPS1[2] >= EPS1[3]) {
            EPS1[5] = EPS1[4];
        }
        else {
            EPS1[5] = Math.round((EPS1[2] / EPS1[3] * EPS1[4]) * 100) / 100;
        }

        if(EPS2[2] >= EPS2[3]) {
            EPS2[5] = EPS2[4];
        }
        else {
            EPS2[5] = Math.round((EPS2[2] / EPS2[3] * EPS2[4]) * 100) / 100;
        }

        if(EPS3[8] >= EPS3[9]) {
            EPS3[11] = EPS3[10];
        }
        else {
            EPS3[11] = Math.round((EPS3[8] / EPS3[9] * EPS3[10]) * 100) / 100;
        }

        if(EPS4[8] >= EPS4[9]) {
            EPS4[11] = EPS4[10];
        }
        else {
            EPS4[11] = Math.round((EPS4[8] / EPS4[9] * EPS4[10]) * 100) / 100;
        }
        
        C = SALE1[5] + SALE2[5] + EPS1[5] + EPS2[5];
        A = SALE3[11] + SALE4[11] + EPS3[11] + EPS4[11];

        C = Math.round(C * 100) /100;
        A = Math.round(A * 100) /100;

        TongDiem = A + C;

        TongDiem = Math.round(TongDiem * 100)/100;

        data.push(SALE1);
        data.push(SALE2);
        data.push(SALE3);
        data.push(SALE4);
        data.push(EPS1);
        data.push(EPS2);
        data.push(EPS3);
        data.push(EPS4);
        data.push(C);
        data.push(A);
        data.push(TongDiem);
        dispatch(setChiSoCanslim(data));
    }

    if(loading) {
        return (
            <Loading />
        );
    }

    if(currentPage === 'trangChinh') {
        return (
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
            </>
        );
    }

    else if(currentPage === 'quy') {
        return (
            <>
        {
            cdktQuy.length !== 0 && (
                <div className="can-doi-ke-toan">
                <h1>CÂN ĐỐI KẾ TOÁN</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Chỉ số
                            </th>
                            {
                                quys.map((quy, index) => {
                                    return (
                                        <th key={index}>
                                            Qúy {quy.quy} - {quy.year}
                                        </th>
                                    );
                                })
                            }
                        </tr>
                    </thead>

                    <tbody>
                        
                        {
                            cdktQuy.map((item, index) => {
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
            kqhdkdQuy.length !== 0 && (
                <div className="ket-qua-hoat-dong-kinh-doanh">
                <h1>KẾT QUẢ HOẠT ĐỘNG KINH DOANH</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Chỉ số
                            </th>
                            {
                                quys.map((quy, index) => {
                                    return (
                                        <th key={index}>
                                            Qúy {quy.quy} - {quy.year}
                                        </th>
                                    );
                                })
                            }
                        </tr>
                    </thead>

                    <tbody>
                    {
                            kqhdkdQuy.map((item, index) => {
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
            lcttgtQuy.length !== 0 && (
                <div className="luu-chuyen-tien-te-gian-tiep">
                <h1>LƯU CHUYỂN TIỀN TỆ GIÁN TIẾP</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Chỉ số
                            </th>
                            {
                                quys.map((quy, index) => {
                                    return (
                                        <th key={index}>
                                            Qúy {quy.quy} - {quy.year}
                                        </th>
                                    );
                                })
                            }
                        </tr>
                    </thead>

                    <tbody>
                    {
                        lcttgtQuy.map((item, index) => {
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
            </>
        );
    }

    else if(currentPage === '4M') {
        return (
            <>
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
                                    <th style={{backgroundColor: '#f1c561'}}>{item[0]}</th>
                                    <th style={{backgroundColor: '#e9f8ff'}}>{item[1]}</th>
                                    <th colSpan="4" style={{backgroundColor: '#f1c561'}}>{item[2]}</th>
                                    <th style={{backgroundColor: '#03aafb'}}>{item[3]}</th>
                                </tr>
                            }
                            return <tr key={index} className="parentData">
                                    <th style={{backgroundColor: '#f1c561'}}>{item[0]}</th>
                                    <th style={{backgroundColor: '#e9f8ff'}}>{item[1]}</th>
                                    <th style={{backgroundColor: '#c9ecfd'}}>{item[2]}</th>
                                    <th style={{backgroundColor: '#91d7f9'}}>{item[3]}</th>
                                    <th style={{backgroundColor: '#60cbff'}}>{item[4]}</th>
                                    <th style={{backgroundColor: '#33bbfd'}}>{item[5]}</th>
                                    <th style={{backgroundColor: '#03aafb'}}>{item[6]}</th>
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
                            if(index === 4) {
                                return (
                                    <tr key={index} className="parentData">
                                        <th style={{backgroundColor: '#9efb87'}}>{diem[0]}</th>
                                        <th style={{backgroundColor: '#bf8bef'}}>{diem[1]}</th>
                                        <th style={{backgroundColor: '#9efb87'}}>{diem[2]}</th>
                                        <th style={{backgroundColor: '#bf8bef'}}>{diem[3]}</th>
                                        <th>{typeof diem[4] !== 'string' ? `${diem[4] * 100}%` : diem[4]}</th>
                                        <th>{diem[5] * 100}%</th>
                                        <th>{diem[6]}</th>
                                        <th style={{backgroundColor: '#ff9393'}}>{diem[7]}</th>
                                    </tr>
                                );
                            }
                            if(index === 5 || index === 6 || index === 7) {
                                if(index === 5) {
                                    return (
                                        <tr key={index} className="parentData">
                                            <th style={{backgroundColor: '#9efb87'}}>{diem[0]}</th>
                                            <th style={{backgroundColor: '#bf8bef'}}>{Math.round(diem[1]*100*100)/100}%</th>
                                            <th style={{backgroundColor: '#bf8bef'}}>{Math.round(diem[2]*100*100)/100}%</th>
                                            <th style={{backgroundColor: '#bf8bef'}}>{Math.round(diem[3]*100*100)/100}%</th>
                                            <th>{diem[4] * 100}%</th>
                                            <th rowSpan="3">{diem[5] * 100}%</th>
                                            <th>{diem[6]}</th>
                                            <th rowSpan="3" style={{backgroundColor: '#ff9393'}}>{diem[7]}</th>
                                        </tr>
                                    );
                                }
                                return (
                                    <tr key={index} className="parentData">
                                        <th style={{backgroundColor: '#9efb87'}}>{diem[0]}</th>
                                        <th style={{backgroundColor: '#bf8bef'}}>{Math.round(diem[1]*100*100)/100}%</th>
                                        <th style={{backgroundColor: '#bf8bef'}}>{Math.round(diem[2]*100*100)/100}%</th>
                                        <th style={{backgroundColor: '#bf8bef'}}>{Math.round(diem[3]*100*100)/100}%</th>
                                        <th>{diem[4]*100}%</th>
                                        <th>{diem[5]}</th>
                                    </tr>
                                );
                            }
                            return (
                                <tr key={index} className="parentData">
                                    <th style={{backgroundColor: '#9efb87'}}>{diem[0]}</th>
                                    <th style={{backgroundColor: '#bf8bef'}}>{Math.round(diem[1]*100*100)/100}%</th>
                                    <th style={{backgroundColor: '#bf8bef'}}>{Math.round(diem[2]*100*100)/100}%</th>
                                    <th style={{backgroundColor: '#bf8bef'}}>{Math.round(diem[3]*100*100)/100}%</th>
                                    <th>{typeof diem[4] !== 'string' ? `${diem[4] * 100}%` : diem[4]}</th>
                                    <th>{diem[5] * 100}%</th>
                                    <th>{diem[6]}</th>
                                    <th style={{backgroundColor: '#ff9393'}}>{diem[7]}</th>
                                </tr>
                            );
                        })
                    }
                        <tr className="Tong" style={{fontSize: '1.2rem'}}>
                            <th colSpan="7" style={{backgroundColor: 'yellow'}}>Tổng điểm</th>
                            <th style={{backgroundColor: 'yellow', color: 'red'}}>{tongDiem}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            )
        }
            </>
        );
        
    }

    

    return(
        <>
        
        {
            canslim.length !== 0 && (
                <>
                <div className="anh2">
                    <h1>PHÂN TÍCH CANSLIM DOANH NGHIỆP</h1>
                </div>
                <div className="canslim">
                <h1>Canslim</h1>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="11" rowSpan="2">
                            
                            </th>
                            <th rowSpan="2">
                                THAM CHIẾU
                            </th>
                            <th rowSpan="2">
                                TỶ TRỌNG
                            </th>
                            <th>
                                C
                            </th>
                            <th>
                                A
                            </th>
                            <th rowSpan="2">
                                TỔNG ĐIỂM
                            </th>
                        </tr>
                        <tr>
                            <th style={{backgroundColor: '#ff5a5a'}}>
                                {canslim[8]}
                            </th>
                            <th style={{backgroundColor: '#ff5a5a'}}>
                                {canslim[9]}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="childData">
                            <td rowSpan="8" style={{backgroundColor: 'orange'}}>Tiêu chí SALE</td>
                            <td rowSpan="2">1 Quý gần nhất (C)</td>
                            <td colSpan="3" rowSpan="2"></td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q1 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q1 2021</td>
                            <td colSpan="3" rowSpan="2"></td>
                            <td rowSpan="2" style={{backgroundColor: '#13a013'}}>{canslim[0][2]}%</td>
                            <td rowSpan="2">{canslim[0][3]}%</td>
                            <td rowSpan="2">{canslim[0][4]}%</td>
                            <td rowSpan="2">{canslim[0][5]}</td>
                            <td rowSpan="2"></td>
                            <td rowSpan="17" style={{backgroundColor: 'yellow'}}>{canslim[10]}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[0][0]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[0][1]}</td>
                        </tr>
                        <tr className="childData">
                            <td rowSpan="2">1 Quý trước đó gần nhất (C)</td>
                            <td colSpan="3" rowSpan="2"></td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q4 2019</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q4 2020</td>
                            <td colSpan="3" rowSpan="2"></td>
                            <td rowSpan="2" style={{backgroundColor: '#13a013'}}>{canslim[1][2]}%</td>
                            <td rowSpan="2">{canslim[1][3]}%</td>
                            <td rowSpan="2">{canslim[1][4]}%</td>
                            <td rowSpan="2">{canslim[1][5]}</td>
                            <td rowSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[1][0]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[1][1]}</td>
                        </tr>
                        
                        <tr className="childData">
                            <td rowSpan="2">Trailing 12 tháng gần nhất (A)</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q2 2019</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q3 2019</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q4 2019</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q1 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q2 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q3 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q4 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q1 2021</td>
                            
                            <td rowSpan="2" style={{backgroundColor: '#13a013'}}>{canslim[2][8]}%</td>
                            <td rowSpan="2">{canslim[2][9]}%</td>
                            <td rowSpan="2">{canslim[2][10]}%</td>
                            <td rowSpan="2"></td>
                            <td rowSpan="2">{canslim[2][11]}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[2][0]}</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[2][1]}</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[2][2]}</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[2][3]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[2][4]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[2][5]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[2][6]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[2][7]}</td>
                        </tr>
                        <tr className="childData">
                            <td rowSpan="2">Trailing 12 tháng gần nhất trước đó (A)</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q1 2019</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q2 2019</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q3 2019</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q4 2019</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q1 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q2 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q3 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q4 2020</td>
                            
                            <td rowSpan="2" style={{backgroundColor: '#13a013'}}>{canslim[3][8]}%</td>
                            <td rowSpan="2">{canslim[3][9]}%</td>
                            <td rowSpan="2">{canslim[3][10]}%</td>
                            <td rowSpan="2"></td>
                            <td rowSpan="2">{canslim[3][11]}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[3][0]}</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[3][1]}</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[3][2]}</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[3][3]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[3][4]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[3][5]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[3][6]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[3][7]}</td>
                        </tr>
                        <tr>
                            <td colSpan="15" style={{backgroundColor: '#74de74'}}>
                            </td>
                        </tr>


                        
                        <tr className="childData">
                            <td rowSpan="8" style={{backgroundColor: '#de620b'}}>Tiêu chí EPS</td>
                            <td rowSpan="2">1 Quý gần nhất (C)</td>
                            <td colSpan="3" rowSpan="2"></td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q1 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q1 2021</td>
                            <td colSpan="3" rowSpan="2"></td>
                            <td rowSpan="2" style={{backgroundColor: '#13a013'}}>{canslim[4][2]}%</td>
                            <td rowSpan="2">{canslim[4][3]}%</td>
                            <td rowSpan="2">{canslim[4][4]}%</td>
                            <td rowSpan="2">{canslim[4][5]}</td>
                            <td rowSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[4][0]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[4][1]}</td>
                        </tr>
                        <tr className="childData">
                            <td rowSpan="2">1 Quý trước đó gần nhất (C)</td>
                            <td colSpan="3" rowSpan="2"></td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q4 2019</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q4 2020</td>
                            <td colSpan="3" rowSpan="2"></td>
                            <td rowSpan="2" style={{backgroundColor: '#13a013'}}>{canslim[5][2]}%</td>
                            <td rowSpan="2">{canslim[5][3]}%</td>
                            <td rowSpan="2">{canslim[5][4]}%</td>
                            <td rowSpan="2">{canslim[5][5]}</td>
                            <td rowSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[5][0]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[5][1]}</td>
                        </tr>
                        
                        <tr className="childData">
                            <td rowSpan="2">Trailing 12 tháng gần nhất (A)</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q2 2019</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q3 2019</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q4 2019</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q1 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q2 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q3 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q4 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q1 2021</td>                   
                            <td rowSpan="2" style={{backgroundColor: '#13a013'}}>{canslim[6][8]}%</td>
                            <td rowSpan="2">{canslim[6][9]}%</td>
                            <td rowSpan="2">{canslim[6][10]}%</td>
                            <td rowSpan="2"></td>
                            <td rowSpan="2">{canslim[6][11]}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[6][0]}</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[6][1]}</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[6][2]}</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[6][3]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[6][4]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[6][5]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[6][6]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[6][7]}</td>
                        </tr>
                        <tr className="childData">
                            <td rowSpan="2">Trailing 12 tháng gần nhất trước đó (A)</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q1 2019</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q2 2019</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q3 2019</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>Q4 2019</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q1 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q2 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q3 2020</td>
                            <td style={{backgroundColor: '#98c8f3'}}>Q4 2020</td>                   
                            <td rowSpan="2" style={{backgroundColor: '#13a013'}}>{canslim[7][8]}%</td>
                            <td rowSpan="2">{canslim[7][9]}%</td>
                            <td rowSpan="2">{canslim[7][10]}%</td>
                            <td rowSpan="2"></td>
                            <td rowSpan="2">{canslim[7][11]}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[7][0]}</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[7][1]}</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[7][2]}</td>
                            <td style={{backgroundColor: '#ffa6036b'}}>{canslim[7][3]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[7][4]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[7][5]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[7][6]}</td>
                            <td style={{backgroundColor: '#98c8f3'}}>{canslim[7][7]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
                </>
            )
        }
        </> 
    );
}

export default FourM;