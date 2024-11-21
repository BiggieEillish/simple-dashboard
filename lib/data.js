// Dummy data for users
export const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    emailVerified: '2024-11-20T00:00:00Z',
    image: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    emailVerified: null,
    image: 'https://images.unsplash.com/photo-1441786485319-5e0f0c092803?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

// Dummy data for products
export const products = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Smartwatch',
    status: 'Available',
    price: '10.00',
    stock: '20',
    availableAt: '2024-11-20T00:00:00Z',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Earbud',
    status: 'Out of Stock',
    price: '15.00',
    stock: '5',
    availableAt: '2024-11-25T00:00:00Z',
  },
];

// Get products with search and offset
export async function getProducts(search, offset) {
  let filteredProducts = products;

  if (search) {
    filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const totalProducts = filteredProducts.length;

  if (offset === null) {
    return { products: [], newOffset: null, totalProducts };
  }

  const moreProducts = filteredProducts.slice(offset, offset + 5);
  const newOffset = moreProducts.length >= 5 ? offset + 5 : null;

  return {
    products: moreProducts,
    newOffset,
    totalProducts,
  };
}

// Delete product by ID
export async function deleteProductById(id) {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1); // Remove the product from the array
  }
}

// Dummy analytics data
export const analyticsData = {
  keyMetrics: [
    { title: "Total Customers", value: 1200 },
    { title: "Total Orders", value: 450 },
    { title: "Revenue", value: "$25,000" },
    { title: "Products Sold", value: 1200 },
  ],
  monthlySales: [
    { month: "January", sales: 1200 },
    { month: "February", sales: 1500 },
    { month: "March", sales: 1800 },
    { month: "April", sales: 2100 },
    { month: "May", sales: 1900 },
  ],
};

// Dummy Orders Data
export const orders = [
  {
    id: 1,
    customer: "John Doe",
    product: "Smartwatch",
    status: "Shipped",
    orderDate: "2024-11-15T10:30:00Z",
    deliveryDate: "2024-11-20T14:00:00Z",
    total: "$250.00",
  },
  {
    id: 2,
    customer: "Jane Smith",
    product: "Earbud",
    status: "Processing",
    orderDate: "2024-11-18T12:45:00Z",
    deliveryDate: null,
    total: "$50.00",
  },
  {
    id: 3,
    customer: "Alice Brown",
    product: "Smartwatch",
    status: "Delivered",
    orderDate: "2024-11-10T09:15:00Z",
    deliveryDate: "2024-11-15T16:30:00Z",
    total: "$250.00",
  },
  {
    id: 4,
    customer: "Bob Taylor",
    product: "Earbud",
    status: "Cancelled",
    orderDate: "2024-11-12T14:20:00Z",
    deliveryDate: null,
    total: "$50.00",
  },
];

// Dummy Dashboard Data
export const dashboardSummary = {
  totalOrders: 450,
  totalRevenue: "$25,000",
  totalProducts: 50,
  totalCustomers: 1200,
  recentOrders: [
    {
      id: 1,
      customer: "John Doe",
      product: "Smartwatch",
      status: "Shipped",
      total: "$250.00",
    },
    {
      id: 2,
      customer: "Jane Smith",
      product: "Earbud",
      status: "Processing",
      total: "$50.00",
    },
    {
      id: 3,
      customer: "Alice Brown",
      product: "Smartwatch",
      status: "Delivered",
      total: "$250.00",
    },
  ],
  topProducts: [
    { name: "Smartwatch", sales: 150 },
    { name: "Earbud", sales: 90 },
    { name: "Wireless Charger", sales: 75 },
  ],
};
