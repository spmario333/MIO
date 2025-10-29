import { useState } from "react"


export const useForm = (initialInputValue={}) => {


    const [form, setForm] = useState(initialInputValue)
    
    const reset = (newFormState = initialInputValue) =>{
        setForm(newFormState)
    }

    const handleInputChange = ({target}) =>{

        setForm({

            ...form,
            [target.name]: target.value 
        }) 
    }

        return [form , handleInputChange, reset]
}
