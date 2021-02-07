db.zips.find({});
db.zips.find({ state: "NY" });
db.zips.find({ state: "NY" }).count();
db.zips.find({ state: "NY", city: "ALBANY" });
db.zips.find({ state: "NY", city: "ALBANY" }).pretty();
