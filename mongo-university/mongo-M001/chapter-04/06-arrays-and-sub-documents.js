db.trips.findOne({ "start station location.type": "Point" });

db.companies
  .find({ "relationships.0.person.last_name": "Zuckerberg" }, { name: 1 })
  .pretty();

db.companies
  .find(
    {
      "relationships.0.person.first_name": "Mark",
      "relationships.0.title": { $regex: "CEO" },
    },
    { name: 1 }
  )
  .count();

db.companies
  .find(
    {
      "relationships.0.person.first_name": "Mark",
      "relationships.0.title": { $regex: "CEO" },
    },
    { name: 1 }
  )
  .pretty();

db.companies
  .find(
    {
      relationships: {
        $elemMatch: { is_past: true, "person.first_name": "Mark" },
      },
    },
    { name: 1 }
  )
  .pretty();

db.companies
  .find(
    {
      relationships: {
        $elemMatch: { is_past: true, "person.first_name": "Mark" },
      },
    },
    { name: 1 }
  )
  .count();

// Latitude decreases in value as you move west.
// How many trips in the sample_training.trips collection started at stations that are to the west of the -74 latitude coordinate?
db.trips.find({ "start station location.coordinates": { $lt: -74 } }).count();

// How many inspections from the sample_training.inspections collection were conducted in the city of NEW YORK?
db.inspections.find({ "address.city": "NEW YORK" }).count();
