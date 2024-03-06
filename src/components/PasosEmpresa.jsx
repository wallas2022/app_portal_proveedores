import { Box, Button, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from '@chakra-ui/react'


const steps = [
    { title: 'Paso 1', description: 'Llenar Formulario' },
    { title: 'Paso 2', description: 'Completar Papelería' },
    { title: 'Paso 3', description: 'Solicitar alta' },
  ]
  
export   function Example() {
    const { activeStep } = useSteps({
      index: 1,
      count: steps.length,
    })
}

export const PasosEmpresa = () => {
    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
      })
  return (
          <><Stepper size='lg' index={activeStep}>
          {steps.map((step, index) => (
              <Step key={index}>
                  <StepIndicator>
                      <StepStatus
                          complete={<StepIcon />}
                          incomplete={<StepNumber />}
                          active={<StepNumber />} />
                  </StepIndicator>

                  <Box flexShrink='0'>
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription>{step.description}</StepDescription>
                      Aqui va un formulario
                  </Box>


                  <StepSeparator />

              </Step>
          ))}

      </Stepper>
      <Button
        onClick={ () => {  }}
      >Siguiente</Button></>
        )
      }
      
     
  


