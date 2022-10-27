import { ValidationComposite } from '@/main/composites'
import { ValidationBuilder as Builder } from '@/main/builders'

export const makeSearchAppointmentValidation = (): ValidationComposite => ValidationComposite.build([
  ...Builder.field('title').minLentgh(0).maxLentgh(60).build(),
  ...Builder.field('started_date').date().minDate(new Date).notEqualDate('ending_date').build(),
  ...Builder.field('ending_date').date().minDate(new Date).notEqualDate('started_date').biggerThen(('started_date')).build(),
])