import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  info: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  boxMargin: {
    marginBottom: '20px',
  },
  boxImg: {
    maxHeight: '70%',
    marginBottom: '15px',
    overflow: 'hidden',
  },
  img: {
    maxWidth: '100%',
    objectFit: 'cover',
  },
}))

export { useStyles }
