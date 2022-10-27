import { ValidationComposite } from '@/main/composites'
import { ValidationBuilder as Builder } from '@/main/builders'

export const makeAddAppointmentValidation = (): ValidationComposite => ValidationComposite.build([
  ...Builder.field('title').minLentgh(1).maxLentgh(60).required().build(),
  ...Builder.field('started_date').date().minDate(new Date()).notEqualDate('ending_date').required().build(),
  ...Builder.field('ending_date').date().minDate(new Date()).notEqualDate('started_date').biggerThen('started_date').required().build(),
])