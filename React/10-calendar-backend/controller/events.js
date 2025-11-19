const { response } = require("express");
const Events = require("../models/Events");


const getEvent = async(req, res=response) => {
    
  
    
    
    
    
    const user = req.uid

    try {

        const evento = await Events.find ()
                                   .populate('user','name');
        if (!evento) {
            res.status(400).json({
                ok:false,
                msg: 'El usuario no posee ningun evento'
            })
            
        }else{

            res.status(201).json({
                ok:true,
                evento
            })

        }



        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'contacte el admin'
        })
        
    }




}




const makeEvent = async (req, res=response) => {

    const event = new Events(req.body)

    try {
        
        
        event.user = req.uid //aqui el req aun tiene el valor del usuario id porq como se utiliza la funcion validar jwt y en ella se definio que la req.uid y .name iba a tener esos valores y se utiliza en todos lados la validacion jwt en todos se mantiene esa informacion del usuario y ademas se usa como id del evento pq se definio en el schema q seria el id con el objectid(Schema.Types.ObjectId)
        const eventsDB = await event.save()
    
        return res.status(201).json({
            ok:true,
            evento:eventsDB
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:"contacte con el admin"
        })
    }

}

const updateEvent = async(req, res=response) => {

    const  eventoId = req.params.id //cuando se llama el params del req se esta llamando no se si se le pueda llmara querys o valores q se pasa en el link por ejemplo en este caso se pone q /api/events/:id o sea lo q vaya despues del ultimo slash sera el id al igual q si se concatena luego del id un &:name sera otra variable q en el link tendra el valor del name ej: api/events/xxxxxx&yyy xes el id y y name

    const uid = req.uid //se guarda el id del user q se obtuvo del middleware

   

    try {

        const evento = await Events.findById(eventoId) //se busca mediante el modelo en la bd si existe evento con ese id 
        if (!evento) {
            return res.status(404).json({
                ok:false,
                msg: 'No existe el evento por el id'
            })
        }

        if (evento.user.toString() !== uid) { //se pasa a string el id para comparar
            return res.status(401).json({
                ok:false,
                msg: 'No esta autorizado'
            })

            
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Events.findByIdAndUpdate(eventoId, nuevoEvento, {new:true}) // seactualiza en la bd con esa funcion pasando el id luego el evento actualizado y q muestre el nuevo por eso el new = true

        return res.status(201).json({
            ok:true,
            event:eventoActualizado
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:"contacte con el admin"
        })
    }
 
    

}

const deleteEvent = async(req, res=response) => {
    const idEvents = req.params.id
    const uid = req.uid


    try {

        const evento = await Events.findById(idEvents)
        
        if (!evento) {
            return res.status(404).json({
                ok:false,
                msg: 'El evento no existe'
            })
        }

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg:'No esta autorizado a eliminar el evento'
            })
        }

        await Events.findByIdAndDelete(idEvents)
        return res.status(201).json({
            ok:true,
            msg:'Se ha eliminado correctamente el evento '
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:"contacte con el admin"
        })
    }


    

}



module.exports = {
    getEvent,
    makeEvent,
    updateEvent,
    deleteEvent
}