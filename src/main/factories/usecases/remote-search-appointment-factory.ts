import {RemoteSearchAppointment} from '@/data/usecases'
import { makeSupabaseInstanceDatabaseClient } from '@/main/factories/http-db-conect'

export const makeRemoteSearchAppointment = new RemoteSearchAppointment(makeSupabaseInstanceDatabaseClient)