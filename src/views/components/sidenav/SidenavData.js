import React from 'react';
import { FaUserFriends,FaUserTie,FaRupeeSign,FaHome,FaBook,FaRegIdBadge,FaHistory,FaUser,FaKey,FaUserPlus} from "react-icons/fa";
import { MdEditNote ,MdOutlinePayments,MdOutlinePermMedia,MdLocationOn,MdMiscellaneousServices,MdDashboard} from "react-icons/md";
import { GiTakeMyMoney,GiFiles,GiReceiveMoney } from "react-icons/gi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoIosPeople } from "react-icons/io";

import { SiStatuspage } from "react-icons/si";

export const SidenavData=[
    {
        path:"/dashboard",
        title:"Dashboard",
        icon:<MdDashboard/>
    },
    {
        title: "GST Clients",
        icon: <IoIosPeople/>,
        "childrens": [
            {
                path:"/Gstclient",
                title:"Clients",
                icon:<FaUserFriends/>
            },
            {
                path:"/GStClientAddressEx",
                title:"Client Address",
                icon:<MdLocationOn/>
            },
            {
                path:"/GstFilingTypes",
                title:"Filing Types",
                icon:<GiFiles/>
            }
            , {
                path:"/GstPaidDetails",
                title:"Paid Details",
                icon:<FaRupeeSign/>
            }, 
        ]
    },
    {
        title: "Employees",
        icon: <FaUserFriends/>,
        "childrens": [
            {
                path:"/Employees",
                title:"Employee",
                icon:<FaUserFriends/>
            },
            {
                path:"/EmpJobRole",
                title:"Job Role",
                icon:<FaUserTie/>
            },
        ]
    },
    {
        path:"/users",
        title:"Users",
        icon:<FaUser />
    },
    {
        path:"/roles",
        title:"Roles",
        icon:""
    },
    {
        path:"/assignroles",
        title:"Asign Roles",
        icon:""
    },
    {
        path:"/register",
        title:"Register",
        icon:<FaUserPlus/>
    },
    {
        title: "Amendments",
        icon: <FaBook/>,
        "childrens": [
           
            {
                path:"/AmendType",
                title:"Amend Types",
                icon:<MdEditNote/>
            },
            {
                path:"/amendments",
                title:"Amendment",
                icon:<FaBook/>
            },
        ]
    },
    {
        title: "Services",
        icon: <MdMiscellaneousServices/>,
        "childrens": [
            {
                path:"/Clientfeecharges",
                title:"Client Fees Maps",
                icon:<GiReceiveMoney/>
            },
            {
                path:"/serviceCat",
                title:"Service Categary",
                icon:<FaRupeeSign/>
            },
            {
                path:"/serviceHistory",
                title:"Service Charge Update History",
                icon:<FaHistory/>
            },
           
        ]
    },
    {
        path:"/addressType",
        title:"Address Types",
        icon:<FaHome/>
    },
   
   
    {
        path:"/PaymentTypes",
        title:"Payment Type",
        icon:<MdOutlinePayments/>
    }, {
        path:"/MediaTypes",
        title:"Media Type",
        icon:<MdOutlinePermMedia/>
    },
    {
        path:"/changepassword",
        title:"Change Password",
        icon:<FaKey />
    },
    // {
    //     path:"/Status",
    //     title:"Status",
    //     icon:<SiStatuspage/>
    // },
]