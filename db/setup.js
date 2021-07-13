db = connect("localhost:27017/celebrities");

db.celebrities.drop();
db.createCollection("celebrities", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "birthPlace"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        age: {
          bsonType: "number",
          minimum: 0,
          maximum: 120,
          description: "must be an integer in [0,120] and required",
        },
        birthPlace: {
          bsonType: "object",
          required: ["country"],
          properties: {
            country: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            city: {
              bsonType: "string",
              description: "must be a string and is optional",
            },
          },
        },
        relationshipStatus: {
          bsonType: "string",
          enum: [
            "married",
            "single",
            "divorced",
            "widowed",
            "it's complicated",
          ],
          description:
            "must be a string, can only be one of the enum values and is optional",
        },
      },
    },
  },
});

db.celebrities.insertMany([
  { name: "Brad Pitt", age: 57, birthPlace: { country: "UK", city: "Londo" } },
]);
