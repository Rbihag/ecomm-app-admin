import React from 'react'
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from '@ant-design/plots';

const Dashboard = () => {
    const data = [
        {
            type: 'January',
            sales: 38,
        },
        {
            type: 'February',
            sales: 52,
        },
        {
            type: 'March',
            sales: 61,
        },
        {
            type: 'April',
            sales: 100,
        },
        {
            type: 'May',
            sales: 48,
        },
        {
            type: 'June',
            sales: 38,
        },
        {
            type: 'July',
            sales: 122,
        },
        {
            type: 'August',
            sales: 146,
        },
        {
            type: 'September',
            sales: 80,
        },
        {
            type: 'November',
            sales: 65,
        },
        {
            type: 'December',
            sales: 35,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        color: ({ type }) => {
            return "#ffd333";
        },
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 1,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: 'Month',
            },
            sales: {
                alias: 'Income',
            },
        },
    };
    return (
        <div>
            <h3 className="mb-4 title">Dashboard</h3>
            <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
                    <div>
                        <p className="desc">Total</p>
                        <h4 className="mb-0 sub-title">&#8369; 2,370</h4>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <h6>
                            <BsArrowUpRight /> 33%
                        </h6>
                        <p className="mb-0  desc">Compared To July 2023</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
                    <div>
                        <p className="desc">Total</p>
                        <h4 className="mb-0 sub-title">&#8369; 2,370</h4>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <h6 className="red">
                            <BsArrowDownRight /> 33%
                        </h6>
                        <p className="mb-0  desc">Compared To July 2023</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
                    <div>
                        <p className="desc">Total</p>
                        <h4 className="mb-0 sub-title">&#8369; 2,370</h4>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <h6 className="green">
                            <BsArrowUpRight /> 33%
                        </h6>
                        <p className="mb-0 desc">Compared To July 2023</p>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <h3 className='mb-4'>Income Statics</h3>
                <div>
                    <Column {...config} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard