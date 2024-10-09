db.sales.aggregate([
  {
    $unwind: "$items",
  },
  {
    $addFields: {
      totalItemRevenue: { $multiply: ["$items.quantity", "$items.price"] },
      month: { $dateToString: { format: "%Y-%m", date: "$date" } },
    },
  },
  {
    $group: {
      _id: { store: "$store", month: "$month" },
      totalRevenue: { $sum: "$totalItemRevenue" },
      averagePrice: { $avg: "$items.price" },
    },
  },
  {
    $project: {
      _id: 0,
      store: "$_id.store",
      month: "$_id.month",
      totalRevenue: 1,
      averagePrice: { $round: ["$averagePrice", 2] },
    },
  },
  {
    $sort: { store: 1, month: 1 },
  },
]);
