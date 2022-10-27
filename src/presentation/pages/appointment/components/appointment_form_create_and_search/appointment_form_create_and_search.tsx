import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useformatDate } from "@/presentation/hooks";
import { AppDispatch, addAppointmentRequest, searchAppointmentRequest, loadAppointmentRequest, searchDateIntervalAppointmentRequest } from "../../../../../main/store";
import { makeAddAppointmentValidation, makeSearchAppointmentValidation } from "@/main/factories/validation";

type ActionParams = 'agendar' | 'pesquisar' | ''

const useAppDispatch = () => useDispatch<AppDispatch>()


export const AppointmentFormCreateAndSearch = () => {
    const dispatch = useAppDispatch()
    const [action, setAction] = useState<ActionParams>('')
    const { register, handleSubmit, formState: { errors }, reset, setError, clearErrors } = useForm();

    useEffect(() => {
        console.log(errors)
    }, [errors])

    const onSubmitAddAppointment = (params: any) => {
        clearErrors()
        const AddAppointmentValidation = makeAddAppointmentValidation()
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
        const response: any = dispatch(searchDateIntervalAppointmentRequest({
            started_date: useformatDate(params.started_date),
            ending_date: useformatDate(params.ending_date)
        }))

        if(response.length > 0){
            alert('Data escolhida indisponivel')
        }
        else{
            dispatch(addAppointmentRequest({
                title: params.title,
                started_date: useformatDate(params.started_date),
                ending_date: useformatDate(params.ending_date)
            }))
            reset()
        }
    }

    const onSubmitSearchAppointment = (params: any) => {
        clearErrors()
        const AddAppointmentValidation = makeSearchAppointmentValidation()
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
        dispatch(searchAppointmentRequest({
            title: params.title,
            started_date: useformatDate(params.started_date),
            ending_date: useformatDate(params.ending_date)
        }))
    }

    const onSubmit = (params: any) => {
        switch (action) {
            case 'agendar':
                onSubmitAddAppointment(params)
                break;
            case 'pesquisar':
                onSubmitSearchAppointment(params)
                break;
            default:
                dispatch(loadAppointmentRequest())
                reset()
                break;
        }
    }

    return (
        <form
            className="appointmentForm"
            onSubmit={handleSubmit(onSubmit)}
        >
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
                className="btnAddAppoitment"
                value={'Agendar'}
                onClick={() => setAction('agendar')}
                type="submit"
            />
            <input
                className="btnSearchAppoitment"
                value="Pesquisar"
                onClick={() => setAction("pesquisar")}
                type="submit"
            />
            <input
                className="btnCleanFormAppoitment"
                value="Limpar"
                onClick={() => setAction("")}
                type="submit"
            />
        </form>
    )
}