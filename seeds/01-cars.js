
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: "KMHHT6KD4BU044748",
          make: "Ford",
          model: "F100",
          mileage: 200000,
          transmission: "Manual",
          status: "Operable"
      },
      {
          VIN: "1GKFK16397J151682",
          make: "Cadillac",
          model: "Series 75",
          mileage: 14632,
          transmission: "Manual",
          status: "Classic"
      },
      {
          VIN: "WDDHF8JBXEB037736",
          make: "Porsche",
          model: "944",
          mileage: 14275,
          transmission: "Manual",
          status: "Dream"
      }
      ]);
    });
};
