import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useformatDate } from "@/presentation/hooks";
import { 
    AppDispatch, 
    removeAppointmentRequest, 
    editAppointmentRequest, 
    searchDateIntervalAppointmentRequest 
} from "@/main/store";

type ActionParams = 'editar' | 'excluir' | ''

const useAppDispatch = () => useDispatch<AppDispatch>()

import { AppointmentModel } from "@/domain/models"

import { makeEditAppointmentValidation, makeRemoveAppointmentValidation } from "@/main/factories/validation";

type Props = {
    Appointment: AppointmentModel
}

export const AppointmentFormCard: React.FC<Props> = ({Appointment }: Props) => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState: { errors }, reset, setError, clearErrors } = useForm();
    const [action, setAction] = useState<ActionParams>('')
    
    useEffect(() => {
        reset({
            id: Appointment.id,
            title: Appointment.title,
            started_date: useformatDate(Appointment.started_date),
            ending_date: useformatDate(Appointment.ending_date)
        })
    }, [Appointment])

    const onSubmitEditAppointment = (params: any) =>{
        clearErrors()
        const AddAppointmentValidation = makeEditAppointmentValidation()
        const fields_erros = []
        fields_erros.push(AddAppointmentValidation.validate('title', params))
        fields_erros.push(AddAppointmentValidation.validate('started_date', params))
        fields_erros.push(AddAppointmentValidation.validate('ending_date', params))

        if (fields_erros.length > 0) {
            let err = false
            fields_erros.map(async (params: any) => { 
                if(params){
                    err = true
                    setError(
                        params.fieldName,
                        {
                            message: params.message,
                            type: params.type
                        },
                        { shouldFocus: true }
                    )
                }
            })
            if(err) return
        }
        const response = dispatch(searchDateIntervalAppointmentRequest({
            started_date: useformatDate(params.started_date),
            ending_date: useformatDate(params.ending_date)
        }))

        if(response){
            alert('Data escolhida indisponivel')
        }
        else{
            dispatch(editAppointmentRequest({
                id: params.id,
                title: params.title,
                started_date: useformatDate(params.started_date),
                ending_date: useformatDate(params.ending_date)
            }))
            reset()
        }
    }

    const onSubmitRemoveAppointment = (params: any) =>{
        clearErrors()
        const AddAppointmentValidation = makeRemoveAppointmentValidation()
        const fields_erros = []
        fields_erros.push(AddAppointmentValidation.validate('id', params))

        if (fields_erros.length > 0) {
            let err = false
            fields_erros.map(async (params: any) => { 
                if(params){
                    err = true
                    setError(
                        params.fieldName,
                        {
                            message: params.message,
                            type: params.type
                        },
                        { shouldFocus: true }
                    )
                }
            })
            if(err) return
        }
        dispatch(removeAppointmentRequest({
            id: params.id,
        }))
    }

    const onSubmit = (params: any) => {
        switch (action) {
            case 'editar':
                onSubmitEditAppointment(params)
            break;
            case 'excluir':
                onSubmitRemoveAppointment(params)
            break;
            default:
                return
        }
    }

    return (
        <div>
            <form
            className="appointmentForm"
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                {...register("id")}
                type="text"
                hidden
                disabled
            />
            <input
                {...register("title")}
                type="text"
            />
            <input
                {...register("started_date")}
                type="datetime-local"
            />
            <input
                {...register("ending_date")}
                type="datetime-local"
            />
            <input
                className="btnEditAppoitment"
                value={'Editar'}
                onClick={() => setAction('editar')}
                type="submit"
            />
            <input
                className="btnRemoveAppoitment"
                value="Excluir"
                onClick={() => setAction("excluir")}
                type="submit"
            />
        </form>

        </div>
    )
}