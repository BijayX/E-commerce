import React from 'react';
import huba2 from '../../assets/huba2.png'

interface OrderItem {
  id: number;
  name: string;
  size: string;
  price: number;
  quantity: number;
  status: 'Delivered' | 'In Process';
  image: string;
}

const MyOrders: React.FC = () => {
  const orders: OrderItem[] = [
    {
      id: 1,
      name: "Girls Pink Moana Printed Dress",
      size: "S",
      price: 80.00,
      quantity: 1,
      status: "Delivered",
      image: huba2
    },
    {
      id: 2,
      name: "Women Textured Handheld Bag",
      size: "Regular",
      price: 80.00,
      quantity: 1,
      status: "In Process",
      image: huba2
    },
    {
      id: 3,
      name: "Tailored Cotton Casual Shirt",
      size: "M",
      price: 40.00,
      quantity: 1,
      status: "In Process",
      image: huba2
    }
  ];

  return (
          <div className="">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-grow">
                    <h3 className="font-medium">{order.name}</h3>
                    <div className="mt-1 space-y-1">
                      <p className="text-gray-600">Size: {order.size}</p>
                      <p className="text-gray-600">Qty: {order.quantity}</p>
                    </div>
                    <div className="mt-2">
                      {order.status === "Delivered" ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Delivered
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          In Process
                        </span>
                      )}
                      <p className="mt-1 text-sm text-gray-600">
                        Your product has been {order.status === "Delivered" ? "delivered" : "Inprocess"}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 mt-4 md:mt-0">
                    <span className="font-medium">${order.price.toFixed(2)}</span>
                    <button className="px-6 py-2 border border-black rounded-lg hover:bg-gray-50">
                      View Order
                    </button>
                    {order.status === "In Process" && (
                      <button className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                        Cancel Order
                      </button>
                    )}
                    {order.status === "Delivered" && (
                      <button className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                        Give Review
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
  );
};

export default MyOrders;