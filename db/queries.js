db = connect("localhost:27017/celebrities");

function getAllCelebNames() {
  return db.celebrities
    .find()
    .toArray()
    .map((celebrity) => celebrity.name);
}
