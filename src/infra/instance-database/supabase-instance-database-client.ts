import { createClient, SupabaseClient } from "supabase/supabase-js";
import { InstanceDatabaseClient } from "@/data/protocols/instance-database/instance-database";
import { 
  AddAppointment, 
  EditAppointment, 
  OrderAppointment, 
  RemoveAppointment, 
  SearchAppointment,
  SearchDateIntervalAppointment
} from "@/domain/usecases";

export class SupabaseInstanceDatabaseClient implements InstanceDatabaseClient<SupabaseClient> {

  async getClient () {
    try {
      return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_TOKEN)
    } catch (error) {
      console.log(error)
    }
  }

  async addAppointment(params: AddAppointment.Params) {
    const instanceDatabase = await this.getClient()
    
    if(!instanceDatabase) return {
      StatusCode: 500
    }
    
    try {
      const data = await instanceDatabase
      .from('appointments')
      .insert([
        {'title': params.title, 'started_date': params.started_date, 'ending_date': params.ending_date}
      ])

      return {
        StatusCode: data.status
      }
    } catch (error) {
      return{
        StatusCode: 500
      }
    }
  }

  async editAppointment(params: EditAppointment.Params) {
    const instanceDatabase = await this.getClient()
    
    if(!instanceDatabase) return {
      StatusCode: 500
    }

    try {
      const data = await instanceDatabase
      .from('appointments')
      .update({ ...params})
      .eq('id', params.id)
      
      return {
        StatusCode: data.status
      }
    } catch (error) {
      return {
        StatusCode: 500
      } 
    }
  }

  async removeAppointment(params: RemoveAppointment.Params) {
    const instanceDatabase = await this.getClient()
    
    if(!instanceDatabase) return {
      StatusCode: 500
    }

    try {
      const data = await instanceDatabase
      .from('appointments')
      .delete()
      .eq('id', params.id)
      return {
        StatusCode: data.status
      }
    } catch (error) {
      return {
        StatusCode: 500
      } 
    }
  }

  async loadAppointment() {
    console.log('dudu ta vendo e devo pelo menos tentar', this.getClient())
    const instanceDatabase = await this.getClient()

    if(!instanceDatabase) return []
    
    const cb = async () => {
      return await instanceDatabase
      .from('appointments')
      .select("*") 
      .order('id', {ascending: false})
    }
    
    let appointmentsData = (await cb()).body
    
    if(appointmentsData && appointmentsData.length > 0){
      return appointmentsData
    }
    else{
      return []
    }
  }

  async searchAppointment(params: SearchAppointment.Params) {
    const instanceDatabase = await this.getClient()
    
    if(!instanceDatabase) return []

    try {
      let query = instanceDatabase
      .from('appointments')
      .select("*")

      if(params.title){ 
        query = query.ilike('title', '%'+params.title+"%")
      }
      if(params.started_date && params.started_date.length > 0){
        query = query.eq('started_date', params.started_date)
      }
      if(params.started_date && params.ending_date.length > 0){ 
        query = query.eq('ending_date', params.ending_date)
      }

      query = query.order('id', {ascending: false})

      let { data: appointments } = await query

      if(appointments && appointments.length > 0){
        return appointments
      }
      else{
        return []
      }
      
    } catch (error) {
      return  []
    }
  }

  async searchByDateIntervalAppointment(params: SearchDateIntervalAppointment.Params) {
    const instanceDatabase = await this.getClient()

    if(!instanceDatabase) return []

    try {
      let query = instanceDatabase
      .from('appointments')
      .select("*")
      .gte('started_date', params.started_date)
      .lte('ending_date', params.ending_date)

      let { data: appointments } = await query

      if(appointments){
        return appointments
      }
      else{
        return []
      }
      
    } catch (error) {
      return []
    }
  }

  async orderAppointment(params: OrderAppointment.Params) {
    const instanceDatabase = await this.getClient()

    if(!instanceDatabase) return []

    try {
      let query = instanceDatabase
      .from('appointments')
      .select("*")

      if(params.title !== false){ query = query.order('title',{ascending: true})}
      if(params.started_date !== false){ query = query.order('started_date',{ascending: true})}
      if(params.ending_date !== false){ query = query.order('ending_date',{ascending: true})}

      let { data: appointments } = await query

      if(appointments){
        return appointments
      }
      else{
        return []
      }
      
    } catch (error) {
      return []
    }
  }
}