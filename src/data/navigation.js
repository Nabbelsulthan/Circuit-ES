const navigation = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "About",
        path: "/about",
    },
    {
        label: "Services",
        children: [
            {
                label: "Electrical Control Panels",
                path: "/services/control-panels",
            },
            {
                label: "Automation Solutions",
                path: "/services/automation-solutions",
            },
            {
                label: "PLC Programming",
                path: "/services/plc-programming",
            },
            {
                label: "Industrial Wiring",
                path: "/services/industrial-wiring",
            },
            {
                label: "Panel Installation",
                path: "/services/panel-installation",
            },
            {
                label: "Maintenance & AMC",
                path: "/services/maintenance-amc",
            },
            {
                label: "Custom Engineering",
                path: "/services/custom-engineering",
            },
        ],
    },
    {
        label: "Products",
        children: [
            {
                label: "MCC Panels",
                path: "/products/mcc-panels",
            },
            {
                label: "PCC Panels",
                path: "/products/pcc-panels",
            },
            {
                label: "APFC Panels",
                path: "/products/apfc-panels",
            },
            {
                label: "PLC Panels",
                path: "/products/plc-panels",
            },
            {
                label: "VFD Panels",
                path: "/products/vfd-panels",
            },
            {
                label: "Synchronizing Panels",
                path: "/products/synchronizing-panels",
            },
            {
                label: "AMF Panels",
                path: "/products/amf-panels",
            },
            {
                label: "Control Panels",
                path: "/products/control-panels",
            },
            {
                label: "Battery Enclosures",
                path: "/products/battery-enclosures",
            },
            {
                label: "Custom Panels",
                path: "/products/custom-panels",
            },
        ],
    },
    {
        label: "Projects",
        path: "/projects",
    },
    {
        label: "Industries",
        path: "/industries",
    },
    {
        label: "Resources",
        path: "/resources",
    },
    {
        label: "Contact",
        path: "/contact",
    },
];

export default navigation;