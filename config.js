const database = 'users';

module.exports = {
    MONGO_URI: `mongodb://miguel:z2lZ9KSlhiI1XFB8@cluster0-shard-00-00.koofr.mongodb.net:27017,cluster0-shard-00-01.koofr.mongodb.net:27017,cluster0-shard-00-02.koofr.mongodb.net:27017/${database}?ssl=true&replicaSet=atlas-10alaz-shard-0&authSource=admin&retryWrites=true&w=majority`
};