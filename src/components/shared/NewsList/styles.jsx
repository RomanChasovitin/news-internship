import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  author: {
    padding: '16px',
    paddingTop: '10px',
    paddingBottom: '0',
  },
  title: {
    textAlign: 'left',
    height: '32px',
    overflow: 'hidden',
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  link: {
    textAlign: 'right',
    padding: '5px',
  },
  info: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: '10px',
  },
}))

export { useStyles }
