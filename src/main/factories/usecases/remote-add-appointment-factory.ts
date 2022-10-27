import { AddAppointment } from '@/domain/usecases'
import {RemoteAddAppointment} from '@/data/usecases'
import { makeSupabaseInstanceDatabaseClient } from '@/main/factories/http-db-conect'

export const makeRemoteAddAppointment: AddAppointment = new RemoteAddAppointment(makeSupabaseInstanceDatabaseClient)