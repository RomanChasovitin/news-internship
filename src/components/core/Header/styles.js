import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  searchButton: {
    margin: theme.spacing(1),
  },
  logo: {
    maxWidth: 50,
    borderRadius: 50,
  },
}))

export { useStyles }
