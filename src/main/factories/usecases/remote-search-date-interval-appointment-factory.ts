import {RemoteSearchDateIntervalAppointment} from '@/data/usecases'
import { makeSupabaseInstanceDatabaseClient } from '@/main/factories/http-db-conect'

export const makeRemoteSearchDateIntervalAppointment = new RemoteSearchDateIntervalAppointment(makeSupabaseInstanceDatabaseClient)