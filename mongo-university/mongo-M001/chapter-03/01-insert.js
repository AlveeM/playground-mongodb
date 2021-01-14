db.inspections.insert([{ test: 1 }, { test: 2 }, { test: 3 }]);

db.inspections.insert([
  { _id: 1, test: 1 },
  { _id: 1, test: 2 },
  { _id: 3, test: 3 },
]);

db.inspections.find({ _id: 1 });

db.inspections.insert(
  [
    { _id: 1, test: 1 },
    { _id: 1, test: 2 },
    { _id: 3, test: 3 },
  ],
  { ordered: false }
);

// won't get an error
// an "inspection" collection will be created
db.inspection.insert([
  { _id: 1, test: 1 },
  { _id: 3, test: 3 },
]);
