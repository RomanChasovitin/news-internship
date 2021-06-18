import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  header: {
    zIndex: 1500,
  },
  searchButton: {
    margin: theme.spacing(1),
  },
  logo: {
    maxWidth: 50,
    borderRadius: 50,
    verticalAlign: 'middle',
  },
}))

export { useStyles }
