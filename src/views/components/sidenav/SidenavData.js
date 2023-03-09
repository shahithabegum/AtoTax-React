import React from 'react';
import { FaUserFriends,FaRupeeSign,FaHome,FaBook,FaUserShield,FaHistory,FaUser,FaKey,FaUserPlus,FaInfoCircle} from "react-icons/fa";
import { MdEditNote ,MdOutlinePayments,MdOutlinePermMedia,MdLocationOn,MdMiscellaneousServices,MdDashboard,MdNaturePeople} from "react-icons/md";
import { GiStabbedNote,GiFiles,GiReceiveMoney,GiTakeMyMoney,GiMoneyStack,GiNotebook,GiSettingsKnobs } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";

import { HiUsers } from "react-icons/hi2";
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
                path:"/addressType",
                title:"Address Type",
                icon:<FaHome/>
            },
           
          
           ]
    },
    {
        path:"/billandfeecollection",
        title:"GST Bills Processing",
        icon:<GiStabbedNote/>
    }, 
    {
        path:"/clientMonthlyPay",
        title:"GST Monthly Payments",
        icon:<GiTakeMyMoney/>
    }, 
    {
        path:"/GstPaidDetails",
        title:"GST Paid Details",
        icon:<FaRupeeSign/>
    }, 
   
    {
        path:"/accountLedger",
        title:"Account Ledger",
        icon:<GiNotebook />
    },
    {
        path:"/CollectionAndBalance",
        title:"Collection And Balance",
        icon:<GiMoneyStack/>
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
        title: "Users",
        icon: <HiUsers/>,
        "childrens": [
            {
                path:"/register",
                title:"Register",
                icon:<FaUserPlus/>
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
        path:"/changepassword",
        title:"Change Password",
        icon:<FaKey />
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
        title: "GST Configuration",
        icon: <GiSettingsKnobs/>,
        "childrens": [   {
            path:"/GstFilingTypes",
            title:"Filing Types",
            icon:<GiFiles/>
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
]
},
]