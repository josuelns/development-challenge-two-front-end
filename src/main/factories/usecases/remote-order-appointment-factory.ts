import {RemoteOrderAppointment} from '@/data/usecases'
import { makeSupabaseInstanceDatabaseClient } from '@/main/factories/http-db-conect'

export const makeRemoteOrderAppointment = new RemoteOrderAppointment(makeSupabaseInstanceDatabaseClient)