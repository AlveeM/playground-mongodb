// use sample_training
db.inspections.find({ test: 1 }).pretty();
db.inspections.find({ test: 3 }).pretty();
db.inspections.deleteMany({ test: 1 });
db.inspections.deleteOne({ test: 3 });
db.inspection.find().pretty();
db.inspection.drop();
