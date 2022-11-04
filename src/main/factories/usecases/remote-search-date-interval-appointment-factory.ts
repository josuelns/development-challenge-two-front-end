import {RemoteSearchDateIntervalAppointment} from '@/data/usecases/appointment'
import { makeSupabaseInstanceDatabaseClient } from '@/main/factories/http-db-conect'

export const makeRemoteSearchDateIntervalAppointment = new RemoteSearchDateIntervalAppointment(makeSupabaseInstanceDatabaseClient)