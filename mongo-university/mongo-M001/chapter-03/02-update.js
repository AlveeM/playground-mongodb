// use sample_training

db.zips.find({ zip: "12534" }).pretty();
db.zips.find({ city: "HUDSON" }).pretty();
db.zips.find({ city: "HUDSON" }).count();
db.zips.updateMany({ city: "HUDSON" }, { $inc: { pop: 10 } });
db.zips.updateOne({ zip: "12534" }, { $set: { pop: 17630 } });
db.zips.updateOne({ zip: "12534" }, { $set: { population: 17630 } });
db.grades.find({ student_id: 151, class_id: 339 }).pretty();
db.grades.find({ student_id: 250, class_id: 339 }).pretty();
db.grades.updateOne(
  { student_id: 250, class_id: 339 },
  { $push: { scores: { type: "extra credit", score: 100 } } }
);
