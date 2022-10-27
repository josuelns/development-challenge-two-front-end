import { format } from "date-fns"

export const useformatDate = (date: string): string => {
    if(date){
        return format(new Date(date), 'yyyy-MM-dd hh:mm')
    }
    else{
        return ""
    }
}