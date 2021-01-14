db.listingsAndReviews
  .find({
    amenities: {
      $size: 20,
      $all: [
        "Internet",
        "Wifi",
        "Kitchen",
        "Heating",
        "Family/kid friendly",
        "Washer",
        "Dryer",
        "Essentials",
        "Shampoo",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Laptop friendly workspace",
      ],
    },
  })
  .pretty();

db.listingsAndReviews.find({
  reviews: { $size: 50 },
  accommodates: { $gt: 6 },
});

db.listingsAndReviews
  .find({ property_type: "House", amenities: "Changing table" })
  .count();
