const { mongoose } = require(".");

module.exports = mongoose =>{
    var schema = mongoose.Schema(
        {
            id:  String,
            title: String,
            realese :String
        },
        { timestamps: true}
    );

    schema.method("toJSON"), function(){
        const { _v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    };

    const movie = mongoose.model("movies", schema);
    return movie;
};