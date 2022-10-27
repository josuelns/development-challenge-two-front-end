import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch, orderAppointmentRequest } from "@/main/store";

const useAppDispatch = () => useDispatch<AppDispatch>()

export const AppointmentFormOrder = () => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = (params: any) => {
        dispatch(orderAppointmentRequest({
            title: params.order_title,
            started_date: params.order_started_date,
            ending_date: params.order_ending_date
        }))
    }

    return (
        <form
            className="appointmentFormOrder"
            onSubmit={handleSubmit(onSubmit)}
        >
            <span> Ordenar:</span>
            <input
                {...register("order_title")}
                type="checkbox"
            />
            <label htmlFor="orderName"> Nome</label>

            <input
                {...register("order_started_date")}
                type="checkbox"
            />
            <label htmlFor="orderStardedDate">Agendamento Início</label>

            <input
                {...register("order_ending_date")}
                type="checkbox"
            />
            <label htmlFor="orderEndingDate">Agendamento Término</label>

            <input
                className="btnOrderAppoitment"
                type="submit"
                value='Ordenar'
            />
        </form>
    );
}