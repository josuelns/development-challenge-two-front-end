import { ValidationComposite } from '@/main/composites'
import { ValidationBuilder as Builder } from '@/main/builders'

export const makeRemoveAppointmentValidation = (): ValidationComposite => ValidationComposite.build([
  ...Builder.field('id').minLentgh(1).required().build(),
])