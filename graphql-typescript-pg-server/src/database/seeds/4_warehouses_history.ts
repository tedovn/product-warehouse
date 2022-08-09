import * as Knex from "knex";

export const seed = async (knex: Knex) => {
  // Deletes ALL existing entries
  return knex("warehouses_history")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("warehouses_history").insert([
        { warehouse_id: 1, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: 10, type: "import" },
        { warehouse_id: 1, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: 10, type: "import" },
        { warehouse_id: 1, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: 10, type: "import" },
        { warehouse_id: 1, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: -15, type: "export" },
        { warehouse_id: 1, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: -5, type: "export" },
        { warehouse_id: 1, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: 20, type: "import" },
        { warehouse_id: 1, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: 20, type: "import" },
        { warehouse_id: 1, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: 20, type: "import" },
        { warehouse_id: 1, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: -25, type: "export" },
        { warehouse_id: 1, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: -15, type: "export" },
        { warehouse_id: 1, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: 30, type: "import" },
        { warehouse_id: 1, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: 30, type: "import" },
        { warehouse_id: 1, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: 30, type: "import" },
        { warehouse_id: 1, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: -25, type: "export" },
        { warehouse_id: 1, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: -15, type: "export" },
        { warehouse_id: 2, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: 10, type: "import" },
        { warehouse_id: 2, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: 10, type: "import" },
        { warehouse_id: 2, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: 10, type: "import" },
        { warehouse_id: 2, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: -15, type: "export" },
        { warehouse_id: 2, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: -5, type: "export" },
        { warehouse_id: 2, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: 20, type: "import" },
        { warehouse_id: 2, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: 20, type: "import" },
        { warehouse_id: 2, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: 20, type: "import" },
        { warehouse_id: 2, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: -25, type: "export" },
        { warehouse_id: 2, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: -15, type: "export" },
        { warehouse_id: 2, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: 30, type: "import" },
        { warehouse_id: 2, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: 30, type: "import" },
        { warehouse_id: 2, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: 30, type: "import" },
        { warehouse_id: 2, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: -25, type: "export" },
        { warehouse_id: 2, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: -15, type: "export" },
        { warehouse_id: 3, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: 10, type: "import" },
        { warehouse_id: 3, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: 10, type: "import" },
        { warehouse_id: 3, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: 10, type: "import" },
        { warehouse_id: 3, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: -15, type: "export" },
        { warehouse_id: 3, product_id: 1, product_name: "product1", product_description: "Some description", product_quantity: -5, type: "export" },
        { warehouse_id: 3, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: 20, type: "import" },
        { warehouse_id: 3, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: 20, type: "import" },
        { warehouse_id: 3, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: 20, type: "import" },
        { warehouse_id: 3, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: -25, type: "export" },
        { warehouse_id: 3, product_id: 2, product_name: "product2", product_description: "Some description", product_quantity: -15, type: "export" },
        { warehouse_id: 3, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: 30, type: "import" },
        { warehouse_id: 3, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: 30, type: "import" },
        { warehouse_id: 3, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: 30, type: "import" },
        { warehouse_id: 3, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: -25, type: "export" },
        { warehouse_id: 3, product_id: 3, product_name: "product3", product_description: "Some description", product_quantity: -15, type: "export" },
      ]);
    });
};
