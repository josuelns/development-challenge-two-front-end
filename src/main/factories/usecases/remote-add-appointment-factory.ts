import { AddAppointment } from '@/domain/usecases/appointment'
import {RemoteAddAppointment} from '@/data/usecases/appointment'
import { makeSupabaseInstanceDatabaseClient } from '@/main/factories/http-db-conect'

export const makeRemoteAddAppointment: AddAppointment = new RemoteAddAppointment(makeSupabaseInstanceDatabaseClient)