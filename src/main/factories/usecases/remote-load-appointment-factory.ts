import {RemoteLoadAppointment} from '@/data/usecases'
import { makeSupabaseInstanceDatabaseClient } from '@/main/factories/http-db-conect'

export const makeRemoteLoadAppointment = new RemoteLoadAppointment(makeSupabaseInstanceDatabaseClient)