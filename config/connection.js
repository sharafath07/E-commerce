var  MongoClient = require("mongodb").MongoClient;

const state = {
    db: null
};

const url = "mongodb://127.0.0.1:27017"; // Use 127.0.0.1 for reliability
const dbName = "shopping";

module.exports.connect = function (done) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((client) => {
            state.db = client.db(dbName);
            console.log("✅ MongoDB connected to", dbName);
            done();
        })
        .catch((err) => {
            console.error("❌ MongoDB connection failed:", err);
            done(err);
        });
};

module.exports.get = function () {
    return state.db;
};
