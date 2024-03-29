import { IRoute, ISideBarMenu } from "./ts/type/common";
import LoginScreen from "./screens/auth/login";
import DashboardScreen from "./screens/dashboard";
import CustomerScreen from "./screens/customer";
import CreateCustomerScreen from "./screens/customer/create";
import CustomerDetailScreen from "./screens/customer/detail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faDatabase,
  faBagShopping,
  faListCheck,
  faCircleDot,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import ConfigurationsScreen from "./screens/configurations";
import AgencyBranchScreen from "./screens/branchs";

export const routes: IRoute[] = [
  {
    path: "/auth/login",
    element: <LoginScreen />,
  },
  {
    path: "/app/dashboard",
    element: <DashboardScreen />,
  },
  {
    path: "/app/dashboard/customers",
    element: <CustomerScreen />,
  },
  {
    path: "app/dashboard/customer/create",
    element: <CreateCustomerScreen />,
  },
  {
    path: "app/dashboard/customer/:id",
    element: <CustomerDetailScreen />,
  },
  {
    path: "app/dashboard/configurations",
    element: <ConfigurationsScreen />,
  },
  {
    path: "app/dashboard/agency-branch",
    element: <AgencyBranchScreen />,
  },
];

export const sideBarMenu: ISideBarMenu[] = [
  {
    id: "dashboard",
    title: "Tổng quan",
    itemId: "/app/dashboard",
    elemBefore: () => <FontAwesomeIcon icon={faDatabase} />,
    subNav: [
      {
        id: "dashboard-sell",
        title: "Bán hàng",
        elemBefore: () => <FontAwesomeIcon icon={faBagShopping} />,
        itemId: "/app/dashboard/sell",
      },
      {
        id: "dashboard-crm",
        title: "CRM",
        elemBefore: () => <FontAwesomeIcon icon={faListCheck} />,

        itemId: "/app/dashboard/crm",
      },
    ],
  },
  {
    id: "sell-management",
    title: "Quản lý bán hàng",
    elemBefore: () => <FontAwesomeIcon icon={faSackDollar} />,
    subNav: [
      {
        id: "orders",
        title: "Đơn hàng",
        itemId: "/app/dashboard/orders",
        elemBefore: () => <FontAwesomeIcon icon={faCircleDot} />,
        subNav: [
          {
            id: "orders-create",
            title: "Tạo đơn và giao hàng",
            itemId: "/app/dashboard/orders/create",
          },
          {
            id: "orders-list",
            title: "Danh sách đơn hàng",
            itemId: "/app/dashboard/orders",
          },
        ],
      },
      {
        id: "deliveries",
        title: "Vận chuyển",
        elemBefore: () => <FontAwesomeIcon icon={faCircleDot} />,
        subNav: [
          {
            id: "deliveries-list",
            title: "Danh sách đối tác",

            itemId: "/app/dashboard/deliveries",
          },
        ],
      },
      {
        id: "products",
        title: "Sản phẩm",

        elemBefore: () => <FontAwesomeIcon icon={faCircleDot} />,
        subNav: [
          {
            id: "product-list",
            title: "Danh sách sản phẩm",

            itemId: "/app/dashboard/products",
          },

          {
            id: "product-purchase-orders",
            title: "Nhập hàng",

            itemId: "/app/dashboard/purchase_orders",
          },
          {
            id: "product-suppliers",
            title: "Nhà cung cấp",

            itemId: "/app/dashboard/suppliers",
          },
        ],
      },
      {
        id: "customers",
        title: "Khách hàng",
        elemBefore: () => <FontAwesomeIcon icon={faCircleDot} />,
        itemId: "/app/dashboard/customers",
      },
    ],
  },
  {
    id: "advance",
    title: "Nâng cao",

    elemBefore: () => <FontAwesomeIcon icon={faGear} />,
    subNav: [
      {
        id: "applications",
        title: "Ứng dụng",

        elemBefore: () => <FontAwesomeIcon icon={faCircleDot} />,
        itemId: "/app/dashboard/applications",
      },
      {
        id: "configurations",
        title: "Cấu hình",
        elemBefore: () => <FontAwesomeIcon icon={faCircleDot} />,
        itemId: "/app/dashboard/configurations",
      },
    ],
  },
];
