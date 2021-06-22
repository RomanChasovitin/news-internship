import React from 'react'

// layout
import Grid from '@material-ui/core/Grid'

// components
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

// styles
import { useStyles } from './styles'

const Home = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardHeader className={classes.author} subheader="Somebody" />
          <CardHeader className={classes.title} title="Shrimp and Chorizo Paella" subheader="September 14, 2016" />
          <CardMedia
            className={classes.media}
            image="https://static01.nyt.com/images/2021/06/20/world/20Ethiopia-Abiy01/20Ethiopia-Abiy01-facebookJumbo-v2.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
              of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <div className={classes.link}>
            <Link href="http://www.google.com/">Read more...</Link>
          </div>
        </Card>
      </Grid>
    </Grid>
  )
}

export { Home }