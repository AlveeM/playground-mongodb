db.routes
  .find({
    $and: [
      { $or: [{ dst_airport: "KZN" }, { src_airport: "KZN" }] },
      { $or: [{ airplane: "CR2" }, { airplane: "A81" }] },
    ],
  })
  .pretty();

db.inspections
  .find({
    result: "Out of Business",
    sector: "Home Improvement Contractor - 100",
  })
  .count();

db.companies
  .find({
    $and: [
      { $or: [{ category_code: "social" }, { category_code: "web" }] },
      { $or: [{ founded_year: 2004 }, { founded_month: 10 }] },
    ],
  })
  .count();
