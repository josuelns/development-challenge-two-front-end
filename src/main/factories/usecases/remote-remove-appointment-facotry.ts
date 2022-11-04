import {RemoteRemoveAppointment} from '@/data/usecases/appointment'
import { makeSupabaseInstanceDatabaseClient } from '@/main/factories/http-db-conect'

export const makeRemoteRemoveAppointment = new RemoteRemoveAppointment(makeSupabaseInstanceDatabaseClient)