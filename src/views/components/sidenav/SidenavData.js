import React from 'react';
import { FaUserFriends,FaUserTie,FaRupeeSign,FaHome,FaBook,FaUserShield,FaHistory,FaUser,FaKey,FaUserPlus,FaInfoCircle} from "react-icons/fa";
import { MdEditNote ,MdOutlinePayments,MdOutlinePermMedia,MdLocationOn,MdMiscellaneousServices,MdDashboard,MdNaturePeople} from "react-icons/md";
import { GiStabbedNote,GiFiles,GiReceiveMoney,GiTakeMyMoney,GiMoneyStack,GiNotebook } from "react-icons/gi";
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
            {
                path:"/billandfeecollection",
                title:"Bill And Fee Collection",
                icon:<GiStabbedNote/>
            }, 
            {
                path:"/clientMonthlyPay",
                title:"Monthly Payments",
                icon:<GiTakeMyMoney/>
            }, 
            {
                path:"/CollectionAndBalance",
                title:"Collection And Balance",
                icon:<GiMoneyStack/>
            }, 
        ]
    },
    {
        path:"/accountLedger",
        title:"Account Ledger",
        icon:<GiNotebook />
    },
    {
        path:"/users",
        title:"Users",
        icon:<FaUser />
    },
    {
        path:"/roles",
        title:"Roles",
        icon:<FaInfoCircle/>
    },
    {
        path:"/assignroles",
        title:"Assign Roles",
        icon:<MdNaturePeople/>
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
                title:"Service Category",
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
        title:"Address Type",
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