import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getOrderByUser } from "../features/auth/authSlice";
import { BiArrowBack } from "react-icons/bi";


const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "ID",
        dataIndex: "id",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Method",
        dataIndex: "method",
    },
    {
        title: "Status",
        dataIndex: "status",
    },
    {
        title: "Amount",
        dataIndex: "amount",
    },
    {
        title: "Date",
        dataIndex: "date",
    },


];

const ViewOrder = () => {
    const location = useLocation();
    const userId = location.pathname.split("/")[3];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getOrderByUser(userId));
    }, []);

    const goBack = () => {
        navigate(-1);
    };

    const orderState = useSelector((state) => state.auth.orders);
    // console.log(orderState)
    const data1 = [];
    for (let i = 0; i < orderState.length; i++) {
        data1.push({
            key: i + 1,
            name: orderState[i].orderby.firstName + " " + orderState[i].orderby.lastName,
            product: (
                <Link to={`/admin/order/${orderState[i].orderby._id}`}>
                    View User Order
                </Link>
            ),
            amount: orderState[i].paymentIntent.amount,
            method: orderState[i].paymentIntent.method,
            status: orderState[i].paymentIntent.status,
            id: orderState[i].paymentIntent.id,
            date: new Date(orderState[i].createdAt).toLocaleString(),


        });
    }
    return (
        <div>
            <h3 className="mb-4 title">View User Order</h3>
            <div>{<Table columns={columns} dataSource={data1} />}</div>
            <button
                className="bg-transpatent border-0 fs-6 mb-0 d-flex align-items-center gap-1"
                onClick={goBack}
            >
                <BiArrowBack className="fs-5" /> Go Back
            </button>
        </div>

    );
};

export default ViewOrder;