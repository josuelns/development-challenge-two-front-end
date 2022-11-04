import {RemoteEditAppointment} from '@/data/usecases/appointment'
import { makeSupabaseInstanceDatabaseClient } from '@/main/factories/http-db-conect'

export const makeRemoteEditAppointment = new RemoteEditAppointment(makeSupabaseInstanceDatabaseClient)