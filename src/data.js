export const menu = [
   {
      id: 1,
      title: "main",
      listItems: [
         {
            id: 1,
            title: "Home",
            url: "/",
            icon: "home.svg",
         },
         {
            id: 2,
            title: "Profile",
            url: "/users/1",
            icon: "user.svg",
         },
      ],
   },
   {
      id: 2,
      title: "lists",
      listItems: [
         {
            id: 1,
            title: "Members",
            url: "/users",
            icon: "user.svg",
         },
         {
            id: 2,
            title: "Campaign",
            url: "/Campaign",
            icon: "product.svg",
         },
         {
            id: 3,
            title: "Stats Data",
            url: "/stats",
            icon: "order.svg",
         },
      ],
   },
   {
      id: 3,
      title: "Donation",
      listItems: [
         {
            id: 1,
            title: "Make Payment",
            url: "/",
            icon: "note.svg",
         },
         {
            id: 2,
            title: "Payment History",
            url: "/",
            icon: "form.svg",
         },
      ],
   },
   {
      id: 4,
      title: "Maintenance",
      listItems: [
         {
            id: 1,
            title: "Settings",
            url: "/",
            icon: "setting.svg",
         },
      ],
   },
];

export const communityData = {
   total_Donation: {
      color: "skyblue",
      icon: "/productIcon.svg",
      title: "Total Donation",
      number: "2385",
      dataKey: "products",
      percentage: 41,
      chartData: [
         { name: "Sun", products: 400 },
         { name: "Mon", products: 600 },
         { name: "Tue", products: 500 },
         { name: "Wed", products: 700 },
         { name: "Thu", products: 400 },
         { name: "Fri", products: 500 },
         { name: "Sat", products: 450 },
      ],
   },

   Donnor: {
      title: "Blood Donnor",
      color: "#8B0000",
      dataKey: "total_count",
      chartData: [
         {
            name: "O+",
            total_count: 900,
         },
         {
            name: "O-",
            total_count: 800,
         },
         {
            name: "A+",
            total_count: 1100,
         },
         {
            name: "A-",
            total_count: 560,
         },
         {
            name: "B+",
            total_count: 1200,
         },
         {
            name: "B-",
            total_count: 600,
         },
         {
            name: "AB+",
            total_count: 1500,
         },
         {
            name: "AB-",
            total_count: 970,
         },
      ],
   },
   Receiver: {
      title: "Blood Receiver",
      color: "#8B0000",
      dataKey: "total_count",
      chartData: [
         {
            name: "O+",
            total_count: 1900,
         },
         {
            name: "O-",
            total_count: 1300,
         },
         {
            name: "A+",
            total_count: 1000,
         },
         {
            name: "A-",
            total_count: 930,
         },
         {
            name: "B+",
            total_count: 1700,
         },
         {
            name: "B-",
            total_count: 790,
         },
         {
            name: "AB+",
            total_count: 2300,
         },
         {
            name: "AB-",
            total_count: 2120,
         },
      ],
   },

   accepted: 200,
   rejected: 120,
   received_Req: 500,
   raised_Req: 200,

   blood_Receiving: {
      color: "skyblue",
      icon: "/productIcon.svg",
      title: "Blood Receiving",
      number: "5734",
      dataKey: "products",
      percentage: 71,
      chartData: [
         { name: "Sun", products: 400 },
         { name: "Mon", products: 600 },
         { name: "Tue", products: 500 },
         { name: "Wed", products: 700 },
         { name: "Thu", products: 400 },
         { name: "Fri", products: 500 },
         { name: "Sat", products: 450 },
      ],
   },

   campaigns: {
      color: "skyblue",
      icon: "/productIcon.svg",
      title: "Campaigns",
      number: "574",
      dataKey: "products",
      percentage: 46,
      chartData: [
         { name: "Sun", products: 400 },
         { name: "Mon", products: 600 },
         { name: "Tue", products: 500 },
         { name: "Wed", products: 700 },
         { name: "Thu", products: 400 },
         { name: "Fri", products: 500 },
         { name: "Sat", products: 450 },
      ],
   },

   social_coins: {
      color: "skyblue",
      icon: "/productIcon.svg",
      title: "Social Coins",
      number: "7974",
      dataKey: "products",
      percentage: 79,
      chartData: [
         { name: "Sun", products: 400 },
         { name: "Mon", products: 600 },
         { name: "Tue", products: 500 },
         { name: "Wed", products: 700 },
         { name: "Thu", products: 400 },
         { name: "Fri", products: 500 },
         { name: "Sat", products: 450 },
      ],
   },

   gender_donnor: {
      title: "Donnor by Gender",
      chartData: [
         { name: "Male", value: 1089, color: "#0088FE" },
         { name: "Female", value: 941, color: "#00C49F" },
         { name: "TransGender", value: 360, color: "#FFBB28" },
      ],
   },

   requests: {
      title: "Requests by People",
      chartData: [
         { name: "Accepted", value: 1889, color: "#0088FE" },
         { name: "Rejected", value: 541, color: "#00C49F" },
         { name: "Received", value: 1560, color: "#FFBB28" },
         { name: "Raised", value: 1100, color: "#FF8042" },
      ],
   },

   blood: {
      title: "Blood Chart",
      // color: "#8884d8",
      color: "#FF8042",
      dataKey: "total_count",
      chartData: [
         {
            name: "Plasma",
            total_count: 2500,
         },
         {
            name: "platelets",
            total_count: 1500,
         },
         {
            name: "RBC",
            total_count: 1800,
         },
         {
            name: "WBC",
            total_count: 3000,
         },
         {
            name: "blood",
            total_count: 2000,
         },
      ],
   },
};

export const barChartBoxRevenue = {
   title: "Profit Earned",
   color: "#8884d8",
   dataKey: "profit",
   chartData: [
      {
         name: "Sun",
         profit: 4000,
      },
      {
         name: "Mon",
         profit: 3000,
      },
      {
         name: "Tue",
         profit: 2000,
      },
      {
         name: "Wed",
         profit: 2780,
      },
      {
         name: "Thu",
         profit: 1890,
      },
      {
         name: "Fri",
         profit: 2390,
      },
      {
         name: "Sat",
         profit: 3490,
      },
   ],
};

export const chartBoxProduct = {
   color: "skyblue",
   icon: "/productIcon.svg",
   title: "Total Products",
   number: "238",
   dataKey: "products",
   percentage: 21,
   chartData: [
      { name: "Sun", products: 400 },
      { name: "Mon", products: 600 },
      { name: "Tue", products: 500 },
      { name: "Wed", products: 700 },
      { name: "Thu", products: 400 },
      { name: "Fri", products: 500 },
      { name: "Sat", products: 450 },
   ],
};
