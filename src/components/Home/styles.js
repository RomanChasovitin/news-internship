import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  spinnerContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%)',
  },
  countryPicker: {
    textAlign: 'center',
    marginBottom: '30px',
  },
})

export { useStyles }
