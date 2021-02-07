db.trips
  .find({ tripduration: { $lte: 70 }, usertype: { $ne: "Subscriber" } })
  .pretty();

db.trips
  .find({ tripduration: { $lte: 70 }, usertype: { $eq: "Customer" } })
  .pretty();

db.trips.find({ tripduration: { $lte: 70 }, usertype: "Customer" }).pretty();
