import { Container, Grid, Input, InputAdornment, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined';

import {useStylesHome} from './style'
import SideMenu from '../../components/SideMenu';
import Tweet from '../../components/Tweet'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { TweetsActionsType } from '../../store/ducks/tweets/actionCreators';

const Home = () => {
   const classes = useStylesHome()
   const items = useSelector((state: RootState) => state.tweets.items)
   const dispatch = useDispatch()
   
   console.log(items)

   useEffect(() => {
      dispatch({type: TweetsActionsType.FETCH_TWEETS})
   }, [])

   return (
      <Container maxWidth="lg" className={classes.homeWrapper}>
         <Grid container spacing={3}>
            <Grid item sm={1} md={3}>
               <SideMenu classes={classes}/>
            </Grid>
            <Grid item sm={8} md={6}>
               <Paper variant="outlined" className={classes.tweetsWrapper}>
                  <Paper variant="outlined" className={classes.tweetsHeader}>
                     <h4>Главная</h4>
                  </Paper>
                  <div className={classes.addForm}>
                       форма добавления твита
                  </div>
                  <div className={classes.tweetsCentered}>
                     <Tweet classes={classes}/>
                     <Tweet classes={classes}/>
                     <Tweet classes={classes}/>
                     <Tweet classes={classes}/>
                     <Tweet classes={classes}/>
                     <Tweet classes={classes}/>
                  </div>
               </Paper>
            </Grid>
            <Grid item sm={3} md={3}>
               <div className={classes.rightSide}>
                  <div className={classes.rightSideTextField}>
                     <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                           <InputAdornment 
                              position="start">
                              <SearchIcon/>
                           </InputAdornment>
                        }
                     />
                  </div>
               </div>
            </Grid>
         </Grid>

      </Container>
   );
};

export default Home