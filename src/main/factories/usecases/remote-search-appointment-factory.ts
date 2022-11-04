import {RemoteSearchAppointment} from '@/data/usecases/appointment'
import { makeSupabaseInstanceDatabaseClient } from '@/main/factories/http-db-conect'

export const makeRemoteSearchAppointment = new RemoteSearchAppointment(makeSupabaseInstanceDatabaseClient)