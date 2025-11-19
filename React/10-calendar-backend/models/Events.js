const {Schema, model} = require('mongoose')


const EventsSchema = new Schema({
    title:{
        type: String,
        required: true,

    },
    notes:{
        type: String,
        
    },
    start:{
        type: Date,
        required: true,
    },
    end:{
        type: Date,
        required: true,
        
    },
    user: {
        type: Schema.Types.ObjectId,  //este es una referencia a que el tipo es un esquema 
        ref:'Usuario',
        required: true,
    }

})

//cuando se utiliza mongoose y se utiliza a .json el lanza unos datos como _v y _id q son valores adicionales automaticos la forma de modificarlos o quitarlos es --->
EventsSchema.method('toJSON', function(){
    const {__v,_id, ...object} = this.toObject();
    object.id=_id
    return object;
}) //esto se utiliza solo al usar el toJSON no modifica la base de  datos 

module.exports = model('Events', EventsSchema)