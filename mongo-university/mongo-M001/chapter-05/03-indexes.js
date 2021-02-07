db.trips.find({ "birth year": 1989 });

db.trips.find({ "start station id": 476 }).sort({ "birth year": 1 });

db.trips.createIndex({ "birth year": 1 });

db.trips.createIndex({ "start station id": 476, "birth year": 1 });
