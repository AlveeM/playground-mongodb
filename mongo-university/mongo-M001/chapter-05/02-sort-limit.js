db.zips.find().sort({ pop: 1 }).limit(1);

db.zips.find({ pop: 0 }).count();

db.zips.find().sort({ pop: -1 }).limit(1);

db.zips.find().sort({ pop: -1 }).limit(10);

db.zips.find().sort({ pop: 1, city: -1 });

db.trips
  .find({ "birth year": { $ne: "" } }, { "birth year": 1, _id: 0 })
  .sort({ "birth year": -1 })
  .limit(1);
