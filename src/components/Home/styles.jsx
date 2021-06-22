import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  author: {
    padding: '16px',
    paddingTop: '10px',
    paddingBottom: '0',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  link: {
    textAlign: 'right',
    padding: '5px',
  },
}))

export { useStyles }
